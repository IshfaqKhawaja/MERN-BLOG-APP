
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';

import Home from './components/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login'
import './main.scss';
import Navbar from './components/Navbar';
import Store from './stores/';

function App() {
  return (
    <Provider store={Store}>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact><Home/></Route>
        <Route path='/register' exact><Register/></Route>
        <Route path='/login' exact><Login/></Route>




      </Switch>


    </Router>
    </Provider>
  );
}

export default App;
