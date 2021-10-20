# **_Proyecto ReacJS E-commerce Ferretería Alvear_**

## Descripcion

Este proyecto fue creado para el curso de ReacJS de CoderHouse, como parte de entrenamiento y evaluación de dicha capacitación.
La aplicación fue creada para adaptar y complementar ventas de un local mediante el método E-Commerce, en este caso para compras on-line de una ferretería.

## Instalación
El proyecto fue creado con Create React App, se deberá clonar y descargar el repositorio.
El proyecto se inicia con npm start. Luego del inicio del mismo se abrirá en el navegador http://localhost:3000 para la visualización del mismo.
Se requiere la instalacion de NodeJs.
##### ** Para mas información **
* [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
* [React documentation](https://reactjs.org/).

## Dependencias
* React 
* React-Router-DOM
Se utiliza componentes de esta dependencia para lograr un enrutamiento y navegación optima sin refresco de pagina dentro de la app.
* Bootstrap / React Boostrap 
Se utiliza estas librerías para darle estilos básicos al proyecto en general.
* React-Hook-Form
Se utiliza esta dependencia para la implementación del formulario de carga de datos ya que brinda una mejor optimización del código.
* Firebase
Dicha dependencia se utiliza para almacenamiento, tanto de productos como de ordenes generadas por el usuario.
## Documentación
### _Utilización de la app por parte del usuario_
Se ingresa a la web a través del Home, y mediante la barra de navegación se accede al catalogo, en donde te ingresa al total de productos o a una categoría especifica. (en esta versión solo hay 2 categorías). El usuario elige el producto, ingresa a su detalle  donde puede seleccionar la cantidad, mediante un selector y agregarlo al carrito. Además se incluye botón para volver al catalogo o ir al carrito, para finalizar la compra. En el carrito tiene opciones de vaciarlo, eliminar item, seguir comprando o finalizar la compra, la cual desplegara un modal con formulario para que el usuario complete sus datos. Una vez completado se envían los datos y se recibe la confirmación de la solicitud con el detalle y numero de orden. Una vez cerrada la orden se retorna al home.

#### Demo

![Demo](https://github.com/LucasVenezia/Carrito_de_Compras/blob/master/public/img/GifApp.gif "Demo App Ferretería")

## **Futuras actualizaciones**
* Diseñar y completar Home
* Diseñar y completar FAQ
* Diseñar y completar Contacto
* Diseñar y completar el Log In
* Diseñar y completar el Footer
* Estilos y maquetado en general
* Realizar validaciones mas estrictas al formulario
