import React from 'react';
import { AppContainer } from 'react-hot-loader';
import {render} from 'react-dom';
import 'whatwg-fetch'
import MainContainer from "./index";
const mountPoint = document.getElementById('app');

class App {

  constructor() {

    render(
      <AppContainer>
        <MainContainer />
      </AppContainer>,
      mountPoint
    );

    if (module.hot) {

      module.hot.accept('./index', () => {

        require('./index');

        render(
          <AppContainer>
            <MainContainer />
          </AppContainer>,
          mountPoint
        );
      });
    }
  }
}

export default new App();