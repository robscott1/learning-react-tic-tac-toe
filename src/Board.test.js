import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

test('should render an empty Square', () => {
    const board = render(<Board />); // Line 1
    var buttons = board.queryAllByRole('button'); // Line 2
    var exp = 'X'
    for(let i=0; i < buttons.length; i++) {
        fireEvent.click(buttons[i])
        exp = i % 2 == 0 ? 'X' : 'O'
        expect(buttons[i].innerHTML).toBe(exp); // Line 3
    }
  });

test('status message for whose turn it is', () => {
    const board = render(<Board />);
    var txt = board.getByText("Next player: X")

    const exp_o = "Next player: X"
    const exp_x = "Next player: O"

    var buttons = board.queryAllByRole('button'); // Line 2
    for(let i=0; i < buttons.length; i++) {
        fireEvent.click(buttons[i])
        expect(txt.innerHTML).toBe(i % 2 == 0 ? exp_x : exp_o); // Line 3
    }
})