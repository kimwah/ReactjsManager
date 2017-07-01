import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyA6N8NEamqPtzh-dOJ-TXy9WA8d-rVY_IQ",
      authDomain: "manager-f54cf.firebaseapp.com",
      databaseURL: "https://manager-f54cf.firebaseio.com",
      projectId: "manager-f54cf",
      storageBucket: "manager-f54cf.appspot.com",
      messagingSenderId: "334148974807"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
