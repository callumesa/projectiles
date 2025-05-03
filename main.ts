function lightning (num: number, num2: number) {
    if (facing == "right" && lightningCooldown == false) {
        lightning2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, wizard, 200, 0)
        lightningCooldown = true
        info.startCountdown(1)
    } else if (facing == "left" && lightningCooldown == false) {
        lightning2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, wizard, -200, 0)
        lightningCooldown = true
        info.startCountdown(1)
    } else if (facing == "up" && lightningCooldown == false) {
        lightning2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, wizard, 0, -200)
        lightningCooldown = true
        info.startCountdown(1)
    } else if (facing == "down" && lightningCooldown == false) {
        lightning2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, wizard, 0, 200)
        lightningCooldown = true
        info.startCountdown(1)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "up"
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (activeSpell == "fireball") {
        fireball()
    } else if (activeSpell == "lightning") {
        lightning(1, 1)
    } else if (activeSpell == "exploder") {
        exploder()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (wizard.tileKindAt(TileDirection.Top, assets.tile`lightningSign`)) {
        game.splash("Lightning Bolt!", "Pierces Enemies, But has a short cooldown")
    } else if (wizard.tileKindAt(TileDirection.Top, assets.tile`LightningChest`)) {
        game.splash("Lightning Bolt Unlocked!", "Press A To Switch Spells")
        lightningBoltUnlocked = true
        level2(3)
    } else if (wizard.tileKindAt(TileDirection.Top, assets.tile`boomSign0`)) {
        game.splash("Exploder!", "Damages all monsters near target")
        game.splash("But has a long cooldown")
    } else if (wizard.tileKindAt(TileDirection.Top, assets.tile`boomChest`)) {
        game.splash("Exploder Unlocked!", "Press A To Switch Spells")
        exploderUnlocked = true
        level2(3)
    } else if (lightningBoltUnlocked && activeSpell == "fireball") {
        activeSpell = "lightning"
    } else if (lightningBoltUnlocked && activeSpell == "lightning") {
        activeSpell = "fireball"
    } else if (exploderUnlocked && activeSpell == "fireball") {
        activeSpell = "exploder"
    } else if (exploderUnlocked && activeSpell == "exploder") {
        activeSpell = "fireball"
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "left"
})
info.onCountdownEnd(function () {
    if (level == 1) {
        level2(2)
    } else if (level == 3) {
        level2(3)
    } else if (level == 4 && lightningBoltUnlocked) {
        lightningCooldown = false
    } else if (level == 4 && exploderUnlocked) {
        exploderCooldown = false
    } else {
    	
    }
})
function level2 (num: number) {
    if (num == 2) {
        for (let value of monsters) {
            sprites.destroy(value)
        }
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(wizard, tiles.getTileLocation(5, 10))
        level = 2
    } else if (num == 3) {
        for (let value of monsters) {
            sprites.destroy(value)
        }
        setupGame(2)
        monsterMaker(5, 1)
        level = 4
    }
}
function setupGame (num: number) {
    if (1 == num) {
        tiles.setCurrentTilemap(tilemap`level1`)
        wizard = sprites.create(img`
            . . . . . . . c c c . . . . . . 
            . . . . . . c b 2 c . . . . . . 
            . . . . c c c 2 2 c c c . . . . 
            . . c c b c 2 2 2 2 c c c c . . 
            . c b b 4 b 4 4 4 4 b 4 b b c . 
            . c b 4 4 b b 4 4 b b 4 4 b c . 
            . . f 4 4 4 b b b b 4 4 4 c . . 
            . . f f 4 4 4 4 4 4 4 4 f f . . 
            . . f f f b f e e f b f f f . . 
            . . f f f 1 f b b f 1 f f f . . 
            . . . f f b b b b b b f f . . . 
            . . . e e f e e e e f e e . . . 
            . . e b c b 4 b b 4 b f b e . . 
            . . e e f 4 4 4 4 4 4 f e e . . 
            . . . . c b 4 4 4 4 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(wizard)
        tiles.placeOnRandomTile(wizard, sprites.dungeon.darkGroundCenter)
        scene.cameraFollowSprite(wizard)
        monsters = []
        activeSpell = "fireball"
        lightningBoltUnlocked = false
        exploderCooldown = false
        level = 1
    } else if (2 == num) {
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnRandomTile(wizard, sprites.dungeon.darkGroundCenter)
    }
}
function monsterMaker (num: number, num2: number) {
    for (let index = 0; index < num; index++) {
        monster = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(monster, sprites.dungeon.floorLight0)
        monster.follow(wizard, 50)
        monsters.push(monster)
    }
}
function exploder () {
    if (exploderCooldown == false && facing == "right") {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, wizard, 150, 0)
        exploderCooldown = true
        info.startCountdown(2)
    } else if (exploderCooldown == false && facing == "left") {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, wizard, -150, 0)
        exploderCooldown = true
        info.startCountdown(2)
    } else if (exploderCooldown == false && facing == "up") {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, wizard, 0, -150)
        exploderCooldown = true
        info.startCountdown(2)
    } else if (exploderCooldown == false && facing == "down") {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, wizard, 0, 150)
        exploderCooldown = true
        info.startCountdown(2)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "right"
})
function fireball () {
    if (facing == "right") {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 4 4 4 4 4 2 2 2 2 . . 
            . . 2 4 4 4 5 5 5 4 4 4 4 4 2 . 
            . . 4 4 5 4 5 5 5 4 4 4 4 4 2 . 
            . 2 4 5 5 4 4 4 4 4 5 5 5 4 2 . 
            2 4 5 5 5 4 4 4 4 4 4 5 5 4 4 2 
            2 4 4 4 4 4 4 4 4 4 4 5 5 4 4 2 
            2 4 5 5 4 4 4 4 4 4 4 4 4 4 4 2 
            . 2 5 5 5 4 4 4 4 4 4 4 5 5 2 . 
            . 2 4 5 4 4 4 4 4 4 4 4 5 5 2 . 
            . . 2 4 4 4 4 5 5 5 4 4 5 4 2 . 
            . . . 2 2 4 4 5 5 4 4 4 4 2 2 . 
            . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
            . . . 2 2 4 4 4 4 4 4 2 2 . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            `, wizard, 200, 0)
    } else if (facing == "left") {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 4 4 4 4 4 2 2 2 2 . . 
            . . 2 4 4 4 5 5 5 4 4 4 4 4 2 . 
            . . 4 4 5 4 5 5 5 4 4 4 4 4 2 . 
            . 2 4 5 5 4 4 4 4 4 5 5 5 4 2 . 
            2 4 5 5 5 4 4 4 4 4 4 5 5 4 4 2 
            2 4 4 4 4 4 4 4 4 4 4 5 5 4 4 2 
            2 4 5 5 4 4 4 4 4 4 4 4 4 4 4 2 
            . 2 5 5 5 4 4 4 4 4 4 4 5 5 2 . 
            . 2 4 5 4 4 4 4 4 4 4 4 5 5 2 . 
            . . 2 4 4 4 4 5 5 5 4 4 5 4 2 . 
            . . . 2 2 4 4 5 5 4 4 4 4 2 2 . 
            . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
            . . . 2 2 4 4 4 4 4 4 2 2 . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            `, wizard, -200, 0)
    } else if (facing == "up") {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 4 4 4 4 4 2 2 2 2 . . 
            . . 2 4 4 4 5 5 5 4 4 4 4 4 2 . 
            . . 4 4 5 4 5 5 5 4 4 4 4 4 2 . 
            . 2 4 5 5 4 4 4 4 4 5 5 5 4 2 . 
            2 4 5 5 5 4 4 4 4 4 4 5 5 4 4 2 
            2 4 4 4 4 4 4 4 4 4 4 5 5 4 4 2 
            2 4 5 5 4 4 4 4 4 4 4 4 4 4 4 2 
            . 2 5 5 5 4 4 4 4 4 4 4 5 5 2 . 
            . 2 4 5 4 4 4 4 4 4 4 4 5 5 2 . 
            . . 2 4 4 4 4 5 5 5 4 4 5 4 2 . 
            . . . 2 2 4 4 5 5 4 4 4 4 2 2 . 
            . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
            . . . 2 2 4 4 4 4 4 4 2 2 . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            `, wizard, 0, -200)
    } else if (facing == "down") {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 4 4 4 4 4 2 2 2 2 . . 
            . . 2 4 4 4 5 5 5 4 4 4 4 4 2 . 
            . . 4 4 5 4 5 5 5 4 4 4 4 4 2 . 
            . 2 4 5 5 4 4 4 4 4 5 5 5 4 2 . 
            2 4 5 5 5 4 4 4 4 4 4 5 5 4 4 2 
            2 4 4 4 4 4 4 4 4 4 4 5 5 4 4 2 
            2 4 5 5 4 4 4 4 4 4 4 4 4 4 4 2 
            . 2 5 5 5 4 4 4 4 4 4 4 5 5 2 . 
            . 2 4 5 4 4 4 4 4 4 4 4 5 5 2 . 
            . . 2 4 4 4 4 5 5 5 4 4 5 4 2 . 
            . . . 2 2 4 4 5 5 4 4 4 4 2 2 . 
            . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
            . . . 2 2 4 4 4 4 4 4 2 2 . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            `, wizard, 0, 200)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "down"
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (activeSpell == "lightning") {
        monsterMaker(1, 1)
        sprites.destroy(otherSprite)
        info.changeScoreBy(5)
    } else if (activeSpell == "fireball") {
        monsterMaker(1, 1)
        sprites.destroy(otherSprite)
        sprites.destroy(sprite)
        info.changeScoreBy(5)
    } else if (activeSpell == "exploder") {
        monsterMaker(1, 1)
        sprites.destroy(otherSprite)
        explosion = sprites.createProjectileFromSprite(img`
            ..33........................44..
            ..3333....................4444..
            ..3333....................4444..
            ..33dd33.....4444....44444dd44..
            ..33dd33.....4444....44444dd44..
            ....33553344455554444ddddd4444..
            ....33553344455554444ddddd4444..
            ....33dd55ddd1111dd55555dd4444..
            ....33dd55ddd1111dd55555dd4444..
            ....44555511111111155111115544..
            ....44555511111111155111115544..
            ..445555555551111551111111dd4444
            ..445555555551111551111111dd4444
            ..44dd55111115555551111111555544
            ..44dd55111115555551111111555544
            ..4444551111155555555555dd555544
            ..4444551111155555555555dd555544
            ..4444551111155555555555dd555544
            ....4433dd5555555dd55555dddddd44
            ....4433dd5555555dd55555dddddd44
            ..445555dd5555555ddddddd555544..
            ..445555dd5555555ddddddd555544..
            ..445555dd33355dddd33ddd555544..
            ..445555dd33355dddd33ddd555544..
            ..4444dddd444dddddd44333dddd44..
            ..4444dddd444dddddd44333dddd44..
            ....445544444444444444444444....
            ....445544444444444444444444....
            ..445544.....444444.......4444..
            ..445544.....444444.......4444..
            ..4444......................4444
            ..4444......................4444
            `, sprite, 0, 0)
        sprites.destroy(sprite)
        info.changeScoreBy(5)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
    monsterMaker(1, 1)
})
let explosion: Sprite = null
let projectile: Sprite = null
let monster: Sprite = null
let monsters: Sprite[] = []
let exploderCooldown = false
let level = 0
let exploderUnlocked = false
let lightningBoltUnlocked = false
let activeSpell = ""
let wizard: Sprite = null
let lightning2: Sprite = null
let lightningCooldown = false
let facing = ""
setupGame(1)
monsterMaker(5, 1)
info.startCountdown(10)
info.setLife(3)
game.onUpdateInterval(2000, function () {
    if (exploderCooldown) {
        exploderCooldown = false
    }
})
game.onUpdateInterval(1500, function () {
    sprites.destroy(explosion)
})
forever(function () {
    if (facing == "right") {
        wizard.setImage(img`
            . . . . . . . c c . . . . . . . 
            . . . . . . . c b c . . . . . . 
            . . . . c c c 2 2 2 c c . . . . 
            . . c c b c 2 2 2 2 c c c c . . 
            . c b b 4 b 4 4 4 4 b 4 b b c . 
            . c b 4 4 b b 4 4 b b 4 4 b c . 
            . . f 4 4 4 b b b b 4 4 4 c . . 
            . . f f 4 4 4 4 4 4 4 4 f . . . 
            . . f f e e b f e e e f . . . . 
            . . f f f b 1 f b b e f . . . . 
            . . . f f b b b b b b f . . . . 
            . . . e e f e e e e f . . . . . 
            . . . e b b e b b 4 f . . . . . 
            . . . e b b e 4 4 4 4 f . . . . 
            . . . . e e 4 4 4 4 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `)
    } else if (facing == "left") {
        wizard.setImage(img`
            . . . . . . . c c . . . . . . . 
            . . . . . . c 2 c . . . . . . . 
            . . . . c c 2 2 2 c c c . . . . 
            . . c c c c 2 2 2 2 c b c c . . 
            . c b b 4 b 4 4 4 4 b 4 b b c . 
            . c b 4 4 b b 4 4 b b 4 4 b c . 
            . . c 4 4 4 b b b b 4 4 4 f . . 
            . . . f 4 4 4 4 4 4 4 4 f f . . 
            . . . . f e e e f b e e f f . . 
            . . . . f e b b f 1 b f f f . . 
            . . . . f b b b b b b f f . . . 
            . . . . . f e e e e f e e . . . 
            . . . . . f 4 b b e b b e . . . 
            . . . . f 4 4 4 4 e b b e . . . 
            . . . . c b 4 4 4 4 e e . . . . 
            . . . . . f f f f f f . . . . . 
            `)
    } else if (facing == "up") {
        wizard.setImage(img`
            . . . . . . c c c . . . . . . . 
            . . . . . . c 2 b c . . . . . . 
            . . . . c c c 2 2 c c c . . . . 
            . . c c c c 2 2 2 2 c b c c . . 
            . c b b 4 b 4 4 4 4 b 4 b b c . 
            . c b 4 4 b b 4 4 b b 4 4 b c . 
            . . c 4 4 4 b b b b 4 4 4 f . . 
            . . f f 4 4 4 4 4 4 4 4 f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . e e f f f f f f f e . . . 
            . . e b f b 4 b b 4 b c b e . . 
            . . e e f 4 4 4 4 4 4 f e e . . 
            . . . . c b 4 4 4 4 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `)
    } else if (facing == "down") {
        wizard.setImage(img`
            . . . . . . . c c c . . . . . . 
            . . . . . . c b 2 c . . . . . . 
            . . . . c c c 2 2 c c c . . . . 
            . . c c b c 2 2 2 2 c c c c . . 
            . c b b 4 b 4 4 4 4 b 4 b b c . 
            . c b 4 4 b b 4 4 b b 4 4 b c . 
            . . f 4 4 4 b b b b 4 4 4 c . . 
            . . f f 4 4 4 4 4 4 4 4 f f . . 
            . . f f f b f e e f b f f f . . 
            . . f f f 1 f b b f 1 f f f . . 
            . . . f f b b b b b b f f . . . 
            . . . e e f e e e e f e e . . . 
            . . e b c b 4 b b 4 b f b e . . 
            . . e e f 4 4 4 4 4 4 f e e . . 
            . . . . c b 4 4 4 4 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `)
    }
})
