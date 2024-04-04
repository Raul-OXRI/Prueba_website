 // Variables globales
 var timeout; // Variable para almacenar el temporizador

 // Función para ocultar la barra de desplazamiento después de un período de inactividad
 function ocultarBarraDesplazamiento() {
     document.getElementById('contenido').classList.add('sin-desplazamiento');
 }

 // Función para reiniciar el temporizador cuando hay actividad
 function reiniciarTemporizador() {
     clearTimeout(timeout); // Reinicia el temporizador
     timeout = setTimeout(function() {
         document.getElementById('contenido').classList.remove('sin-desplazamiento');
     }, 3000); // Cambia este valor al tiempo deseado (en milisegundos)
 }

 // Agregar oyentes de eventos para detectar actividad
 document.addEventListener('mousemove', reiniciarTemporizador);
 document.addEventListener('keypress', reiniciarTemporizador);

 // Inicializar el temporizador
 reiniciarTemporizador();