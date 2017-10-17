import test from 'ava'

import {receiveCharacters } from '../../src/actions/characters'

test('The receive characters action is created', t => {
    const getCharacters = receiveCharacters()
    t.is(getCharacters.type, 'RECEIVE_CHARACTERS')
})