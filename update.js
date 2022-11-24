function UPDATE()
{
    update = setInterval(UPDATE, 60);
}
function DRAW()
{
    window.addEventListener('keydown', function (e) {
        keys.keys = (keys.keys || []);
        keys.keys[e.keyCode] = true;
    });
    window.addEventListener('keyup', function (e){
        keys.keys[e.keyCode] = false;
    });
}
