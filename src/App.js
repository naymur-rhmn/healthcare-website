import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home/Home';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
