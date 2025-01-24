'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", {
        callbackUrl: "/",
        prompt: "select_account"
      });
    } catch (error) {
      toast.error("Google Sign-In failed", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    if (username && password) {
      try {
        const response = await fetch("/api/Login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });


        const data = await response.json();
        // console.log("Here")
        // console.log(data,"data at login/page")

        if (response.ok) {
          toast.success("Login successful! Redirecting...", {
            position: "top-center",
            autoClose: 3000,
          });
          setTimeout(() => router.push('/about'), 3000);
        } else {
          // const error = await response.json();
          // Error toast notification
          toast.error(data.message || 'Invalid credentials', {
            position: "top-center",
            autoClose: 3000,
          });
        }
      } catch (error) {
        console.error('Error during login:', error);
        // Error toast notification for failed login
        toast.error('Login failed. Please try again.', {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } else {
      toast.warn('Please fill in all fields', {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="theContainer">
      {/* Toast container for displaying toast notifications */}
      <ToastContainer />

      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label className="input-label" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <button type="submit" className="submit-button">
              Login
            </button>
            <p className="text"></p>
            <div className="social-signup">
              <button
                type="button"
                className="google-signup-button"
                onClick={handleGoogleSignIn}
              >
                Continue with Google
              </button>
            </div>
            <div className="bottom">
              <p className="bottom-p">
                Don&apos;t have an Account? <a href="/signup">Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
