
let OrderedStream = function(n) {
    this.currentIndex = 1;
   this.arr = new Array(n);
};
OrderedStream.prototype.fnInsert=function (id, value){
       this.arr[id] = value;    
       const result = [];
       while(this.arr[this.currentIndex] !== undefined) {
           result.push(this.arr[this.currentIndex]);
           this.currentIndex ++;
       }
       
       return result;
   }