const fetchFriends = async () => { // async - запуск асинхр
    try {
      const tokenResponse = await fetch("my-api.com/me");
      const token = await tokenResponse.json(); // Перетворюємо відповідь у JSON
      
      const profileResponse = await fetch(`my-api.com/profile?token=${token}`);
      const user = await profileResponse.json();
      
      const friendsResponse = await fetch(`my-api.com/users/${user.id}/friends`);
      const friends = await  friendsResponse.json(); // await - асинхр.
  
      return friends; 
    } catch (error) {
    //   console.error("Помилка під час отримання даних:", error);
    }
  };
  
  fetchFriends()
    .then(friends => console.log("Список друзів:", friends))
    .catch(error => console.error("Помилка:", error));