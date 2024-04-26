import { useState } from "react";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login with:", username, password);
  };

  return (
    <div className="flex min-h-screen">
      {/* Login Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100 p-12">
        <h1 className="text-4xl font-bold mb-6">Login</h1>
        <form className="w-full max-w-sm" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <div className="flex items-center border-b border-teal-500 py-2">
              <FaUser className="text-teal-500 mr-2" />
              <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border-b border-teal-500 py-2">
              <FaLock className="text-teal-500 mr-2" />
              <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              <FaSignInAlt className="mr-2" /> Sign In
            </button>
          </div>
        </form>
      </div>

      {/* Image Carousel Section */}
      <div className="w-1/2">
        <div className="h-full overflow-hidden">
          <img className="w-full h-full object-cover transform scale-110 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1605908082539-2fa8664357c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzE0MTQwNjU1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Scenic Landscape" />
        </div>
      </div>
    </div>
  );
};

export default Index;
