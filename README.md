# Data Lovers

## Índice

- [1. Preámbulo](#1-preámbulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Metodología de trabajo](#3-metodología-de-trabajo)
- [4. Actualización ](#4-actualización)

---

## 1. Preámbulo

<h1>¡Bienvenidos al mundo Ghibli!</h1>

![](https://i.pinimg.com/originals/da/07/f0/da07f06bb1634c3065cc832fcbbaae54.jpg)

Este sitio está dedicado a todos los amantes de las películas de Studio Ghibli, donde podrán disfrutar de una amplia gama de información, noticia y contenido multimedia relacionado con las películas del estudio. Desde los mundos mágicos y maravillosos de "El viaje de Chihiro" y "Mi vecino Totoro" hasta los relatos conmovedores y emocionales de "La tumba de las luciérnagas" y "El viento se levanta", Studio Ghibli ha dejado una huella indeleble en el mundo del cine y la cultura popular.

##### Esperamos que disfruten su visita y que esta sea el comienzo de una emocionante aventura en el mundo de Ghibli. ¡Bienvenidos al mundo de la magia y la creatividad!

## 2. Resumen del proyecto

El 15 de Junio de 1985 se fundó el estudio japonés de animación **Studio Ghibli**,el cual es conocido por sus largometrajes y cortometrajes animados que lo han llevado a ser conocido como uno de los mejores estudios de animación del mundo, siendo nominados y ganadores de un sinfin de galardones, incluyendo los famosos premios Oscar.

El presente proyecto se formó con la idea de traer al usuario información útil, llamativa y fácil de comprender a los usuarios, ya sea que estos tengan o no conocimiento de la existencia del estudio.

Para lo anterior se ha desarrollado una página web de almacenamiento de datos que incluye las películas producidas por el estudio, detallando su argumento principal, principales personajes, locaciones y vehículos. En esta interfaz, el usuario podrá buscar y encontrar las películas de manera azarosa u ordenada, considerando como principales criterios de filtro el año de lanzamiento, director, productor o puntaje.

![](https://img.europapress.es/fotoweb/fotonoticia_20140804175156-634869_600.jpg)

## 3. Metodología de trabajo

##### Repositorio

El proyecto de desarrollo web se basa en la información almacenada en un archivo `JSON`, la interfaz y estética se realizaron a través de la edición de archivo `HTML`y`CSS` y la funcionalidad se dió a través del lenguaje `Javascript`.

Todo esto se implementó en un repositorio de Github para trabajar de manera colaborativa.

_Es importante considerar que dentro de la planificación se consideró No usar ningún tipo de librería o framework en el desarrollo_

#### Planificación

Se utilizó la plataformar Trello para Planificar la realización del trabajo, para esto se dividió el tablero en tareas a realizar, metas y tareas realizadas por Sprint, considerando la durabilidad de cada Sprint en periodos de 1 semana.

Cabe destacar que todo esto se basó en un backlog de usuario por lo que el primer paso a realizar fue la creación de un formulario con el objetivo de tener una idea de qué tan conocido es el estudio y cuáles son las películas más nombradas por el público.

#### Historias de Usuario

Una vez recolectadas las respuestas del formulario, se procedió a establecer las principales historias de usuario del proyecto las cuales fueron:

1. Creación de la página y definicón de estilos:
   Se consultó a los usuarios la necesidad de tener una página con las características mencionadas anteriormente y se pidieron sugerencias de funcionalidad y datos que se creyeran útil.

![](https://i.postimg.cc/FRZKjbp8/Funcionalidades.jpg)

> Respuestas asociadas a la información que el usuario gustaría ver en la página.

Luego de esto se comenzó a dar estructura al proyecto a través del archivo HTML y estilos a través del archivo CSS.
Los usuarios tuvieron oportunidad de ver la base y sugirieron cambiar algunas tonalidades de la paleta de colores para que sea más agradable a la vista .

2. Despliegue de las películas más conocidas en el menú de inicio.

Se consultó a través del formulario cuál era la primera película en la que pensaban al mencionar los estudios Ghibli .
Las respuestas recopiladas se utilizaron para posteriormente filtrar la data y desplegar la imagen del Poster promocional de las 5 películas más nombradas junto a su descripción.

Las películas más mencionadas fueron:

- Mi vecino Totoro (My neighbord Totoro)
- La Princesa Mononoke (Princess Mononoke)
- El Viaje de Chihiro (Spirited away)
- El castilo ambulante (Howl´s Moving castle)
- Ponyo la sirenita (Ponyo on the cliff by the sea)

![](https://i.postimg.cc/FRg4M9JL/Grafico-Peliculas.jpg)

> Resultado de las películas más nombradas en el formulario

3. Despliegue de todas las películas

Debido a que los usuarios solicitaron poder averiguar la información general de cada una de las películas, se generó un menú en que se despliegue el poster de cada una de las películas del estudio Ghibli. Para hace más fácil la elección de la película a investigar, se decidió crear un botón de búsqueda por carácteres, uno para filtar las películas por cada uno de los directores del estudio y un botón para ordenar la data en orden alfabético, cronológicamente y según la puntuación recibida por la plataforma Rotten tomatoes.

4. Despliegue individual de cada película

Se creó un menú de despliegue de todas las películas para que el usuario pueda conocer la información general de cada una.
Considerando que una de las opciones más votadas al momento de sugerir funcionalidad fue la de información general, se despliega una ventana modal en la que el usuario puede ver el título, reseña, año de lanzamiento , director y productor de cada película junto con tarjetas de los principales personajes de cada una de las películas.

5. ¿Dónde puedo ver las películas del estudio Ghibli?

Para que el usuario tenga la información de las plataformas en las que pueden ver las películas se agregó las redes sociales del estudio Ghibli al pie de página y, además, se agregó alguna información en la sección de noticias.

##### Prototipos

En base a los resultados del formulario y las historias de usuario se decidió comenzar a crear la parte visual del proyecto, generando un prototipo de **baja fidelidad** en el que se defina la manera en que se responderá a las peticiones de usuario:

![](https://i.postimg.cc/Vkq9988V/BF1.jpg)

![](https://i.postimg.cc/qMYDD0WB/BF2.jpg)

![](https://i.postimg.cc/5j3BVBnM/BF3.jpg)

![](https://i.postimg.cc/xc1KTX4N/BF4.jpg)

![](https://i.postimg.cc/jL3yWRpg/BF5.jpg)

![](https://i.postimg.cc/Bj8HHdsq/BF6.jpg)

> Bosquejo de prototipo de baja fidelidad realizado en Figma

Una vez realizado el prototipo de baja fidelidad se comenzar a realizar su contraparte de **alta fidelidad** para definir los estilos, tamaños y fuentes a utilizar junto con la funcionalidad que se dará a la página.

![](https://i.postimg.cc/WdFjV7mW/AF1.jpg)

![](https://i.postimg.cc/nXyxhQ0H/AF2.jpg)

> Bosquejo de prototipo de alta fidelidad realizado en Figma

#### Ejecución

##### Funcionalidad

Las principales funciones

# 4. Actualización

La idea del proyecto fue generar una página dinámica que pueda seguir mejorando su funcionalidad e interfaz con el paso del tiempo, es por esto que ahora que se tiene el prototipo básico funcionando, se espera seguir actualizando la página para completar la implementación asociada al prototipo de alta fidelidad y seguir maquetando mejoras asociadas a la necesidad de los usuarios que estén utilizando el servicio.

###### Derechos de autor reservados a nombre de Mariem Padrón, Nelly Navaro e Isabella Monsalves.

> Contacto: mjpadron11@gmail.com; nlly.rro@gmail.com; ester.isabella.m@gmail.com.
