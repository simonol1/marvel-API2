import React from 'react'

import {shallow, mount} from 'enzyme'

import Footer from './Footer'

describe('The footer', () => {
    it('Should display the footer correctly', () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.find('.footer').exists()).toEqual(true);
    })
})