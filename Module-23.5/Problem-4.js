function bestFriend(friends) {
    
    let largestName = friends[0];
    
    for (let i = 1; i < friends.length; i++) {
        let friend = friends [i];
        
      if (friend.length > largestName.length) {
        largestName = friends[i];
      }
    }
    
    return largestName;
  }
  const friends = ['emran', 'hasan', 'Abdullah', 'Riyaaaaan'];
  const bestFriends = bestFriend(friends);
  console.log(bestFriends);