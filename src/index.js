import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import AtlanaRepositorySearchApp from './App';

import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <Provider store={store.store}>
      <React.StrictMode>
          <AtlanaRepositorySearchApp />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
