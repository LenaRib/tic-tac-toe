const TicTacToe = require('../src/tic-tac-toe.js');

let game;

game = new TicTacToe();
game.nextTurn(1, 0)
expect(game.getWinner()).to.equal(null)

game.nextTurn(1, 2)
expect(game.getWinner()).to.equal(null)

game.nextTurn(2, 1)
expect(game.getWinner()).to.equal(null)

game.nextTurn(1, 2)
expect(game.getWinner()).to.equal(null)

game.nextTurn(1, 1)
expect(game.getWinner()).to.equal(null)

game.nextTurn(0, 1)
expect(game.getWinner()).to.equal(null)

game.nextTurn(2, 0)
expect(game.getWinner()).to.equal(null)

game.nextTurn(0, 1)
expect(game.getWinner()).to.equal(null)

game.nextTurn(2, 2)
expect(game.getWinner()).to.equal(null)

game.nextTurn(0, 1)
expect(game.getWinner()).to.equal(null)

game.nextTurn(1, 1)
expect(game.getWinner()).to.equal(null)

game.nextTurn(2, 0)
expect(game.getWinner()).to.equal(null)

game.nextTurn(0, 2)
expect(game.getWinner()).to.equal('o')
