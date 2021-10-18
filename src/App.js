
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';

function App() {
  return (
    <div className="">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>

          </Route>
          <Route exact path='/'>
            <Home></Home>

          </Route>

          <Route exact path='/services'>
            <Services></Services>

          </Route>
          <Route exact path='/about'>
            <About></About>

          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>

          </Route>
          <Route path='*'>
            <Error></Error>

          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>




    </div>
  );
}

export default App;
