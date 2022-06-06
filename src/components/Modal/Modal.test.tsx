import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from './Modal'
// why ? -> cause of eeror doms do not have browser functions
window.scrollTo = jest.fn();

let isOpen = false

const open = () => {
  isOpen= true
}

const close = () => {
  isOpen=false
}


test('test modal rendering when open', () => {


    render(
        <Modal 
            isOpen={isOpen}
            closeMe={close}
        >
            <p>modal inner content</p>
        </Modal>
    )
    
    expect(screen.getByTestId('modal')).toHaveStyle('display: none')
    expect(screen.getByTestId('modal')).toBeTruthy()
    expect(screen.getByText('modal inner content')).toBeTruthy()
})


test('test modal close on button click', () => {
    open()
    render(
        <Modal 
            isOpen={isOpen}
            closeMe={close}
        >
            <p>modal inner content</p>
        </Modal>
    )
    expect(screen.getByTestId('modal')).toHaveStyle('display: block')
    expect(screen.getByTestId('modal')).toBeTruthy()
    expect(screen.getByText('modal inner content')).toBeTruthy()
})

