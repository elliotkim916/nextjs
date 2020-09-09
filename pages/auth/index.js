import React from 'react';
import User from '../../components/User';

const AuthIndexPage = (props) => {
  return (
    <div>
      <h1>The Auth Index Page of {props.appName}</h1>
      <User name="Elliot" age={500} />
    </div>
  );
};

AuthIndexPage.getInitialProps = async (context) => {
  console.log(context);
  return {
    appName: 'Super App (Auth)',
  };
};

export default AuthIndexPage;
