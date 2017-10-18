import React from 'react'

import {shallow, mount} from 'enzyme'

import {Characters as NotConnectedCharacters, mapStateToProps} from './Characters'

describe('Characters component', () => {
    it('should display the loading image when Loading is true', () => {
        const wrapper = shallow(<NotConnectedCharacters loading={true} characters={['mycharacter']} />)
        expect(wrapper.find("Loading").exists()).toBeTrue;
    })

    it('should not display the loading image when Loading is true', () => {
        const wrapper = shallow(<NotConnectedCharacters loading={false} characters={['mycharacter']} />)
        expect(wrapper.find("Loading").exists()).toBeFalse;
    })
    
    it('should mapStateToProps', () => {
        const state = {
            characters: {
                results: ["darkKnight"],
                loading: false
            }
        }
        const expected = {
            characters: state.characters.results,
            loading: state.characters.loading
        }
        expect(mapStateToProps(state)).toEqual(expected)
        
        // pass it a state which contains characters key which is an object
        // that object should have results and loading

        // your expect ist hat it returns an object with a characters and loading key with the values from state
    })
})

