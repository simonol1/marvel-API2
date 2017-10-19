import React from 'react'
import {connect} from 'react-redux'

import {getCharacterbyId} from '../actions/characters'

import Loading from './Loading'

  const renderCharacterDetails = (props) => {
        const ext = props.thumbnail.extension
        const path = props.thumbnail.path
        const imagePath = path + "/standard_fantastic." + ext
        const info = props.description
        const actualDescription = (info == "" )? "I'm the most exciting hero in the world...where is my description!!" : props.description
        const comics = props.comics.items
        return (
            <div>
                <h1>{props.name}</h1>
                <div><img src={imagePath} alt={props.name}/></div>
                <h3>{actualDescription}</h3>
                <h4>Comics:</h4>
                <ul>
                    {comics.map((comic) =><span key={comic.resourceURI}><li>{comic.name} </li></span> )}
                </ul>
            </div>
        // mapping over the array and pulling out comics related to the character
    )
}

export class CharacterDetails extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id; // nested object
        this.props.dispatch(getCharacterbyId(id)) 
        // use this to help the function remember props
    }

    render () {  
        const { character } = this.props;
        const hasCharacterData = Object.keys(character).length !== 0;
        return (
            <div className='marvel-container'>
                {!hasCharacterData && <Loading />}
                {hasCharacterData && renderCharacterDetails(character)}
            </div>
        )
    }
}
// export mapStateToProps outside of connect so that it can be tested more easily

export const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;

    const character = state.characters.results.find(character => {
        return character.id.toString() === id
    }) || {}
    
    return { character } 
}

export default connect(mapStateToProps)(CharacterDetails)
