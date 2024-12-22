import React from 'react'
import { MenubarShortcut } from './menubar'

describe('<MenubarShortcut />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MenubarShortcut />)
  })
})