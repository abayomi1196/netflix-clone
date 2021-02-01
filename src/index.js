import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from './context/firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAlhVTu7L-RvwHaVRaWZ1g5QVd208RXB94',
  authDomain: 'poor-netflix.firebaseapp.com',
  databaseURL: 'https://poor-netflix-default-rtdb.firebaseio.com',
  projectId: 'poor-netflix',
  storageBucket: 'poor-netflix.appspot.com',
  messagingSenderId: '490706611246',
  appId: '1:490706611246:web:dcbc8fbccd65abe91b83bf',
};

const firebase = window.firebase.initializeApp(firebaseConfig);

const { Provider } = FirebaseContext;

ReactDOM.render(
  <>
    <Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);
