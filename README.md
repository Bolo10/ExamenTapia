![GitHub](https://img.shields.io/github/license/herig14/Proyecto-PF-56-G3)  ![GitHub](https://img.shields.io/bundlephobia/minzip/mobile-subs-stats) ![GitHub](https://img.shields.io/github/languages/top/Herig14/Proyecto-PF-56-G3)  ![GitHub](https://img.shields.io/npm/v/mobile-subs-stats?color=green&label=mobile-subs-stats)
# Proyecto Plataformas Web
# Universidad Politécnica Salesiana
# Examen Primer Parcial


_Crear una aplicación en NodeJS que permita leer los datos de las
personas que usan internet, publicadas por el Banco
Mundial y mostrar el porcentaje de personas de un determinado país en un
año específico._

## Comenzando 🚀

### Pre-requisitos 📋
#### Descarga e instala Node.js y npm
1. Linux <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" alt="Lin Logo" width="25" height="25" /> o Windows <img src="https://es.seaicons.com/wp-content/uploads/2015/10/OS-Windows-icon.png" alt="Win Logo" width="25" height="25" /> 

  - _[Node.js 12.16.3 LTS](https://nodejs.org/es/) o superior._
  
  - _Mediante una terminal._
```
sudo apt install nodejs
```

  - _Gestor de paquetes npm 6.14.4 o superior._
```
sudo install npm@latest -g
```
  - _Actualizar y Upgrade_
```
sudo apt-get update
sudo apt-get upgrade
```
3. Datos Banco Mundial
  - _Descarga de los datos en formato [CSV](http://api.worldbank.org/v2/es/indicator/IT.NET.USER.ZS?downloadformat=csv)._

### Instalación de nuestra APP 🔧

_Para la ejecucion de la app desarrollada en node.js simplemente instala_

```
sudo npm i etapia-examen-pw -g
```
### Ayuda / Comandos ⚙️ 📦
* _**-c** *code* Código ISO 31 ALPHA-3 de los paises._
* _**-y** *year* Año (Desde 1960 - Hasta 2019)._
* _**-f** *file* Path(Ruta) de los datos del Banco Mundial._

```
etapia-examen --help
etapia-examen mostrar -c -y -f
etapia-examen guardar -c -y -f -o
```

### Ejemplo 🔩

_La ejecución se lleva a cabo con el siguiente comando **Asegurate** de haber descargado los datos del banco mundial y **también** colocar correctamente el path(ruta)_
```
etapia-examen mostrar -y 2015 -f datos.csv
```


### Output del Ejemplo ⌨️

<img src="https://github.com/Bolo10/Test/blob/master/Screenshot%20from%202020-05-20%2004-59-30.png?raw=true" alt="Lin Logo" width="719" height="794" />


## Construido con 🛠️

_Las herramientas utilizadas en el desarrollo del proyecto son las siguientes:._

* [NodeJS](https://nodejs.org/) - Entorno de ejecución para JavaScript
* [NPM](https://www.npmjs.com/) - Manejador de dependencias
* [VisualStudio](https://code.visualstudio.com/?wt.mc_id=DX_841432) - Editor de código

## Nuestro paquete NPM 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://www.npmjs.com/package/mobile-subs-stats)

## Autores ✒️

* **Erick Tapia** - *Documentación* - [Bolo10](https://github.com/Bolo10)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/Herig14/Proyecto-PF-56-G3/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para detalles


☕ 🍺 📢 🍺 🎁

