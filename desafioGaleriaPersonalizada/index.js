//Ejecutar npm start

const axios = require('axios')

let promesasArray=[]
let resApi=[]

let url='https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'

async function getData(url) {
    try{
        let { data } = await axios.get(url)
        return data.results
    }catch(err){
        console.log(`Error: ${err} en la funcion getData()`)
    }
};

async function pokeimg(imgUrl, nom){
    try{
        let { data } = await axios.get(imgUrl)
        let obj ={
            img: data.sprites.front_default,
            nombre: nom
        }
        return obj
    }catch(err){
        console.log(`Error: ${err} en la funcion pokeimg()`)
    }
};
getData(url).then((resultado)=>{
    resultado.forEach(el =>{
        promesasArray.push(pokeimg(el.url, el.name))

    })
    Promise.all(promesasArray).then(res=>{
        res.forEach(el=>{
            resApi.push(el)
        })

    })
});

module.exports={resApi}  