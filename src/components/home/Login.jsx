import React from 'react';
import {getValueForm} from "../../hooks/useGetValueForm";

const testSearchData = {
  "apple": "Mac",
  "samsung": "Shit",
  "nokia": "3100"
}

const email = "static@gmail.com"
const pasword = "12344321"
const accessToken = "privet192"

const Login = () => {

  const searchHandle = (e) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    console.log(searchTerm);
    // request to server
    let results = [];
    for (let key in testSearchData) {
      if (key.includes(searchTerm)) {
        results.push(testSearchData[key])
      }
    }
    console.log(results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {isEmpty , data } = getValueForm(e.currentTarget);
    if (isEmpty){
      data['radio'] = data['radio'] === "on"
      if (!data['email'].endsWith("gmail.com")){
        console.log("Wrong email!")
      }
      if (!data['password'].length < 0){
        console.log("error")
      }
    }

    if(!isEmpty)alert("success")
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input placeholder="email" autoComplete={true} type="email" name="email" id=""/>
      <input placeholder="password" autoComplete={true} type="password" name="password" id=""/>
      <input autoComplete={true} type="checkbox" required name="radio"/>
      <button type="submit">send</button>
    </form>
    <input type="text" onChange={(e) => searchHandle(e)}/>
    </>
  );
};

export default Login;