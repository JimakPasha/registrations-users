import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import StartRegistrationPage from './pages/StartRegistrationPage/StartRegistrationPage';
import Footer from './components/Footer/Footer';
import StartPage from './pages/StartPage/StartPage';
import RegistrationNavigations from './components/RegistrationNavigations/RegistrationNavigations';
import PersonRegistrationPage from './pages/PersonRegistrationPage/PersonRegistrationPage';
import CardRegistrationPage from './pages/CardRegistrationPage/CardRegistrationPage';
import ResultRegistrationPage from './pages/ResultRegistrationPage/ResultRegistrationPage';
import Chat from './components/Chat/Chat';
import './styles/global.scss';

const App = () => {
  const authentication = useSelector((state) => state.authentication);

  return (
    <>
      {authentication ? (
        <Router>
          <div className="app">
            <Header />
            <main className="main">
              <div className="container">
                <Switch>
                  <Route exact path="/">
                    <StartPage />
                  </Route>
                  <Route exact path="/1">
                    1
                  </Route>
                  <Route exact path="/2">
                    2
                  </Route>
                  <Route exact path="/3">
                    3
                  </Route>
                  <Route exact path="/5">
                    5
                  </Route>
                  <Route exact path="/registration">
                    <StartRegistrationPage />
                  </Route>
                  <>
                    <div className="wrapper-registrations">
                      <div>
                        <RegistrationNavigations />
                        <Route exact path="/registration/personal">
                          <PersonRegistrationPage />
                        </Route>
                        <Route exact path="/registration/card">
                          <CardRegistrationPage />
                        </Route>
                        <Route exact path="/registration/result">
                          <ResultRegistrationPage />
                        </Route>
                      </div>
                      <Chat />
                    </div>
                  </>
                </Switch>
              </div>
            </main>
            <Footer />
          </div>
        </Router>
      ) : (
        <>
          <AuthenticationPage />
        </>
      )}
    </>
  );
};

export default App;
