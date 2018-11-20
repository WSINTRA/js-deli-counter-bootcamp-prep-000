<<<<<<< HEAD
 var lineNumber = 0;
function takeANumber(name,line){

  var script = `Welcome, ${line}. You are number ${(name.length+1)} in line.`;
  name.push(line);
  ++lineNumber;
=======
var lineNumber = 0
function takeANumber(lineNumber,name){
++lineNumber;
  var script = `Welcome, ${name}. You are number ${lineNumber} in line.`;
  katzDeli.push(name);
>>>>>>> d3a65a4e0782899fd8194ac6ff74ec8c4833cac4
  return script

}
function nowServing(katzDeliLine){
  if (katzDeliLine == 0) {
    return "There is nobody waiting to be served!";
  }
  else {

<<<<<<< HEAD
    return `Currently serving ${katzDeliLine.shift()}.`
}
}
function currentLine(katzDeliLine){
  var kLen = katzDeliLine.length,i;
  if (katzDeliLine.length==0){
    return "The line is currently empty.";
  }

  else {
    i =0;
    var speak = `The line is currently: `;

    while (i < kLen) {
      if (i==kLen-1){
        speak += `${[i+1]}. ${katzDeliLine[i]}`;
i++
      }
else {
  speak += `${[i+1]}. ${katzDeliLine[i]}, `;
  i++
}
}
return speak;
  }
=======
    return `${name}`
}
}
function currentLine(){

>>>>>>> d3a65a4e0782899fd8194ac6ff74ec8c4833cac4
}
