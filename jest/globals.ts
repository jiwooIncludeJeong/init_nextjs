import React from 'react';

global.React = React;
// @ts-ignore
global.Kakao = {
  isInitialized: () => {
    return false;
  },
  init: () => {},
  Auth: {
    authorize: (body: {
      redirectUri: string;
      state: string;
      throughTalk: boolean;
    }) => {},
  },
};
