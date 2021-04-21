import profileImg from '../Assets/Images/profile.webp';
import aboutImg from '../Assets/Images/description.webp';

import htmlIcon from "../Assets/SVG/html5.svg";
import cssIcon from "../Assets/SVG/css3.svg";
import jsIcon from "../Assets/SVG/javascript.svg";
import angularIcon from "../Assets/SVG/angular.svg";
import reactIcon from "../Assets/SVG/react.svg";
import vueIcon from "../Assets/SVG/vue-dot-js.svg";

import csharpIcon from "../Assets/SVG/css3.svg";
import pythonIcon from "../Assets/SVG/python.svg";
import javaIcon from "../Assets/SVG/java.svg";
import phpIcon from "../Assets/SVG/php.svg";
import nodejsIcon from "../Assets/SVG/node-dot-js.svg";
import microsoftIcon from "../Assets/SVG/microsoft.svg";
import djangoIcon from "../Assets/SVG/django.svg";
import laravelIcon from "../Assets/SVG/laravel.svg";

import mysqlIcon from "../Assets/SVG/mysql.svg";
import postgresqlIcon from "../Assets/SVG/postgresql.svg";
import mongodbIcon from "../Assets/SVG/mongodb.svg";

import mecatronicaImg from '../Assets/Images/MecatronicaFromScratch.webp';
import numericalMethodsImg from '../Assets/Images/NumericalMethods.webp';
import scientificMoldingImg from '../Assets/Images/ScientificMolding.webp';
import booksApiImg from '../Assets/Images/BooksAPI.webp';

export const profile = {
  name: 'Maximiliano Ponce Marquez',
  description: 'Mechatronics Engineer & Web Developer',
  email: 'maxponce.marquez@gmail.com',
  image: profileImg,
  aboutMe: 'I am a mechatronics engineer student from Tecnológico Nacional de México - Instituto Tecnológico de Nogales. I love programming, reading and videogames.',
  aboutImage: aboutImg,
  github: 'maxponmar'
}

export const frontendSkills = [
  { name: 'HTML', icon: htmlIcon, alt: 'HTML5', percentage: 95 },
  { name: 'CSS', icon: cssIcon, alt: 'CSS3', percentage: 95 },
  { name: 'Javascript', icon: jsIcon, alt: 'JS', percentage: 95 },
  { name: 'Angular', icon: angularIcon, alt: 'Angular', percentage: 90 },
  { name: 'React', icon: reactIcon, alt: 'React', percentage: 90 },
  { name: 'VueJS', icon: vueIcon, alt: 'VueJS', percentage: 60 }
]

export const backendSkills = [
  { name: 'C#', icon: csharpIcon, alt: 'C#', percentage: 95 },
  { name: 'Python', icon: pythonIcon, alt: 'Python', percentage: 95 },
  { name: 'Java', icon: javaIcon, alt: 'Java', percentage: 80 },
  // { name: 'PHP', icon: phpIcon, alt: 'PHP', percentage: 10 },
  { name: '.Net Core', icon: microsoftIcon, alt: '.Net Core', percentage: 85 },
  { name: 'Django', icon: djangoIcon, alt: 'Django', percentage: 40 },
  { name: 'NodeJS', icon: nodejsIcon, alt: 'NodeJS', percentage: 85 },
  // { name: 'Laravel', icon: laravelIcon, alt: 'Laravel', percentage: 10 }
]

export const databaseSkills = [
  { name: 'SQL Server', icon: microsoftIcon, alt: 'SQL Server', percentage: 85 },
  { name: 'MySQL', icon: mysqlIcon, alt: 'MySQL', percentage: 80 },
  { name: 'PostgreSQL', icon: postgresqlIcon, alt: 'PostgreSQL', percentage: 50 },
  { name: 'MongoDB', icon: mongodbIcon, alt: 'MongoDB', percentage: 70 },
]

export const projects = [
  {
    title: 'Mecatronica From Scratch',
    link: 'https://maxponmar.github.io/MecatronicaFromScratch',
    image: mecatronicaImg
  },
  {
    title: 'Scientific Molding',
    link: 'https://maxponmar.github.io/ScientificMolding',
    image: scientificMoldingImg
  },
  {
    title: 'Numerical Methods C#',
    link: 'https://github.com/maxponmar/NumericalMethodsCsharp',
    image: numericalMethodsImg
  },
  {
    title: 'BookStore API',
    link: 'https://github.com/maxponmar/BookStore-API',
    image: booksApiImg
  },
]
