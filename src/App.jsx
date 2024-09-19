import { useState } from "react";
import Card from "./companents/Card";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [nat, setNat] = useState("Uzbek");
  const [language, setLanguage] = useState([]);
  const [desc, setDesc] = useState("");
  const [users, setUsers] = useState([]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeLastName(event) {
    setLastName(event.target.value);
  }

  function handleChangeAge(event) {
    setAge(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangeNat(event) {
    setNat(event.target.value);
  }

  function handleChangeDesc(event) {
    setDesc(event.target.value);
  }

  function handleChangeLanguage(event) {
    const { value, checked } = event.target;
    if (checked) {
      setLanguage((prevLanguages) => [...prevLanguages, value]);
    } else {
      setLanguage((prevLanguages) =>
        prevLanguages.filter((lang) => lang !== value)
      );
    }
  }

  function handleRegister(event) {
    event.preventDefault();
    const usersForm = {
      name: name,
      lastName: lastName,
      email: email,
      age: age,
      nat: nat,
      language: language,
      desc: desc,
      id: Date.now(),
    };

    setUsers((prevUsers) => [...prevUsers, usersForm]);

    
  }
  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="user-name mt-5"
        style={{
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "400px",
          border: " 1px solid black",
          padding: "30px 40px",
          borderRadius: "25px",
        }}
      >
        <div className="mb-3">
          <h2 style={{ justifyContent: "center", display: "flex" }}> Users</h2>
          <label htmlFor="exampleInputUserName" className="form-label">
            Your name
          </label>
          <input
            onChange={handleChangeName}
            value={name}
            type="text"
            className="form-control"
            id="exampleInputUserName"
          />
          <div className="mb-3 mt-3">
            <label htmlFor="lastName" className="form-label">
              Your last name
            </label>
            <input
              onChange={handleChangeLastName}
              value={lastName}
              type="text"
              className="form-control"
              id="lastName"
            />
          </div>

          <div className="mb-3 mt-3">
            <label htmlFor="Age" className="form-label">
              Your age
            </label>
            <input
              onChange={handleChangeAge}
              value={age}
              type="number"
              className="form-control"
              id="Age"
            />
          </div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleChangeEmail}
            value={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <select
          onChange={handleChangeNat}
          value={nat}
          className="form-select mb-3"
        >
          <option value="uzbek">Uzbek</option>
          <option value="tajik">Tajik</option>
          <option value="kyrgyz">Kyrgyz</option>
        </select>

        <div
          className="mb-3 form-check"
          style={{
            border: "1px solid black",
            borderRadius: "15px",
            padding: "10px",
          }}
        >
          <div className="form-check">
            <input
              onChange={handleChangeLanguage}
              className="form-check-input"
              type="checkbox"
              value="Uzbek"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Uzbek
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={handleChangeLanguage}
              className="form-check-input"
              type="checkbox"
              value="English"
              id="flexCheckChecked1"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked1">
              English
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={handleChangeLanguage}
              className="form-check-input"
              type="checkbox"
              value="Russian"
              id="flexCheckChecked2"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked2">
              Russian
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Brief information about yourself
          </label>
          <textarea
            onChange={handleChangeDesc}
            value={desc}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          Register
        </button>
      </form>

      <div
        className="mt-5 "
        style={{
          maxWidth: "1200px",
          padding: " 20px 50px",
          width: "100%",
          border: "1px solid black",
          borderRadius: "20px",
          margin: "0 auto",
        }}
      >
        <Card users={users}></Card>
      </div>
    </div>
  );
}

export default App;
