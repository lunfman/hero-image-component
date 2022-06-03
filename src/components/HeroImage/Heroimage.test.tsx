import HeroImage from './HeroImage'
import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('HeroImage rendering', () => {

    render(<HeroImage imgUrl='./'></HeroImage>)
    const heroImage = screen.getByTestId('heroImage')
    expect(heroImage).toBeTruthy()
    expect(heroImage).toHaveStyle('height: 100vh')
})

test('HeroImage rendering', () => {
    render(<HeroImage 
        imgUrl='./'
        heroHeight='50vh'
        titleColor='black'>
        </HeroImage>)
    const heroImage = screen.getByTestId('heroImage')
    expect(heroImage).toBeTruthy()
    expect(heroImage).toHaveStyle('height: 50vh')
    expect(heroImage).toHaveStyle('color: black')
})