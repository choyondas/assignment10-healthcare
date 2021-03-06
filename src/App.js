
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Details from './components/Details/Details/Details';
import More from './components/More/More';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Doc from './components/Doc/Doc';





function App() {
  return (
    <div >

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>

            </Route>
            <Route exact path='/'>
              <Home></Home>

            </Route>

            <Route path='/services'>
              <Services></Services>

            </Route>
            <Route path='/about'>
              <About></About>

            </Route>
            <Route path='/contact'>
              <Contact></Contact>

            </Route>
            <Route path='/login'>
              <Login></Login>

            </Route>
            <Route path='/register'>
              <Register></Register>

            </Route>


            <Route path='/more'>
              <More></More>
            </Route>


            <PrivateRoute path='/details/:serviceId'>
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path='/doctor/:doctorId'>
              <Doc></Doc>
            </PrivateRoute>



            <Route path='*'>
              <Error></Error>

            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>



    </div>
  );
}

export default App;
