async function createPostHandler(event) {
    event.preventDefault();

    document.location.replace('/dashboard/create')
}


document.querySelector('#new-post').addEventListener('click', createPostHandler);