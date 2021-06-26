import { Call, CallAgent } from '@azure/communication-calling';
import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import { createStatefulCallClient,
    StatefulCallClient,
    CallClientProvider,
    CallAgentProvider,
    CallProvider} from '@azure/communication-react';
import React, { useEffect, useState } from 'react';
import { CallComponents } from './callComponents';

export interface MeetingProps {
    groupId: string;
    tokenCredential: AzureCommunicationTokenCredential;
    userId: string;
    displayName: string;
  }

export const CallExperience = (props:MeetingProps):JSX.Element => {

    const {groupId, tokenCredential, userId} = props;

    const [statefulCallClient, setStatefulCallClient] = useState<StatefulCallClient>();
    const [callAgent, setCallAgent] = useState<CallAgent | undefined>(undefined);
    const [call, setCall] = useState<Call | undefined>(undefined);

    useEffect(() => {
        async function createConfig() {
            if(statefulCallClient && callAgent === undefined){
                const newCallAgent = await statefulCallClient?.createCallAgent(tokenCredential, {displayName: 'David'})
                setCallAgent(newCallAgent);
            }
            else if (callAgent && call === undefined){
                const newCall = callAgent?.join({groupId: groupId});
                setCall(newCall);
            }
            else if (statefulCallClient === undefined) {
                setStatefulCallClient(createStatefulCallClient({
                    userId: userId,
                }));
            }
        }
        createConfig() 
    },[statefulCallClient, callAgent])

    return statefulCallClient !== undefined ?
    (<CallClientProvider callClient={statefulCallClient}>
        <CallAgentProvider callAgent={callAgent}>
            <CallProvider call={call}>
                <CallComponents {...props} />
            </CallProvider>
        </CallAgentProvider>
    </CallClientProvider>) : (<></>);
}
