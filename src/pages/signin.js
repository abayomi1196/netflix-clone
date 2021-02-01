import React, { useState, useContext } from 'react';
import '../helpers/formSpinner.css';
import { useHistory } from 'react-router-dom';

import { FirebaseContext } from '../context/firebase';

import { HeaderContainer } from '../containers/headerContainer';
import { FooterContainer } from '../containers/footerContainer';
import * as ROUTES from '../constants/routes';
import { Form } from '../components';

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [error, setError] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isInvalid = emailAddress === '' || password === '' || isLoading;

  function handleSignin(e) {
    e.preventDefault();

    setIsLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        setError(err.message);
        setEmailAddress('');
        setPassword('');
        setIsLoading(false);
      });
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method='POST'>
            <Form.Input
              placeholder='Email address'
              type='email'
              autocomplete='off'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type='password'
              placeholder='Password'
              autocomplete='off'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              className={isLoading ? 'isLoading' : ''}
              type='submit'
              disabled={isInvalid}
            >
              {isLoading ? null : 'Sign In'}
            </Form.Submit>
            <Form.Text>
              New to Netflix?
              <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
