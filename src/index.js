import bonjour, {
  calculateAverage,
  displayNotes,
  student,
} from './exos/revision/revision'
import bonjour2, { displayStudentName } from './exos/revision/revision'
import { displayStudentNameC } from './exos/revision/correction.js'
console.log(bonjour('john'))
console.log(bonjour2('bonjr2'))
console.log(displayStudentName())
console.log(displayNotes())
//console.log(calculateAverage(student.notes))

//correction
console.log(displayStudentNameC(student))
console.log(calculateAverage(student.notes))
