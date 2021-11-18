import React from 'react';
import Header from './components/Header/Header';
import StartPage from './components/pages/StartPage/StartPage';
import Footer from './components/Footer/Footer';
import './styles/global.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          <StartPage />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
