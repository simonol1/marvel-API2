import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Header'
import Characters from './Characters'
import CharacterDetails from './CharacterDetails'
import Footer from './Footer'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='header'>
          <Header />
        </div>
        <div className='content'>
          <Route exact path="/" component={Characters} />
          <Route path='/details/:id' component={CharacterDetails}/>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
    )
}

export default App
