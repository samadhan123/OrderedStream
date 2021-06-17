const JsHashMap = function(mapSize=20) {
    this.hashMaps = new Array(mapSize);
    this.mapSize = mapSize
};

JsHashMap.prototype.hash= function (key){
    return key.toString().length % this.size;
}
JsHashMap.prototype.get= function(key){
    let index = this.hash(key);
    if(!this.hashMaps[index])return null
 
    for(let hashMap of this.hashMaps[index]){
         // key
      if(hashMap [0] === key){
         // value
        return hashMap [1]
       }
    }
  
}
JsHashMap.prototype.add = function (key, value){
    let index = this.hash(key);    
    if(!this.hashMaps[index]){
        this.hashMaps[index] = [];
    }
    this.hashMaps[index].push([key,value])
    return index;
}
JsHashMap.prototype.update = function (key,value){


    let index = this.hash(key);
    if(!this.hashMaps[index])return null
 
    for(let hashMap of this.hashMaps[index]){
         // key
      if(hashMap [0] === key){
         // value
        hashMap [1] = value;
       }
    }


}
JsHashMap.prototype.remove= function (key){
    let index = this.hash(key);
    if(!this.hashMaps[index])return null
 
    for(let hashMap of this.hashMaps[index]){
         // key
      if(hashMap [0] === key){
         // value
        hashMap [1] = undefined;
       }
    }
   
}