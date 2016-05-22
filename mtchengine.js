//====MTC Engine v0.0.1 - Maio 2016===


//init
$(document).ready(function() {
		var contexto1 = new Context();
		contexto1.viewLog();
});


//Logical functions

// Objeto contexto - possui todos os métodos estáticos do contexto
var Context = function (){

}

Context.prototype.viewLog = function(){
	console.log("MTC V1 - 2016-05-15 - About this Project");
	console.log("...");
	console.time('someFunction');
	console.timeEnd('end');
}


Context.prototype.sampleStimulus = function(){

}

Context.prototype.comparisonStimulus = function(){

}

Context.prototype.timeOfSession = function(){

}


var Match = function(id,sampleStimulus,comparisonStimulus) {
  this.id = id;
  this.sampleStimulus = sampleStimulus;
  this.comparisonStimulus = comparisonStimulus;
};



//Render functions

//Model functions