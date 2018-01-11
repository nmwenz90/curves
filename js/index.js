var shift = 200;
var curve1 = 40;
var curve2 = 200;
var curve3 = 150;
//var loopy = [40, 200, 150];
function preload() {
  myFont = loadFont('http://res.cloudinary.com/dvwvkt7iq/raw/upload/v1515555978/LaBelleAurore_e9nj72.ttf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    
    
//    scale(.85);
    
    function curval(c){
        fill(curve1, 150, 200);
        curve(50, 60, 20, 70, c, 450, 20, 70);
    }
    
    for(var i = 0; i < 600; i++){
        curval(i);
        curveTangent(5, 73, 73, 15, .427);
    }
    
    function bez(q) {
        fill(curve2,50,230);
        strokeWeight(2/20);
        bezier(600, 450, q, 100, 1000, q, 1400, 200);
    }
    for( var j = 0; j < 900; j++){
        bez(j);
    }
    
    function mover(mv,mv2){
       fill(curve3,200,mv2, .9);
    beginShape();
    curveVertex(600, mv);
    curveVertex(200,900);
    curveVertex(700, 700);
    
    curveVertex(200, 550);
    
    endShape(CLOSE); 
    }
    
    for(var k = 0; k < shift; k++ ){
        for(l = 0; l < k; l++){
            
    mover(k, l);
            
            
        }
    }
//  

    
    
    
    
}



    

function draw() {
    
    var col1 = map(mouseX, windowHeight, windowWidth, 50,70)
        fill(col1);
    
    textFont(myFont);
    textSize(100);
    text('curves.', 450, 570);
//    textFont();
    
}
//
//function mousePressed() {
//  if (loopy[0] === 40){
//      curve1+50;
//  }
//    if (loopy[1] === 200){
//      curve2+ 50;
//  }
//    if (loopy[2] === 150){
//      curve3+50;
//  }
//}
