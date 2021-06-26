import React, { useEffect, useState } from "react";
import {CallExperience} from "./CallExperience";
import { AzureCommunicationTokenCredential } from '@azure/communication-common';

function App() {

  const [userAccessToken, setUserAccessToken] = useState<undefined|string>('INSERT ACCESS TOKEN')
  const userId = 'INSERT USER ID';
  const groupId = 'INSERT GROUP ID';
  const displayName = 'INSERT NAME'

  return (
    <div style={{height:'100vh'}}>
      {userAccessToken && <CallExperience 
        userId = {userId}
        tokenCredential = {new AzureCommunicationTokenCredential(userAccessToken)}
        groupId = {groupId}
        displayName = {displayName}
       />}
    </div>
  );
}

export default App;
