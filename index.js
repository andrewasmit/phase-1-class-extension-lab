class Polygon{
    constructor(arr){
        this.arr = arr;
    }

    get countSides(){
        return this.arr.length;
    }

    get perimeter(){
        return this.arr.reduce((previous, current)=>{
          return  previous + current;
        })
    }
}

class Triangle extends Polygon{
    get isValid(){
        const a = this.arr[0];
        const b = this.arr[1];
        const c = this.arr[2];
        if (a+b<c || a+c <b || b+c<a){
            return false;
        } else return true;  
    }
}

class Square extends Polygon{
    get isValid(){
        const a = this.arr[0];
        const b = this.arr[1];
        const c = this.arr[2];
        const d = this.arr[3];
        if (a === b && a===c && a===d){
            return true;
        } else return false;
    }

    get area(){
        return this.arr[0]*this.arr[0];
    }
}