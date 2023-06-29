import Classroom from './0-classroom';

export default function initializeRooms() {
  const classOne = new Classroom(19);
  const classTwo = new Classroom(20);
  const classThree = new Classroom(34);
  return [classOne, classTwo, classThree];
}
