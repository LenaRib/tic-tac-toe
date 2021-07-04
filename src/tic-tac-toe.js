class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.turns = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
        this.winner = '';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.turns[rowIndex][columnIndex] === 0) {
            this.turns[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {

    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.turns.join(''), indexOf('0') === -1 ? true : false;
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        return this.turns[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
