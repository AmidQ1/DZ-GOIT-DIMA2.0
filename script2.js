const fetchUsers = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com/users";
    const userIds = [Math.floor(Math.random()*10)]; // Масив ID користувачів, яких треба отримати
  
    try {
      const promises = userIds.map(async (id) => {
        const response = await fetch(`${baseUrl}/${id}`);
        return response.json(); // Повертаємо розпарсені дані
      });
  
      const users = await Promise.all(promises);
  
      renderUsers(users);
    } catch (error) {
      console.error("Помилка під час отримання даних:", error);
    }
  };
  
  const renderUsers = (users) => {
    const usersList = document.getElementById("usersList");
    usersList.innerHTML = ""; // Очищення списку
  
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      usersList.appendChild(li);
    });
  };
  
  document.getElementById("fetchUsersBtn").addEventListener("click", fetchUsers);