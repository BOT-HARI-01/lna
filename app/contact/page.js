// Random shit page

// go to bottom line 97


// import { useEffect, useState } from 'react';

// const TagsComponent = () => {
//   // State to store tags and user input
//   const [tags, setTags] = useState([]);
//   const [newTag, setNewTag] = useState('');

//   // Retrieve tags from localStorage when the component mounts
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const storedTags = localStorage.getItem('tags');
//       setTags(storedTags ? JSON.parse(storedTags) : []);  // Parse data if exists, else empty array
//     }
//   }, []);

//   // Function to handle input change
//   const handleInputChange = (e) => {
//     setNewTag(e.target.value);
//   };

//   // Function to add a new tag
//   const addTag = () => {
//     if (newTag.trim() === '') return;  // Avoid adding empty tags
//     const updatedTags = [...tags, newTag.trim()];  // Add new tag to the array

//     // Store the updated tags array in localStorage
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('tags', JSON.stringify(updatedTags));
//     }

//     // Update the state
//     setTags(updatedTags);
//     setNewTag('');  // Clear the input field
//   };

//   return (
//     <div>
//       <h1>Tags:</h1>
//       {/* Input to enter a new tag */}
//       <input 
//         type="text" 
//         value={newTag} 
//         onChange={handleInputChange} 
//         placeholder="Enter a new tag"
//       />
//       <button onClick={addTag}>Add Tag</button>

//       {/* Display tags */}
//       <ul>
//         {tags.length > 0 ? (
//           tags.map((tag, index) => <li key={index}>{tag}</li>)
//         ) : (
//           <li>No tags yet</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default TagsComponent;
// export default function ArticleDef(){
//   return(
//     <div dangerouslySetInnerHTML={{
//       __html: <div><article><h1 id="980b">How Writing For 1-Hour Everyday Helped Me Build a Six-Figure Business</h1><h2 id="8482">Learn to write, and then build whatever business you want.</h2><figure id="da6d"><figcaption>Author touching walls</figcaption></figure><p id="a547"><i>Lost. Anxious. Heartbroken.</i></p><p id="7862">That’s how I felt when I started writing in 2018–19. I was recovering from a break-up of a 6-year relationship. I was struggling in my job.</p><p id="2049">For whatever reason, I felt compelled to write.</p><p id="7e09">Here’s what happened next.</p><h2 id="1dae">I had no talent or fancy degree.</h2><p id="f9df">There’s no denying it, I sucked.</p><p id="0515">I don’t even know why I chose to write. I had zero evidence I’d be any good.</p><p id="7a68">All the data I had when I started was that I:</p><ul><li>Got below average for English in high school.</li><li>My Uni asked me to do extra English classes.</li><li>Zero engagement on anything I wrote.</li></ul><p id="6395">But whenever I would sit down and start typing away, time would melt away. My creativity would skyrocket. Ideas became clearer. The sun shone brighter. Even durian tasted better.</p><p id="b265"><i>(okay, maybe I’m over-exaggerating the last one a bit).</i></p><p id="8f30">But after every writing session, I felt so light and clear.</p><p id="3ff1">Almost like being high.</p><p id="3bf1">I was addicted.</p><p id="e0cc">Writing has been my drug addiction of choice ever since. I need to write.</p><p id="69a3">If I don’t do it for a few days, I feel anxious.</p><p id="2159">My mind will start to spiral. Random thoughts become trapped in my head. I can’t sleep well. And I become a shitty person to be around. I’m not kidding.</p><p id="2428">And if I’m not writing, I’m learning about writing.</p><p id="72f9">My experience taught me that obsession will beat any talent or fancy degree.</p><p id="004d">I can’t tell you how many <i>‘talented’</i> and <i>‘qualified’</i> writers there are. While they are w*nking themselves off with their qualifications, I just get down to writing.</p><p id="2251">While they brag, I write.</p><p id="213c">While they argue, I write.</p><p id="0713">While they complain, I write.</p><p id="0952"><b>Chase obsession. Not random degrees (and f*ck talent).</b></p><h2 id="78ca">I’ve discovered a dirty secret of the internet…</h2><p id="1541">All the best creators are writers:</p><ul><li>Dan Koe.</li><li>Alex Hormozi.</li></ul><p id="9a57">Not many people know that Alex Hormozi got a scholarship for his writing in college. Dan Koe made his name as a writer first, then as a YouTuber.</p><p id="049f">If you want to succeed on the internet, writing is the most valuable skill you can learn.</p><p id="d8de">Even with ChatGPT. Even with AI.</p><p id="a114">The benefit you get from writing is your self-development. You learn about your own personality. You learn about human psychology.</p><p id="f995">Outsourcing your self-improvement to AI is like getting a robot to exercise for you.</p><p id="5fad">Sure, it’s more efficient. But defeats the purpose of it.</p><p id="460a">Writing is the foundation of everything on the internet.</p><ul><li>YouTube scripts = Writing.</li><li>Short-form Reels &amp; Tik-Toks = Writing (at least the good ones).</li></ul><p id="dbee">Do you want to build an audience, business, or personal brand?</p><p id="65c2">Start with writing.</p><p id="1f71">I’ve been able to build multiple businesses because of my writing:</p><ul><li>I started my first one-person business (procurement consulting) by writing online and attracting my first 2–3 clients.</li><li>18 months later, I then used my writing to sell that business (acquired via stock swapping) to a larger consultancy in Australia.</li><li>I’ve now used my writing to pivot into a sales and marketing one-person business while I build an audience and email list and create a community membership.</li></ul><p id="3d64"><b>Learn to write, and then do whatever you want on the internet.</b></p><h2 id="4a21">I started small</h2><p id="05c4">I write for 1–2 hours every day.</p><p id="2a4c">Even on holidays, weekends, and Christmas. I feel like a part of me is missing when I n write.</p><p id="4953">But I didn’t start here.</p><p id="0e8a">Six years ago, I’d only write for 15–20 minutes. Sometimes less.</p><p id="a34b">I focused on building the habit of showing up. Most of what I produced during that time sucked.</p><p id="4d7e">But that’s okay.</p><p id="a026">Your first:</p><ul><li>100 articles.</li><li>100 days.</li></ul><p id="91f0">…are going to suck. There’s no avoiding it.</p><p id="f887">You might as well get through the ‘suck’ period quickly.</p><p id="d53b">Don’t procrastinate.</p><p id="3355">You’re just delaying your greatness.</p><p id="35e6">But you’ll improve over time.</p><p id="e503">When people say to me: <i>“But I’m not a writer.”</i></p><p id="0808">I ask them:</p><ul><li>Do you write any lists or to-do’s?</li><li>Do you send any emails, DMs, or texts?</li><li>Do you write social media captions or comments?</li></ul><p id="19f1">The answer is usually <i>yes, yes, and yes.</i></p><p id="1754">Everyone <i>already</i> writes every day.</p><p id="7c2b">You just need to become more intentional with your writing.</p><p id="2953"><b>Instead of feeding someone else’s traffic source, feed yours.</b></p><h2 id="c684">Writing powers my entire business.</h2><p id="66de">I would start with long-form writing.</p><p id="dabb">Why?</p><ul><li><b>Long-form = being known-well.</b></li><li><b>Short-form = being well-known.</b></li></ul><p id="b83f">Being <b><i>well-known</i></b> gets you virality and impressions.</p><p id="66dd">But being <b><i>known-well</i></b> gets you money (even with a tiny audience).</p><p id="d358">I’ve got a coaching client with only 2.5k Instagram followers, making $15k (AUD) per month from her clinic. We worked on dialing in my <i>Limitless Writing System</i> into her business so she could attract her ideal customer.</p><p id="f3ef">This isn’t luck.</p><p id="3714">I did the same thing with another client who has a physical gym. With less than 4.5k Instagram followers and less than 50 people on his email list, he hit his first $20k month ever.</p><p id="10be">Obviously, they did the hard work.</p><p id="7efc">But I could use the same system in my business to grow it to over $20k again. Over the 6(ish) years I’ve been writing, I’ve developed a system to architect my long-form writing to be infinitely leveraged.</p><p id="c066">Now, writing for 1–2 hours per day powers my:</p><ul><li>Offers.</li><li>Email newsletters.</li><li>Social media content.</li><li>Medium &amp; $ubstack articles.</li><li>Inbound lead generation from prospects.</li></ul><p id="4fe6">The rest of my day can be spent delivering value for clients.</p><p id="a284">Sometimes I just take a nap or go to the gym.</p><h2 id="2ea1">Writing will change your life.</h2><p id="be47">30–60 minutes per day.</p><p id="79a3">That’s all you need.</p><p id="5ec3">Learn to write, and then build whatever business you want.</p><p id="cee4">Learn to write, and then build whatever lifestyle you want.</p><p id="2cde">Learn to write, and then build whatever x you want.</p><p id="adae">Bottom line: Learn to write.</p><p id="f820"><i>👉 I’ve previously sold a one-person business and I’m in the process of scaling another one to $20k per month. If you want my one-person business growth system, <a href="https://michaellim.ck.page/4f6bae8dfc">I’ve created a FREE email course</a> for you to get started.</i></p><div id="edc6" class="link-block">
//           <a href="https://michaellim.ck.page/4f6bae8dfc">
//             <div>
//               <div>
//                 <h2>Make Your First $1,000 From Your One-Person Business</h2>
//                 <div><h3>Start a cash-flowing one-person business within 90 days, starting with $0 and zero knowledge.</h3></div>
//                 <div><p>michaellim.ck.page</p></div>
//               </div>
//               <div>
//                 <div style="background-image: url(https://miro.readmedium.com/v2/resize:fit:320/0*7jkuQJlOAWGumRL6)"></div>
//               </div>
//             </div>
//           </a>
//         </div></article><script defer="" src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon="{&quot;rayId&quot;:&quot;8f7fc830ff083bf4&quot;,&quot;version&quot;:&quot;2024.10.5&quot;,&quot;r&quot;:1,&quot;token&quot;:&quot;4af5d1557add4585a1ecb017352c34ac&quot;,&quot;serverTiming&quot;:{&quot;name&quot;:{&quot;cfExtPri&quot;:true,&quot;cfL4&quot;:true,&quot;cfSpeedBrain&quot;:true,&quot;cfCacheStatus&quot;:true}}}" crossorigin="anonymous"></script>
// </div>
//     }}/>
      
//   )
// };
export default function random(){
  return(
    <div>
      <h1>Ewwwwwwwwww....</h1>
    </div>
  )
}
