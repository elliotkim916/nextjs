// instead of react router, to reach this file would be example.com/, which is based on the file name
import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
  static async getInitialProps(context) {
    console.log(context);
    return { appName: 'Super App' };
    // this code is executed on the server first
    // it will only be executed on the child if you navigate there on the app
    // you can use this to initialize your app before it loads
    // so on the server for example, in getInitialProps. you can fetch data from a db and then prepopulate the props
  }

  render() {
    return (
      <div>
        <h1>The Main Page of {this.props.appName}</h1>
        <p>
          Go to
          <Link href="/auth">
            <a>Auth</a>
          </Link>
          {/* behind the scenes nextjs will add the ref attribute to the anchor tag */}
          {/* also captures any clicks on the anchor tag and handles that internally so that you dont reload the page */}
        </p>

        <button onClick={() => Router.push('/auth')}>Go To Auth</button>
      </div>
    );
  }
}

export default IndexPage;
