import { useState } from "react";
import axios from "axios";
import { FaEnvelope } from "react-icons/fa";

export default function ForgotPassword() {

  const [email,setEmail] = useState("");
  const [loading,setLoading] = useState(false);

  const submit = async () => {
    console.log("submit clicked 1");
    

    if(!email){
      alert("Enter email");
      return;
    }

    try{

      setLoading(true);

      const res = await axios.post(
        "https://password-reset-backend-tjps.onrender.com/api/auth/forgot-password",
        { email }
      );

      alert(`Reset link: ${res.data.resetLink}`);
console.log("Reset link:", res.data.resetLink);
      alert(res.data.message);

    }catch(error){

      alert(error.response?.data?.message || "Error");

    }finally{

    setLoading(false);
    }

  };

  return (

    <div className="main-container">

      <div className="card shadow-lg p-4 form-card">

        <h3 className="text-center mb-4">Forgot Password</h3>

        <div className="input-group mb-3">

          <span className="input-group-text">
            <FaEnvelope />
          </span>

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

        </div>

        <button
        type="button"
          className="btn btn-primary w-100"
          onClick={submit}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

      </div>

    </div>

  );
}