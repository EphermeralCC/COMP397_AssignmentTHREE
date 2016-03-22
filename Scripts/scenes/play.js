var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // Set Cloud Count
            this._fireballCount = 8;
            // Instantiate Cloud array
            this._fireball = new Array();
            // added ocean to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            // added island to the scene
            this._fire = new objects.Fire();
            this.addChild(this._fire);
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //added clouds to the scene
            for (var ball = 0; ball < this._fireballCount; ball++) {
                this._fireball[ball] = new objects.Fireball();
                this.addChild(this._fireball[ball]);
            }
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._sky.update();
            this._fire.update();
            this._player.update();
            this._fireball.forEach(function (ball) {
                ball.update();
                _this._collision.check(ball);
            });
            this._collision.check(this._fire);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
