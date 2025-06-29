var wholeSchool=[]




function setup(){
  createCanvas(500,500);
  background(90,90,190);
}


function getIndex(person){
  var personIndex=.5;
  for(var j=0;j<wholeSchool.length;j++){
    if(wholeSchool[j]===person){
      personIndex=j;
    }
  }
  if(personIndex===.5){   //detected a new person
    
  }
}


