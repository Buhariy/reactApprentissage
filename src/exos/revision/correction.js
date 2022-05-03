export function bonjourC(name) {
  return `Bonjour ${name}, comment allez-vous ?`
}

export const bonjour2C = name => bonjourC(name)

export const displayStudentNameC = ({
  firstname = 'Inconnue',
  lastname = 'Inconnue',
  age = 'Inconnue',
} = {}) => `Élève ${firstname} ${lastname}, ${age} ans`
