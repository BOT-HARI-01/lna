'use client'
import { useState } from 'react';
import { signIn } from 'next-auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signup.css'
import { useRouter } from 'next/navigation';

export default function SignupPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usrnmerr, setUsrerr] = useState(null);
    const [passerr, setPasserr] = useState(null);
    const router = useRouter();
    const validateUsername = (username) => {
        return username.length >= 5 && username.length <= 15;
    };
    
        const validatePassword = (password) => {
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return regex.test(password);
    };
    const handleSignup = async (e) => {
        e.preventDefault();
        
        setUsrerr(null);
        setPasserr(null);

        if (!validateUsername(username)) {
            setUsrerr('Username must be between 5 and 15 characters.');
            return;
        }

        if (!validatePassword(password)) {
            setPasserr(
                'Password must be at least 8 characters long, and include at least one letter, one number, and one special character.'
            );
            return;
        }

        try {
            const res = await fetch('/api/Signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });
            const data = await res.json();
            if (res.ok) {
                toast.success('User created successfully! Redirecting to login...', {
                    position: 'top-center',
                });
                setTimeout(() => router.push('/login'), 3000);
            } else {
              toast.error(data.message || 'Something went wrong. Please Try again!', {
                position: "top-center", 
                autoClose: 3000,
              });
            }
        } catch (error) {
          console.error('Error during signup:', error);
          // Error toast notification for failed login
          toast.error('Signup failed. Please try again.', {
            position: "top-center", 
            autoClose: 3000,
          });
        }
    };
    
    const handleGoogleSignup = () => {
        signIn('google', { callbackUrl: '/' });
    };

  return (
    <div className="signup-container">
      <ToastContainer/>
      <div className="signup-box">
        <h1 className="signup-title">Sign Up</h1>
        <form onSubmit={handleSignup}>
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
            {usrnmerr ?  usrnmerr : " "}
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            {passerr ? passerr : " "}
          </div>
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
        <div className="social-signup">
          <button
            type="button"
            className="google-signup-button"
            onClick={handleGoogleSignup}
          >
            Continue with Google
          </button>
        </div>
        <div className="bottom">
          <p className="bottom-p">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
