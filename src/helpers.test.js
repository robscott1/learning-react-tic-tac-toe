import { calculateWinner } from './helpers';

test('should return X as the winner if it has the top row', () => {
    // Arrange the test
    const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
    
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe('X');
  });

test('should return O as the winner if it has the top row', () => {
// Arrange the test
    const squares = ['0', '0', '0', 'O', null, 'O', null, null, null];

// Act
    const winner = calculateWinner(squares);

// Assert
expect(winner).toBe('0');
});

test('should return X as the winner if it has the top row', () => {
// Arrange the test
    const squares = ['X', '0', 'X', 'O', null, 'O', null, null, null];

// Act
    const winner = calculateWinner(squares);

// Assert
    expect(winner).toBe(null);
});