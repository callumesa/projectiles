def on_up_pressed():
    global facing
    facing = "up"
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_b_pressed():
    if activeSpell == "fireball":
        fireball()
    elif activeSpell == "lightning":
        lightning2(1, 1)
    elif activeSpell == "exploder":
        exploder()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    global lightningBoltUnlocked, exploderUnlocked, activeSpell
    if wizard.tile_kind_at(TileDirection.TOP,
        assets.tile("""
            lightningSign
            """)):
        game.splash("Lightning Bolt!",
            "Pierces Enemies, But has a short cooldown")
    elif wizard.tile_kind_at(TileDirection.TOP,
        assets.tile("""
            LightningChest
            """)):
        game.splash("Lightning Bolt Unlocked!", "Press A To Switch Spells")
        lightningBoltUnlocked = True
        level2(3)
    elif wizard.tile_kind_at(TileDirection.TOP, assets.tile("""
        boomSign0
        """)):
        game.splash("Exploder!", "Damages all monsters near target")
        game.splash("But has a long cooldown")
    elif wizard.tile_kind_at(TileDirection.TOP, assets.tile("""
        boomChest
        """)):
        game.splash("Exploder Unlocked!", "Press A To Switch Spells")
        exploderUnlocked = True
        level2(3)
    elif lightningBoltUnlocked and activeSpell == "fireball":
        activeSpell = "lightning"
    elif lightningBoltUnlocked and activeSpell == "lightning":
        activeSpell = "fireball"
    elif exploderUnlocked and activeSpell == "fireball":
        activeSpell = "exploder"
    elif exploderUnlocked and activeSpell == "exploder":
        activeSpell = "fireball"
    elif wizard.tile_kind_at(TileDirection.TOP, assets.tile("""
        Sign1
        """)):
        game.splash("")
    elif wizard.tile_kind_at(TileDirection.TOP, assets.tile("""
        myTile
        """)):
        pass
    elif wizard.tile_kind_at(TileDirection.TOP, assets.tile("""
        Sign2
        """)):
        game.splash("Pick Your Poison!")
    else:
        pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    global facing
    facing = "left"
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_countdown_end():
    global lightningCooldown, exploderCooldown
    if level == 1:
        level2(2)
    elif level == 3:
        level2(3)
    elif level == 4 and lightningBoltUnlocked:
        lightningCooldown = False
    elif level == 4 and exploderUnlocked:
        exploderCooldown = False
info.on_countdown_end(on_countdown_end)

def level2(num: number):
    global level
    if num == 2:
        for value in monsters:
            sprites.destroy(value)
        tiles.set_current_tilemap(tilemap("""
            level2
            """))
        tiles.place_on_tile(wizard, tiles.get_tile_location(5, 10))
        level = 2
    elif num == 3:
        for value2 in monsters:
            sprites.destroy(value2)
        setupGame(2)
        monsterMaker(5, 1)
        level = 4
    elif num == 4:
        for value3 in monsters:
            sprites.destroy(value3)
        tiles.place_on_tile(wizard, tiles.get_tile_location(6, 7))
        tiles.set_current_tilemap(tilemap("""
            level4
            """))
        level = 5
def setupGame(num2: number):
    global wizard, monsters, inventory, activeSpell, lightningBoltUnlocked, exploderCooldown, level
    if 1 == num2:
        tiles.set_current_tilemap(tilemap("""
            level1
            """))
        wizard = sprites.create(img("""
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
                """),
            SpriteKind.player)
        controller.move_sprite(wizard)
        tiles.place_on_random_tile(wizard, sprites.dungeon.dark_ground_center)
        scene.camera_follow_sprite(wizard)
        monsters = []
        inventory = []
        activeSpell = "fireball"
        lightningBoltUnlocked = False
        exploderCooldown = False
        level = 1
    elif 2 == num2:
        tiles.set_current_tilemap(tilemap("""
            level1
            """))
        tiles.place_on_random_tile(wizard, sprites.dungeon.dark_ground_center)
def monsterMaker(num3: number, num22: number):
    global monster
    for index in range(num3):
        monster = sprites.create(img("""
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
                """),
            SpriteKind.enemy)
        tiles.place_on_random_tile(monster, sprites.dungeon.floor_light0)
        monster.follow(wizard, 50)
        monsters.append(monster)
def exploder():
    global projectile, exploderCooldown
    if exploderCooldown == False and facing == "right":
        projectile = sprites.create_projectile_from_sprite(img("""
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
                """),
            wizard,
            150,
            0)
        exploderCooldown = True
        info.start_countdown(2)
    elif exploderCooldown == False and facing == "left":
        projectile = sprites.create_projectile_from_sprite(img("""
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
                """),
            wizard,
            -150,
            0)
        exploderCooldown = True
        info.start_countdown(2)
    elif exploderCooldown == False and facing == "up":
        projectile = sprites.create_projectile_from_sprite(img("""
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
                """),
            wizard,
            0,
            -150)
        exploderCooldown = True
        info.start_countdown(2)
    elif exploderCooldown == False and facing == "down":
        projectile = sprites.create_projectile_from_sprite(img("""
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
                """),
            wizard,
            0,
            150)
        exploderCooldown = True
        info.start_countdown(2)

def on_right_pressed():
    global facing
    facing = "right"
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def fireball():
    global projectile
    if facing == "right":
        projectile = sprites.create_projectile_from_sprite(img("""
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
                """),
            wizard,
            200,
            0)
    elif facing == "left":
        projectile = sprites.create_projectile_from_sprite(img("""
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
                """),
            wizard,
            -200,
            0)
    elif facing == "up":
        projectile = sprites.create_projectile_from_sprite(img("""
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
                """),
            wizard,
            0,
            -200)
    elif facing == "down":
        projectile = sprites.create_projectile_from_sprite(img("""
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
                """),
            wizard,
            0,
            200)

def on_down_pressed():
    global facing
    facing = "down"
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def lightning2(num4: number, num23: number):
    global lightning, lightningCooldown
    if facing == "right" and lightningCooldown == False:
        lightning = sprites.create_projectile_from_sprite(img("""
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
                """),
            wizard,
            200,
            0)
        lightningCooldown = True
        info.start_countdown(1)
    elif facing == "left" and lightningCooldown == False:
        lightning = sprites.create_projectile_from_sprite(img("""
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
                """),
            wizard,
            -200,
            0)
        lightningCooldown = True
        info.start_countdown(1)
    elif facing == "up" and lightningCooldown == False:
        lightning = sprites.create_projectile_from_sprite(img("""
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
                """),
            wizard,
            0,
            -200)
        lightningCooldown = True
        info.start_countdown(1)
    elif facing == "down" and lightningCooldown == False:
        lightning = sprites.create_projectile_from_sprite(img("""
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
                """),
            wizard,
            0,
            200)
        lightningCooldown = True
        info.start_countdown(1)

def on_on_score():
    level2(4)
info.on_score(150, on_on_score)

def on_on_overlap(sprite, otherSprite):
    global explosion
    if activeSpell == "lightning":
        monsterMaker(1, 1)
        sprites.destroy(otherSprite)
        info.change_score_by(5)
    elif activeSpell == "fireball":
        monsterMaker(1, 1)
        sprites.destroy(otherSprite)
        sprites.destroy(sprite)
        info.change_score_by(5)
    elif activeSpell == "exploder":
        monsterMaker(1, 1)
        sprites.destroy(otherSprite)
        explosion = sprites.create_projectile_from_sprite(img("""
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
                """),
            sprite,
            0,
            0)
        sprites.destroy(sprite)
        info.change_score_by(5)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    info.change_life_by(-1)
    sprites.destroy(otherSprite2)
    monsterMaker(1, 1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

explosion: Sprite = None
lightning: Sprite = None
projectile: Sprite = None
monster: Sprite = None
inventory: List[number] = []
monsters: List[Sprite] = []
exploderCooldown = False
lightningCooldown = False
level = 0
exploderUnlocked = False
lightningBoltUnlocked = False
wizard: Sprite = None
activeSpell = ""
facing = ""
setupGame(1)
monsterMaker(5, 1)
info.start_countdown(10)
info.set_life(3)

def on_update_interval():
    global exploderCooldown
    if exploderCooldown:
        exploderCooldown = False
game.on_update_interval(2000, on_update_interval)

def on_update_interval2():
    sprites.destroy(explosion)
game.on_update_interval(1500, on_update_interval2)

def on_forever():
    if facing == "right":
        wizard.set_image(img("""
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
            """))
    elif facing == "left":
        wizard.set_image(img("""
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
            """))
    elif facing == "up":
        wizard.set_image(img("""
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
            """))
    elif facing == "down":
        wizard.set_image(img("""
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
            """))
forever(on_forever)
