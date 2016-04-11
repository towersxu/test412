/**
 * Created by towersxu on 16/4/7.
 * 扩展 Array 方法 extProc
 */

Array.prototype.extProc = function(){
  var uniqueArr = Array.prototype.unique.call(this);
  uniqueArr.sort(function(x,y){
    if(x.length<2 || y.length<2){
      return 0;
    }
    return x.substr(-2,1) >= y.substr(-2,1);
  });
  return uniqueArr;
};
//将排序和去重分离,有利于复用.
Array.prototype.unique = function(){
  var n = {},r=[];
  for(var i = 0; i < this.length; i++) {
    if (!n[this[i]]) {
      n[this[i]] = true;
      r.push(this[i]);
    }
  }
  return r;
};
var a = ["kitty","puppy","swan","penguin","giraffe","penguin","swan","dolphin"];
console.log(a.extProc());