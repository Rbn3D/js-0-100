// Añade al objeto String el metodo espaciar() con la funcionalidad deseada

String.prototype.espaciar = function () {
	var str = "";

	for (var i = 0; i < this.length; i++) {
		str+= this.charAt(i) + " ";
	};

	return str.substring(0, str.length-1);
}

console.log('Esto es una prueba'.espaciar());
console.log(String('Y esto es otra prueba').espaciar());