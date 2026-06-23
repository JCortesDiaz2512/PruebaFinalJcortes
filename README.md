Mi Proyecto Pokédex – prueba final

De qué trata este proyecto?
Es una aplicación web interactiva que simula el registro de un Entrenador Pokémon. Consta de dos pantallas principales en el mismo archivo:
Es una pagina web simple con un registro para un entrenador pokemon, que tiene dos páginas, la primera es el formulario de registro donde el usuario o entrenador pones sus datos para poder ingresar, como el nombre, correo, edad y su contraseña. La otra pagina es la pokedex o un intento de esta.
orden
Para que mi proyecto no este desordenado cree diferentes carpetas para tener mas ordenado, por ejemplo el diseño esta en la carpeta css, el script esta en mi carpeta json, el json de los pokemon donde están las imágenes y sus demás datos están en la carpeta pokemon, y el index con el app no están en carpetas
Qué hace mi código? 
En el formulario y las validaciones:
En el formulario es lo mismo que hemos trabajado un inicio de sesión que el usuario tiene que rellenar con sus datos, mientras se van validando, como por ejemplo en nombre el usuario tiene que poner 4 letras sino no le deja ingresar, en correo funciona igual solo que tiene que tener un  @ y un .com para contar como correo, en edad como es una pokedex el usuario o entrenador tiene que tener 10 años mínimo para poder ingresar y en contraseña y en su confirmación solo tiene que tener 6 letras mínimo y que sean igual en su validación.
Carga de Datos:
Cuando enviamos el formulario, usamos un preventdefault para que no se recargue la pagina y el script usa el fetch en mi carpeta pokemon para agregar las imágenes y los datos de la pokedex

Funcionamiento:
Creación dinámica: Las tarjetas de los pokemon no existen en mi HTML, por eso el script las crea una por una desde cero usando el código document.createElement().
Capturar/appendChild: Al hacemos clic en el botón Capturar, el script duplica la tarjeta y la mete dentro del contenedor Mi Equipo Pokémon que esta al final de la página.
Liberar/remove: Cada tarjeta del equipo tiene un botón liberar, que cuando lo apretamos borramos la tarjeta sin alterar nada

