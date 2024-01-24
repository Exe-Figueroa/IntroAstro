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
 */  