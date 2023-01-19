import React from 'react'
import {SettingsModal} from './SettingsModal'

describe('<SettingsModal />', () => {
    it('renders', () => {
        cy.mount(<SettingsModal isOpen={true} handleClose={() => {
        }} handleDarkMode={() => {
        }} isDarkMode={true}/>)
    })
})