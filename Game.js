
function Game () {

    this.board = '';
    this.playerOne = '';
    this.playerTwo = '';

}

Game.prototype.getBoardArray = function () {
    return this.board.trim().split("\n").map(row => row.trim());
};

Game.prototype.getWinner = function () {
    return 1;
};

module.exports = Game;
