class MatrixCalculator extends RealCalculator {
    add(a, b) {
        const calc = this.get(a.values[0][0]);
        return new Matrix(a.values.map(arr, i => arr.map(elem, j => calc.add(elem, b.values[i][j]))));
    }

    one(length, elem) {
        const calc = this.get(elem);
        const values = [];
        for (let i = 0; i < length; i++) {
            values.push([]);
            for (let j = 0; j < length; j++) {
                values[i][j] = (i === j) ? this.type(calc, elem, 'one') :
                    this.type(calc, elem, 'zero');
            }
        }
        return new Matrix(values);
    }

    zero(length, elem) {
        const calc = this.get(elem);
        const values = [];
        for (let i = 0; i < length; i++) {
            values.push([]);
            for (let j = 0; j < length; j++) {
                    this.type(calc, elem, 'zero');
            }
        }
        return new Matrix(values);
    }
    sub(a,b){
        const calc = this.get(a.values[0][0]);
        return new Matrix(a.values.map(arr, i => arr.map(elem, j => calc.sub(elem, b.values[i][j]))));
    }
    prod(a,p){
        const calc = this.get(a.values[0][0]);
        return new Matrix(a.values.map(arr, i => arr.map(elem, j => calc.prod(elem, p))));
    }
    mult(a, b){
        const calc = this.get(a.values[0][0]);
        let c = new Matrix(a.values);
        for(let i=0; i<a.length; i++){
            for(let j=0; j<a.length; j++){
                let u= new Matrix();
                for(let k=0; k<a.length; k++){
                    c.values[i][j]=calc.add()
                }
            }
        }
    }
} 