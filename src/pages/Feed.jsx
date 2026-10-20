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
    const res = axios.get('https://show-posts-feed.onrender.com/posts')
      .then(() => {
        setPosts(res.data.posts)
      })

  }, [])  //depedency arr jo khali hai ise jaruru likhna hota hai



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