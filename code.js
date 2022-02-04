var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e4535172-4632-4468-8a68-9c51de2f8883","c6255c87-86a9-4842-bbfe-9021480315b4","68f27616-2851-423a-a267-f27f494cae04"],"propsByKey":{"e4535172-4632-4468-8a68-9c51de2f8883":{"name":"enemy","sourceUrl":"assets/v3/animations/_pIsUc1TsrLQN4YPTI0ecbmd7xKFwjzm8GQwFesxNV8/e4535172-4632-4468-8a68-9c51de2f8883.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"G8_38aJdf09Miuhem5FQ64DPqLC7TQ8d","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/_pIsUc1TsrLQN4YPTI0ecbmd7xKFwjzm8GQwFesxNV8/e4535172-4632-4468-8a68-9c51de2f8883.png"},"c6255c87-86a9-4842-bbfe-9021480315b4":{"name":"coin","sourceUrl":"assets/v3/animations/_pIsUc1TsrLQN4YPTI0ecbmd7xKFwjzm8GQwFesxNV8/c6255c87-86a9-4842-bbfe-9021480315b4.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"BjXsLn21e7ogkxrVQelLolqrZrVkvWeT","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/_pIsUc1TsrLQN4YPTI0ecbmd7xKFwjzm8GQwFesxNV8/c6255c87-86a9-4842-bbfe-9021480315b4.png"},"68f27616-2851-423a-a267-f27f494cae04":{"name":"star","sourceUrl":"assets/api/v1/animation-library/gamelab/nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E/category_icons/star1.png","frameSize":{"x":396,"y":376},"frameCount":1,"looping":true,"frameDelay":2,"version":"nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":376},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E/category_icons/star1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(20,162,5,124)
var wall2 = createSprite(70,222,105,5)
var wall3 = createSprite(86,150,5,100)
var wall4 = createSprite(53,102,70,5)
var wall5 = createSprite(94,201,20,5)
var wall6 = createSprite(102,163,5,80)
var wall7 = createSprite(120,214,5,20)
var wall8 = createSprite(213,205,190,5)
var wall9 = createSprite(195,125,190,5)
var wall10 = createSprite(310,166,5,83)
var wall11 = createSprite(290,117,5,20)
var wall12 = createSprite(318, 127,15,5)
var wall13 = createSprite(390,170,5,124)
var wall14 = createSprite(340,108,105,5)
var wall15 = createSprite(325,178,5,106)
var wall16 = createSprite(357,230,70,5)
var color = createSprite(53, 162, 63, 115)
color.shapeColor = "lightgreen"
var color = createSprite(358, 169, 61, 117)
color.shapeColor = "lightgreen"
var player = createSprite(50,150,10,10)
var coin = createSprite(150,160)
coin.setAnimation("coin")
coin.scale = 0.05
var coin2 = createSprite(250, 190)
coin2.setAnimation("coin")
coin2.scale = 0.05
player.shapeColor = ("red")
var enemy1 = createSprite(205,150)
enemy1.setAnimation("enemy")
enemy1.scale = 0.02
var enemy2 = createSprite(205,175)
enemy2.setAnimation("enemy")
enemy2.scale = 0.02
 enemy1.velocityX = -5
 enemy2.velocityX = 5
 var winblock = createSprite(360,168,10,10)
 winblock.setAnimation("star")
 winblock.scale = 0.05
function draw() {
  background("white")
 

  if(keyDown("up")){
    player.y = player.y - 1
  }
   if(keyDown("down")){
    player.y = player.y + 1
  }
   if(keyDown("right")){
    player.x = player.x + 1
  }
   if(keyDown("left")){
    player.x = player.x - 1
  }
  if(player.isTouching(enemy1) || player.isTouching(enemy2)){
    player.x = 50
    player.y = 150
  }
 if(player.isTouching(winblock)){
   enemy1.velocityX = 0
      enemy2.velocityX = 0
  text("You Win!", 200,230)

 }

    
  
enemy1.bounceOff(wall6);
enemy2.bounceOff(wall10);
enemy1.bounceOff(wall10)
enemy2.bounceOff(wall6)

  
  player.collide(wall1)
    player.collide(wall2)
  player.collide(wall3)
  player.collide(wall4)
  player.collide(wall5)
  player.collide(wall6)
  player.collide(wall7)
    player.collide(wall8)
        player.collide(wall9)
  player.collide(wall10)
  player.collide(wall11)
  player.collide(wall12)
  player.collide(wall13)
  player.collide(wall14)
  player.collide(wall15)
  player.collide(wall16)
  
   if(player.isTouching(coin)){
  playSound("assets/category_collect/collect_item_bling_1.mp3")
 coin.destroy("player")
  }
 if(player.isTouching(coin2)){
  playSound("assets/category_collect/collect_item_bling_1.mp3")
 coin2.destroy("player")
  } 



  drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
