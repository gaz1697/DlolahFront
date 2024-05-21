import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import { db } from "../firebase/firebase";
import { set, ref } from "firebase/database";

const SignupCard = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [name, setName] = useState("");
  const [program, setProgram] = useState("");
  const [office, setOffice] = useState("");
  const [floor, setFloor] = useState("");
  const [section, setSection] = useState("");
  const [error, setError] = useState("");

  const register = async () => {
    if (registerPassword.length < 10 || registerPassword.length > 20) {
      setError("Password should be at least 10 characters and at most 20 characters");
      return;
    }

    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user.user.uid);
      const userObj = {
        user_id: user.user.uid,
        name: name,
        program: program,
        office: office,
        floor: floor,
        section: section,
        email: registerEmail,
      };
      await set(ref(db, "users/" + user.user.uid), userObj);
      console.log(user);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="mb-4 w-full rounded bg-white px-8 pb-8 pt-6 shadow-md">
        {error && <p className="text-red-500 text-center">{error}</p>}
        <h2 className="mb-6 text-center text-2xl">Sign Up</h2>
        <form className="grid grid-cols-2 gap-4 w-full">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username">
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="text"
              placeholder="email"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username">
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="name"
              type="text"
              placeholder="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username">
              Department
            </label>
            <select
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="Programs"
              onChange={(event) => {
                setProgram(event.target.value);
              }}
            >
              <option value="CIS">CIS</option>
              <option value="CS">CS</option>
              <option value="AI">AI</option>
              <option value="CYS">CYS</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username">
              Office
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="office"
              type="text"
              placeholder="Office"
              onChange={(event) => {
                setOffice(event.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username">
              Floor
            </label>
            <select
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="floor"
              onChange={(event) => {
                setFloor(event.target.value);
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username">
              Office Section
            </label>
            <select
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="section"
              onChange={(event) => {
                setSection(event.target.value);
              }}
            >
              <option value="Student Affairs">Student Affairs</option>
              <option value="Management">Management</option>
              <option value="labs">Labs1</option>
              <option value="labs">Labs3</option>
              <option value="CIS">CIS</option>
              <option value="CS">CS</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="networks and communications">networks and communications</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm text-white"> submit</label>
            <button
              className="focus:shadow-outline w-full rounded bg-green-500 px-3 py-2  leading-tight font-bold text-white hover:bg-green-700 focus:outline-none"
              type="button"
              onClick={register}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupCard;
