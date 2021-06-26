// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { VideoGallery as VideoGalleryComponent, useCallingPropsFor, FluentThemeProvider, ControlBar, useCall, CameraButton, MicrophoneButton, ScreenShareButton, EndCallButton, StatefulChatClientOptions, ChatClientProvider, ChatThreadClientProvider, createStatefulChatClient  } from '@azure/communication-react';
import { Stack, Stylesheet } from '@fluentui/react';
import { IButtonProps, Icon, Label, FontIcon } from '@fluentui/react';
import React, { useEffect } from 'react';
import { MeetingProps } from './CallExperience';

// This must be the only named export from this module, and must be named to match the storybook path suffix.
// This ensures that storybook hoists the story instead of creating a folder with a single entry.

export const CallComponents = (props: MeetingProps):JSX.Element  => {

  const {userId, displayName, tokenCredential} = props;

  const videoGalleryProps = useCallingPropsFor(VideoGalleryComponent);
  const cameraButtonProps = useCallingPropsFor(CameraButton);
  const micButtonProps = useCallingPropsFor(MicrophoneButton);
  const screenButtonProps = useCallingPropsFor(ScreenShareButton);
  const endButtonProps = useCallingPropsFor(EndCallButton);

  return (
    <FluentThemeProvider>
        <Stack>
          <div style={{height:'100vh'}}>
            <VideoGalleryComponent {...videoGalleryProps}/>
          </div>
          <ControlBar layout={'dockedBottom'}>
            <CameraButton {...cameraButtonProps} showLabel={true}/>
            <MicrophoneButton {...micButtonProps} showLabel={true}/>
            <ScreenShareButton {...screenButtonProps} showLabel={true}/>
            <EndCallButton {...endButtonProps} showLabel={true}/>
          </ControlBar>
        </Stack>
    </FluentThemeProvider>
  );
};
