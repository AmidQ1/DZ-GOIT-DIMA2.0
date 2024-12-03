function loadPosts(students, id){
  fetch('http://localhost:3000/students/1', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'newemail@example.com'
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Дані студента частково оновлено:', data);
    })
    .catch(error => {
      console.error('Помилка при частковому оновленні даних студента:', error);
    });
}

loadPosts("fwf", 2)