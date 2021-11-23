import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import StartPage from './pages/StartPage/StartPage';
import Footer from './components/Footer/Footer';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import './styles/global.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <div className="container">
            <Switch>
              <Route exact path="/">
                <StartPage />
              </Route>
              <Route exact path="/personal-data">
                <RegistrationPage />
              </Route>
              <Route exact path="/card-data">
                <div>ФОРМА ПО КРЕДИТКЕ</div>
              </Route>
              <Route exact path="/result">
                <div>РЕЗУЛЬТАТ</div>
              </Route>
            </Switch>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
