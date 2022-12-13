export const getAll = async () => {
    const response = await fetch(
        ' http://localhost:4444/pokemonAll/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}

export const getCatch = async () => {
    const response = await fetch(
        ' http://localhost:4444/pokemonCatch/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}

export const Catch = async (Id) => {
    const response = await fetch(
        ' http://localhost:4444/pokemonCatch/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify({"_id" : Id})
        }
    )
    const pokemons = await response.json()
    return pokemons
}
export const Delete = async (name) => {
    const response = await fetch(
        ' http://localhost:4444/pokemonCatch/delete', {
            method: 'Delete', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify({"name" : name})
        }
    )
    const pokemons = await response.json()
    return pokemons
}


export const getOne = async (Id) => {
    const response = await fetch(
        ' http://localhost:4444/pokemonAll/selectone?id='+Id, {
            method: 'GET',            
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}

export const Update = async (Id,name,type1,type2,num,desc,img) => {
    const response = await fetch(
        ' http://localhost:4444/pokemonCatch/update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify({"_id" : Id, "name":name, "type1":type1, "type2":type2 ,"num":num, "desc":desc,"img":img})
        }
    )
    const pokemons = await response.json()
    return pokemons
}