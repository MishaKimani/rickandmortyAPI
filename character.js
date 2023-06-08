const container=document.querySelector('.container')
const person=localStorage.getItem('person')

const character=JSON.parse(person)
container.innerHTML=`${character.name}`