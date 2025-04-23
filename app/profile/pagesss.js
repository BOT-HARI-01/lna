"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [email, setemail] = useState(null);
  const [likedPosts, setlikedPosts] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [preferences, setPreferences] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      try {
        if (storedUser?.username) {
          setUser(storedUser);
        } else {
          throw new Error("Invalid user object");
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        toast.error("Corrupted user data.");
        localStorage.removeItem("user");
      }
    } else {
      toast.error("User not logged in!", { icon: "❌" });
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user?.username) return;
      try {

        const response = await fetch('/api/profile', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: user.username })
        })

        if (response.ok) {
          const data = await response.json();
          setemail(data.user.email);
          setPreferences(data.user.preferences || []);
          setlikedPosts(data.user.likedPosts || []);
          setWatchLater(data.user.watchLater || []);
        }
      } catch (error) {
        console.error("Error fetching preferences:", error);
        toast.error("Error Fetching User Data");
      }
    };
    fetchUserData();
  }, [user]);


  return (
    <div className='theContainer'>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "1rem",
              boxShadow: "none",
              background: "#fff",
              color: "#000",
              borderRadius: "8px",
              border: "2px solid lightgrey",
              padding: "10px",
            },
          }}
        />

        {user ? (
          <>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>User Profile</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px",
                background: "#f8f9fa",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src="/default-avatar.png"
                alt="User Avatar"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
              />
              <div style={{ marginLeft: "15px" }}>
                <h4>{user.username}</h4>
                <p>Email: {email || "Not Provided"}</p>
              </div>
            </div>

            {/* Display Preferences */}
            <div style={{ marginTop: "20px" }}>
              <h3>Your Preferences</h3>
              {preferences.length > 0 ? (
                <ul>
                  {preferences.map((pref, index) => (
                    <li key={index} style={{ padding: "5px 0" }}>
                      {pref}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No preferences selected.</p>
              )}
            </div>

            {/* Display Saved Posts */}
            <div style={{ marginTop: "20px" }}>
              <h3>Liked Posts</h3>
              {likedPosts.length > 0 ? (
                likedPosts.map((post, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      marginBottom: "10px",
                      background: "#fff",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={post.image || "/placeholder.png"}
                      alt={post.title}
                      width={100}
                      height={100}
                      style={{ borderRadius: "5px", marginRight: "10px" }}
                    />
                    <div>
                      <h4>{post.title}</h4>
                      <p>{post.content}</p>
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p>No saved posts.</p>
              )}
            </div>
            
            <div style={{ marginTop: "20px" }}>
              <h3>watchLater Posts</h3>
              {watchLater.length > 0 ? (
                watchLater.map((post, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      marginBottom: "10px",
                      background: "#fff",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={post.image || "/placeholder.png"}
                      alt={post.title}
                      width={100}
                      height={100}
                      style={{ borderRadius: "5px", marginRight: "10px" }}
                    />
                    <div>
                      <h4>{post.title}</h4>
                      <p>{post.content}</p>
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p>No watchLater posts.</p>
              )}
            </div>
          </>
        ) : (
          <p style={{ textAlign: "center" }}>Please log in to view your profile.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
