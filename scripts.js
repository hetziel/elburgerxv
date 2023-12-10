// https://www.youtube.com/watch?v=8fCig63r8sY
let miniaturas = [
    'https://www.youtube.com/watch?v=gMO-UOrTWjY',
    'https://www.youtube.com/watch?v=9Dp2XTP01ns',
    'https://www.youtube.com/watch?v=8fCig63r8sY',
    'https://www.youtube.com/watch?v=vSMg5a7JCg0',
    'https://www.youtube.com/watch?v=c9xg8UYhSS0',
    'https://www.youtube.com/watch?v=EN6l4m765YM',
    'https://www.youtube.com/watch?v=TYwBJxEglqc',
    'https://www.youtube.com/watch?v=SBK6VYhoCkg',
    'https://www.youtube.com/watch?v=VVIgS48jAPU',
    'https://www.youtube.com/watch?v=S4WOvhyX7jk',
    'https://www.youtube.com/watch?v=ln2wl12vBp4',
    'https://www.youtube.com/watch?v=XningNQP_4g',
    'https://www.youtube.com/watch?v=619fBDBHmvo',
    'https://www.youtube.com/watch?v=YPH_BNV14xg',
    'https://www.youtube.com/watch?v=4BlJk1ba5HM',
    'https://www.youtube.com/watch?v=BY_mQuMDfnk',
    'https://www.youtube.com/watch?v=OBP6YrADnEg',
    'https://www.youtube.com/watch?v=eFJG9JVpQKY',
    'https://www.youtube.com/watch?v=zXgf4hplBFM',
    'https://www.youtube.com/watch?v=ow2Fe5N2wFE',
]

const regex = /[?&]v=([^&]+)/;
imgs = [];
background = document.querySelector(".img-background");

miniaturas.forEach((element, index) => {
    const match = element.match(regex);
    imgs[index] = '<img src="https://i.ytimg.com/vi/' + match[1] + '/hqdefault.jpg">'
});

background.innerHTML = imgs.join("");