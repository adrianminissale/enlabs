import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header/'
import Footer from './components/Footer/'
import Movies from './components/Movies/'

import styles from './styles.module.scss'

function App() {
  return (
    <BrowserRouter>
      <div className={ styles.container }>
        <Header />
        <div className={ styles.content }>
          <Switch>
            <Route exact path='/'>
              <Movies />
            </Route>
            <Route path='/page/:page'>
              <Movies />
            </Route>
            <Route path='/genre/:genre'>
              <Movies />
            </Route>
            <Route path='/name/:name'>
              <Movies />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
