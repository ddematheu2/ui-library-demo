// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { VideoGallery as VideoGalleryComponent, useCallingPropsFor, FluentThemeProvider, ControlBar, useCall, CameraButton, MicrophoneButton, ScreenShareButton, EndCallButton, StatefulChatClientOptions, ChatClientProvider, ChatThreadClientProvider, createStatefulChatClient  } from '@azure/communication-react';
import { Stack, Stylesheet } from '@fluentui/react';
import { IButtonProps, Icon, Label, FontIcon } from '@fluentui/react';
import React, { useEffect } from 'react';
import { MeetingProps } from './meetingComposite';
import { ChatExample } from './chatExample';

// This must be the only named export from this module, and must be named to match the storybook path suffix.
// This ensures that storybook hoists the story instead of creating a folder with a single entry.

export const CallComponents = (props: MeetingProps):JSX.Element  => {

  const {chatOpen, setChatOpen, userId, displayName, endpoint, tokenCredential, threadId} = props;

  const videoGalleryProps = useCallingPropsFor(VideoGalleryComponent);
  const cameraButtonProps = useCallingPropsFor(CameraButton);
  const micButtonProps = useCallingPropsFor(MicrophoneButton);
  const screenButtonProps = useCallingPropsFor(ScreenShareButton);
  const endButtonProps = useCallingPropsFor(EndCallButton);

  const statefulChatClient = createStatefulChatClient({
    userId: {kind: 'communicationUser', communicationUserId: userId},
    displayName: displayName,
    endpoint: endpoint,
    credential: tokenCredential
  });

  const chatThreadClient = statefulChatClient.getChatThreadClient(threadId)

  //Listen to notifications
  statefulChatClient.startRealtimeNotifications();

  const customOnRenderIcon = (props?: IButtonProps): JSX.Element => {
    return <img style={{width:20, height: 20}} src={'data:image/png;base64,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'}/>;
  };

  const customOnRenderText = (props?: IButtonProps): JSX.Element => {
    if (props?.checked) {
      return (
        <Label key={'ChatLabelKey'} style={{ fontSize: '10px' }}>
          Close Chat
        </Label>
      );
    }

    return <Label key={'ChatLabelKey'} style={{ fontSize: '10px' }}>Open Chat</Label>;
  };

  async function toggleChat() {
    
    setChatOpen(!chatOpen);
  }

  return (
    <FluentThemeProvider>
        <div>
          <Stack horizontal style={{ height: '100vh' }}>
            <div style={{width:'100%'}}>
              <VideoGalleryComponent {...videoGalleryProps}/>
            </div>
            {chatOpen && chatThreadClient && <div style={{width:'30vw'}}>
              <ChatClientProvider chatClient={statefulChatClient}>
                <ChatThreadClientProvider chatThreadClient={chatThreadClient}>
                  <ChatExample/>
                </ChatThreadClientProvider>
              </ChatClientProvider>
            </div>}
          </Stack>
          <ControlBar layout={'dockedBottom'}>
            <CameraButton key={'chat'} checked={chatOpen} showLabel={true} onRenderIcon={customOnRenderIcon} onRenderText={customOnRenderText} onToggleCamera={toggleChat}/>
            <CameraButton {...cameraButtonProps} showLabel={true}/>
            <MicrophoneButton {...micButtonProps} showLabel={true}/>
            <ScreenShareButton {...screenButtonProps} showLabel={true}/>
            <EndCallButton {...endButtonProps} showLabel={true}/>
          </ControlBar>
        </div>
    </FluentThemeProvider>
  );
};
