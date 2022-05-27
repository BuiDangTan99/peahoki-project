import React, { useEffect, useState } from "react";
import Register from "../../components/register/index";
import UserProfile from "../../components/userProfile/index";
import "./style.scss";
const Index = () => {
  const [userAuth, setUserAuth] = useState(null);
  // useEffect(()=> {
  //   let user = JSON.parse(localStorage.getItem("user-peahoki"));

  //   setUserAuth(user)
  // }, [userAuth])
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user-peahoki"));
    setUserAuth(user)
    window.addEventListener("storage", () => {
      let user = JSON.parse(localStorage.getItem("user-peahoki"));
      if (user) {
        setUserAuth(user);
      } else {
        setUserAuth(null);
      }
    });
    return () => {
      window.removeEventListener("storage", () =>{});
    };
  }, []);
  const handleRegisterSuccess = () => {
    setUserAuth(JSON.parse(localStorage.getItem("user-peahoki")));
  };
  console.log(userAuth)
  return (
    <div className="container-peahoki">
      <div className="profile">
        {userAuth ? (
          <UserProfile userAuth={userAuth} />
        ) : (
          <Register handleRegisterSuccess={handleRegisterSuccess} />
        )}
      </div>
    </div>
  );
};

export default Index;
