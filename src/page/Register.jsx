import { Link, Form, useActionData } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");
  let email = formData.get("email");
  let password = formData.get("password");
  return { displayName, photoURL, email, password };
};

function Register() {
  const data = useActionData();
  const { registerWithGoogle, register } = useRegister();

  useEffect(() => {
    if (data) {
      register(data);
    }
  }, [data, register]);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <Form
        method="post"
        className="card w-96 p-8 bg-white shadow-lg rounded-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center font-bold text-3xl text-gray-800">Register</h4>
        <input
          type="text"
          name="displayName"
          placeholder="User Name"
          className="input input-bordered w-full mt-2"
        />
        <input
          type="url"
          name="photoURL"
          placeholder="https://photoURL.com"
          className="input input-bordered w-full mt-2"
        />
        <input
          type="email"
          name="email"
          placeholder="test@gmail.com"
          className="input input-bordered w-full mt-2"
        />
        <input
          type="password"
          name="password"
          placeholder="********"
          className="input input-bordered w-full mt-2"
        />
        <button type="submit" className="btn btn-primary btn-block capitalize mt-4">
          Register
        </button>
        <button
          type="button"
          onClick={registerWithGoogle}
          className="btn btn-outline w-full flex items-center justify-center gap-2 mt-2"
        >
          <FcGoogle className="text-2xl" />
          <span className="text-lg">Register with Google</span>
        </button>
        <p className="text-center mt-4 text-gray-600">
          Already a member?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Register;
