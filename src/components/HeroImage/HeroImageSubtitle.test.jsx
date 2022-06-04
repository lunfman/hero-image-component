import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import HeroSubtitle from './HeroSubtitle'

test('test HeroTitle', () => {
    render(
    <HeroSubtitle
        fontSize='500px'
        fontWeight='1000'
    >
        My title
    </HeroSubtitle>)

    const title = screen.getByText('My title')
    expect(title).toHaveStyle('font-size: 500px')
    expect(title).toHaveStyle('font-weight: 1000')
})