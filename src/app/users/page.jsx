import Link from "next/link";
import "./users.css";

const Users = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return (
    <div className="users-container">
      {data.map((user) => (
        <Link
          key={user.id}
          href={`/users/${user.id}`}
          className="user-card"
        >
          <div className="user-info">
            <div className="user-avatar">
              {user.name.charAt(0)}
            </div>
            <h1 className="user-name">{user.name}</h1>
            <h1 className="user-email">{user.email}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Users;
