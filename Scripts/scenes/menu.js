/*
Author: Christine Cho
Last Modified by: Christine Cho
Last Modified: 03/28/2016
File description: Manages the Menu scene in the game

Revision:
1. Added instruction button to the scene
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            //Add Background Image
            this._backgroundImage = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._backgroundImage);
            // add the StartButton to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 35, true);
            this.addChild(this._startButton);
            // add the InstructionButton to the MENU scene
            this._instructionButton = new objects.Button("InstructionButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 100, true);
            this.addChild(this._instructionButton);
            // StartButton event listener
            this._startButton.on("click", this._startButtonClick, this);
            // InstructionButton event listener
            this._instructionButton.on("click", this._instructionButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // StartButton click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Switch to the Play Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        // StartButton click event handler
        Menu.prototype._instructionButtonClick = function (event) {
            // Switch to the Play Scene
            scene = config.Scene.INSTRUCTION;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));

//# sourceMappingURL=menu.js.map
