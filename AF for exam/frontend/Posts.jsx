import React, { useEffect, useState } from "react";

const Posts = ()=>{
    const [posts,setPosts] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(setPosts);
    }, []);

    return <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>User</th>
                    <th>Posted</th>
                </tr>
            </thead>
            <tbody>
                {  
                    posts.map(post =>{
                        return <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.description}</td>
                            <td>{post.user}</td>
                            <td>{post.posted}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>;
};

export default Posts;