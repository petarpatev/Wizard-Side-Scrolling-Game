function start(state, elements) {
    elements.createWizard(state.player);
    window.requestAnimationFrame(gameAction.bind(null, state, elements));
}

function gameAction(state, elements, timestamp) {

    cloudCreation(state, elements, timestamp);
    cloudMovement(state);

    bugsCreation(state, elements, timestamp);
    bugsMovement(state);

    wizardMovement(state, elements, timestamp);

    fireballMovement(state, elements);


    //score logic
    state.game.score++;
    elements.scoreScreen.textContent = `${state.game.score} pts`;

    window.requestAnimationFrame(gameAction.bind(null, state, elements));
}

function wizardMovement(state, elements, timestamp) {

    const wizardElement = document.querySelector('.wizard');

    //apply gravitation
    let isInAir = (state.player.posY + state.player.height) < elements.gameScreen.offsetHeight;
    if (isInAir) {
        state.player.posY += state.game.speed;
    }

    //fireball creation
    if (state.keys.Space && timestamp - state.player.lastSpawnFireball > state.game.fireballSpawnInterval) {
        wizardElement.classList.add('wizard-fire');
        fireballCreation(state, elements);
        state.player.lastSpawnFireball = timestamp;
    } else {
        wizardElement.classList.remove('wizard-fire');
    }

    //wizard movement logic
    if (state.keys.ArrowUp) {
        state.player.posY = Math.max(state.player.posY - state.game.speed * state.game.speedMultiplier, 0);
    }

    if (state.keys.ArrowDown) {
        state.player.posY = Math.min(state.player.posY + state.game.speed * state.game.speedMultiplier, elements.gameScreen.offsetHeight - state.player.height);
    }

    if (state.keys.ArrowLeft) {
        state.player.posX = Math.max(state.player.posX - state.game.speed * state.game.speedMultiplier, 0);
    }

    if (state.keys.ArrowRight) {
        state.player.posX = Math.min(state.player.posX + state.game.speed * state.game.speedMultiplier, elements.gameScreen.offsetWidth - state.player.width);
    }

    //apply new coordinates to wizard element
    wizardElement.style.top = state.player.posY + 'px';
    wizardElement.style.left = state.player.posX + 'px';
}

function bugsCreation(state, elements, timestamp) {
    if (timestamp - state.game.lastSpawnBug > state.game.bugSpawnInterval + 10000 * Math.random()) {
        const bugElement = document.createElement('div');
        bugElement.classList.add('bug');

        bugElement.posX = elements.gameScreen.offsetWidth - 30;
        bugElement.style.left = bugElement.posX + 'px';
        bugElement.style.top = (elements.gameScreen.offsetHeight - 30) * Math.random() + 'px';

        elements.gameScreen.appendChild(bugElement);

        state.game.lastSpawnBug = timestamp;
    }
}

function bugsMovement(state) {
    let bugs = document.querySelectorAll('.bug');
    bugs.forEach(bug => {
        bug.posX -= state.game.speed * state.game.bugSpeedMultiplier;
        bug.style.left = bug.posX + 'px';
        if (bug.posX <= 0) {
            bug.remove();
        }
    })
}

function cloudCreation(state, elements, timestamp) {
    if (timestamp - state.game.lastSpawnCloud > state.game.cloudSpawnInterval + 20000 * Math.random()) {
        const cloudElement = document.createElement('div');
        cloudElement.classList.add('cloud');

        cloudElement.posX = elements.gameScreen.offsetWidth - 200;
        cloudElement.style.left = cloudElement.posX + 'px';
        cloudElement.style.top = (elements.gameScreen.offsetHeight - 200) * Math.random() + 'px';

        elements.gameScreen.appendChild(cloudElement);

        state.game.lastSpawnCloud = timestamp;
    }
}

function cloudMovement(state) {
    let clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        cloud.posX -= state.game.speed;
        cloud.style.left = cloud.posX + 'px';
        if (cloud.posX <= 0) {
            cloud.remove();
        }
    })
}

function fireballCreation(state, elements) {
    const fireballElement = document.createElement('div');
    fireballElement.classList.add('fireball');

    fireballElement.posX = state.player.posX + state.player.width;

    fireballElement.style.top = state.player.posY + state.player.height / 3 + 'px';
    fireballElement.style.left = fireballElement.posX + 'px';

    elements.gameScreen.appendChild(fireballElement);
}

function fireballMovement(state, elements) {
    let fireballs = document.querySelectorAll('.fireball');
    fireballs.forEach(fireball => {
        if (fireball.posX + fireball.offsetWidth <= elements.gameScreen.offsetWidth) {
            fireball.posX += state.game.speed * state.game.fireballSpeedMultiplier;
            fireball.style.left = fireball.posX + 'px';
        } else {
            fireball.remove();
        }
    })

}