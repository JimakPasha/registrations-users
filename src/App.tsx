import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useTypedSelector } from './hooks/useTypedSelector';
import Header from './components/Header/Header';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import StartRegistrationPage from './pages/StartRegistrationPage/StartRegistrationPage';
import Footer from './components/Footer/Footer';
import StartPage from './pages/StartPage/StartPage';
import RegistrationNavigations from './components/RegistrationNavigations/RegistrationNavigations';
import PersonRegistrationPage from './pages/PersonRegistrationPage/PersonRegistrationPage';
import CardRegistrationPage from './pages/CardRegistrationPage/CardRegistrationPage';
import ResultRegistrationPage from './pages/ResultRegistrationPage/ResultRegistrationPage';
import ButtonChat from './components/ButtonChat/ButtonChat';
import Chat from './components/Chat/Chat';
import './styles/global.scss';
import './styles/media.scss';

const App: React.FC = () => {
  const authentication = useTypedSelector((state) => state.authentication);

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
                    Страница 1
                  </Route>
                  <Route exact path="/2">
                    Страница 2
                  </Route>
                  <Route exact path="/3">
                    Страница 3
                  </Route>
                  <Route exact path="/5">
                    Страница 5
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
                      <ButtonChat />
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
