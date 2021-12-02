import React from 'react';
import SignInWindow from '../../components/SignInWindow/SignInWindow';
import LoginWindow from '../../components/LoginWindow/LoginWindow';
import './AuthenticationPage.scss';

const AuthenticationPage = () => {
  return (
    <div className="authentication-page">
      <SignInWindow />
      <LoginWindow />
    </div>
  );
};

export default AuthenticationPage;
