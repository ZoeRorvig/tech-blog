const newPostFormHandler = async function(event) {
    event.preventDefault();
  
    const titleEl = document.querySelector('#title-input');
    const contentEl = document.querySelector('#content-input');
    
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titleEl.value,
        post_content: contentEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create.');
    }
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newPostFormHandler);