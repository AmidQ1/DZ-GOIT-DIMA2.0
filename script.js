// task 1
function loadTasks() {
  const tasks = localStorage.getItem('tasks');
  let taskArray = [];
  
  if (tasks && tasks.length > 0) {
    taskArray = tasks.split('|');
  }

  document.getElementById('taskList').innerHTML = '';
  for (let i = 0; i < taskArray.length; i++) {
    const [name, completed] = taskArray[i].split(',');
    const li = document.createElement('li');
    li.textContent = name;
    if (completed === 'true') li.classList.add('completed');
    li.onclick = function () { toggleTask(i); };
    document.getElementById('taskList').appendChild(li);
  }
}

function addTask() {
  const taskName = document.getElementById('newTask').value;
  if (!taskName) return;

  let tasks = localStorage.getItem('tasks');
  if (tasks && tasks.length > 0) {
    tasks += `|${taskName},false`;
  } else {
    tasks = `${taskName},false`;
  }
  
  localStorage.setItem('tasks', tasks);
  document.getElementById('newTask').value = '';
  loadTasks();
}

function toggleTask(index) {
  const tasks = localStorage.getItem('tasks');
  let taskArray = tasks.split('|');
  const [name, completed] = taskArray[index].split(',');

  if (completed === 'true') {
    taskArray[index] = `${name},false`;
  } else {
    taskArray[index] = `${name},true`;
  }

  localStorage.setItem('tasks', taskArray.join('|'));
  loadTasks();
}

loadTasks();

// task 2
function saveForm() {
  localStorage.setItem('username', document.getElementById('username').value);
  localStorage.setItem('email', document.getElementById('email').value);
}

function loadForm() {
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');

  if (username) document.getElementById('username').value = username;
  if (email) document.getElementById('email').value = email;
}

loadForm();

// task 3
function loadBookmarks() {
  const bookmarks = localStorage.getItem('bookmarks');
  let bookmarkArray = [];
  
  if (bookmarks && bookmarks.length > 0) {
    bookmarkArray = bookmarks.split('|');
  }

  document.getElementById('bookmarkList').innerHTML = '';
  for (let i = 0; i < bookmarkArray.length; i++) {
    const li = document.createElement('li');
    li.textContent = bookmarkArray[i];
    li.onclick = function () { removeBookmark(i); };
    document.getElementById('bookmarkList').appendChild(li);
  }
}

function addBookmark() {
  const bookmark = document.getElementById('newBookmark').value;
  if (!bookmark) return;

  let bookmarks = localStorage.getItem('bookmarks');
  if (bookmarks && bookmarks.length > 0) {
    bookmarks += `|${bookmark}`;
  } else {
    bookmarks = bookmark;
  }
  
  localStorage.setItem('bookmarks', bookmarks);
  document.getElementById('newBookmark').value = '';
  loadBookmarks();
}

function removeBookmark(index) {
  const bookmarks = localStorage.getItem('bookmarks');
  let bookmarkArray = bookmarks.split('|');
  
  bookmarkArray.splice(index, 1);
  localStorage.setItem('bookmarks', bookmarkArray.join('|'));
  loadBookmarks();
}

loadBookmarks();

// task 4
function loadContacts() {
  const contacts = localStorage.getItem('contacts');
  let contactArray = [];

  if (contacts && contacts.length > 0) {
    contactArray = contacts.split('|');
  }

  document.getElementById('contactList').innerHTML = '';
  for (let i = 0; i < contactArray.length; i++) {
    const [name, surname, phone, email] = contactArray[i].split(',');
    const li = document.createElement('li');
    li.textContent = `${name} ${surname}, Телефон: ${phone}, Email: ${email}`;
    li.onclick = function () { removeContact(i); };
    document.getElementById('contactList').appendChild(li);
  }
}

function addContact() {
  const name = document.getElementById('contactName').value;
  const surname = document.getElementById('contactSurname').value;
  const phone = document.getElementById('contactPhone').value;
  const email = document.getElementById('contactEmail').value;
  if (!name || !surname || !phone || !email) return;

  let contacts = localStorage.getItem('contacts');
  if (contacts && contacts.length > 0) {
    contacts += `|${name},${surname},${phone},${email}`;
  } else {
    contacts = `${name},${surname},${phone},${email}`;
  }
  
  localStorage.setItem('contacts', contacts);
  document.getElementById('contactName').value = '';
  document.getElementById('contactSurname').value = '';
  document.getElementById('contactPhone').value = '';
  document.getElementById('contactEmail').value = '';
  loadContacts();
}

function removeContact(index) {
  const contacts = localStorage.getItem('contacts');
  let contactArray = contacts.split('|');
  
  contactArray.splice(index, 1);
  localStorage.setItem('contacts', contactArray.join('|'));
  loadContacts();
}

loadContacts();