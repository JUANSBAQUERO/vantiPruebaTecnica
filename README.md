# VantiApp

VantiApp es una aplicación CRUD (Create, Read, Update, Delete) construida con Angular que permite realizar operaciones básicas de gestión de datos.

## Características

- Permite crear, leer, actualizar y eliminar datos a través de una interfaz de usuario intuitiva.
- Utiliza librerías como Bootstrap, Ngx-datatable, CryptoJS y SweetAlert para una experiencia de usuario mejorada.
- Ofrece una estructura bien organizada y modularizada para facilitar el mantenimiento y la escalabilidad del código.

## Librerías utilizadas

- **Bootstrap**: Utilizado para los estilos y la estructura visual de la aplicación.
- **Ngx-datatable**: Utilizado para el manejo de tablas y presentación de datos tabulares.
- **CryptoJS**: Utilizado para el manejo de JWT (JSON Web Tokens) en la aplicación.
- **SweetAlert**: Utilizado para mostrar alertas y notificaciones al usuario en caso de errores u otros eventos importantes.

## Variables de entorno

En el proyecto se utilizan variables de entorno para configurar ciertos aspectos de la aplicación, como URLs de API, claves de acceso, etc. Asegúrate de configurar correctamente estas variables antes de ejecutar la aplicación en diferentes entornos.

### Ejemplo de variables de entorno

- **production**: Este dato es para saber si va para produccción o no.
- **apiUrll**: URL de la API utilizada por la aplicación.,
- **secretkey**: Clave secreta utilizada para firmar y verificar los JWT.
- **user**: Usuario para autenticación y ingreso a la app.
- **password**: Contraseña para autenticacion y ingreso a la app.

## Instalación

Para instalar y ejecutar la aplicación localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del proyecto utilizando el comando `npm install`.
3. Configura las variables de entorno según sea necesario.
4. Inicia la aplicación con el comando `ng serve`.
5. Accede a la aplicación en tu navegador web en la dirección `http://localhost:4200`.

## Despliegue en Netlify

La aplicación VantiApp ha sido desplegada con Netlify. Puedes acceder a la versión desplegada en el siguiente enlace:

`https://cute-semolina-d10f57.netlify.app/`

## Autor

Juan Sebastian Baquero Moreno
