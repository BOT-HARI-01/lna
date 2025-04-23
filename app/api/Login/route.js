import ConnetToDb from "@/lib/mongodb";
import User from "@/models/users_db";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export async function POST(request) {
  const { username, password } = await request.json();
  if (!username || !password) {
    return new Response(
      JSON.stringify({ message: "Both username and password are required." }),
      { status: 400 }
    );
  }

  try {
    await ConnetToDb();

    const user = await User.findOne({ username });
    if (!user) {
      return new Response(
        JSON.stringify({ message: "Invalid credentials" }),
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ message: "Invalid credentials" }),
        { status: 401 }
      );
    }
    
    const userLoad = {
      username,
      preferences : user.preferences,
      headings : user.headings,
      // savedPosts : user.savedPosts,
    }

    const token = jwt.sign(userLoad,process.env.JWT_SECRET,{
      expiresIn : '1h'
    })

    return new Response(
      JSON.stringify({ message: "Login successful",userId :user._id,token}),
      { status: 200 }
    );
  } catch (error) {
    console.error(error + "error");
    return new Response(
      JSON.stringify({ message: "Server Error" }),
      { status: 500 }
    );
  }
}