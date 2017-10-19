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
    })

    it('should run dispatch when there are no characters', () => {
        const dispatchSpy = jest.fn() 
        const wrapper = shallow(<NotConnectedCharacters dispatch={dispatchSpy} characters={[]} />)
        expect(dispatchSpy.mock.calls.length).toBe(1) 
    })
    it('should not run dispatch when there are characters', () => {
        const dispatchSpy = jest.fn() 
        const wrapper = shallow(<NotConnectedCharacters dispatch={dispatchSpy} characters={['batman', 'superman']} />)
        expect(dispatchSpy.mock.calls.length).toBe(0) 
    })
})

