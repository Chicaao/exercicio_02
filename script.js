let students = [
  {
    name: 'João', 
    firstGrade: 5,
    secondGrade:6
  },
  {
    name: 'Leticia', 
    firstGrade: 5,
    secondGrade:8
  },
  {
    name: 'Diego', 
    firstGrade: 5,
    secondGrade:1
  },
  {
    name: 'Julio', 
    firstGrade: 5,
    secondGrade:10
  },
  
]

students.forEach (students => {
  const average = (students.firstGrade + students.secondGrade) / 2
  if(average >= 7) {
    message = `Parabens, ${students.name}! Você foi aprovado nesse concurso`
  }
  else {
    message = `Não foi dessa vez ${students.name}! Tente novamente`
  }

  alert(`A média do(a) aluno(a) ${students.name} é: ${average}.\n${message}`)
})

