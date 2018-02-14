/* eslint-disable jsx-a11y/html-has-lang */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import AppBar from '../components/common/AppBar';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage, req }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    this.AppBar = req.originalUrl !== '/';
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Chromecast</title>
          {this.props.styleTags}
          <script src='//www.gstatic.com/cast/sdk/libs/receiver/2.0.0/cast_receiver.js' />
        </Head>
        <body>
          {this.AppBar && <AppBar />}
          <Main />
          <NextScript />
          <script>
            var appConfig = new cast.receiver.CastReceiverManager.Config();
            appConfig.maxInactivity = 60000000000;
            window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
            window.castReceiverManager.start(appConfig);
          </script>
        </body>
      </html>
    );
  }
}
