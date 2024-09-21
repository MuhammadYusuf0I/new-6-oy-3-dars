import React from "react";

function Card(props) {
  const { id, name, lastName, age, email, nat, language, desc } = props.user;
  const { itemDelete } = props;

  return (
    <div className="card text-end" style={{ width: "18rem" }}>
      <div className="card-body">
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
          <h5
            className="card-text"
            style={{
              gap: "8px",
            }}
          >
            {language.join(", ")}
          </h5>
        </div>
        <div className="card text-center mb-3 mt-3">
          <p>{desc}</p>
        </div>
        <button onClick={() => itemDelete(id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
