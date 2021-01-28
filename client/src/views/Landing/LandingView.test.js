import ReactDOM from 'react-dom';
import LandingView from './LandingView';
import { render, screen } from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LandingView />, div);
})

test('render Hero.Title', () => {
    render(<LandingView />);
    expect(screen.getByText('Lägg till bilder på Problemet & Platsen')).toBeInTheDocument();
})
