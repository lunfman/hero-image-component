import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Badge from './Badge'

test('test rendering', () => {
    render(
        <Badge>
            text
        </Badge>
    )
    const badge = screen.getByTestId('badge')
    expect(badge).toHaveStyle('position: absolute')
    expect(badge).toHaveStyle('top: 10px')
    expect(badge).toHaveStyle('right: -22px')
    expect(badge).toHaveStyle('color: white')
    expect(badge).toHaveStyle('fontSize: 15px')
    expect(badge).toHaveStyle('background: coral')
    expect(screen.getByText('text')).toBeTruthy()
    
})

test('test props1', () => {
    render(
        <Badge
            right='20px'
            top='100px'
            color='black'
            background='white'
            fontSize='20px'
        >
            text
        </Badge>
    )
    const badge = screen.getByTestId('badge')
    expect(badge).toHaveStyle('position: absolute')
    expect(badge).toHaveStyle('top: 100px')
    expect(badge).toHaveStyle('right: 20px')
    expect(badge).toHaveStyle('color: black')
    expect(badge).toHaveStyle('fontSize: 20px')
    expect(badge).toHaveStyle('background: white')
})