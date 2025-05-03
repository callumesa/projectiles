controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "up"
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
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
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "left"
})
info.onCountdownEnd(function () {
    for (let value of monsters) {
        sprites.destroy(value)
    }
})
function setupGame () {
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
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "right"
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "down"
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    monsterMaker(1, 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
    monsterMaker(1, 1)
})
let monster: Sprite = null
let monsters: Sprite[] = []
let wizard: Sprite = null
let projectile: Sprite = null
let facing = ""
setupGame()
monsterMaker(5, 1)
info.startCountdown(10)
info.setLife(3)
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
