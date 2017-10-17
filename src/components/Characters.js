import React from 'react'
import {connect} from 'react-redux'

import {getCharacters} from '../actions/characters'
import CharacterList from './CharacterList'


class Characters extends React.Component {

  componentWillMount() {
    console.log(this.props);
    if (this.props.characters.length === 0) {
      this.props.dispatch(getCharacters())
    };
  }

  render() {
    const { loading } = this.props;

    return (
        <div>
          {loading &&
            <img src="https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-32.gif"/> 
          }
          {!loading &&
           this.props.characters.map((character) => <CharacterList character={character} key={character.id} />)}
          }
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters.results,
    loading: state.characters.loading
  }

}

export default connect(mapStateToProps)(Characters)
