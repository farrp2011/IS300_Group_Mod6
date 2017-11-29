/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * This is for the profile page to change the height of the iframe to keep the 
 * goden ratio as the page width grows or shrinks.
 */

//console.log("I'm working!!!!");

var GOLD_RATIO = .62;//Close enough 

window.onresize = resize;
function resize()
{
    //gives us an array of elements
    var profilesViews = document.getElementsByClassName("profile_view");
    
    for(var i = 0 ; i < profilesViews.length ; i++)
    {
        var newHeight = Math.round(profilesViews[i].getBoundingClientRect().width * GOLD_RATIO);
        //profilesViews[i].setAttribute("style","height: "+newHeight+"px");//backup
        profilesViews[i].style.height = newHeight+"px";//it wants a string -- so annoying
        //console.log("Current Height = "+profilesViews[i].style.height);
    }
}
resize();//need to run it when we first open the page

