import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { GlobalStyle } from "./style";
import { GlobalStyleIconFont } from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle />
        <GlobalStyleIconFont />
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home} ></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
