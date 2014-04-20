JavaScript de 0 a 100
=====================

Objetos
-------

### Eventos

El objetivo de este ejercicio es utilizar binds/listeners a eventos para poder crear un evento personalizado.
El evento que crearemos permitirá el siguiente comportamiento: al realizar 3 clicks en un objeto (tecnicamente 2 clicks y un mousedown) activaremos un "drag&drop", de modo que podamos desplazar el objeto por pantalla y soltarlo en una nueva posición. Estos tres clicks tendrán que ser consecutivos y haberse realizado en un corto periodo de tiempo (por ejemplo 2 segundos)

### ¿Cómo?

Este ejercicio será planteado nuevamente en la tercer sesión del taller, dandole una estructura mucho más concreta. Para esta sesión se deja libertad total, de modo que puedes implementarlo de la manera que prefieras, aunque se recomienda hacerlo dentro de la función definida en el fichero ejercicio.js, de modo que no se contamine el global scope.

Puedes implementarlo solo para ratón o para pantalla táctil... o ambos.

**Dado que en la próxima sesión hablaremos más de jQuery se recomienda NO hacer este ejercicio ni con esa ni con ningúna librería**

### ¿Dónde?

Como explicamos en la raiz de este repositorio puedes hacerlo de muchas maneras: con git, descargando un .zip, directamente editando online...

**Online: [jsbin/gafeg](http://jsbin.com/gafeg/1/edit?html,js,output "1-objetos/eventos - jsbin")**

### Te puede venir bien

Simplemente con usar los eventos mousedown, mouseup y mousemove, Date de JS y algo de matemáticas puedes realizar el ejercicio. También puedes ampliar el ejercicio usando touchstart, touchmove y tochend, css transitions, etc.