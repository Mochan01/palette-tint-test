import Phaser from "phaser";
import logoImg from "./assets/logo.png";

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image("logo", logoImg);
  }

  create() {
    this.cameras.main.setBackgroundColor("#dddddd")
    const logo = this.add.image(400, 150, "logo");

    // Setting tint.
    logo.setInteractive();
    logo.on('pointerup', () => {
      logo.setTint(0xff0000)
    });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: MyGame
};

const game = new Phaser.Game(config);
