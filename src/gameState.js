function initState() {
    const state = {
        player: {
            width: 82,
            height: 100,
            posX: 200,
            posY: 200,
            lastSpawnFireball: 0
        },
        keys: {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false,
            Space: false
        },
        game: {
            isActiveGame: true,
            bugKillBonus: 500,
            speed: 2,
            fireballSpeedMultiplier: 4,
            speedMultiplier: 5,
            bugSpeedMultiplier: 4,
            score: 0,
            fireballSpawnInterval: 1000,
            cloudSpawnInterval: 2000,
            bugSpawnInterval: 1500,
            lastSpawnCloud: 0,
            lastSpawnBug: 0
        }
    };

    return state;
}