import React, { useEffect } from 'react';

export default function Alan() {
  useEffect(() => {
    const alanBtn = require('@alan-ai/alan-sdk-web');
    alanBtn({
      key: '8606b9bfa2d06653f0ea7bf2e602f0ae2e956eca572e1d8b807a3e2338fdd0dc/stage',
      rootEl: document.getElementById('alan-btn'),
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);
  return <div></div>;
}
