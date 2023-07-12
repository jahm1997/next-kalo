import React from "react";
import App from "next/app";
import Link from "next/link";
// import { postUserLogin } from "../../services/authServices";
// import { login } from "../../services/authServices";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// async function fetchUser(user) {
//   const res = await fetch("https://reqres.in/api/users");
//   const data = await res.json();
//   return data.data;
// }
export default async function IndexPage() {
  return (
    <div>
      <h1>Hola este es la pagina</h1>
    </div>
  );
}

// const Register = () => {
//   const [password, setPassWord] = useState({
//     password: "",
//     password2: "",
//   });
//   const [email, setEmail] = useState("");
//   const [errorUser, SetErrorUser] = useState(true);
//   const [errorPassword, setErrorPassword] = useState(true);

//   const register = async () => {
//     try {
//       const formData = new FormData();
//       const formLogin = {
//         name: email.split("@")[0],
//         username: email.split("@")[0],
//         email: email,
//         password: password.password2,
//         enable: false,
//       };
//        login({ email, password: password.password2 })
//         navigate("/dashboard/perfil");
//       }
