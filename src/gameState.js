function initState() {
    const state = {
        player: {
            width: 82,
            height: 100,
            posX: 200,
            posY: 200
        },
        keys: {

        },
        game: {
            speed: 2,
            speedMultiplier: 5,
            score: 0
        }
    };

    return state;
}