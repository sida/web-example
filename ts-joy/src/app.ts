/// <reference path="../typings/index.d.ts" />
/// <reference path="../node_modules/@types/underscore/index.d.ts" />

import * as _ from 'underscore';


$(() => { h = setInterval(gameLoop, 100); });

//enum PAD_DIR { up, down, left, right, none };

// 横
var padDirV: number = 0;
// 縦
var padDirH: number = 0;

var x: number = 0;
var y: number = 0;

function analyzePad() {
    var pad: Gamepad;
    var gamepad_list = navigator.getGamepads();
    _.each(gamepad_list, (p) => {
        if (p!=null) {
            if (p.axes[0] > 0.8) {
                padDirV = 1;
            }
            else if (p.axes[0] < -0.8) {
                padDirV = -1;
            } else {
                padDirV = 0;
            }
            if (p.axes[1] > 0.8) {
                padDirH = 1;
            }
            else if (p.axes[1] < -0.8) {
                padDirH = -1;
            } else {
                padDirH = 0;
            }
        }
    });
}

var h;
function gameLoop() {
    analyzePad();
    x += padDirV * 8;
    y += padDirH * 8;
    console.log("x:" + x);
    console.log("y:" + y);
    $("#cat1").css("left",x);
    $("#cat1").css("top",y);
}
