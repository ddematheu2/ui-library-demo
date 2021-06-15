import {
    CallAdapter,
    createAzureCommunicationCallAdapter,
    ChatAdapter,
    createAzureCommunicationChatAdapter,
    CallComposite
  } from '@azure/communication-react';
  import React, { useState, useEffect } from 'react';
  
  function CallCompositeExample(): JSX.Element {
    const displayName = 'David';
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwMiIsIng1dCI6IjNNSnZRYzhrWVNLd1hqbEIySmx6NTRQVzNBYyIsInR5cCI6IkpXVCJ9.eyJza3lwZWlkIjoiYWNzOjU3ZjAxZTQzLTMxOGUtNDY2MS1hZTBlLWI2NzY1ZDY1ODAxYV8wMDAwMDAwYS03NTc5LTg1YWUtNmEwYi0zNDNhMGQwMDFjMjciLCJzY3AiOjE3OTIsImNzaSI6IjE2MjI3ODYxNzEiLCJpYXQiOjE2MjI3ODYxNzEsImV4cCI6MTYyMjg3MjU3MSwiYWNzU2NvcGUiOiJ2b2lwLGNoYXQiLCJyZXNvdXJjZUlkIjoiNTdmMDFlNDMtMzE4ZS00NjYxLWFlMGUtYjY3NjVkNjU4MDFhIn0.uJOX0WZqhZ9S_ddNGwUlwP8g2o0siuG8HiEzGkkvY5FaOnEFyDvrH-YZ1SMwsVXjRMaQbQhRP-qAN0gRbb5xtYJafrtYesOS59iZOVGVoj5sJwe6A4spvNjQvPpMjg-3VoAerN7JdH56z_VBV5__oH2e4u6VVEM8vYF2t87imGniNByn-quptci-aPVVSs8wqa1h1ar1KI0McxIhwfY-1vU5U4e1RYFP_uCMmVhk-gXcTeKJKYwsZKNE9gFZWGjVXlUnP8ha5AQ4oJLD2SJepu8ITCsDgW5cgcC3vts1DsokRczwHROh2KsGrDjmnTYKH6sES83BwEG_QEBA30Nn9A';
  
    //Calling Variables
    //For Group Id, developers can pass any GUID they can generate
    const groupId = '46d26d3f-003d-4678-91d9-0b39edfff18d';
    const [callAdapter, setCallAdapter] = useState<CallAdapter>();
  
    useEffect(() => {
      const createAdapter = async (): Promise<void> => {
          setCallAdapter(await createAzureCommunicationCallAdapter(token, { groupId }, displayName));
      };
      createAdapter();
    }, []);
  
    return <>{callAdapter && <CallComposite adapter={callAdapter} />}</>;
  }
  
  export default CallCompositeExample;