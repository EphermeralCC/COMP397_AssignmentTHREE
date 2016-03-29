/*
Author: Christine Cho
Last Modified by: Christine Cho
Last Modified: 03/28/2016
File description: Manages collisions in the game

Revision:
1. Changed collision to add score
*/

module managers {
    // COLLISION MANAGER CLASS
    export class Collision {
        // PRIVATE INSTANCE VARIABLES
        private _player: objects.Player;
        constructor(player:objects.Player) {
            this._player = player;
        }
        
        public distance(startPoint:createjs.Point, endPoint:createjs.Point):number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x),2) + Math.pow(endPoint.y - startPoint.y,2))
        }
        
        public check(object:objects.GameObject) {
            var startPoint:createjs.Point = new createjs.Point();
            var endPoint:createjs.Point = new createjs.Point();
            var playerHalfWidth:number = this._player.width * 0.5;
            var objectHalfWidth:number = object.width * 0.5;
            var minimumDistance:number = playerHalfWidth + objectHalfWidth;
            
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            
            
            /* check if the distance between the player and 
              the other object is less than the minimum distance */
            if(this.distance(startPoint, endPoint) < minimumDistance) {
                
                // check if it's fire hit
                if(object.name === "fire") {
                    console.log("fire collected!");
                    play.score ++;
                    //createjs.Sound.play("collect");
                    //console.log(play.score);
                }
                
                // check if it's a fireball hit
                if(object.name === "fireball") {
                    play.lives--;
                    //createjs.Sound.play("hit");
                    //console.log("fireball hit!");
                }
                
                if(object.name === "fireball" && startPoint.x == object.x || startPoint.y == object.x) {
                    createjs.Sound.play("hit");
                }
                if(object.name === "fire" && startPoint.x == object.x || startPoint.y == object.y ) {
                    createjs.Sound.play("collect");
                }
            }
        }
    }
}