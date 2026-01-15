import React, { useContext, useState } from "react";
import Login from "./components/Auth/login";
import EmpDAsh from "./components/Dashboard/employeedashboard";
import AdmimDash from "./components/Dashboard/Admindashboard";
import AuthContext from "./context/AuthContext";
import { setCurrentUser } from "./utils/localStroage";

function App() {
  const [user, setUser] = useState(null);
  const Authdata = useContext(AuthContext);

  //  LOGIN FUNCTION
  const handlelogin = (email, password) => {
    // find admin
    const adminUser = Authdata?.admin?.find(
      (a) => a.email === email && a.password === password
    );

    // find employee
    const empUser = Authdata?.employee?.find(
      (e) => e.email === email && e.password === password
    );

    if (adminUser) {
      setUser("admin");
      setCurrentUser(adminUser); // save admin
    } 
    else if (empUser) {
      setUser("employee");
      setCurrentUser(empUser); // save employee
    } 
    else {
      alert("Invalid email or password");
    }
  };

  const handleloginout=()=>{
    return setUser(null)
  }

  return (
    <>
      {!user && <Login handlelogin={handlelogin} />}

      {user === "admin" && <AdmimDash onLogOut={handleloginout}/>}
      {user === "employee" && <EmpDAsh onLogOut={handleloginout} />}
      {/* <EmpDAsh/> */}
    </>
  );
}

export default App;
