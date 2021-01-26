import ReactDOM from 'react-dom';
import { Hero } from './index';
import { render, screen } from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hero />, div);
})

/*
it('render Hero.Title', () => {
    render(<Hero />);
    expect(screen.getByText('Lägg till bilder på Problemet & Platsen')).toBeInTheDocument();
})
*/