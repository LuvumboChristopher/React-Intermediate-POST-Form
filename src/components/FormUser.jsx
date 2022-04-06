import React, {useState} from 'react'

export default function FormUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const onChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  }

  const  submitForm = (event) => {
    event.preventDefault();
    
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    };

    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          alert(`User #${res.id} has been successfully added!`);
        }
      })
      .catch((e) => {
        console.error(e);
        alert("There was an error when adding the user.");
      });
  }

  return (
    <div className="FormUser">
  <h1>New User</h1>

  <form onSubmit={submitForm}>
    <fieldset>
      <legend>Information</legend>
      <div className="form-data">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="form-data">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={onChange}
          value={user.username}
        />
      </div>

      <div className="form-data">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={onChange}
          value={user.email}
        />
      </div>
      <hr />
      <div className="form-data">
        <input type="submit" value="Send" />
      </div>
    </fieldset>
  </form>
</div>
  );
}