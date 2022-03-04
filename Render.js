class RenderAll {
    constructor(image) {
        // super()
        this.image = image;
        // this.width = +width
        // this.height = +heigth
        // this.posX = posX;
        // this.posY = posY;
    }
    renderAll(image, playerImg) {
        this.renderBackground(image)
        this.renderPlayer(playerImg)
    }

    renderBackground(image) {
        if (this.PosX == document.querySelector('body').clientWidth) {
            document.querySelector('.gameWindow').src = lvl[1]
        }
        else {
            let gameWind = document.querySelector('.gameWindow');
            let backFone = document.createElement('img');
            gameWind.appendChild(backFone).src = image;
        }

    }

    renderPlayer(playerImg) {
        document.querySelector('.player img').src = playerImg
    }

}






















  // moveSteps() {
    //     document.onkeyup = (e) => {
    //         if (e.key == 'd') {
    //             document.querySelector('.player img').style.transform = `scaleX(1)`; // turn
    //             this.posX += playerSpeed;
    //             document.querySelector('.player').style.left = `${this.posX}px`;
    //             let beginrigth = setInterval(function () {
    //                 slideLine++;
    //                 document.querySelector('.player img').src = manMove[slideLine];
    //                 if (slideLine == 3) {
    //                     slideLine = 0;
    //                     clearInterval(beginrigth)
    //                 }
    //             }, 100)
    //             // document.querySelector('.player img').src = manMove[slodeLine];
    //         }
    //         else if (e.key == 'a') {
    //             document.querySelector('.player img').style.transform = `scaleX(-1)`; // turn
    //             this.posX -= playerSpeed;
    //             document.querySelector('.player').style.left = `${this.posX}px`;
    //             let beginLeft = setInterval(function () {
    //                 slideLine++;
    //                 document.querySelector('.player img').src = manMove[slideLine];
    //                 if (slideLine == 3) {
    //                     slideLine = 0;
    //                     clearInterval(beginLeft)
    //                 }
    //             }, 100)
    //             // document.querySelector('.player img').src = manMove[0];
    //         }

    //     }

    // }



            // else if (e.key == 'w') {
            //     for (let i = jumpSpeed; i <= jumpMax; i = i + 10) {
            //         console.log(i)
            //         this.posY = i;
            //         document.querySelector('.player').style.bottom = `${this.posY}px`;
            //         if (i == jumpMax) {
            //             for (let k = i; k >= 0; k = k - 10) {
            //                 console.log(k)
            //                 this.posY = k;
            //                 document.querySelector('.player').style.bottom = `${this.posY}px`;
            //             }
            //         }

            //     }
            // }



            //     if (e.key == 'w') {
            //         let currentPlayer = document.querySelector('.player')
            //         let _up = setInterval(() => {
            //             if (jumpSpeed < jumpMax) {
            //                 if (jumpSpeed / 10 == Math.trunc(jumpSpeed / 10)) {
            //                     slideLine++;
            //                 }
            //                 jumpSpeed += 2;
            //                 this.posY = jumpSpeed;
            //                 currentPlayer.style.bottom = `${this.posY}px`
            //                 document.querySelector('.player img').src = manJump[slideLine];
            //                 if (slideLine == manJump.length - 1) {
            //                     slideLine = 0;
            //                 }
            //             }
            //             else if (jumpSpeed == jumpMax) {
            //                 let _down = setInterval(() => {
            //                     if (jumpSpeed !== 0) {
            //                         document.querySelector('.player img').src = manJump[slideLine];
            //                         jumpSpeed -= 2;
            //                         this.posY = jumpSpeed;
            //                         currentPlayer.style.bottom = `${this.posY}px`;
            //                     }
            //                     else if (jumpSpeed == 0) {
            //                         document.querySelector('.player img').src = './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_009.png';
            //                         slideLine = 0;
            //                         clearInterval(_down)
            //                     }
            //                     clearInterval(_up)
            //                 }, 10);
            //             }
            //         }, 10);
            //         console.log('cicle stop')
            //         slideLine = 0;
            //     }
            //     console.log(e.key)

            //     if (e.key == 'd') {
            //         document.querySelector('.player img').style.transform = `scaleX(1)`; // turn
            //         slideLine++;
            //         this.posX += playerSpeed;
            //         document.querySelector('.player').style.left = `${this.posX}px`;
            //         document.querySelector('.player img').src = manMove[slideLine];
            //         if (slideLine == manMove.length - 1) {
            //             slideLine = 0;
            //         }
            //     }

            //     else if (e.key == 'a') {
            //         document.querySelector('.player img').style.transform = `scaleX(-1)`; // turn
            //         slideLine++;
            //         this.posX -= playerSpeed;
            //         document.querySelector('.player').style.left = `${this.posX}px`;
            //         document.querySelector('.player img').src = manMove[slideLine];
            //         if (slideLine == manMove.length - 1) {
            //             slideLine = 0;
            //         }
            //     }
            // }
            // document.onkeyup = (e) => {
            //     if (e.key == 'd') {
            //         document.querySelector('.player img').style.transform = `scaleX(1)`; // turn
            //         this.posX += playerSpeed;
            //         document.querySelector('.player').style.left = `${this.posX}px`;
            //         let beginrigth = setInterval(function () {
            //             slideLine++;
            //             document.querySelector('.player img').src = manMove[slideLine];
            //             if (slideLine == 3) {
            //                 slideLine = 0;
            //                 clearInterval(beginrigth)
            //             }
            //         }, 100)
            //         // document.querySelector('.player img').src = manMove[slodeLine];
            //     }
            //     else if (e.key == 'a') {
            //         document.querySelector('.player img').style.transform = `scaleX(-1)`; // turn
            //         this.posX -= playerSpeed;
            //         document.querySelector('.player').style.left = `${this.posX}px`;
            //         let beginLeft = setInterval(function () {
            //             slideLine++;
            //             document.querySelector('.player img').src = manMove[slideLine];
            //             if (slideLine == 3) {
            //                 slideLine = 0;
            //                 clearInterval(beginLeft)
            //             }
            //         }, 100)
            //         // document.querySelector('.player img').src = manMove[0];
            //     }


    // run() {
    //     document.onkeydown = (e) => {
    //         console.log(e.key)

    //         if (e.key == 'd') {
    //             document.querySelector('.player img').style.transform = `scaleX(1)`; // turn
    //             slideLine++;
    //             this.posX += playerSpeed;
    //             document.querySelector('.player').style.left = `${this.posX}px`;
    //             document.querySelector('.player img').src = manMove[slideLine];
    //             if (slideLine == manMove.length - 1) {
    //                 slideLine = 0;
    //             }
    //         }

    //         else if (e.key == 'a') {
    //             document.querySelector('.player img').style.transform = `scaleX(-1)`; // turn
    //             slideLine++;
    //             this.posX -= playerSpeed;
    //             document.querySelector('.player').style.left = `${this.posX}px`;
    //             document.querySelector('.player img').src = manMove[slideLine];
    //             if (slideLine == manMove.length - 1) {
    //                 slideLine = 0;
    //             }
    //         }
    //     }

    // }

