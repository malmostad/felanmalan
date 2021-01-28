
import FollowUpView from './FollowUpView';
import { render, screen } from '@testing-library/react';

it('render Hero.Title', () => {
    render(<FollowUpView />);
    expect(screen.getByText('Follow up view')).toBeInTheDocument();
})