// import using require 
//es6 default import syntax
import Shape from './shape';
// declare classe

// export class using module.exports
export default class Circle extends Shape {
    constructor() {
        // first line of subclass constructor should call superclass constructor with appropriate parameter (Super)
        super();
    }
    calculateArea() {
        console.log("Area of circle: "+ this.color);
        return 3.14*5*5;
    }
}
