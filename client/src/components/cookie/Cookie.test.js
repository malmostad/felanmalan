import ReactDOM from 'react-dom'
import Cookie from './Cookie'
import { render, screen } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Cookie />, div)
})

test('render Hero.Title', () => {
  render(<Cookie />)
  expect(screen.getByText('Lägg till bilder på Problemet & Platsen')).toBeInTheDocument()
})
