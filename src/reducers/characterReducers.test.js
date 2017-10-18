
import reducer from './characters'
import { RECEIVE_CHARACTERS, LOADING } from '../actions/characters'


describe('characterReducers', () => {
    it('should return the state when the action falls through', () => {
        const state = {loading: true, results: []}
        expect(reducer(state,{type:'SET_DATA'})).toEqual(state)
    })

    it('should merge results with the characters from the action when we RECEIVE_CHARACTERS', () => {
        const characters = ['wolverine', 'darkKnight']
        const state = {loading: true, results: []}
        const expectedState = {loading: false, results: characters}
        expect(reducer(state,{type:RECEIVE_CHARACTERS, characters})).toEqual(expectedState)
    })

    it('the loading state should change to true when the action is LOADING', () => {
        const state = {loading:false}
        const expectedState = {loading:true}
        expect(reducer(state, {type: LOADING})).toEqual(expectedState)
    })
})