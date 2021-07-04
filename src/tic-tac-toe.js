class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.turns = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.turns[rowIndex][columnIndex] === null) {
            this.turns[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        return getWinner();
    }

    getWinner() {
        for (let i = 0; i < 3; i += 1) {
            if (this.turns[i].every(e => e === 'x')) this.winner = 'x';
            if (this.turns[i].every(e => e === 'o')) this.winner = 'o';
        }

        for (let i = 0; i < 3; i += 1) {
            let win = this.turns[0][i];
            let winnerCount = 0;
            for (let j = 0; j < 3; j += 1) {
                if (this.turns[j][i] === win) winnerCount += 1;
            }
            if (winnerCount === 3) this.winner = win;
        }
        if (this.turns[0][0] === this.turns[1][1] && this.turns[1][1] === this.turns[2][2]) this.winner = this.turns[1][1];
        if (this.turns[0][2] === this.turns[1][1] && this.turns[1][1] === this.turns[2][0]) this.winner = this.turns[1][1]

        return this.winner;
    }

    noMoreTurns() {
        return this.turns.flat().some(e => e === null) ? false : true;
    }

    isDraw() {
        return this.isFinished() || this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.turns[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
