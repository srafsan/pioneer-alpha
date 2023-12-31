import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../../Hooks/useTitle";

const Register = () => {
  useTitle("SnipShop | Register");
  const navigate = useNavigate();
  const { setReload, createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const notifySuccess = () => toast.success("Registration done successfully!");
  const notifyError = () => toast.error("Failed to Register");

  useEffect(() => {
    if (error) {
      const errorTimer = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(errorTimer);
    }
  }, [error]);

  useEffect(() => {
    if (successMessage) {
      const successTimer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(successTimer);
    }
  }, [successMessage]);

  const handleRegistration = (event) => {
    event.preventDefault();

    const form = event.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photoURL = form.photo.value;

    if (password !== confirmPassword) {
      notifyError("Registration not done.");
      setError();
      setSuccessMessage("");
    } else if (password.length < 6) {
      notifyError();
      setError("Password must be at least 6 characters");
      setSuccessMessage("");
    } else {
      createUser(email, password, photoURL, displayName)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);
          setReload(true);
        })
        .catch((error) => {
          console.log(error);
        });
      form.reset();
      notifySuccess();
      setSuccessMessage("Registration successful!");
      setError("");

      setTimeout(function () {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <section className="bg-gray-50 min-h-[90vh] flex items-center justify-center">
      <div className="bg-gray-100 flex flex-row-reverse rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            To become a member, register now!
          </p>

          <form onSubmit={handleRegistration} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="p-2 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="p-2 rounded-xl border w-full"
              type="password"
              name="password"
              placeholder="Password"
            />
            <input
              className="p-2 rounded-xl border w-full"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <input
              className="p-2 rounded-xl border w-full"
              type="text"
              name="photo"
              placeholder="Photo URL"
            />
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Register
            </button>
          </form>
          {error && <p className="mt-3 text-error">{error}</p>}
          {successMessage && <p className="text-success">{successMessage}</p>}

          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]"></div>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Already have an account?</p>
            <Link
              to="/login"
              className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src="https://images.unsplash.com/photo-1559631658-9705048d977e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          />
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Register;
