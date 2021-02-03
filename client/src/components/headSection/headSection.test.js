import ReactDOM from 'react-dom';
import { HeadSection } from './index';
import { render, screen } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeadSection />, div);
});

/*
it('render Hero.Title', () => {
    render(<Hero />);
    expect(screen.getByText('Lägg till bilder på Problemet & Platsen')).toBeInTheDocument();
})
*/
