import React, { Fragment, useState } from "react";
import AddUser from "./Component/User/AddUser";
import UserList from "./Component/User/UserList";

const App = () => {
  const [usersList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toLocaleString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
};

export default App;
