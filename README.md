# js-library-emerso15

## Link to landing page:
https://evening-spire-83388.herokuapp.com/index.html

## Getting Started
Getting Started
To get started with the FootballDeconstruct library, first refer to and download the code from the Github page provided.

Then, you will need to include the following script tags in your HTML file to add the library API to your app. This can be done as follows:

<link rel="stylesheet" type="text/css" href="offensivePlayOne.css" />
<link rel="stylesheet" type="text/css" href="defensivePlayOne.css" />
<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script defer type="text/javascript" src="./js/football_deconstruct.js"></script>
Make sure to include the relevant jQuery link instead of the one shown above to ensure that jQuery works for you. Once the relevant script tags and stylesheets have been included as shown above, you can begin using the FootballDeconstruct library.

The code snippet below will demonstrate some of the basic functionality of the library. Specifically, the code below demonstrates how to create a new 'Play' by creating a new instance of the Play class and initialize it to the example offensive play that is given in the library using the offensivePlayOne() function. We then need to appen this play to the appropriate div in our HTML page (in this case the container div), We then call the modifyRoute() and changeAnimationTime() functions to modify the route of a particular player in our new Play and to change its animation time respectively. The constructor for creating a new play requires us to give a name to the play, in this case "First Play". The modifyRoute() functions takes the parameters of the class-name of the div we want to modify, the new height and width values of the route, and the new border-radius value to change the shape of the route in that order. The changeAnimationTime() takes in the new time as the first parameter followed by the class-name of the div whose animation we are changing (in this case the div for the qb object in our play) and the type of animation we want to use (in this case linear).

const o = new Play("First Play")
// creates and sets the Play Area and player objects
o.offensivePlayOne()
// append the Play Area to the body
$('.container').append(o.play)
o.modifyRoute("op1te", 540, 385, '100% 0% 100% 0% / 0% 69% 31% 100%')
o.changeAnimationTime(5, "op1qb", "linear")

## Link to documentation
https://evening-spire-83388.herokuapp.com/documentation.html
