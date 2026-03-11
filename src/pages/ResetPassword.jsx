import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaLock } from "react-icons/fa";

export default function ResetPassword() {

  const { token } = useParams();

  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  const submit = async () => {
    console.log("submit 2");
    

    if(!password){
      alert("Enter new password");
      return;
    }

    try{

      setLoading(true);

      const res = await axios.post(
        `https://password-reset-backend-tjps.onrender.com/api/auth/reset-password/${token}`,
        { password }
      );

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

        <h3 className="text-center mb-4">Reset Password</h3>

        <div className="input-group mb-3">

          <span className="input-group-text">
            <FaLock />
          </span>

          <input
            type="password"
            className="form-control"
            placeholder="Enter new password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

        </div>

        <button
        type="button"
          className="btn btn-success w-100"
          onClick={submit}
          disabled={loading}
        >
          {loading ? "Updating..." : "Reset Password"}
        </button>

      </div>

    </div>

  );
}