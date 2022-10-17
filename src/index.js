import React from 'react';
import ReactDOM from 'react-dom';
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { deviceType, osName } from "react-device-detect";
import getUserId from './utils/getUserId';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let id = getUserId();

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: '633afcce1f6e8f11777433b7',
    user: {
      key: id,
      custom: {
        device: deviceType,
        operatingSystem: osName,
      },
    },
  }
  );

ReactDOM.render(
  <LDProvider>
    <App />
  </LDProvider>,

  document.getElementById('root')
);
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
