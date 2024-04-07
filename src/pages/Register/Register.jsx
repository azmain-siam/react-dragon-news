import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero w-1/2 py-10 mb-10 mx-auto border rounded-md">
        <div className="hero-content flex-col w-full px-20">
          <div className="text-center w-full">
            <h1 className="text-3xl font-bold">Register Your Account</h1>
          </div>
          <hr className="w-full mt-8 mb-4" />
          <div className="card shrink-0 w-full ">
            <form onClick={handleRegister} className=" w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input h-auto py-4 bg-[#F3F3F3] rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl pt-3">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your Photo URL"
                  className="input h-auto py-4 bg-[#F3F3F3] rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl pt-3">
                    Email address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input h-auto py-4 bg-[#F3F3F3] rounded-md"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl pt-3">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input h-auto py-4 bg-[#F3F3F3] rounded-md"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="duration-300 transition-all rounded-md py-4 text-xl font-semibold text-white bg-[#403F3F] active:scale-90 hover:bg-[#403F3F] h-auto"
                >
                  Register
                </button>
              </div>
              <p className="text-center mt-6 text-[#706F6F] font-semibold">
                Already have an account?{" "}
                <Link to={"/login"} className="text-[#ff7b47]">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
