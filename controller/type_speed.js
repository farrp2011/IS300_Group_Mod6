/* 
 * Copyright (C) 2017 Paul Farr
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 * 
 * Paul Farr would really like a well paying job as well. Email: farrp2011@live.com
 */
const GAME_HOOK = "type_speed";//somthing needs the ID to = type_speed
const CANVAS_ID = "the_best_canvas_50";
const START_ID = "start_butten_50";
const WIDTH = 600;
const HEIGHT = 400;
const FINISH_LINE = 80;
const START_SPEED = 1000;//One Second per move

const START_COLOR = "green";
const MIDDLE_COLOR = "yellow";
const END_COLOR = "red";

const START_AREA = 200;
const MIDDLE_AREA = 400;

const JUMP_LENGHT = 5;

const TEXT_FEILD_ID = "some_text_50";
const MIN_HEIGHT = 20;
const MAX_HEIGHT = HEIGHT-25;

const WORD_LIST = ["hello","internet", "bird", "fun", "zoo", "about", "people", 
    "xray", "eat", "drink", "jump", "walk", "stop", "broken", "love", "rock", 
    "little", "hot", "loud", "quiet", "yuck", "clean", "dirty", "gentle", 
    "blue", "yellow", "green", "pink", "orange", "purple", "black", "white", 
    "brown", "ball", "book", "train", "bike", "rain", "bubbles", "plane", 
    "bowl", "spoon", "house", "table", "monkey", "butterfly", "elephant", 
    "zebra", "juice", "candy", "family", "cold", "earth", "snow", "baby",
    "game", "car", "bus", "dad", "mom", "cow", "fish", "mail", "milk", "duck"];




var score = 0;
var gameSpeed = START_SPEED;
var idCount = 0;
var wordArr = [];

wordArr[0] = createWord();
wordArr[1] = createWord();
wordArr[2] = createWord();
wordArr[3] = createWord();

function word()
{
    this.height;
    this.width;
    this.theWord = "";
    this.id;
}

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function createWord()
{
    var aWord = 
        {
            height:randomInt(MIN_HEIGHT, MAX_HEIGHT),
            width:0,
            theWord: WORD_LIST[randomInt(0, WORD_LIST.length-1)],
            id: ++idCount
        };
    return aWord;
}

function createLayout()
{//I know I'm not doing it right but it is so much easier this way
    var hookEle = document.getElementById(GAME_HOOK);
    hookEle.innerHTML = `<canvas id="`+CANVAS_ID+`" width="`+WIDTH+`" height="`
           +HEIGHT+`"> </canvas><br/> <input id=`+TEXT_FEILD_ID+` type="text" autofocus>
        <button id=`+START_ID+` onclick="mainLoop()">Start Game</button> `;
}
function drawPlayArea()
{
    var c = document.getElementById(CANVAS_ID);
    var ctx = c.getContext("2d");
    
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,c.width,c.height);
    
    ctx.fillStyle = "white";
    ctx.fillRect(c.width-FINISH_LINE ,0, 2, c.height);
    
    ctx.font = "20px Comic Sans MS";
    ctx.fillText("Score: "+ score , 200, c.height-3);
    
    ctx.rotate(Math.PI/2);//rotate 90 degress
    ctx.fillText("FINISH LINE",(c.height/2)-75, (FINISH_LINE - 7) - c.width); 
    ctx.rotate(-Math.PI/2);//un-rotate 90 degress
    
    
    ctx.fillStyle = "white";
    ctx.font = "15px Comic Sans MS";
 
    if(wordArr.length > 0)
    {
        for(var i = 0 ; i < wordArr.length ; i++)
        {
            //ctx.fillStyle = "white";
            //we need to change the color based on where the word is
            if(wordArr[i].width < START_AREA){
                ctx.fillStyle = START_COLOR;
            }
            else if(wordArr[i].width < MIDDLE_AREA){
                ctx.fillStyle = MIDDLE_COLOR;
            }else{
                ctx.fillStyle = END_COLOR;
            }
            
            ctx.fillText(wordArr[i].theWord,wordArr[i].width, wordArr[i].height);
        }
    }
    
}

function mainLoop()
{
    
    var lost = false;
    var textF = document.getElementById(TEXT_FEILD_ID);
    document.getElementById(START_ID).style.visibility = "hidden";;
    
    //console.log(textF.value);debug stuff
    
    
    
    for(var i = 0 ; i < wordArr.length ; i++)
    {
        //ctx.fillStyle = "white";
        //we need to change the color based on where the word is
        if(textF.value === wordArr[i].theWord)//if true then word was typed in
        {//we need to remove it now
            wordArr.splice(i,1);//this removes word form array
            textF.value = "";//clear the text feild for next word
            score++;
            wordArr.push(createWord());// add new word to game
            
           //change game speed
           
           if(gameSpeed > 50)
           {
               gameSpeed = gameSpeed - 15;
           }
            
        }
        else
        {
            //we will be nice and check if the player lost before adding to the width
            
            if(wordArr[i].width === WIDTH-FINISH_LINE)
            {
                lost = true;
            }
     
            wordArr[i].width = wordArr[i].width + JUMP_LENGHT;
        }
    }
    
    if(lost === false)//keep going if the game is not lost
    {
        drawPlayArea();
        setTimeout(mainLoop, gameSpeed);
    }
    else
    {
        var c = document.getElementById(CANVAS_ID);
        var ctx = c.getContext("2d");
        ctx.fillStyle = "white";
        ctx.font = "40px Comic Sans MS";
        ctx.fillText("GAME OVER" , c.width/2-150, c.height/2);
    }
    
    
}

createLayout();
drawPlayArea();
//mainLoop();//Off Kicking!!!!!





//create black borad this need to happen one time

