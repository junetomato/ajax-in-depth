const $resultImagesBlock = document.querySelector( '#result' )
const $resultTasksBlock = document.querySelector( '#tasks-result' )
const $pageNumberEl = document.querySelector( '#page-number' )
const $clickMeButton = document.querySelector( '#click-me' )
const $getTasksButton = document.querySelector( '#get-tasks' )

$clickMeButton.addEventListener( 'click', () => {
    const promise = getImages( $pageNumberEl.value )
    promise
        .then( onImagesReceived )
})

$getTasksButton.addEventListener( 'click', () => {
    const promise = getTasks()
    promise.then( onTasksReceived )
})

// createTask( 'learn js' ).then( ( data ) => {
//     debugger
//     console.log( data )
// })

function onTasksReceived( tasks ) {
    tasks.forEach( task => {
        const li = document.createElement( 'li' )
        li.innerHTML = task.title
        $resultTasksBlock.appendChild( li )
    })
}

function onImagesReceived( images ) {
    images.forEach( el => {
        const img = document.createElement( 'img' )
        img.src = el.thumbnail
        $resultImagesBlock.appendChild( img )
    })
}
