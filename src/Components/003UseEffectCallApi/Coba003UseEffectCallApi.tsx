import React, { useState, useEffect } from "react";

type postVm = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type postRes = postVm[];

const Coba003UseEffectCallApi = () => {
  const [posts, setPosts] = useState([] as postRes);

  useEffect(() => {
    const GetPosts = async () => {
      console.log("test123");

      const fetchPosts = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonPosts: postRes = await fetchPosts.json();
      setPosts(jsonPosts);
    };

    //reactjs mengekskusi sebanyak 2 kali event ketika dependesi []
    //nah jika kita mengkondisikan callapi hanya bisa di panggil sekali kita bisa callapi di event petama atau kedua

    GetPosts();
  }, []);

  return (
    <div>
      <div>003. UseEffect</div>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id} ## {post.title}
        </li>
      ))}
      {/* <button onClick={() => ()}>Add Level</button> */}
    </div>
  );
};

export default Coba003UseEffectCallApi;
