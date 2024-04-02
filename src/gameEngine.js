function start(state, elements) {
    window.requestAnimationFrame(gameAction.bind(null, state, elements));
}

function gameAction() {
    window.requestAnimationFrame(gameAction.bind(null, state, elements));
}