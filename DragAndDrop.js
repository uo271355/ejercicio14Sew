"use strict";
class Bombilla {
	constructor(){

	}
	muevete(){
		$("#fresa").draggable();
		$("#platano").draggable();
		$("#cerezas").draggable();
		$("#piña").draggable();
		$("#dropzone").droppable({
            drop: function(event, ui) {
                $(this).css('background', 'rgb(0,200,0)');
            },
            over: function(event, ui) {
                $(this).css('background', 'orange');
            },
            out: function(event, ui) {
                $(this).css('background', 'cyan');
            }
        });
		$("#dropzone1").droppable({
            drop: function(event, ui) {
                $(this).css('background', 'red');
            },
            over: function(event, ui) {
                $(this).css('background', 'orange');
            },
            out: function(event, ui) {
                $(this).css('background', 'cyan');
            }
        });
	}
}
var bombilla=new Bombilla();
bombilla.muevete();