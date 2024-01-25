/**
 * *La parte dentro de los 3 - es donde va el js
 * *Los estilos tienen scope
 * *En ./layouts se colocan los componentes que envuelven a otros componentes 
 * *El layout tiene una interface para definir el tipo de datos que queremos oobtener
 * *Para obtener el dato o propiedad simplemente hacemos un destructuring con el nombre de la propiedad de Astro.props
 *  ?Astro => variable global que funciona en todos los archivos .astro y que contiene diferente info
 * *Los estilos también pueden ser globaless con is:global
 * *Astro no tiene boilerplate
 * *npm astro add --help => Lista cosas para añadir al proyecto 
 * *Para crear una nueva vista simplemente se crea un nuevo archivo en la carpeta pages
 * *<slot /> => es el equivalente a children en react
 * *color-scheme: dark light; => Coloca por defecto las letras en blanco ya que considera que el bg es oscuro
 * *A los slots se les puede colocar un valor por defecto
 * *Es compatible con .md
 * *Para hacer fetching de datos se realiza de la misma manera que en js
 *  ?En este caso como usamos ts hacemos un tipo para los valores que devuelve la api y así tener acceso a las sugerencias
 * *En astro se pueden utilizar classlist y se le pueden pasar un array de clases al nodo de html
 * *Y para clases condicionales se le pasa un obj en donde se le pone en la key las clases y en el value se le coloca la condición
 * *Para crear rutas dinámicas al nombre de la página se lo encierra en corchetes y se le coloca la extensión de astro
 * *Ya que las rutas son estáticas estas deben ser llamadas con la fn getStatiscPaths() y en ella se deberán marcar todas las rutas que se pueden generar
 * *Lo de las páginas estáticas es correcto hacerlo cuando no se crearán más de 100 páginas
 * *Para hacer dinámicas las páginas se deben crear del lado del servidor las distintas vistas
 *  ?Para el server side rendering se configura el astro config y se le activa el modo server del output
 *  ?Se le puede una configuració para que sea hybrid y a cada vista que será por parter del server colocarle el prerender como false o se puede hacer todo estático o de servidor
 * *Para una animación en el cambio de páginas se puede colocar el ViewTransitions en el head del html y eso se encarga de manera automática de animar las transiciones de las vistas
 * *Para agregar dinamismo a los componentes hay que pasarle que el cliente lo carge cuando (Colocar opción deseada) client:visible
 * *Para hacer persistencia de la info se debe colocar un transition:persist en el nodo contenedor de la parte dinámica
 */  