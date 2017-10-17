import React from 'react'
import {connect} from 'react-redux'

import {getCharacters} from '../actions/characters'

  const renderCharacterDetails = (props) => {
      const info = props.description
      const actualDescription = (info == "" )? "I'm the most exciting hero in the world...where is my description!!" : props.description
      const comics = props.comics.items
      return (
      <div>
        <h1>{props.name}</h1>
        <h3>{actualDescription}</h3>
        <h4>Comics:</h4>
        <ul>
            {comics.map((comic) => <span><li>{comic.name}</li></span> )}
        </ul>
     </div>
    )
}
  const CharacterDetails = ({character}) => {
      return (
        <div className='container'>
            {renderCharacterDetails(character)}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    
    const character = state.characters.results.reduce((prev,character) =>{
        if (character.id.toString() === id) {
            return {...prev,...character}
        } 
        return prev;
    }, {})

  return { character }
}

export default connect(mapStateToProps)(CharacterDetails)
