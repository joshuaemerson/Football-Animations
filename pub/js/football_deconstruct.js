/* Main code for footballDeconstuct Library */
"use strict";

(function(global, document, $) {

  class Play {
    constructor(name) {
      this.name = name;
      this.players = null;
      this.rectangles = null;
      this.play = null;
    }

    // helper function which creates a div with class className for player playerPosition
    makePlayer(className, playerPosition) {
      const player = $("<div></div>").addClass(className).text(playerPosition);
      const arrow_curve = $("<div></div>").addClass(className + "_arrow_curve");

      player.append(arrow_curve);

      return player;
    }

    // helper function which creates all 11 offensive player circle representation with the names from playerList
    initPlayers(playerList) {
      // this is a list which will store all the player circle divs for an offensive play
      const players = [];

      // create and append objects to players list
      const playerOne = this.makePlayer(playerList[0][0], playerList[0][1]);
      const playerTwo = this.makePlayer(playerList[1][0], playerList[1][1]);
      const playerThree = this.makePlayer(playerList[2][0], playerList[2][1]);
      const playerFour = this.makePlayer(playerList[3][0], playerList[3][1]);
      const playerFive = this.makePlayer(playerList[4][0], playerList[4][1]);
      const playerSix = this.makePlayer(playerList[5][0], playerList[5][1]);
      const playerSeven = this.makePlayer(playerList[6][0], playerList[6][1]);
      const playerEight = this.makePlayer(playerList[7][0], playerList[7][1]);
      const playerNine = this.makePlayer(playerList[8][0], playerList[8][1]);
      const playerTen = this.makePlayer(playerList[9][0], playerList[9][1]);
      const playerEleven = this.makePlayer(playerList[10][0], playerList[10][1]);

      players.push(playerOne);
      players.push(playerTwo);
      players.push(playerThree);
      players.push(playerFour);
      players.push(playerFive);
      players.push(playerSix);
      players.push(playerSeven);
      players.push(playerEight);
      players.push(playerNine);
      players.push(playerTen);
      players.push(playerEleven);

      return players;
    }

    // helper function which creates all 11 defensive player rectangle for positions in rectangeList
    initRectangles(rectangleList) {
      // this is a list which will store all the player rectangle divs for a defensive play
      const rectangles = [];

      const r1 = $("<div></div>").addClass(rectangleList[0]);
      const r2 = $("<div></div>").addClass(rectangleList[1]);
      const r3 = $("<div></div>").addClass(rectangleList[2]);
      const r4 = $("<div></div>").addClass(rectangleList[3]);
      const r5 = $("<div></div>").addClass(rectangleList[4]);
      const r6 = $("<div></div>").addClass(rectangleList[5]);
      const r7 = $("<div></div>").addClass(rectangleList[6]);
      const r8 = $("<div></div>").addClass(rectangleList[7]);
      const r9 = $("<div></div>").addClass(rectangleList[8]);
      const r10 = $("<div></div>").addClass(rectangleList[9]);
      const r11 = $("<div></div>").addClass(rectangleList[10]);

      rectangles.push(r1);
      rectangles.push(r2);
      rectangles.push(r3);
      rectangles.push(r4);
      rectangles.push(r5);
      rectangles.push(r6);
      rectangles.push(r7);
      rectangles.push(r8);
      rectangles.push(r9);
      rectangles.push(r10);
      rectangles.push(r11);

      return rectangles;
    }

    // function which the user will call to create the visualization of the example offensive play that can be created
    offensivePlayOne() {
      // class names and positions of players we want to create for this play
      const playerList = [
        ["op1qb", "QB"],
        ["op1rb", "RB"],
        ["op1ol", "OL"],
        ["op1ol", "OL"],
        ["op1ol", "OL"],
        ["op1ol", "OL"],
        ["op1ol", "OL"],
        ["op1te", "TE"],
        ["op1wr1", "WR"],
        ["op1wr2", "WR"],
        ["op1wr3", "WR"],
      ];
      // call the helper function initOffensivePlayOneCircles() to ge the player circle divs
      const players = this.initPlayers(playerList);

      // create a container in which this play will get displayed and add the corresponding play items into it
      const playContainer = $('<div class="offensivePlayOneContainer"></div>');
      for (let i = 0; i < 11; i++) {
        playContainer.append(players[i]);
      }

      playContainer.append($(".football"));

      this.players = players;
      this.play = playContainer;
    }

    // function which the user will call to create the visualization of the example defensive play that can be created
    defensivePlayOne() {
      // class names and positions of players we want to create for this play
      const playerList = [
        ["dp1dt1", "DT"],
        ["dp1dt2", "DT"],
        ["dp1de1", "DE"],
        ["dp1de2", "DE"],
        ["dp1lb1", "LB"],
        ["dp1lb2", "LB"],
        ["dp1lb3", "LB"],
        ["dp1cb1", "CB"],
        ["dp1cb2", "CB"],
        ["dp1fs", "FS"],
        ["dp1ss", "SS"],
      ];

      // class names and positions of players we want to create for this play
      const rectangleList = [
        "dp1dt1_rect",
        "dp1dt2_rect",
        "dp1de1_rect",
        "dp1de2_rect",
        "dp1lb1_rect",
        "dp1lb2_rect",
        "dp1lb3_rect",
        "dp1cb1_rect",
        "dp1cb2_rect",
        "dp1ss_rect",
        "dp1fs_rect",
      ];

      const players = this.initPlayers(playerList);
      const rectangles = this.initRectangles(rectangleList);

      // create a container in which this play will get displayed and add the corresponding play items into it
      const playContainer = $('<div class="defensivePlayOneContainer"></div>');
      for (let i = 0; i < 11; i++) {
        playContainer.append(players[i]);
        playContainer.append(rectangles[i]);
      }

      this.players = players;
      this.rectangles = rectangles;
      this.play = playContainer;
    }


    // ------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------


    // function used to modify the length of playerPositionClass route in the play with the newHeight and newWidth values
    // can also set a new border radius of borderRadius to change the shaoe of the route entirely
    // cannot apply to the QB or OL player positions
    modifyRoute(playerPositionClass, newHeight, newWidth, borderRadius) {
      // update the height and width of the routes
      $("." + playerPositionClass + "_arrow_curve").css("height", newHeight);
      $("." + playerPositionClass + "_arrow_curve").css("width", newWidth);
      $("." + playerPositionClass + "_arrow_curve").css(
        "border-radius",
        borderRadius
      );
    }

    // modify the animation of a player by passing in a animation object newAnimation
    // also can be used to create and set a new animation
    // source: https://stackoverflow.com/questions/707565/how-do-you-add-css-with-javascript
    modifyAnimation(newAnimation) {
      let styles = newAnimation.animation;

      let styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }

    // create a football object for this play and should only be usee on offensive plays
    // the css for this object has been predetermined in the css for this library
    // top and left values should correspond with the position of the quarterback
    // source: https://stackoverflow.com/questions/707565/how-do-you-add-css-with-javascript
    makeFootball(top, left) {
      const football = $('<div class="football"></div>');
      football.text("F")

      let styles = 
      `
      .football {
        background:brown;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Arial';
        font-size: x-large;
        font-weight: bold;
        color:whitesmoke;
        position: absolute;
        top:` + top + `%;
        left:` + left + `%;
      }`

      let styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);

      this.play.append(football);
    }

    // function used to animate throwing the football via throwAnimation to player playerPositionClass
    // throwAnimation should be the same animation for the playerPositionClass so the ball ends translated x% in the X direction and y% in the Y direction
    // source: https://stackoverflow.com/questions/707565/how-do-you-add-css-with-javascript
    throwFootball(playerPositionClass, x, y) {
      const top = $('.' + playerPositionClass).css("top")
      const left = $('.' + playerPositionClass).css("left")

      $('.football').animate({top: top})
      $('.football').animate({left: left})

      let styles =     
      `.football {
        animation: football-animation 2.5s linear forwards;
      }
    
      @keyframes football-animation {

      100% {
        transform: translateX(` + x + `%) translateY(` + y + `%) ;
      }

      }`

      let styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }

    // function used to increased or decreased the animation time to newTime for the position in the play with playerPositionClass 
    // to an animation of type animationType
    // source: https://stackoverflow.com/questions/707565/how-do-you-add-css-with-javascript
    changeAnimationTime(newTime, playerPositionClass, animationType) {
      let styles =
        `
      .` +
        this.play.attr("class") +
        `:active .` +
        playerPositionClass +
        ` {
        animation:` +
        playerPositionClass +
        `-animation ` +
        newTime +
        `s ` +
        animationType +
        ` forwards;
    }
    `;

      let styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }

    // create an empty play and initialize values as needed into the div playContainer
    // source: https://stackoverflow.com/questions/707565/how-do-you-add-css-with-javascript
    createEmptyPlay(containerName) {
      const playContainer = $('<div class="' + containerName + '"></div>');
      this.players = []
      this.rectangles = []

      let styles = 
      `
      .` + containerName + ` {
        position: relative;
        margin: auto;
        background-color:black;
        height: 90vh;
        width: 98vw;
      }
      `
      let styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);

      this.play = playContainer
    }

    // create a new player cirle and add it to this plays player list (this.players)
    // source: https://stackoverflow.com/questions/707565/how-do-you-add-css-with-javascript
    createPlayer(className, playerPosition, colour, top, left, height, width, borderRadius, rotate){
      const player = this.makePlayer(className, playerPosition)

      let styles = 
      `
      .` + className + ` {
        background:` + colour + `;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Arial';
        font-size: x-large;
        font-weight: bold;
        color:whitesmoke;
        position: absolute;
        top:` + top + `%;
        left:` + left + `%;
      }

      .` + className + ` .` + className + `_arrow_curve {
        position: absolute;
        top:` + top + `%;
        left:` + left + `%;
        border: 3px solid ` + colour + `;
        border-color: transparent transparent ` + colour + `;
        transform:rotate(` + rotate + `deg);
        height: ` + height + `px;
        width: ` + width + `px;
        border-radius: ` + borderRadius + ` 
      }
      `
      let styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);

      this.players.push(player)
      this.play.append(player)
    }

    // create a new rectangle and add it to this plays rectangle list (this.rectangles)
    // source: https://stackoverflow.com/questions/707565/how-do-you-add-css-with-javascript
    createRectangle(className, top, left, height, width, colour){
      const rectangle = $("<div></div>").addClass(className + '_rect');

      let styles = 
      `
      .` + className + `_rect {
        position: absolute;
        top:` + top + `%;
        left:` + left + `%;
        height:` + height + `px;
        width:` + width + `px;
        border: 2px solid ` + colour + `;
      }`

      let styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);

      this.rectangles.push(rectangle)
      this.play.append(rectangle)
    }

    // function used to delete a div with class name className
    deleteItem(className){
      $('.' + className).remove()
    }
  }
	// After setup:
	// Add the Play class to the window object if it doesn't already exist.
  global.Play = global.Play || Play

})(window, window.document, $);
