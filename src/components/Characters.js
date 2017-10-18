import React from 'react'
import {connect} from 'react-redux'

import {getCharacters} from '../actions/characters'
import CharacterList from './CharacterList'

import Loading from './Loading'


export class Characters extends React.Component {

  componentWillMount() {
    if (this.props.characters.length === 0) {
      this.props.dispatch(getCharacters())
    };
  }

  render() {
    const { loading } = this.props;

    return (
        <div>

          {loading &&
            <Loading /> 
          }
          {!loading &&
           this.props.characters.map((character) => <CharacterList character={character} key={character.id} />)}
          }
        </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    characters: state.characters.results,
    loading: state.characters.loading
  }

}

export default connect(mapStateToProps)(Characters)
