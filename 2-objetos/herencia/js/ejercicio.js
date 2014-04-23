var BWFilter = function(selector) {
	VideoFilter.call(this, selector);
};

BWFilter.prototype = new VideoFilter();

BWFilter.prototype.applyFilter = function(context) { 
	
	var cw = this.canvas.width();
	var ch = this.canvas.height();

	var imgd = context.getImageData(0, 0, cw, ch);

	var pix = imgd.data;
	for (var i = 0, n = pix.length; i < n; i += 4) {
		var grayscale = pix[i  ] * .3 + pix[i+1] * .59 + pix[i+2] * .11;
		pix[i  ] = grayscale;   // red
		pix[i+1] = grayscale;   // green
		pix[i+2] = grayscale;   // blue
	}
	context.putImageData(imgd, 0, 0);
};

/*
 * Implementa un filtro que herede de VideoFilter
 * y sobreescriba su metodo ApplyFilter generando
 * una copia en blanco y negro del vídeo original
 */

$(function(){
	var filter = new BWFilter();
	filter.init();
});