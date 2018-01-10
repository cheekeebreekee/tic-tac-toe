class TicTacToe {
    constructor() {
        this.arr = [[null,null,null], [null,null,null], [null,null,null]];
        this.currentPlayer = 'x';
        this.isFinish = false;
        this.winner = null;
      }
  
    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.arr[rowIndex][columnIndex] == null)
        {
            this.arr[rowIndex][columnIndex] = this.currentPlayer;
            if ((this.arr[0][0] == this.currentPlayer && this.arr[1][0] == this.currentPlayer && this.arr[2][0] == this.currentPlayer) ||
            (this.arr[0][1] == this.currentPlayer && this.arr[1][1] == this.currentPlayer && this.arr[2][1] == this.currentPlayer) ||
            (this.arr[0][2] == this.currentPlayer && this.arr[1][2] == this.currentPlayer && this.arr[2][2] == this.currentPlayer) ||
            (this.arr[0][0] == this.currentPlayer && this.arr[0][1] == this.currentPlayer && this.arr[0][2] == this.currentPlayer) ||
            (this.arr[1][0] == this.currentPlayer && this.arr[1][1] == this.currentPlayer && this.arr[1][2] == this.currentPlayer) ||
            (this.arr[2][0] == this.currentPlayer && this.arr[2][1] == this.currentPlayer && this.arr[2][2] == this.currentPlayer) ||
            (this.arr[0][0] == this.currentPlayer && this.arr[1][1] == this.currentPlayer && this.arr[2][2] == this.currentPlayer) ||
            (this.arr[0][2] == this.currentPlayer && this.arr[1][1] == this.currentPlayer && this.arr[2][0] == this.currentPlayer))
            {
                this.winner = this.currentPlayer;
                this.isFinish = true;
                if (this.currentPlayer == 'x') this.currentPlayer = 'o';
                else this.currentPlayer = 'x';
                return;
            }
            else if (this.noMoreTurns()) this.isFinish = true;
            if (this.currentPlayer == 'x') this.currentPlayer = 'o';
            else this.currentPlayer = 'x';
        }
    }

    isFinished() {
        return this.isFinish;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
    var check = true
    for (var i = 0; i < 3; i++){
        if (check == false) break;
        for (var j = 0; j < 3; j++){
        if (this.arr[i][j] == null) {check = false; break;}
        }
    }
        return check;
    }

    isDraw() {
        return ((this.isFinished()) && (this.getWinner() == null));
    }

    getFieldValue(rowIndex, colIndex) {
        return this.arr[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
