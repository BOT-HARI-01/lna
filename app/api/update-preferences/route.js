import ConnectToDb from "@/lib/mongodb";
import User from "@/models/users_db";

export async function POST(request) {
  const {headings, tags, username} = await request.json();

  try {
    await ConnectToDb();

    const user = await User.findOne({username});

    if (user) {
      user.preferences = tags;
      user.headings = headings;
      await user.save();
      return new Response(JSON.stringify({ message: 'Preferences updated successfully' }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Something went wrong' }), { status: 500 });
  }
}
