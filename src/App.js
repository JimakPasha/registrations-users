import React from 'react';
import Header from './components/Header/Header';
// import StartPage from './components/pages/StartPage/StartPage';
import Footer from './components/Footer/Footer';
import PersonFormPage from './components/pages/PersonFormPage/PersonFormPage';
import './styles/global.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          {/* <StartPage /> */}
          <PersonFormPage />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
