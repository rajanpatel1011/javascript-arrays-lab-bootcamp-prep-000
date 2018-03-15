const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(name){
kittens.push(name);
return kittens;
} 
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveKitten(name){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
 
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function appendKitten(name){
  var oldArrary = kittens
  var newArrary = kittens.concat(name);
  return newArrary;
}
function prependKitten(name){
  var oldArrary = kittens
  var newArrary = [name,...kittens]
  return newArrary;
}
function removeLastKitten(){

    kittens.pop();
    return kittens;

}
function removeFirstKitten(){
  var oldArrary = kittens;
  var newArrary = kittens.shift();
  return newArrary;
}
