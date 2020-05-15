function get2DContext(id){

        let canvas = document.getElementById(id);
        let context = canvas.getContext("2d");
        return context;

}

function head(){

   let context = get2DContext("can");
   context.beginPath();
   context.fillStyle = "yellow";
   context.lineWidth = 3;
   context.arc(100, 100,75,Math.PI,Math.PI*4);
   context.stroke();
   context.fill();
   context.beginPath();
   context.fillStyle = "black"
   context.arc(100, 100,75,Math.PI,Math.PI*4);
   context.fill();
   




}

/*function canvasApp() {

    let canvas = get2DContext("can");
    head(canvas);
    
}*/

function main(){

   head();
}

main();