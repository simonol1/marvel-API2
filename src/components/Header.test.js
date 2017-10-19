import React from 'react'

import {shallow, mount} from 'enzyme'

import Header from './Header'

describe('The Header', () => {
    it('Should display the Header correctly', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('.header').exists()).toEqual(true);
    })
})