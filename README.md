# Backend con Node.js, Express y MongoDB

Este es un backend que gestiona las colecciones **Usuarios** y **Productos** en una base de datos MongoDB. Permite realizar operaciones CRUD y cuenta con un sistema de contadores de registros y operaciones realizadas.

##  Instalación y ejecución

###  1 **Clonar el repositorio**
```bash
git clone https://github.com/AdrianGonzo/AG_1erParcialSis215.git
cd backend
```
###  2 **Instalar Dependencias**
Ejecutar en el proyecto las dependencias con el comando
```bash
npm install express mongoose dotenv --save-dev nodemon
```
###  3 **Configurar .env**
```.env
PORT=3000
MONGO_URI=TU_CADENA_DE_CONEXION_ATLAS
```
###  4 **Inciar servidor**
```bash
npm run dev
```
### ENDPOINTS
POST	/usuarios	Crear un usuario
GET	/usuarios	Obtener todos los usuarios
PUT	/usuarios/:id	Actualizar un usuario por ID
DELETE	/usuarios/:id	Eliminar un usuario por ID
POST	/productos	Crear un producto
GET	/productos	Obtener todos los productos
PUT	/productos/:id	Actualizar un producto por ID
DELETE	/productos/:id	Eliminar un producto por ID
GET	/contadores	Obtener el número total de usuarios y productos
GET	/operaciones	Obtener el total de operaciones realizadas

