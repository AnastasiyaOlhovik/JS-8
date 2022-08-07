import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const TIME = "videoplayer-current-time";


player.on('timeupdate', throttle(function (data) {
    localStorage.setItem(TIME, data.seconds.toString())
}, 1000));

player.setCurrentTime(localStorage.getItem(TIME));