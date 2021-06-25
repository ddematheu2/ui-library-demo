import React, { useEffect, useState } from "react";
import {MeetingExperience} from "./meetingComposite";
import { AzureCommunicationTokenCredential } from '@azure/communication-common';

function App() {

  const [chatOpen, setChatOpen] = useState(false)
  const [userAccessToken, setUserAccessToken] = useState<undefined|string>('INSERT ACCESS TOKEN')
  const userId = 'INSERT USER ID';
  const groupId = 'INSERT GROUP ID';
  const displayName = 'David'

  return (
    <div style={{height:'100vh'}}>
      {userAccessToken && <MeetingExperience 
        chatOpen = {chatOpen} 
        setChatOpen = {setChatOpen}
        userId = {userId}
        tokenCredential = {new AzureCommunicationTokenCredential(userAccessToken)}
        groupId = {groupId}
        displayName = {displayName}
       />}
    </div>
  );
}

export default App;
