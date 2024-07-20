/* football_deconstruct Library Usage Examples */
"use strict";

// create the defensive play instance and call the method to make the visualization
const d = new Play("Second Play")

$('.container').append("<div class='title2'></div>")
$('.title2').text("Defensive Play 1: Cover 2 (Click and Hold Mouse Over Play Area to View Animation)")
// append the visualization to the body
d.defensivePlayOne()
$('.container').append(d.play)

$('.container').append("<div class='description2'></div>")
$('.description2').text("The above visualization is of the 'Cover 2' defensive scheme which is composed of two defensive ends (DE)," +
" two defensive tackles (DT), three linebackers (LB), two cornerbacks (CB), a free safety (FS) and the strong safety (SS). Each player circle has" +
" a corresponding arrow which tells the user how each of the player circles will move upon animation." +
"The defensive players whose arrows do not point towards the left also include a rectangular region which is meant to represent" +
"the area that this player is responsible for 'protecting'" +
" A user can hover over the play container to see the animation occur. In future iterations of this library, users will be" +
" able to select individual player circles to modify their arrows and display information about each player.")

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

$('.container').append("<div class='title1'></div>")
$('.title1').text("Offensive Play 1: Gun Trio Y-Flex (Click and Hold Mouse Over Play Area to View Animation)")

// create the offensive play instance and call the method to make the visualization
const o = new Play("First Play")
o.offensivePlayOne() // creates and sets the play

// append the visualization to the body
$('.container').append(o.play)

$('.container').append("<div class='description1'></div>")
$('.description1').text("The above visualization is of the play 'Gun Trio Y-Flex' which is composed of the quaterback (QB)," +
" running back (RB), five offensive linemen (OL), a single tight end (TE) and three wide recievers (WR). Each player circle has" +
" a corresponding arrow which tells the user how each of the player circles will move upon animation." +
" A user can hover over the play container to see the animation occur. In future iterations of this library, users will be" +
" able to select individual player circles to modify their arrows and display information about each player. Moreover, users will" +
" also be able to select which player recieved the ball and view the corresponding animation")


// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

$('.container').append("<div class='title4'></div>")
$('.title4').text("Modified Play 1: Gun Trio Y-Flex (Click and Hold Mouse Over Play Area to View Animation)")

const mod = new Play("Modified Play")

mod.offensivePlayOne()
$('.container').append(mod.play)

mod.modifyRoute("op1te", 540, 385, '100% 0% 100% 0% / 0% 69% 31% 100%')

const animation = 
{animation:
    `@keyframes op1te-animation {
    33% {
        transform: translateX(250%) translateY(-12%) ;
    }

    50% {
        transform: translateX(420%) translateY(-100%) ;
    }

    100% {
        transform: translateX(800%) translateY(-1050%) ;
    }
}`
}

mod.modifyAnimation(animation)
mod.makeFootball(60, 15)

mod.throwFootball("op1wr2", 1750, 0)
mod.changeAnimationTime(5, "op1qb", "linear")
mod.changeAnimationTime(5, "op1rb", "linear")

$('.container').append("<div class='description1'></div>")
$('.description1').text("The above visualization is of the play 'Gun Trio Y-Flex' but with customizations made through the functions in our" +
"libary. In the above play, we call on the modifyRoute function to expand the route of the TE player object (this can be seen in both the original" +
"and modified play since it changes the css directly in the function. Likewise we use the modifyAnimation() funtion to change the animation of the TE" +
"reflect these changes in the route we made. We also use the changeAnimationTime() function to make the animation for the QB and RB take 5 seconds which" +
"you will notice seen these objects move much slower than the others. Finally, we use the throwFootball() function to throw to a WR (might need to refresh to see animation again).")



// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
$('.container').append("<div class='title3'></div>")
$('.title3').text("Custom Play 1: (Click and Hold Mouse Over Play Area to View Animation)")

const t = new Play()
t.createEmptyPlay("new")
$('.container').append(t.play)

t.createPlayer("lb", "LB", "green", 70, 65, 150, 300, "0% 100% 26% 74% / 0% 0% 100% 100%", 0)

const tAnimation = 
{animation:`.new:active .lb {
    animation: lb-animation 2.5s linear forwards;
}

.new:active .lb_arrow_curve {
    visibility: hidden;
}

@keyframes lb-animation {
    15% {
        transform: translateX(100%) translateY(250%) ;
    }

    25% {
        transform: translateX(200%) translateY(300%) ;
    }

    66% {
        transform: translateX(400%) translateY(320%) ;
    }

    100% {
        transform: translateX(600%) translateY(0%) ;
    }
}`}

t.modifyAnimation(tAnimation)

t.createRectangle("lb", 55, 75, 200, 200, "green")

// t.deleteItem("lb_rect")

$('.container').append("<div class='description3'></div>")
$('.description3').text("The above visualization is of the custom play we have created. For now, we have includes one player (LB) and their corresponding" +
"rectangle. We have alse set the animation for this players route as needed. More players, rectangles and animations can be added as needed. We use the" +
"createEmptyPlay(), createPlayer(), modifyAnimation() and createRectangle() functions to achieve this. Refer to example.html code if neccessary.")