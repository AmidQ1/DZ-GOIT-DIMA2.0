document.getElementById('myButton').addEventListener('click', function() {
    alert('Кнопка була натиснута!');
});



document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputValue = document.getElementById('myInput').value;
    alert('Введені дані: ' + inputValue);
});

  