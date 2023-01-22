const newCommentHandler = async function(event) {
    event.preventDefault();

    const contentEl = document.querySelector('#content-input');

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        comment_content: contentEl.value,
        post_id: post_id,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace(`/api/posts/${post_id}`);
    } else {
      alert('Failed to create.');
    }
  };
  
  document
    .querySelector('#new-comment-btn')
    .addEventListener('click', newCommentHandler);