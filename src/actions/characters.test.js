
import { receiveCharacters, RECEIVE_CHARACTERS } from './characters'
import { setErrorMessage, SET_ERROR_MESSAGE } from './characters'
import { changeLoadState, LOADING } from './characters'


describe('getCharacters', () => {
    it('should create an action to get all of the characters', () => {
        const characters = ['wolverine', 'darkKnight']
        const expectedAction = {
            characters,
            type: RECEIVE_CHARACTERS
        }
        expect(receiveCharacters(characters)).toEqual(expectedAction)
    })
})

describe('errorMessages', () => {
    it('should create an action for an error message', () => {
        const message = 'what are you doing' 
        const expectedAction = {
            errorMessage: message,
            type: SET_ERROR_MESSAGE
        }
        expect(setErrorMessage(message)).toEqual(expectedAction)
    })
})


describe('loadingOptions', () => {
    it('should create an action for a loading spinner', () => {
        const expectedAction = {
            type: LOADING
        }
        expect(changeLoadState()).toEqual(expectedAction)
    })
})
