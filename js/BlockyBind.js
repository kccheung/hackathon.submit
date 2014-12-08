
var PlayerTank = {};
PlayerTank.moveLeft = function () {
    player1.move(LEFT);
};
PlayerTank.moveRight = function () {
    player1.move(RIGHT);
};
PlayerTank.moveTop = function () {
    player1.move(UP);
};
PlayerTank.moveBottom = function () {
    player1.move(DOWN);
};
PlayerTank.shoot = function () {
    player1.shot();
};
PlayerTank.getIndex = function () {
    for (var i = 0, len = tanks.length; i < len; i++) {
        if (tanks[i].name === 1) {
            return i;
        }
    }
    return 0;
};

var Game = {};
Game.allTanksCount = function () {
    return tanks.length;
};
Game.getTankPos = function (i) {
    var tank = tanks[i];
    return {
        'x': tank.x,
        'y': tank.y
    }
};

var Callback = {};
Callback.onDamage = function () {

};

Callback.onWin = function () {

};
Callback.onLose = function () {

};
