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
                            <a class="link">View Character Details</a>
                            `
        const link=container.querySelector('.link')
        link.addEventListener('click',()=>{
            localStorage.setItem('person', JSON.stringify(character))
            window.open('character.html','_blank')
        })

        charsection.appendChild(container)   
        
    });


}

fetchData()