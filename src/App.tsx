import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Result } from 'antd';
import styles from './App.module.css';
import { HomePage, SignInPage, RegisterPage, DetailPage } from './pages';

function App() {
  return (
    <div className={styles.App}>
      {/* <HomePage /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signIn' component={SignInPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/detail/:touristRouteId' component={DetailPage} />
          <Route render={() =>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Link to='/'>回到首页</Link>}
            />
          } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;

