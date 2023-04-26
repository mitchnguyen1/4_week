
let query = document.querySelector('input')
let search = document.querySelector('button')

const submitHandler = (event) =>{
    event.preventDefault()
    let data = query.value
    axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`)
        .then((res)=>{
            console.log(res.data)
            let img = document.querySelector('img')
            img.src = res.data.sprites.front_default 
            query.value = ''
        }).catch(err=>console.log(err))

}


search.addEventListener('click',submitHandler)