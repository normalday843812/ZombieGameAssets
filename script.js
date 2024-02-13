  function start() {
    var rotator = document.getElementById('rotator');                      
    var delayInSeconds = 5;                            

    var images = [
        'https://raw.githubusercontent.com/normalday843812/zombiegameassets/master/1.gif',
        'https://raw.githubusercontent.com/normalday843812/zombiegameassets/master/Diamonds.gif',
        'https://raw.githubusercontent.com/normalday843812/zombiegameassets/master/Josh_hutcherson.gif',
        'https://raw.githubusercontent.com/normalday843812/zombiegameassets/master/MoveBall.gif',
        'https://raw.githubusercontent.com/normalday843812/zombiegameassets/master/Rick.gif',
        'https://raw.githubusercontent.com/normalday843812/zombiegameassets/master/Speaker.png',
        'https://raw.githubusercontent.com/normalday843812/zombiegameassets/master/Subway_surfers.gif',
        'https://raw.githubusercontent.com/normalday843812/zombiegameassets/master/Xi.gif',
        'https://raw.githubusercontent.com/normalday843812/zombiegameassets/master/dance.gif',
        'https://raw.githubusercontent.com/normalday843812/zombiegameassets/master/fiverr.png',
        'https://raw.githubusercontent.com/normalday843812/zombiegameassets/master/fortnite.jpeg',
        'https://raw.githubusercontent.com/normalday843812/zombiegameassets/master/stack.gif',
      ]

    var num = 0;
    var changeImage = function() {
        var len = images.length;
        rotator.src = images[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, delayInSeconds * 1000);
};
window.onload=function(){
start();
}