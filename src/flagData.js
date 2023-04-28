import uniqid from 'uniqid';
import canadaFlag from './images/flags/Flag_of_Canada.svg';
import usaFlag from './images/flags/Flag_of_United_States.svg';
import franceFlag from './images/flags/Flag_of_France.svg';
import germanyFlag from './images/flags/Flag_of_Germany.svg';
import ukFlag from './images/flags/Flag_of_United_Kingdom.svg';
import brazilFlag from './images/flags/Flag_of_Brazil.svg';
import japanFlag from './images/flags/Flag_of_Japan.svg';
import indiaFlag from './images/flags/Flag_of_India.svg';
import italyFlag from './images/flags/Flag_of_Italy.svg';
import southAfricaFlag from './images/flags/Flag_of_South_Africa.svg';
import mexicoFlag from './images/flags/Flag_of_Mexico.svg';
import chinaFlag from './images/flags/Flag_of_China.svg';

export const flags = [
  { id: uniqid(), name: 'Canada', imgSrc: canadaFlag },
  { id: uniqid(), name: 'USA', imgSrc: usaFlag },
  { id: uniqid(), name: 'France', imgSrc: franceFlag },
  { id: uniqid(), name: 'Germany', imgSrc: germanyFlag },
  { id: uniqid(), name: 'UK', imgSrc: ukFlag },
  { id: uniqid(), name: 'Brazil', imgSrc: brazilFlag },
  { id: uniqid(), name: 'Japan', imgSrc: japanFlag },
  { id: uniqid(), name: 'India', imgSrc: indiaFlag },
  { id: uniqid(), name: 'Italy', imgSrc: italyFlag },
  { id: uniqid(), name: 'South Africa', imgSrc: southAfricaFlag },
  { id: uniqid(), name: 'Mexico', imgSrc: mexicoFlag },
  { id: uniqid(), name: 'China', imgSrc: chinaFlag },
];
