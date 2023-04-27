import uniqid from 'uniqid';
import canadaFlag from './images/flags/Flag_of_Canada.svg';
import usaFlag from './images/flags/Flag_of_United_States.svg';
import franceFlag from './images/flags/Flag_of_France.svg';
import germanyFlag from './images/flags/Flag_of_Germany.svg';
import ukFlag from './images/flags/Flag_of_United_Kingdom.svg';
import brazilFlag from './images/flags/Flag_of_Brazil.svg';

export const flags = [
  { id: uniqid(), name: 'Canada', imgSrc: canadaFlag },
  { id: uniqid(), name: 'USA', imgSrc: usaFlag },
  { id: uniqid(), name: 'France', imgSrc: franceFlag },
  { id: uniqid(), name: 'Germany', imgSrc: germanyFlag },
  { id: uniqid(), name: 'UK', imgSrc: ukFlag },
  { id: uniqid(), name: 'Brazil', imgSrc: brazilFlag },
];
