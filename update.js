function Update()
{
    update = setInterval(Update, 50);
}
function AddGame()
{
    window.addEventListener('keydown', function (e) {
        keys.keys = (keys.keys || []);
        keys.keys[e.keyCode] = true;
    });
    window.addEventListener('keyup', function (e){
        keys.keys[e.keyCode] = false;
    });
}
