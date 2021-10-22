import React from 'react'
// import {render, screen } from '@testing-library/react';
import {poop} from './sum';

it('suming 5 and 2 will return 7', () => {
    // render(<poop/>);
    expect(poop(5,2)).toBe(7);
})