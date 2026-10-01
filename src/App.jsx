import React, { useEffect, useState } from "react";

// Where the feed reads its posts from.
// A relative path keeps the request on the same origin as the page, so the browser
// asks for no CORS permission. Replacing this with a full URL on another host is
// what turns the same fetch into a cross-origin request.
const FEED_URL = "/posts.json";

function PostCard({ post }) {
  return (
    <li className="card">
      <div className="byline">
        <span className="author">{post.author}</span>
        <span className="handle">{post.handle}</span>
      </div>
      <p className="text">{post.text}</p>
      <p className="likes">{post.likes} likes</p>
    </li>
  );
}

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadFeed() {
      // The catch is here because a failed feed fetch is the one error this app
      // is expected to hit, and the message on screen is what you debug from.
      try {
        const response = await fetch(FEED_URL);
        const feed = await response.json();
        setPosts(feed);
      } catch (fetchError) {
        setError(fetchError.message);
      }
    }

    loadFeed();
  }, []);

  return (
    <main>
      <header>
        <h1>Chirp</h1>
        <p>Short posts from people who ship things.</p>
      </header>

      {error && <p className="error">Feed unavailable: {error}</p>}

      <ul className="feed">
        {posts.map(function renderPost(post) {
          return <PostCard key={post.id} post={post} />;
        })}
      </ul>
    </main>
  );
}
