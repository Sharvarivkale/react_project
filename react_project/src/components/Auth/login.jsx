import { useState } from "react";



function Login({handlelogin}) {

  let [email,setemail]=useState("");
  let [password,setpassword]=useState("");
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    handlelogin(email,password)
    alert("form submitted")
    setemail("")
    setpassword("")
    
  }
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-black">
      <div className="border-2 border-emerald-600 rounded-3xl pt-10 pb-15 pl-10 pr-10  ">
        <form 
        onSubmit={handleSubmit}
        className="flex flex-col ">
          <h1 className="text-green-600 flex justify-center items-center font-bold text-xl">Log in</h1>

          <input   required
            className="text-green-600 bg-transparent border-2 border-emerald-600 pl-10 py-3 px-4 rounded-full outline-none mt-9"
            type="email"
            placeholder="Enter the email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          />

          <input required
            className="text-green-600 mt-4 bg-transparent border-2 border-emerald-600 py-3 px-4 rounded-full outline-none"
            type="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />

          <button
            className="w-full mt-4 bg-emerald-500 text-white py-3 rounded-full border-2 border-emerald-600"
          >
            Log in
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;
