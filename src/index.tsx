import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, Library, SignIn } from './components'
import './styles.css'
import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Survey } from './components' //I'm not sure why there are problems with this taking- aware of the error message but leaving it in here

let myTitle = "Ashley's Library"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home title={myTitle}/>
          </Route>
          <Route exact path='/library'>
            <Library></Library>
          </Route>
          <Route exact path='/signin'>
            <SignIn></SignIn>
          </Route>
          <Route exact path='/survey'>
            <Survey></Survey>
          </Route>  
        </Switch>
      </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
