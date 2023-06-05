const charsection=document.querySelector('.parentdiv')

async function fetchData(){
    const response= await fetch("https://rickandmortyapi.com/api/character")
    const data= await response.json()
    console.log(data)
    
    data.results.forEach(function(character) {
        const container=document.createElement('div')
        container.classList.add('container')
        container.innerHTML=`<img class="img" src="${character.image}"/>
                            Name: ${character.name}
                            Status:${character.status} 
                            Species:${character.species}
                            Gender:${character.gender}
                            Origin:${character.origin.name}
                            `
    
        charsection.appendChild(container)   
        
    });


}

fetchData()