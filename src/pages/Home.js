import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h1>User Directory</h1>
      {users.map(user => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <UserCard user={user} />
        </Link>
      ))}
    </div>
  );
}

export default Home;
