/* eslint-env jest */

import { render, screen } from '@testing-library/react'
import App from '../src/pages/index.tsx'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: 'Emptiness is the ultimate outcome of everything' })
    ).toBeInTheDocument()
  })
})
