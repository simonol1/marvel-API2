import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Header'
import Characters from './Characters'
import CharacterDetails from './CharacterDetails'
import Footer from './Footer'

const App = (props) => {
  return (
    <BrowserRouter>
      <span>
        <div className='row'>
          <Header />
        </div>
        <div className='row'>
          <Route exact path="/" component={Characters} />
          <Route path='/details/:id' component={CharacterDetails}/>
        </div>
        <div className='row'>
          <Footer />
        </div>
      </span>
    </BrowserRouter>
    )
}

export default App
