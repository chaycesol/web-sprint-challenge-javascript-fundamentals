// 1. Copy and paste your prototype in here and refactor into class syntax.

/* ===== Prototype Refactoring ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor == */
  
class CuboidMaker{
    constructor(attributes){
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}


  /* == Step 2: Volume Method ==  */
//   CuboidMaker.prototype.volume = function(){
//     return this.length * this.width * this.height;
//   }; ***no longer needed since we are refactoring into a class

  /* == Step 3: Surface Area Method ==  */
  
//   CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
//   }; ***no longer needed since we are refactoring into a class

  /* == Step 4: Create a new object that uses CuboidMaker ==  */
  
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });
   

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


// Initializing constructor and methods for CubeMaker inheriting from CuboidMaker
class CubeMaker extends CuboidMaker{
    constructor(attributes){
      super(attributes)
    }
    cubeVolume(){
        return Math.pow(this.length, 3);
    };
    cubeSurfaceArea(){
        return (6 *  Math.pow(this.length, 2));
    };
}

// creating new CubeMaker object
const cubicle = new CubeMaker ({
    length: 5,
    height: 5,
    width: 5,
});
  
// return statements testing out logic for CubeMaker methods and if it inherited attribs from Parent CuboidMaker
console.log(cubicle.cubeVolume()); // should equal 125
console.log(cubicle.cubeSurfaceArea()); // should equal 150

console.log(cubical.volume()); // checking to see if CubeMaker also inherited methods from CuboidMaker - should equal 125