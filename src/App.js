import React from 'react';
import Header from './components/Header/Header';
// import StartPage from './pages/StartPage/StartPage';
import Footer from './components/Footer/Footer';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import './styles/global.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          {/* <StartPage /> */}
          <RegistrationPage />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
