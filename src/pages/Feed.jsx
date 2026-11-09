import React, { useState, useEffect } from 'react'
import axios from 'axios'
function Feed() {

  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://ik.imagekit.io/atulkumar9451/image_M0NMYJ-Qm.jpg?updatedAt=1790874711086",
      caption: "beatiful_pic"
    }
  ])


  useEffect(() => {
    axios.get('https://create-posts-backend.onrender.com/posts')
      .then((res) => { 
        console.log(res.data);
        setPosts(res.data.posts)
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      })
  }, []) 



  return (
    <section className='feed-section' >
      {
        posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className='post-card'>
              <img src={post.image} alt={post.caption} />
              <p>{post.caption}</p>
            </div>
          )
          )
        ) : (<h1>No post available</h1>)}

    </section>
  )
}

export default Feed;
