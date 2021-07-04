class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.turns = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.winner = '';
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

        this.winner = '';
        return true || false;
    }

    getWinner() {
        for (let i = 0; i < 2; i += 1) {
            if (this.turns[i].every(e => e === 'x')) this.winner = 'x';
            if (this.turns[i].every(e => e === 'y')) this.winner = 'y';
        }

        for (let i = 0; i < 2; i += 1) {
            let winner = turns[i][0];
            let winnerCount = 1;
            for (let j = 1; j < 2; j += 1) {

                if (this.turns[i][j] === winner)
                    winnerCount += 1;
            }
            if (winnerCount === 3) this.winner = winner;
        }

        if (this.turns[0][0] === this.turns[1][1] === this.turns[2][2]) this.winner = turns[1][1];
        if (this.turns[0][2] === this.turns[1][1] === this.turns[2][0]) this.winner = turns[1][1];

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
