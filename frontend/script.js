document.getElementById('nameForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value;

  const res = await fetch('/save-name', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: fullName })
  });

  if (res.ok) {
    window.location.href = '/next.html';
  } else {
    alert('Failed to save name.');
  }
});
