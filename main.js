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

// createTask( 'learn JS' )
// deleteTask( '9be7e1d1-617c-4bd9-8a2a-d5cd5cf3ef07' )
// updateTask( '0b19f77f-94f2-4711-9b26-cb31a69eec73', 'learn ReactJS', true )

function onTasksReceived( tasks ) {
    $resultTasksBlock.innerHTML = ''

    tasks.forEach( task => {
        const li = document.createElement( 'li' )
        li.innerHTML = task.title
        li.dataset.id = task.id
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
