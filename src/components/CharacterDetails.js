import React from 'react'
import {connect} from 'react-redux'

import {getCharacterbyId} from '../actions/characters'
import Loading from './Loading'

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
                {comics.map((comic) =><span key={comic.resourceURI}><li>{comic.name} </li></span> )}
            </ul>
        </div>
    )
}

class CharacterDetails extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.dispatch(getCharacterbyId(id))
    }

    render () {  
        const { character } = this.props;
        const hasCharacterData = Object.keys(character).length !== 0;
        return (
            <div className='container'>
                {!hasCharacterData && <Loading />}
                {hasCharacterData && renderCharacterDetails(character)}
            </div>
        )
    }
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
