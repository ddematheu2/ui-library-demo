import { Call, CallAgent, IncomingCall } from '@azure/communication-calling';
import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import { createStatefulCallClient,
    StatefulCallClient,
    CallClientProvider,
    CallAgentProvider,
    CallProvider,
    AzureCommunicationCallAdapter, StatefulDeviceManager, CallComposite } from '@azure/communication-react';
import React, { useEffect, useState } from 'react';
import { CallComponents } from './callComponents';

export interface OneToOneProps {
    toCallId?: string;
    tokenCredential: AzureCommunicationTokenCredential;
    endpoint: string;
    userId: string;
    displayName: string;
  }

export const OneToOneExperience = (props:OneToOneProps):JSX.Element => {

    const {toCallId, tokenCredential, userId} = props;
    const [statefulCallClient, setStatefulCallClient] = useState<StatefulCallClient>();
    const [callAgent, setCallAgent] = useState<CallAgent | undefined>(undefined);
    const [call, setCall] = useState<Call | undefined>(undefined);
    const [incomingCall, setIncomingCall] = useState<IncomingCall>()
    const [adapter, setAdapter] = useState<AzureCommunicationCallAdapter>();
    const groupId = '884c7f33-aa4a-4e1c-a5da-cafdff0f12d8';

    useEffect(() => {
        async function createAdatper() {
            if(statefulCallClient && callAgent === undefined){
                const newCallAgent = await statefulCallClient?.createCallAgent(tokenCredential, {displayName: 'David'})
                setCallAgent(newCallAgent);
                newCallAgent.on('incomingCall', (call) => {
                    setIncomingCall(call.incomingCall)
                })
            }
            else if (statefulCallClient === undefined) {
                setStatefulCallClient(createStatefulCallClient({
                    userId: userId,
                }));
            }
            else if (statefulCallClient && callAgent && adapter === undefined){
                const deviceManager = await statefulCallClient.getDeviceManager()
                setAdapter(new AzureCommunicationCallAdapter(statefulCallClient, { groupId: groupId  }, callAgent, deviceManager ))
            }
        }
        createAdatper() 
    },[statefulCallClient, callAgent, call])

    async function answerCall() {
        adapter?.leaveCall();
        setCall( await incomingCall?.accept())
        setIncomingCall(undefined)
    }

    return statefulCallClient !== undefined ?
    (<div>
        {incomingCall && <div>
                <button onClick={answerCall}>
                    Answer Call
                </button>
            </div>}
        {adapter && <div>
                <CallComposite adapter={adapter}/>
            </div>}
    </div>) : (<></>);
}
