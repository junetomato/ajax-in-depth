function getImages( pageNumber ) {
    const promise = axios.get( `https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1` )
    return promise.then( ( response ) => {
        return response.data
    })
}

function getTasks() {
    const promise = axios.get( `https://repetitora.net/api/JS/Tasks?widgetId=123456&count=30` )
    return promise.then( ( response ) => {
        return response.data
    })
}

function createTask( title ) {
    const promise = axios.post( `https://repetitora.net/api/JS/Tasks`, {
        widgetId: 123456,
        title: title,
    })

    return promise.then( ( response ) => {
        return response.data
    })
}

function updateTask( id, title, done ) {
    const promise = axios({
        method: 'put',
        url: `https://repetitora.net/api/JS/Tasks`,
        data: {
            widgetId: 123456,
            taskId: id,
            title: title,
            done: true,
        }
    });

    return promise.then( ( response ) => {
        return response.data
    })
}

function deleteTask( id ) {
    const promise = axios.delete( `https://repetitora.net/api/JS/Tasks?widgetId=123456&taskId=${id}` )

    return promise.then( ( response ) => {
        return response.data
    })
}



// side lesson to go deep into Promise
// doItAfter( 2 )
//     .then( ( message ) => console.log( message ) )
//     .catch( () => console.log( 'error' ) )

function doItAfter( seconds ) {
    let promise = new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            resolve( 'done' )
            // reject()
        }, seconds * 1000 )
    })

    return promise
}
