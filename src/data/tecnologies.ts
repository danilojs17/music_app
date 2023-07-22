import { ITecnologies } from "src/app/intro/interfaces/tecnologies.interface";

export const tecnologies: Array<ITecnologies> = [
  {
    title: 'Javascript',
    description: 'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.',
    img: 'assets/img/js.png'
  },
  {
    title: 'Typescript',
    description: 'TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.',
    img: 'assets/img/ts.png'
  },
  {
    title: 'React js',
    description: 'React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres',
    img: 'assets/img/react.png'
  },
  {
    title: 'Nest Js',
    description: 'Nest (NestJS) es un marco para crear aplicaciones del lado del servidor Node.js eficientes y escalables. Utiliza JavaScript progresivo, está construido con TypeScript y es totalmente compatible (pero aún permite a los desarrolladores codificar en JavaScript puro) y combina elementos de OOP (Programación orientada a objetos), FP (Programación funcional) y FRP (Programación reactiva funcional).',
    img: 'assets/img/nest.png'
  },
  {
    title: 'Scss',
    description: 'Sass es un lenguaje de hoja de estilos en cascada inicialmente diseñado por Hampton Catlin y desarrollado por Natalie Weizenbaum.​​ ',
    img: 'assets/img/scss.png'
  },
  {
    title: 'Visual studio code',
    description: 'Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux, macOS y Web. Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código.',
    img: 'assets/img/vscode.jpg'
  },
  {
    title: 'Docker',
    description: 'Docker es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos.​',
    img: 'assets/img/docker.jpg'
  }
]