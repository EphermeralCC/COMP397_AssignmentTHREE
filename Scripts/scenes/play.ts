// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sky: objects.Sky;
        private _fire: objects.Fire;
        private _fireball: objects.Fireball[];
        private _fireballCount:number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
           
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Set Cloud Count
            this._fireballCount = 8;
            
            // Instantiate Cloud array
            this._fireball = new Array<objects.Fireball>();
                
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
            for(var ball:number = 0; ball < this._fireballCount; ball++) {
                this._fireball[ball] = new objects.Fireball();
               this.addChild(this._fireball[ball]);
            }
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._sky.update();
            this._fire.update();
           
            this._player.update();
           
            this._fireball.forEach(ball => {
                ball.update();
                this._collision.check(ball);
            });
            
            this._collision.check(this._fire);
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}