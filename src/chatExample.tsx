import {
  DefaultMessageRendererType,
  FluentThemeProvider,
  MessageProps,
  MessageThread,
  SendBox,
  useChatPropsFor
} from '@azure/communication-react';
import { Divider } from '@fluentui/react-northstar';
import React from 'react';

export const ChatExample: () => JSX.Element = () => {
  // As an example, we want to use render custom message as a Divider.

  const messageThreadProps = useChatPropsFor(MessageThread)
  const sendBoxProps = useChatPropsFor(SendBox)

  return (
    <FluentThemeProvider>
      <div style={{height: '90vh'}}>
        <MessageThread  {...messageThreadProps} />
        <SendBox {...sendBoxProps} />
      </div>
    </FluentThemeProvider>
  );
};