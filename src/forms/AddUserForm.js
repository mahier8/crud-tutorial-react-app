import React, {useState} from 'react'

const AddUserForm = (props) => {
    const initialFormState = {id: null, name: '', username: ''}
    const [user, setUser] = useState(initialFormState); 
    // the values in the form are initially empty

const handleInputChange = (event) => {
    const {name, value} = event.target;
    // Object destructuring will allow us to easily get the name (key) 
    // and value from the form.
    setUser({ ...user, [name]: value });
    // Finally, we'll set the user much like we did on the App component, except this time 
    // we're using computed property names to dynamically set the name (using [name]) and value.
}

    return (
        <form 
            onSubmit={event => {
                event.preventDefault();
                if (!user.name || !user.username) return

                props.addUser(user);
                setUser(initialFormState);
            }}
        >
            <label htmlFor="name">Name</label>  
            <input 
            type="text" 
            name="name" 
            value={user.name}
            onChange={handleInputChange}
            />      
            <label htmlFor="username">Username</label>  
            <input 
            type="text" 
            name="username" 
            value={user.username} 
            onChange={handleInputChange}
            />  
            <button>Add new user</button>       
        </form>
    )
}

export default AddUserForm;
