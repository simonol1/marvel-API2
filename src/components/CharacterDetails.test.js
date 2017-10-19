import React from 'react'

import {shallow, mount} from 'enzyme'

import { CharacterDetails as NotConnectedCharacterDetails, mapStateToProps } from './CharacterDetails'

const setup = (newProps = {}) => {
    const dispatchSpy = jest.fn()
    const props = {
        character: {
            id: 1001,
            description: '',
            comics: {
                items: []
            }
        },
        dispatch: dispatchSpy,
        match: {
            params: {
                id: '1001'
            }
        },
        ...newProps
    }
    return { 
        dispatchSpy, 
        props
    }
}

describe('CharacterDetails component', () => {
    it('should dispatch the action getCharacterById', () => {
        const { props, dispatchSpy } = setup();
        const wrapper = shallow(<NotConnectedCharacterDetails {...props} />)
        expect(dispatchSpy.mock.calls.length).toBe(1)
    })

    it('should be loading if the character data is not there', () => {
        const { props } = setup({ character: {} });
        const wrapper = shallow(<NotConnectedCharacterDetails {...props} />)
        expect(wrapper.find("Loading").exists()).toEqual(true);
    })

    it('should not renderCharacterDetails if the character data is not there', () => {
        const { props } = setup({ character: {} });
        const wrapper = shallow(<NotConnectedCharacterDetails {...props} />)
        expect(wrapper.find('h1').exists()).toEqual(false);
    })


    it('should map state to props', () => {
        const { props } = setup()

        const state = {
            characters: {
                results: [
                    { 
                        id: 1001
                    },
                    {
                        id: 1002
                    }
                ],
                loading: false
            }
        }

        const expectedState = {
            character: {
                id: 1001
            }
        }

        expect(mapStateToProps(state, props)).toEqual(expectedState)
    })
})