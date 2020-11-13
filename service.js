function getImages( pageNumber ) {
    const promise = axios.get( `https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1` )
    return promise.then( ( response ) => {
        return response.data
    })
}

function getTasks() {
    const promise = axios.get( `https://repetitora.net/api/JS/Tasks?widgetId=123456` )
    return promise.then( ( response ) => {
        return response.data
    })
}

function createTask( title ) {
    const promise = axios.post( `https://repetitora.net/api/JS/Tasks?widgetId=123456&title=${title}` )
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
