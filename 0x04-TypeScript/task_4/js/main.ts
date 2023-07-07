import Cpp from './subjects/Cpp';
import Java from './subjects/Java';
import React from './subjects/React';

export const cpp = new Cpp('Guilaume', 'Salva', undefined);
export const java = new Java('Guilaume', 'Salva', undefined);
export const react = new React('Guilaume', 'Salva', undefined);

console.log(cpp.getRequirements());
console.log(java.getAvailableTeacher());
console.log(react.getAvailableTeacher());
