let button = document.querySelector('button')

const display = () => {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then((res)=>{
        let residents = res.data.results[0].residents
        console.log(residents)
        for(let i=0;i<residents.length;i++){
            axios.get(residents[i])
            .then((res) =>{
                let name = document.createElement('h2')
                name.textContent = res.data.name
                document.body.appendChild(name)
            })
            .catch(err => console.log(err))
        }
    })
    .catch(err=>console.log(err))
}

button.addEventListener('click',display)