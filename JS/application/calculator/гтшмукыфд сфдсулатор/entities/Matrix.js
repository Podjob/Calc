class Matrix {
    constructor(Values=[]){
        this.Values=[];
        Values.forEach((arr,i) => {
            this.values[i] = [];
            arr.forEach(elem=>this.values[i].push(elem))
        });
    }
}