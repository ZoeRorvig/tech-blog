async function updatePostHandler(event) {
    event.preventDefault();

    const titleEl = document.querySelector('#title-input');
    const contentEl = document.querySelector('#content-input');

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: titleEl.value,
            post_content: contentEl.value,
          }),
          headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update.');
      }
}

document.querySelector('#update-btn').addEventListener('click', updatePostHandler);