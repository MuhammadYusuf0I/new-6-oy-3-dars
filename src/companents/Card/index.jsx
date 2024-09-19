import React from "react";

function Card(props) {
  const { name, lastName, email, nat, language, age, desc } = props.users;
  return (
    <div>
      <div className="card text-end" style={{ width: "18rem" }}>
        <div className="card-body ">
          <h5 className="card-title text-start mb-3">
            {name} {lastName}
          </h5>
          <h5 className="card-title text-start">{age}</h5>
          <p className="card-title text-start">{email}</p>

          <div
            className="card-title text-start"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h5 className="card-text">{nat}</h5>
            <h5 className="card-text">{language}</h5>
          </div>
          <div className="card text-center mb-3 mt-3">
            <p>{desc}</p>
          </div>
          <button className="btn btn-danger">Delet</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
