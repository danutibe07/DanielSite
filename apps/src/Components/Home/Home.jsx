import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setusers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="App">
        <h1 className="task"> User's Info</h1>
        <div className="home">
          {users.map((user) => (
            <div className="card-preview" key={user.id}>
              {" "}
              <h1 className="inf">{user.name}</h1>{" "}
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                ipsa id voluptates facilis animi eius est sapiente, similique
                iusto molestias quo qui ut ullam dolore.
              </p>
              <h2>General Info</h2>
              <div className="opt">
                <pre>Company:{user.company.name}</pre>
                <pre>Username:{user.username}</pre>
                <pre>Phone:{user.phone}</pre>
                <pre>Email:{user.email}</pre>
              </div>
                
            </div>
          ))}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Product;
