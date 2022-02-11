import React from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { authentication, logOutUser } from '../../redux/actions';
import { auth } from '../../firebase.config';
import SignInWindow from '../../components/SignInWindow/SignInWindow';
import LoginWindow from '../../components/LoginWindow/LoginWindow';
import './AuthenticationPage.scss';

const AuthenticationPage: React.FC = () => {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(authentication());
    } else {
      dispatch(logOutUser());
    }
  });

  return (
    <div className="authentication-page">
      <SignInWindow />
      <LoginWindow />
    </div>
  );
};

export default AuthenticationPage;
