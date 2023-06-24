import { Axios } from "axios";
import React, { FC } from "react";
import { UsersPageProps } from "./types";

const UsersPage: FC<UsersPageProps> = ({ props: { users } }) => {
  console.log("props in users page - ", users);
  return (
    <div className="container-fluid">
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li className="list-group-item" key={`${user.id}-${user.username}`}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersPage;

export async function getInitialProps(axios: Axios) {
  try {
    const users = await axios.get("/users");
    return { props: { users: users.data } };
  } catch (error) {
    console.error(error);
  }
}
