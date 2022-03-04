setTimeout(function () {
    let audi2 = document.createElement('audio');
    audi2.src = './sound/mainTheme.mp3';
    document.querySelector('.gameWindow').appendChild(audi2);
    audi2.setAttribute("autoplay", "true");
    audi2.volume = 0.4
}, 5000)


let manStep = [
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_009.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_010.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_011.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_012.png',
]
let manMove = [
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_013.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_014.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_015.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_016.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_017.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_018.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_019.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_020.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_021.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_022.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_023.png',
]

let manJump = [
    './images/manMove/cut_images_yzW8ZcmyhK/movejump/image_part_002.png',
    './images/manMove/cut_images_yzW8ZcmyhK/movejump/image_part_003.png',
    './images/manMove/cut_images_yzW8ZcmyhK/movejump/image_part_004.png',
    './images/manMove/cut_images_yzW8ZcmyhK/movejump/image_part_005.png',
    './images/manMove/cut_images_yzW8ZcmyhK/movejump/image_part_006.png',
    './images/manMove/cut_images_yzW8ZcmyhK/movejump/image_part_007.png',
    './images/manMove/cut_images_yzW8ZcmyhK/movejump/image_part_008.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_009.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_010.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_011.png',
    './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_012.png',
]

const firePlayer = [
    './images/fireGun/cutFire/fire/image_part_001.png',
    './images/fireGun/cutFire/fire/image_part_002.png',
    './images/fireGun/cutFire/fire/image_part_003.png',
]

const lvl = [
    './images/lvlCut/image_part_001.png',
    './images/lvlCut/image_part_002.png',
    './images/lvlCut/image_part_003.png',
    './images/lvlCut/image_part_004.png',
]




const char = new Player(220, 220, playerPosX, playerPosY);
const draw = new RenderAll('./images/manMove/image_part_001.jpg');


char.createPlayer();
draw.renderAll('./images/lvlCut/image_part_001.png', './images/manMove/cut_images_yzW8ZcmyhK/runmove/image_part_009.png');
char.move();













