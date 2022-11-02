var slytherin, draco
var death1, kill1
var death2, kill2
var death3, kill3
var death4, kill4
var death5, kill5
var death6, kill6
var death7, kill7
var death8, kill8
var death9, kill9
var death10, kill10
var death11, kill11
var bgimg
var gamestate = 'intro'
var edges
var degroup;
var greenspell;
var score = 0;
var redspell;
var redgroup, greengroup;

function preload(){

    slytherin = loadImage('draco.png');

    death1 = loadImage('1.png');
    death2 = loadImage('2.png');
    death3 = loadImage('3.png');
    death4 = loadImage('4.png');
    death5 = loadImage('5.png');
    death6 = loadImage('6.png');
    death7 = loadImage('7.png');
    death8 = loadImage('8.png');
    death9 = loadImage('9.png');
    death10 = loadImage('10.png');
    death11 = loadImage('11.png');

    bgimg = loadImage('malfoy.webp');

    greenspell = loadImage('greenlight.png');
    redspell = loadImage('redlight.png');

}

function setup(){

    createCanvas(1200, 600);
    edges = createEdgeSprites();

    draco = createSprite(600, 540);
    draco.addImage(slytherin);
    draco.scale = 0.3
     
    degroup = new Group()
    redgroup = new Group()
    greengroup = new Group()

}

function draw(){

    background(bgimg);
    if (gamestate == 'intro'){

       textSize(30);
       fill('white');
       text('Death Eaters On The Loose', 400, 50);
       textSize(20);
       text('Try to hit death eaters with the green spells', 400, 100);
       text('to kill, but try not to get hit yourself.', 400, 125);
       text('If you get hit with a red one, u lose points.', 400, 150);
       text('You will have limited green spells, so choose wisely', 400, 175);
       text('when to use.', 400, 200);
       text('Press right and left arrow keys to move.', 400, 225);
       text('Up for red, down for green spells', 400, 250);
       textSize(30);
       text('Press the space bar to continue...', 400, 300);
       
       if (keyDown('space')){

        gamestate = 'play';
        clear()



       }

    }
    
    if (gamestate == 'play'){
    
       fill('white');
       textSize(20)
       text('Score: '+score, width-150, 50);

       for (i = 0; i<degroup.length; i++){
        var de = degroup.get(i);
        if (de.y >= 300){
            de.velocityY = 0;
        }
        if (redgroup.isTouching(de)){
            de.destroy()
            score += 10;
        }
       }

       draco.collide(edges);
       spawnDeath()
       drawSprites()
    }









}

function keyPressed(){
    if (gamestate == 'play'){

        if (keyCode == 37){
            draco.x -= 15;
           }
           
           if (keyCode == 39){
            draco.x += 15;
           }

        if (keyCode == 38){
            var red = createSprite(draco.x, draco.y-10);
            red.addImage(redspell);
            red.scale = 0.2;
            red.velocityY = -5;
            red.debug = true;
            redgroup.add(red);
        }
    
    }



}


function spawnDeath(){
    if (frameCount % 200 == 0){
       var kill1 = createSprite(random(100, width-100), -20);
       var ran = Math.round(random(1, 11));
       switch(ran){
        case 1: kill1.addImage(death1);kill1.setCollider('circle', 100, 0, 50); break;
        case 2: kill1.addImage(death2);kill1.setCollider('circle', -150,0, 50); break;
        case 3: kill1.addImage(death3);kill1.setCollider('circle', 300,0, 50); break;
        case 4: kill1.addImage(death4);kill1.setCollider('circle', 10,0, 50); break;
        case 5: kill1.addImage(death5);kill1.setCollider('circle', -200,0, 50); break;
        case 6: kill1.addImage(death6);kill1.setCollider('circle', 250, 0, 50); break;
        case 7: kill1.addImage(death7);kill1.setCollider('circle', -10, 0, 50); break;
        case 8: kill1.addImage(death8);kill1.setCollider('circle', -250, 0, 50); break;
        case 9: kill1.addImage(death9);kill1.setCollider('circle', -300, 0, 50); break;
        case 10: kill1.addImage(death10);kill1.setCollider('circle', 180, 0, 50); break;
        case 11: kill1.addImage(death11);kill1.setCollider('circle', -150, 0, 50); break;
       }

      kill1.velocityY = 4;
      kill1.debug = true;

      

      
      degroup.add(kill1);

    }
}
