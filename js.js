const canvas = document.querySelector("#area");
const dvdImage = document.querySelector("#dvd");

const DimFormaX = 100;
const DimFormaY = 90;
const color = "red";
const speed = 3;

let WindowWidth = window.innerWidth;
let WindowHeigth = window.innerHeight - 50;
let YIncrimenter = Math.random(-10, 10) * speed;
let XIncrimenter = Math.random(-10, 10) * speed;
let AreaX = 0;
let AreaY = 0;

canvas.setAttribute("width", WindowWidth);
canvas.setAttribute("height", WindowHeigth);

(async () => {
    let context = canvas.getContext('2d');
    let yControl = 0;
    let xControl = 0;


    //context.fillRect(xControl, yControl, DimFormaX, DimFormaY);
    //context.fillStyle = color;
    context.drawImage(dvdImage, xControl, yControl, DimFormaX, DimFormaY)

    setInterval(async () => {
        if (((yControl + DimFormaY) >= WindowHeigth) && YIncrimenter > 0) {
            YIncrimenter *= -1
        }

        if (((xControl + DimFormaX) >= WindowWidth) && XIncrimenter > 0) {
            XIncrimenter *= -1
        }

        if ((yControl <= 0) && YIncrimenter < 0) {
            YIncrimenter *= -1
        }

        if ((xControl <= 0) && XIncrimenter < 0) {
            XIncrimenter *= -1
        }

        yControl += YIncrimenter
        xControl += XIncrimenter
        context.clearRect(0, 0, canvas.width, canvas.height);
        //context.fillRect(xControl, yControl, DimFormaX, DimFormaY);
        context.drawImage(dvdImage, xControl, yControl, DimFormaX, DimFormaY)
    }, 0.01)


})()