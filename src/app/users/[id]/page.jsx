import UserCard from "@/components/users/UserCard";
import React from "react";

const Details = async ({ params }) => {
  const { id } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  return (
    <div className="flex justify-center">
      <UserCard user={data} />
    </div>
  );
};

export default Details;
