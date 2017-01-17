//--//--//--//--//--//-------//--//--//--//--//--//
//--//--//--//--//-- VARIABLES --//--//--//--//--//

const GAME = document.getElementById('game')
const START = document.getElementById('start')

/*
var covGarImage = new Image
var covGar1 = document.createElement("canvas")
covGar1.style.visibility = "hidden"
var ctx = covGar1.getContext("2d")
var src = "http://localhost:8080/covent_garden.jpg"

covGarImage.crossOrigin = "Anonymous";

covGarImage.onload = function() {
    covGar1.width = covGarImage.width;
    covGar1.height = covGarImage.height;
    ctx.drawImage(covGarImage, 0, 0);
}

covGarImage.src = src;
*/

// Github hosted image //
var covGarImage = new Image
var covGar1 = document.createElement("canvas")
covGar1.style.visibility = "hidden"
var ctx = covGar1.getContext("2d")
var src = "https://raw.githubusercontent.com/jrleja0/tile-swapping-game-jrleja0/master/Image/covent_garden.jpg"

covGarImage.crossOrigin = "Anonymous";

covGarImage.onload = function() {
    covGar1.width = covGarImage.width;
    covGar1.height = covGarImage.height;
    ctx.drawImage(covGarImage, 0, 0);
}

covGarImage.src = src;
// END of Github hosted image //

var covGarStart = document.getElementById("covGarStart");  // image on Start Page
covGarStart.src = src;

//-- getting "puzzle" canvas elements in DOM --//
var canvas0 = document.getElementById("tileCanvas1");
var canvas1 = document.getElementById("tileCanvas2");
var canvas2 = document.getElementById("tileCanvas3");
var canvas3 = document.getElementById("tileCanvas4");
var canvas4 = document.getElementById("tileCanvas5");
var canvas5 = document.getElementById("tileCanvas6");
var canvas6 = document.getElementById("tileCanvas7");
var canvas7 = document.getElementById("tileCanvas8");
var canvas8 = document.getElementById("tileCanvas9");
var canvas9 = document.getElementById("tileCanvas10");
var canvas10 = document.getElementById("tileCanvas11");
var canvas11 = document.getElementById("tileCanvas12");
var canvas12 = document.getElementById("tileCanvas13");
var canvas13 = document.getElementById("tileCanvas14");
var canvas14 = document.getElementById("tileCanvas15");
var canvas15 = document.getElementById("tileCanvas16");
//-- selecting all "puzzle" canvases --//
var canvases = document.querySelectorAll('canvas')
var canvasArray = [canvas0, canvas1, canvas2, canvas3, canvas4, canvas5, canvas6, canvas7, canvas8, canvas9, canvas10, canvas11, canvas12, canvas13, canvas14, canvas15]
//-- for tile randomization below --//
var canvasAssignments = [canvas0, canvas1, canvas2, canvas3, canvas4, canvas5, canvas6, canvas7, canvas8, canvas9, canvas10, canvas11, canvas12, canvas13, canvas14, canvas15]

//-- creating new "solution" tile canvases. See function displayImages(). --//
var canvasSolutionTiles = []
var pixelDataSolutionTiles = []

//-- below: randomizing the tiles (i.e. randomizing the variable inputs to put into the tile functions) --//
var tileFnVariableArray = []

for (i = 0, l = canvases.length; i < l; i++) {
    var indexPushed = false
    while (indexPushed === false) {
        var index = Math.floor(Math.random() * canvasAssignments.length)
        if (index !== i && canvasAssignments[index] !== undefined) {
            tileFnVariableArray.push(canvasAssignments[index])
            canvasAssignments.splice(index, 1, undefined)
            indexPushed = true
        }
    }
}

//-- functions that draw the individual tiles --//
var tileFunction0 = undefined
var tileFunction1 = undefined
var tileFunction2 = undefined
var tileFunction3 = undefined
var tileFunction4 = undefined
var tileFunction5 = undefined
var tileFunction6 = undefined
var tileFunction7 = undefined
var tileFunction8 = undefined
var tileFunction9 = undefined
var tileFunction10 = undefined
var tileFunction11 = undefined
var tileFunction12 = undefined
var tileFunction13 = undefined
var tileFunction14 = undefined
var tileFunction15 = undefined
var tileFunctionArray = []

//--variables used in function for swapping the tiles --//
var canvasSelected1 = undefined
var canvasSelected2 = undefined
var tempVarIndex1 = undefined
var tempVarIndex2 = undefined
var tempFnIndex1 = undefined
var tempFnIndex2 = undefined
var tempSwapVariable = undefined

//-- array for checking solution --//
var pixelDataPuzzleTiles = []

//-- player's move counter --//
var moves = []


//--//--//--//--//--//--//----//--//--//--//--//--//--//
//--//--//--//--//-- START FUNCTION --//--//--//--//--//

function start() {
    START.style.display = 'none'
    displayImages()
    play()
}

//-- function(s) for displaying the images on the tiles --//
function displayImages() {

//-- declaring functions --//
    tileFunction0 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 0, 0, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction0
    }
    tileFunction1 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 382.75, 0, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction1
    }
    tileFunction2 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 765.5, 0, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction2
    }
    tileFunction3 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 1148.25, 0, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction3
    }

    tileFunction4 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 0, 382.75, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction4
    }
    tileFunction5 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 382.75, 382.75, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction5
    }
    tileFunction6 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 765.5, 382.75, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction6
    }
    tileFunction7 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 1148.25, 382.75, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction7
    }
    tileFunction8 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 0, 765.5, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction8
    }
    tileFunction9 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 382.75, 765.5, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction9
    }
    tileFunction10 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 765.5, 765.5, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction10
    }
    tileFunction11 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 1148.25, 765.5, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction11
    }
    tileFunction12 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 0, 1148.25, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction12
    }
    tileFunction13 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 382.75, 1148.25, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction13
    }
    tileFunction14 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 765.5, 1148.25, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction14
    }
    tileFunction15 = function(canvas) {
      canvas.getContext("2d").drawImage(covGar1, 1148.25, 1148.25, 382.75, 382.75, 0, 0, canvas1.width, canvas1.height)
      return tileFunction15
    }

//-- making "puzzle" canvases visible then calling the functions to draw the tiles --//
    for (i = 0, l = canvases.length; i < l; i++) {
        canvases[i].style.display = "block"
    }

    tileFunctionArray.push(tileFunction0(tileFnVariableArray[0]))  // canvas0  // NEXT PROJECT: MAKE TILE ROTATION DEGREE AMOUNT A SECOND RANDOMIZED VARIABLE
    tileFunctionArray.push(tileFunction1(tileFnVariableArray[1]))  // canvas1
    tileFunctionArray.push(tileFunction2(tileFnVariableArray[2]))  // canvas2
    tileFunctionArray.push(tileFunction3(tileFnVariableArray[3]))  // canvas3
    tileFunctionArray.push(tileFunction4(tileFnVariableArray[4]))  // canvas4
    tileFunctionArray.push(tileFunction5(tileFnVariableArray[5]))  // canvas5
    tileFunctionArray.push(tileFunction6(tileFnVariableArray[6]))  // canvas6
    tileFunctionArray.push(tileFunction7(tileFnVariableArray[7]))  // canvas7
    tileFunctionArray.push(tileFunction8(tileFnVariableArray[8]))  // canvas8
    tileFunctionArray.push(tileFunction9(tileFnVariableArray[9]))  // canvas9
    tileFunctionArray.push(tileFunction10(tileFnVariableArray[10]))  // canvas10
    tileFunctionArray.push(tileFunction11(tileFnVariableArray[11]))  // canvas11
    tileFunctionArray.push(tileFunction12(tileFnVariableArray[12]))  // canvas12
    tileFunctionArray.push(tileFunction13(tileFnVariableArray[13]))  // canvas13
    tileFunctionArray.push(tileFunction14(tileFnVariableArray[14]))  // canvas14
    tileFunctionArray.push(tileFunction15(tileFnVariableArray[15]))  // canvas15

//-- creating the hidden "solution" tiles and storing their pixel data into an array --//
    for (i = 0, l = canvases.length; i < l; i++) {
        canvasSolutionTiles.push(document.createElement("canvas"))
        tileFunctionArray[i](canvasSolutionTiles[i])
        var imageDataObject = canvasSolutionTiles[i].getContext("2d").getImageData(0, 0, canvas0.width, canvas0.height)
        var pixelData = imageDataObject.data
        pixelDataSolutionTiles.push(pixelData)
    }
}

//--//--//--//--//--//--//----//--//--//--//--//--//--//
//--//--//--//--//-- PLAY FUNCTION --//--//--//--//--//

function play() {
    window.addEventListener('keydown', rotateTile)
    for (i = 0, l = canvases.length; i < l; i++) {
        canvases[i].addEventListener('click', selectTiles)
        }
}

function selectTiles(e) {
    if (canvasSelected1 === undefined) {
      canvasSelected1 = this
    }
    else if (canvasSelected1 !== undefined && canvasSelected2 === undefined) {
      canvasSelected2 = this
    }

    this.getContext("2d").fillStyle = "rgba(0, 0, 255, 0.5)"
    this.getContext("2d").fillRect(0, 0, this.width, this.height)

    if (canvasSelected1 !== undefined && canvasSelected2 !== undefined) {
      moves.push("swap")
      swapTiles()
    }
}

function swapTiles() {
    for (a = 0, l = tileFnVariableArray.length; a < l; a++) {
        if (tileFnVariableArray[a] === canvasSelected1) {
            tempVarIndex1 = tileFnVariableArray[a]
            tempFnIndex1 = tileFunctionArray[a]
            break
        }
    }

    for (b = 0, l = tileFnVariableArray.length; b < l; b++) {
        if (tileFnVariableArray[b] === canvasSelected2) {
            tempVarIndex2 = tileFnVariableArray[b]
            tempFnIndex2 = tileFunctionArray[b]
            break
        }
    }

    tempFnIndex1(tempVarIndex2)    //-- this swaps the tiles and gets rid of the blue box highlights  tileFnVariableArray[a](tileFnVariableArray[b]) --//
    tempFnIndex2(tempVarIndex1)

    //-- tempSwapVariable --//
    tileFnVariableArray[a] = tempVarIndex2    //-- this makes the swap the new normal --//
    tileFnVariableArray[b] = tempVarIndex1

    canvasSelected1 = undefined
    canvasSelected2 = undefined

    checkForSolution()
}

function rotateTile(e) {
    if (canvasSelected1 === undefined) {
        return
    }
    moves.push("rotate")
    if (e.which === 37) {   // Left arrow. //
        if (canvasSelected1 !== undefined) {
            return      // ROTATE IMAGE'S PIXELS COUNTER-CLOCKWISE //
        }
    }
    if (e.which === 39) {   // Right arrow. //
        if (canvasSelected1 !== undefined) {
            return      // ROTATE IMAGE'S PIXELS CLOCK-WISE //
        }
    }
}

function checkForSolution() {

    pixelDataPuzzleTiles = []

    for (a = 0, b = canvases.length; a < b; a++) {
        var imageDataObject = canvasArray[a].getContext("2d").getImageData(0, 0, canvas0.width, canvas0.height)
        var pixelData = imageDataObject.data
        pixelDataPuzzleTiles.push(pixelData)
    }

    for (i = 0, l = canvases.length; i < l; i++) {

        for (var x = 0, n = pixelDataSolutionTiles[0].length; x < n; x++) {
            if (pixelDataPuzzleTiles[i][x] !== pixelDataSolutionTiles[i][x]) {
            return
            }
        }
    }

    if (i === canvases.length) {
        console.log("You completed the puzzle! Congratulations!!!")

        var doneMessage = document.getElementById("doneMessage");
        doneMessage.style.visibility = "visible"
    }
}


///////////////////////////////////////////////////
///////////////////////////////////////////////////
