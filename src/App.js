import React, {useState} from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";

const App = () => {
  const usersData = [
    {id: 1, name: 'Tania', username: 'floppydiskette'},
    {id: 2, name: 'Craig', username: 'siliconeidolon'},
    {id: 3, name: 'Ben', username: 'benisphere'},
  ]

  const [users, setUsers] = useState(usersData);

  // Update
  const [editing, setEditing] = useState(false);
  const initialFormState = {id: null, name: '', username: ''}
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // Update
  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({id: user.id, name: user.name, username: user.username});
  }

  // Update
  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  // Create
  const addUser = (user) => {
    user.id = users.length + 1; // assigning an id to every new user which is created
    setUsers([...users, user]); 
    // adding the newly created user (right), to the array (left), which is users,
    // from the useState, which was set to the (above) array usersData 
  }

  // Delete/destroy
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} /> 
          {/* I send the properties down to the Usertable component, where I render 
          how the data will be displayed */}
        </div>
      </div>
    </div>
  );
}

export default App;

