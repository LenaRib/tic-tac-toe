### Tic Tac Toe

### Description

Your task is to implement `TicTacToe` class

#### Methods:

##### `getCurrentPlayerSymbol()`
should return `x` or `o`

##### `nextTurn(row, col)`
should properly update class state (change current player, update marks storage etc.)

##### `isFinished()`
should return true if game is finished (e.g. there is a winner or it is a draw)

##### `getWinner()`
should return winner symbol (`x` or `o`) or null if there is no winner yet

##### `noMoreTurns()`
should return true if there is no more fields to place a `x` or `o`

##### `isDraw()`
should return true if there is no more turns and no winner

##### `getFieldValue(row, col)`
should return `matrix[row][col]` value (if any) or `null`

### Prerequisites
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: https://github.com/rolling-scopes-school/tick-tac-toe/
3. Clone your newly created repo: https://github.com/<%your_github_username%>/tick-tac-toe/  
4. Go to folder `tick-tac-toe`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run `npm test` in command line or you can run tests in browser with `npm start` and open http://localhost:8080
7. You will see the number of passing and failing tests. 100% of passing tests is equal to 100p in score  
