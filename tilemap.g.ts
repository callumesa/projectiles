// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`15001500020202020202020202020202020202020202020202020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020101010101010101010101010101010101010102020202020202020202020202020202020202020202`, img`
222222222222222222222
2...................2
2...................2
2...................2
2...................2
2...................2
2...................2
2...................2
2...................2
2...................2
2...................2
2...................2
2...................2
2...................2
2...................2
2...................2
2...................2
2...................2
2...................2
2...................2
222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0e000e0001010101010101010101010101010102020202020202020202020201010202020202020202020202020101020203020202020204020202010102020202020202020202020201010202050202020202060202020101020202020202020202020202010102020202020202020202020201010202020202020202020202020101020202020202020202020202010102020202020202020202020201010202020202020202020202020101020202020202020202020202010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 
2 . . 2 . . . . . 2 . . . 2 
2 . . . . . . . . . . . . 2 
2 . . 2 . . . . . 2 . . . 2 
2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5], TileScale.Sixteen);
            case "level0":
            case "level3":return tiles.createTilemap(hex`0e000e0001010101010101010101010101010102020202020202020202020201010202020202020202020202020101020203020202020204020202010102020202020202020202020201010202050202020202060202020101020202020202020202020202010102020202020202020202020201010202020202020202020202020101020202020202020202020202010102020202020202020202020201010202020202020202020202020101020202020202020202020202010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 
2 . . 2 . . . . . 2 . . . 2 
2 . . . . . . . . . . . . 2 
2 . . 2 . . . . . 2 . . . 2 
2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile2":
            case "tile4":return tile4;
            case "boomChest":
            case "tile1":return tile1;
            case "LightningChest":
            case "tile2":return tile2;
            case "boomSign0":
            case "tile3":return tile3;
            case "lightningSign":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
