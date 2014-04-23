(function() {


	function drag(objeto, timeout)
	{

		var ultimoClick = false;
		var obj = objeto;

		obj.style.position = "absolute";

		var dragObject  = null;
		var mouseOffset = {x: 0, y: 0};

		document.onmousemove = mouseMove;
		document.onmousemove = mouseMove;
		document.onmouseup	 = null;

		function mouseCoords(ev){
			if(ev.pageX || ev.pageY){
				return {x:ev.pageX, y:ev.pageY};
			}
			return {
				x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
				y:ev.clientY + document.body.scrollTop  - document.body.clientTop
			};
		}

		document.onmousedown = handleDown;


		function handleDown(ev)
		{
			if(ultimoClick == true) {
				mouseOffset = getMouseOffset(obj, ev); 
				dragObject = obj;
				document.onmouseup = mouseUp;
			}
			else {
				ultimoClick = true;
				document.onmouseup	 = null;
				setTimeout(function() { ultimoClick = false; }, timeout);
			}

		}

		function getMouseOffset(target, ev){
			ev = ev || window.event;
			var docPos    = getPosition(target);
			var mousePos  = mouseCoords(ev);
			return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
		}
		function getPosition(e){
			var left = 0;
			var top  = 0;
			while (e.offsetParent){
				left += e.offsetLeft;
				top  += e.offsetTop;
				e     = e.offsetParent;
			}
			left += e.offsetLeft;
			top  += e.offsetTop;
			return {x:left, y:top};
		}
		function mouseMove(ev){
			ev           = ev || window.event;
			var mousePos = mouseCoords(ev);
			if(dragObject){
				dragObject.style.top      = (mousePos.y - mouseOffset.y) + "px";
				dragObject.style.left     = (mousePos.x - mouseOffset.x) + "px";
				return false;
			}
		}
		function mouseUp(){
			dragObject = null;
		}
	}

	return drag(document.querySelectorAll(".objeto")[0], 1000);
	

})();