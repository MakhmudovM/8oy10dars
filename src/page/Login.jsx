import { Form, Link, useActionData } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRegister } from "../hooks/useRegister";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function Login() {
  const data = useActionData();
  const { signin } = useLogin();
  const { registerWithGoogle } = useRegister();

  useEffect(() => {
    if (data) {
      signin(data);
    }
  }, [data, signin]);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <Form
        method="post"
        className="card w-96 p-8 bg-white shadow-lg rounded-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center font-bold text-3xl text-gray-700">Login</h4>
        <input
          type="email"
          name="email"
          placeholder="yourgmail@gmail.com"
          className="input input-bordered w-full mt-2"
        />
        <input
          type="password"
          name="password"
          placeholder="********"
          className="input input-bordered w-full mt-2"
        />
        <button type="submit" className="btn btn-primary btn-block capitalize mt-4">
          Login
        </button>
        <button
          type="button"
          onClick={registerWithGoogle}
          className="btn btn-outline w-full flex items-center justify-center gap-2 mt-2"
        >
          <FcGoogle className="text-2xl" />
          <span className="text-lg">Login with Google</span>
        </button>
        <p className="text-center mt-4 text-gray-600">
          Not a member yet?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Login;
