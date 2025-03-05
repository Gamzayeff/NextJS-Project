import React from "react";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card-container">
      <div className="user-card">
        <div className="user-info">
          <div className="user-avatar">
            {user.name.charAt(0)}
          </div>
          <h1 className="user-name">{user.name}</h1>
          <h2 className="user-username">@{user.username}</h2>
          <h3 className="user-email">{user.email}</h3>
          <h3 className="user-phone">{user.phone}</h3>
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="user-website"
          >
            {user.website}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
