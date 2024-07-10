import React, { useState } from "react";
import Layout from "../components/Layout";
import "../styles/SignUp.css";
import petImage from "../Assets/pet.jpg"; // Ensure the correct path to your image file
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [petId, setPetId] = useState("");
  const [petName, setPetName] = useState("");
  const [adoptionConfirm, setAdoptionConfirm] = useState(false);
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let inputObj = { username, email, password, phone, petId, petName, adoptionConfirm, address };
    let url = "http://localhost:4000/users/createuser";
    axios
      .post(url, inputObj)
      .then((res) => {
        if (res.status === 200) {
          alert("User Created Successfully");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="signup-container">
        <div className="image-container">
          <img src={petImage} alt="Pet" className="pet-image" />
          <p className="image-text">For every animal saved, countless others are still suffering.

By stepping up for them, you can create a future where animals no longer have to suffer in puppy mills, factory farms, testing labs or other heartbreaking situations.

Will you be a hero for all animals? Start saving lives today by making a tax-deductible one-time gift—or fight for all animals all year long with a monthly contribution.</p>
<p className="image-text2">So you’ve decided to add a new pet to your family. First, you should answer some questions: What kind of pet will be the best fit for your household? Do you have enough time to devote to the daily needs of a dog? Is there someone in your household who is allergic? What about a non-traditional pet such as a rat or another small animal?</p>
        </div>
        <div className="form-container">
          <h1>Pet Adoption Forum</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Pet ID"
              value={petId}
              onChange={(e) => setPetId(e.target.value)}
            />
            <input
              type="text"
              placeholder="Pet Name"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
            />
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={adoptionConfirm}
                onChange={(e) => setAdoptionConfirm(e.target.checked)}
              />
              Adoption Confirm
            </label>
            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            <input type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
