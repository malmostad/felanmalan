import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react'
import ButtonContainer from './index';

it('renders a div', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ButtonContainer />, div);
})
/*
test('render ButtonContainer', () => {
    render(<ButtonContainer />);
    expect(<ButtonContainer.Button />).toBeinTheDocument();
})
*/