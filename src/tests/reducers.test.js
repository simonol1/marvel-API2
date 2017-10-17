import test from 'ava'

import characters from '../../src/reducers/characters'
import { receiveCharacters } from '../../src/actions/characters'

test('The next state shows that the characters have been received', t => {
    const nextState = characters([], receiveCharacters())
    t.is(nextState,{characters})
})