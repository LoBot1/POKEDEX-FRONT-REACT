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
export const Free = async (name) => {
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

export const Delete = async (name) => {
    const response = await fetch(
        ' http://localhost:4444/pokemonAll/delete', {
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
        ' http://localhost:4444/pokemonCatch/selectone?id='+Id, {
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

export const Update = async (pokemon) => {
    const response = await fetch(
        ' http://localhost:4444/pokemonCatch/update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(pokemon)
        }
    )
    const pokemons = await response.json()
    return pokemons
}
export const Create = async (pokemon) => {
    const response = await fetch(
        ' http://localhost:4444/pokemonAll/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(pokemon)
        }
    )
    const pokemons = await response.json()
    return pokemons
}