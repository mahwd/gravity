var container = document.createElement('div');
var plain = document.createElement('div');
var ball = document.createElement('div');
var touch = 1; // touch
container.style.position = 'relative';
container.style.width = '700px';
container.style.height = '400px';
container.style.left = '350px';
container.style.top = '150px';
container.style.background = 'rgba(69, 221, 161, 0.51)';
ball.style.position = 'absolute';
ball.style.width = '20px';
ball.style.borderRadius = '50%';
ball.style.height = '20px';
ball.style.left = '50%';
ball.style.top = 0;
ball.style.background = 'rgb(240, 173, 0)';
plain.style.position = 'absolute';
plain.style.width = '700px';
plain.style.height = '1px';
plain.style.left = '0';
plain.style.top = '300px';
plain.style.background = '#000';
container.appendChild(ball);
container.appendChild(plain);
document.body.appendChild(container);
fall(ball);

function fall(arg) {
    v = 0;
    pos = parseFloat(arg.style.top);
    hg = parseFloat(arg.style.height);
    ground = parseFloat(plain.style.top);
    k = setInterval(function() {
        var t = 0;
        arg.style.height = '20px';
        t++;
        v++;
        acc = v / (t * 70);
        if ((pos + hg) >= ground) {
            clearInterval(k);
            console.log('fall');
            arg.style.height = '17.3px';
            touch += 0.4;
            fly(arg);
        } else {
            pos = pos + acc;
            arg.style.top = pos + 'px';
        }
    }, 1);
}

function fly(arg) {
    arg.style.height = '20px';
    pos = parseFloat(arg.style.top);
    hg = parseFloat(arg.style.height);
    ground = parseFloat(plain.style.top);
    k = setInterval(function() {
        var t = 0;
        t++;
        v--;
        acc = v / (t * 60);
        if (v <= 0) {
            if (v == 0 && acc == 0 && parseInt(plain.style.top) - parseInt(ball.style.height) == parseInt(pos)) {
                clearInterval(k);
            } else {
                clearInterval(k);
                console.log('fly');
                // arg.style.height = '17.3px';
                fall(arg);
            }
        } else {
            pos = pos - acc / touch;
            arg.style.top = pos + 'px';
        }
    }, 1);
}

// var canv = document.getElementById('bounce');
// var ctx = canv.getContext('2d');
// ctx.fill();
// ctx.beginPath();
// ctx.fillRect(300, 150, 20, 20);
