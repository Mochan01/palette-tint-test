import Phaser from "phaser";
import logoImg from "./assets/logo.png";

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    // Logo 1.
    this.load.image("logo", logoImg);

    // Logo 2.
    this.load.image("logo2", logoImg);
  }

  create() {
    this.cameras.main.setBackgroundColor("#dddddd");

    // Logo 1.
    const logo = this.add.image(400, 150, "logo");
    logo.setInteractive(this.input.makePixelPerfect());
    logo.on('pointerup', () => {
      logo.setTint(0xff0000)
    });

    // Logo 2.
    const logo2 = this.add.image(400, 450, "logo2");
    logo2.setInteractive(this.input.makePixelPerfect());
    logo2.on('pointerup', () => {
      logo2.setTint(0x9900FF)
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
