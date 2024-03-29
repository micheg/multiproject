/**
 * @format
 */

import "phaser";
import MainScene from "./scenes/main";

const game_area = {
  w: 1031,
  h: 580,
};

let config = {
  type: Phaser.AUTO,
  backgroundColor: "#ffffff",
  scale: {
    parent: "game",
    mode: Phaser.Scale.FIT,
    width: 1031,
    height: 580,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [MainScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
  },
};

window.addEventListener("load", () => {
  const ratio = window.innerWidth / window.innerHeight;
  const height = 580;
  const width = Math.min(height * ratio, 1280);

  console.log(`${ratio} - ${width} - ${height}`);
  config.scale.width = width;
  config.scale.height = height;

  let game = new Phaser.Game(config);
  game.config.info = {
    game_area: game_area,
  };
});
