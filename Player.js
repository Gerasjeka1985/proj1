class Player {
    constructor(width, heigth, posX, posY) {
        this.width = +width
        this.height = +heigth
        this.posX = posX;
        this.posY = posY;
    }

    createPlayer() {
        let playerDiv = document.createElement('div');
        let playerImg = document.createElement('img');
        playerDiv.classList.add('player');
        playerDiv.style.width = `${this.width}px`;
        playerDiv.style.height = `${this.height}px`;
        playerDiv.style.bottom = `${this.posY}px`;
        playerDiv.style.left = `${this.posX}px`;
        document.querySelector('.gameWindow').appendChild(playerDiv);
        playerDiv.appendChild(playerImg);
    }

    createBullet() {
        console.log(this.posX);
        let bulletDiv = document.createElement('div');
        let bulletImg = document.createElement('img');
        document.querySelector('.player').appendChild(bulletDiv);
        bulletDiv.classList.add('bullet');
        bulletImg.classList.add('bulletImg');
        bulletDiv.style.bottom = `${document.querySelector('.player').clientHeight - 100}px`;
        bulletDiv.style.left = `${document.querySelector('.player').clientWidth - 100}px`;
        bulletDiv.appendChild(bulletImg);
        this.bulletAnimate(0, (firePlayer.length - 1), firePlayer, 110);
    }

    animate(frameStart, frameEnd, collect, time) {
        let anim = setInterval(function () {
            frameStart++;
            document.querySelector('.player img').src = collect[frameStart];
            if (frameStart == frameEnd) {
                frameStart = 0;
                clearInterval(anim)
            }
        }, time)
    }

    bulletAnimate(frameStart, frameEnd, collect, time) {
        let audi = document.createElement('audio');
        audi.src = './sound/singleFire.wav';
        document.querySelector('.gameWindow').appendChild(audi);
        audi.setAttribute("autoplay", "true");

        let bulletAnimate = setInterval(function () {
            document.querySelector('.bulletImg').src = collect[frameStart];
            frameStart++;
            if (frameStart > frameEnd) {
                frameStart = 0;
                document.querySelector('.bullet').remove()
                clearInterval(bulletAnimate)
            }
        }, time)

    }


    move() {
        document.onkeyup = (e) => {
            console.log(e)
            if (e.key == 'd') {
                document.querySelector('.player img').style.transform = `scaleX(1)`;
                this.posX += playerSpeed;
                document.querySelector('.player').style.left = `${this.posX}px`;
                this.animate(0, (manStep.length - 1), manStep, 100)
            }
            else if (e.key == 'a') {
                document.querySelector('.player img').style.transform = `scaleX(-1)`; // turn
                this.posX -= playerSpeed;
                document.querySelector('.player').style.left = `${this.posX}px`;
                this.animate(0, (manStep.length - 1), manStep, 100)
            }
            else if (e.key == 'w') {
                this.animate(0, (manJump.length - 1), manJump, 50);
                let jumpAnim = setInterval(function () {
                    jumpSpeed += 7;
                    document.querySelector('.player img').style.bottom = `${jumpSpeed}px`;
                    if (jumpSpeed > 160) {
                        let downAnim = setInterval(function () {
                            jumpSpeed -= 6;
                            document.querySelector('.player img').style.bottom = `${jumpSpeed}px`;
                            if (jumpSpeed <= 0) {
                                clearInterval(downAnim);
                                clearInterval(jumpAnim);
                            }
                        })
                    }
                }, 10)
            }
            else if (e.key == ' ') {
                this.createBullet();
            }


            document.onkeydown = (e) => {
                if (e.key == 'd') {
                    document.querySelector('.player img').style.transform = `scaleX(1)`;
                    this.posX += playerSpeed;
                    document.querySelector('.player').style.left = `${this.posX}px`;
                    document.querySelector('.player img').src = manMove[runCheckframe];
                    runCheckframe++;
                    if (runCheckframe == manMove.length - 1) {
                        runCheckframe = 0;
                    }
                }
                else if (e.key == 'a') {
                    document.querySelector('.player img').style.transform = `scaleX(-1)`;
                    this.posX -= playerSpeed;
                    document.querySelector('.player').style.left = `${this.posX}px`;
                    document.querySelector('.player img').src = manMove[runCheckframe];
                    runCheckframe++;
                    if (runCheckframe == manMove.length - 1) {
                        runCheckframe = 0;
                    }
                }
            }
        }
    }
}
