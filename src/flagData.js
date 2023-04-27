import uniqid from 'uniqid';
import canadaFlag from './images/flags/Flag_of_Canada.svg';

export const flags = [
  {
    id: uniqid(),
    name: 'A',
    selected: false,
    imgSrc: canadaFlag,
  },
  { id: uniqid(), name: 'B', selected: false },
  { id: uniqid(), name: 'C', selected: false },
  { id: uniqid(), name: 'D', selected: false },
  { id: uniqid(), name: 'E', selected: false },
  { id: uniqid(), name: 'F', selected: false },
];
