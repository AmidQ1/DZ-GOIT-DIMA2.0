let students = [];

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const student = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        age: document.getElementById('age').value,
        year: document.getElementById('year').value,
        faculty: document.getElementById('faculty').value,
        courses: document.getElementById('courses').value.split(',').map(course => course.trim())
    };

    students.push(student);
    save();
    table();
});

function table() {
    const tbody = document.querySelector('#studentTable tbody');
    tbody.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.age}</td>
            <td>${student.year}</td>
            <td>${student.faculty}</td>
            <td>${student.courses.join(', ')}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    save();
    table();
}

function editStudent(index) {
    const student = students[index];
    
    document.getElementById('editIndex').value = index;
    document.getElementById('editModal').style.display = 'block';
}

function save() {
    localStorage.setItem('students', JSON.stringify(students));
}

function loadFromFile() {
    const data = localStorage.getItem('students');
    if (data) {
        students = JSON.parse(data);
        table();
    }
}

document.getElementById('searchField').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredStudents = students.filter(student => 
        student.lastName.toLowerCase().includes(query) || 
        student.courses.some(course => course.toLowerCase().includes(query))
    );
    
    table(filteredStudents);
});

window.onload = loadFromFile;