const newCommentHandler = async function(event) {
    event.preventDefault();

    const contentEl = document.querySelector('#content-input');
    
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        comment_content: contentEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create.');
    }
  };
  
  document
    .querySelector('#new-comment-btn')
    .addEventListener('click', newCommentHandler);