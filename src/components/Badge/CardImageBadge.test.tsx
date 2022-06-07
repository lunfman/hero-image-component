import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import CardImageBadge from './CardImageBadge'

test('test Card image badge ui', () => {
    render(
        <CardImageBadge>
            <img alt='test' />
        </CardImageBadge>
    )

    expect(screen.getByAltText('test')).toBeTruthy()
})