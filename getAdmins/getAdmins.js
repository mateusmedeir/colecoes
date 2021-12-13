function getAdmins(map){
    let admins = []
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins
}

const users = new Map()
users.set('João', 'Admin')
users.set('maicon', 'User')
users.set('Ana', 'Admin')
users.set('Claudio', 'User')

console.log(getAdmins(users))