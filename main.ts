controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (codys_hight.vy == 0) {
        codys_hight.vy = -125
    }
})
let codys_hight: Sprite = null
scene.setBackgroundColor(9)
codys_hight = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f f f f 
    . . . . . . . . . . . . f f 5 f 
    . . . . . . . . . . . . f f f f 
    . . . . . . . . . . . . f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . f f . . . . . . f f . . . . . 
    . f f . . . . . . f f . . . . . 
    . f f . . . . . . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(codys_hight, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
codys_hight.ay = 200
scene.cameraFollowSprite(codys_hight)
