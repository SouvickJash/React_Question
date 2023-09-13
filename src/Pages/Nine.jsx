//Create a component that fetches and displays data from an API using the useState hook
import React, { useState, useEffect } from "react";
const Nine = () => {
  const [user, setUser] = useState([]);
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const getUser = async () => {
    const res = await fetch(`${baseUrl}/photos`);
    const UserData = await res.json();
    setUser(UserData);
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(user);

  return (
    <>
      <div class="container">
        <div class="row">
          {user.map((item, index) => {
            return (
              <>
                <div class="col-sm">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{item.id}</h5>
                      <h5 className="card-title">{item.title}</h5>
                  

                      <div>
                 </div>

                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default Nine;