/*
Author: Christine Cho
Last Modified by: Christine Cho
Last Modified: 03/28/2016
File description: Manages collisions in the game

Revision:
1. Changed collision to add score
*/
var managers;
(function (managers) {
    // COLLISION MANAGER CLASS
    var Collision = (function () {
        function Collision(player) {
            this._player = player;
        }
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        Collision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfWidth = this._player.width * 0.5;
            var objectHalfWidth = object.width * 0.5;
            var minimumDistance = playerHalfWidth + objectHalfWidth;
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            /* check if the distance between the player and
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                // check if it's fire hit
                if (object.name === "fire") {
                    console.log("fire collected!");
                    play.score++;
                }
                // check if it's a fireball hit
                if (object.name === "fireball") {
                    play.lives--;
                }
                if (object.name === "fireball" && startPoint.x == object.x || startPoint.y == object.x) {
                    createjs.Sound.play("hit");
                }
                if (object.name === "fire" && startPoint.x == object.x || startPoint.y == object.y) {
                    createjs.Sound.play("collect");
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));

//# sourceMappingURL=collision.js.map
