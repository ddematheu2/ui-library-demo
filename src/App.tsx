import React, { useEffect, useState } from "react";
import {ChatExample} from "./chatExample";
import {CallExample} from "./callExample";
import {MeetingExperience} from "./meetingComposite";
import CallCompositeExample from "./callComposite";
import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import { OneToOneExperience } from "./oneToOne";

function App() {

  const [chatOpen, setChatOpen] = useState(false)
  const [userAccessToken, setUserAccessToken] = useState<undefined|string>(undefined)
  const userId = '8:acs:57f01e43-318e-4661-ae0e-b6765d65801a_0000000a-b027-9371-f6c7-593a0d000497';
  const groupId = '46d26d3f-003d-4678-91d9-0b39edfff18d';
  const threadId = '19:b05e2e4483cd4b51892076b6df63b0bb@thread.v2'
  const endpoint = 'https://acs-test-resource.communication.azure.com/'
  const displayName = 'David'

  useEffect(() => {
    async function getAccessToken() {
      // GET request using fetch with async/await
      if(userAccessToken === undefined) {
        const headers = { 'mode': 'no-cors' }
        const response = await fetch('https://communication-services-javascript-v7xvpr97fw9qr-7071.githubpreview.dev/api/Function', {headers});
        const data = await response.json();
        console.log(data)
        setUserAccessToken(data.token)
      }
    }
    getAccessToken();
  })

  return (
    <div style={{height:'100vh'}}>
      {/* {userAccessToken && <MeetingExperience 
        chatOpen = {chatOpen} 
        setChatOpen = {setChatOpen}
        userId = {userId}
        tokenCredential = {new AzureCommunicationTokenCredential(userAccessToken)}
        groupId = {groupId}
        threadId = {threadId}
        endpoint = {endpoint}
        displayName = {displayName}
       />} */}
       {userAccessToken && <OneToOneExperience
        userId = {userId}
        tokenCredential = {new AzureCommunicationTokenCredential(userAccessToken)}
        endpoint = {endpoint}
        displayName = {displayName}
       />}
    </div>
  );
}

export default App;
