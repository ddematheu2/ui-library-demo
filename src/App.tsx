import React, { useState } from "react";
import {ChatExample} from "./chatExample";
import {CallExample} from "./callExample";
import {MeetingExperience} from "./meetingComposite";
import CallCompositeExample from "./callComposite";
import { AzureCommunicationTokenCredential } from '@azure/communication-common';

function App() {

  const [chatOpen, setChatOpen] = useState(false)
  const userId = '8:acs:57f01e43-318e-4661-ae0e-b6765d65801a_0000000a-b027-9371-f6c7-593a0d000497';
  const userAccessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwMiIsIng1dCI6IjNNSnZRYzhrWVNLd1hqbEIySmx6NTRQVzNBYyIsInR5cCI6IkpXVCJ9.eyJza3lwZWlkIjoiYWNzOjU3ZjAxZTQzLTMxOGUtNDY2MS1hZTBlLWI2NzY1ZDY1ODAxYV8wMDAwMDAwYS1iMDI3LTkzNzEtZjZjNy01OTNhMGQwMDA0OTciLCJzY3AiOjE3OTIsImNzaSI6IjE2MjM3NzA2NTYiLCJpYXQiOjE2MjM3NzA2NTYsImV4cCI6MTYyMzg1NzA1NiwiYWNzU2NvcGUiOiJ2b2lwLGNoYXQiLCJyZXNvdXJjZUlkIjoiNTdmMDFlNDMtMzE4ZS00NjYxLWFlMGUtYjY3NjVkNjU4MDFhIn0.Ka7VsoYWnNyCOcQbeQp2m8VkgGzDRrXMfHruRTt_OXmpTjisdsUSeGD4aV-oCS8ZjALKPZlxcDAZj0NxdPqz9T6EHuW_OnEc91QAypsZhODtKcWv7URM9ugFBZl1sda6hYf5cGOhYMGrtwpx5ZAmhyFHUXJSF83cmn5QkFJ0fqvxfR_NdRL8q0AASE7g3sb-fCzAl05ASlIrY4cT2Tz0EVbElpclURUlD0h_wCs9_zSn8ngI0Z4PRCmaM2yA63K5IHBL37h3B4mT57xRVERdGW6oiITnrgWnuuhpLXMIQEmA-Qjv4OgQwFRUphR95l05uC9ZoVbbV_ztXPqqpO1yIA';
  const groupId = '46d26d3f-003d-4678-91d9-0b39edfff18d';
  const threadId = '19:b05e2e4483cd4b51892076b6df63b0bb@thread.v2'
  const endpoint = 'https://acs-test-resource.communication.azure.com/'
  const displayName = 'David'

  return (
    <div style={{height:'100vh'}}>
      <MeetingExperience 
        chatOpen = {chatOpen} 
        setChatOpen = {setChatOpen}
        userId = {userId}
        tokenCredential = {new AzureCommunicationTokenCredential(userAccessToken)}
        groupId = {groupId}
        threadId = {threadId}
        endpoint = {endpoint}
        displayName = {displayName}
       />
    </div>
  );
}

export default App;
