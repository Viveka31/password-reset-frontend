import { useState } from "react";
import axios from "axios";
import { FaEnvelope } from "react-icons/fa";

export default function ForgotPassword() {

  const [email,setEmail] = useState("");
  const [loading,setLoading] = useState(false);

  const submit = async () => {

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

      alert(res.data.message);

    }catch(error){

      alert(error.response?.data?.message || "Error");

    }

    setLoading(false);

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