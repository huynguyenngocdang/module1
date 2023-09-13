class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
        this.getRadius = () => radius;
        this.getArea = () =>  (Math.PI * radius * radius).toFixed(2);
    }
}

function getData(inputRadius) {
    let resultPrint = "";
    if (inputRadius > 0) {
        let thisCircle = new Circle(inputRadius);
        let radius = thisCircle.getRadius();
        let area = thisCircle.getArea();
        resultPrint = "Radius: " + radius + " Area: " + area;
    } else {
        resultPrint = "Input invalid"
    }
    document.getElementById("result").innerHTML = resultPrint;
}