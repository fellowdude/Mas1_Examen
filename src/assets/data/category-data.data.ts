import { TData } from "../../app/shared/types/data.type";

export const DATA: TData = {
  php: {
    banner: {
      title: 'PHP',
      backgroundImage: 'php_banner'
    },
    descriptionList: [
      {
        title: '¿Qué es PHP y cómo funciona?',
        contentHTML: `
          <p>
            PHP es un lenguaje de programación destinado a desarrollar aplicaciones para la web y crear páginas web, favoreciendo la conexión entre los servidores y la interfaz de usuario.<br>
            Entre los factores que hicieron que PHP se volviera tan popular, se destaca el hecho de que es de código abierto.<br>
            Esto significa que cualquiera puede hacer cambios en su estructura. En la práctica, esto representa dos cosas importantes:<br>
          </p>
          <ol>
            <li>
              Es de código abierto, no hay restricciones de uso vinculadas a los derechos. El usuario puede usar PHP para programar en cualquier proyecto y comercializarlo sin problemas.
            </li>
            <li>
              Está en constante perfeccionamiento, gracias a una comunidad de desarrolladores proactiva y comprometida.
            </li>
          </ol>
        `
      },
      {
        title: 'La función principal de PHP, en la práctica',
        contentHTML: `
          <p>
            El PHP generalmente es definido como un lenguaje del lado del servidor. Esto significa que se aplica en la programación que tiene lugar en el servidor web responsable de ejecutar la aplicación o, más a menudo, en un sitio web.
          </p>
          <p>
            Este trabajo previo permite cargar los elementos de una página antes de mostrarlos al usuario que accede a un sitio web, por ejemplo.
          </p>
          <p>
            El código PHP se ejecuta en el servidor que, al leer los comandos, puede activar todos los elementos funcionales y la interfaz visual del sitio web.
          </p>
          <p>
            Quizás, la aplicación principal del lenguaje PHP, cuando hablamos de la web, es estructurar sitios web en WordPress.
          </p>
          <p>
            La simplicidad para aprender a usarlo y el desarrollo del código abierto le facilita el trabajo a los profesionales que eligen estructurar sitios web utilizando la plataforma, pues a medida que avanzan las configuraciones y ediciones se simplifican aún más.
          </p>
        `
      },
    ],
    gallery: [
      'php_album_1',
      'python_album_1',
      'uxui_album_1',
    ]
  },
  python: {
    banner: {
      title: 'PYTHON',
      backgroundImage: 'python_banner'
    },
    descriptionList: [
      {
        title: '¿Qué es Python?',
        contentHTML: `
          <p>
          Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML). Los desarrolladores utilizan Python porque es eficiente y fácil de aprender, además de que se puede ejecutar en muchas plataformas diferentes. El software Python se puede descargar gratis, se integra bien a todos los tipos de sistemas y aumenta la velocidad del desarrollo.
          </p>
        `
      },
      {
        title: '¿Qué beneficios ofrece Python?',
        contentHTML: `
          <p>Los beneficios de Python incluyen los siguientes:</p>
          <ul>
            <li>
              Los desarrolladores pueden leer y comprender fácilmente los programas de Python debido a su sintaxis básica similar a la del inglés.
            </li>
            <li>
              Python permite que los desarrolladores sean más productivos, ya que pueden escribir un programa de Python con menos líneas de código en comparación con muchos otros lenguajes.
            </li>
            <li>
              Python cuenta con una gran biblioteca estándar que contiene códigos reutilizables para casi cualquier tarea. De esta manera, los desarrolladores no tienen que escribir el código desde cero.
            </li>
            <li>
              Los desarrolladores pueden utilizar Python fácilmente con otros lenguajes de programación conocidos, como Java, C y C++.
            </li>
            <li>
              La comunidad activa de Python incluye millones de desarrolladores alrededor del mundo que prestan su apoyo. Si se presenta un problema, puede obtener soporte rápido de la comunidad.
            </li>
            <li>
              Hay muchos recursos útiles disponibles en Internet si desea aprender Python. Por ejemplo, puede encontrar con facilidad videos, tutoriales, documentación y guías para desarrolladores.
            </li>
            <li>
              Python se puede trasladar a través de diferentes sistemas operativos de computadora, como Windows, macOS, Linux y Unix.
            </li>
          </ul>
        `
      },
    ],
    gallery: [
      'python_album_1',
      'uxui_album_1',
      'php_album_1',
    ]
  },
  uxui: {
    banner: {
      title: 'DISEÑO UX/UI',
      backgroundImage: 'uxui_banner'
    },
    descriptionList: [
      {
        title: '¿Qué es el diseño UX/UI?',
        contentHTML: `
          <p>
            Cuando creamos la web de una marca se nos pasan muchas cosas por la cabeza: ¿Las categorías están en el lugar adecuado?, ¿Hacen bien su función? ¿Son pequeñas o grandes? Para responder a todas las preguntas, lo primero que tenemos que hacer es evaluar el comportamiento del usuario (Ux y UI), qué acciones hace, qué es lo primero que mira y qué reacciones tiene para poder decidir qué diseño es el más adecuado.
          </p>
          <p>
            Aquí es donde entra la UX (experiencia de usuario) y la UI (interfaz de usuario), que tienen la función de que el usuario encuentre lo que busca en el menor tiempo posible y además tenga una buena experiencia al visitar la web. En este artículo definiremos qué es la UX y la UI y qué relación existe entre ambas.
          </p>
        `
      },
      {
        title: 'Factores que influyen',
        contentHTML: `
          <ul>
            <li>
              La percepción: Tenemos que saber qué nos llama la atención, cómo nos afectan los colores y cómo desplazamos la mirada por la pantalla.
            </li>
            <li>
              Las emociones: Las emociones no son reacciones automáticas, y por lo tanto hay que entender cómo se generan y qué implicaciones tienen. Las personas nos dejamos guiar más por las emociones que por cualquier otra cosa, y precisamente por eso es tan importante tenerlas en cuenta.
            </li>
            <li>
              La memoria: Cuando diseñamos una web tenemos que pensar en las limitaciones de las personas para recordar. Muchas veces no se tienen en cuenta los caminos para que el usuario vuelva al punto de partida, y eso puede hacer que se sienta confuso.
            </li>
            <li>
              La mentalidad: El usuario tendrá creencias, estereotipos, su interpretación de la sociedad y de las personas que lo rodean. Siguiendo en esta línea, vemos por qué cada vez más los usuarios buscan valoraciones de otras personas acerca de un producto en la red: no es solamente desconfianza, también implica qué prejuicios y creencias tiene.
            </li>
            <li>
              La motivación: El usuario tiene que estar motivado durante todo el tiempo que esté en la página web, no solamente al principio, ya que sino puede ser que abandone. 
            </li>
            <li>
              El aprendizaje: Desde el momento en que un usuario entra en una página web se convierte en un aprendiz y eso significa que tenemos que enseñarle los pasos que tiene que dar para que consiga su objetivo. Además, se tiene que estructurar la información para que el usuario entienda fácilmente todo el contenido de la web.
            </li>
          </ul>
        `
      },
    ],
    gallery: [
      'uxui_album_1',
      'php_album_1',
      'python_album_1',
    ]
  }
}
