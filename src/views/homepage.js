import React, { useEffect, useState } from "react";

const Homepage = () => {
    const [posts, makePosts] = useState(null) //set up getter and setter for this object
    useEffect(() => { //on render set our state to our fetched json object so it is always up to date
        const getPosts = async () => {
            const res = await fetch('https://guarded-bayou-85189.herokuapp.com/all')
            const result = await res.json()

            if (res.ok) {
                makePosts(result)
                console.log('should get result back')
            }
        }
        getPosts()
    }, [])

    return ( 
        <div className="section">
            {posts && posts.map((x) => (
                <div className="post" key={x._id}>
                    <h4 className="user"> - user: {x.user} </h4>
                    <h4 className="title"> - title: {x.title} </h4>
                    <h4 className="category"> - category: {x.category} </h4>
                    <h4 className="time"> <strong> {x.createdAt} </strong></h4>
                    <hr className="hr"></hr>
                    <p className="chapTitle"> | chapter 1 </p>
                    <div className="chapter"> {x.chapter1} </div>
                    <hr className="hr"></hr>
                    <p className="chapTitle"> | chapter 2</p>
                    <div className="chapter"> {x.chapter2} </div>
                    <p>{x.chapter3}</p>
                </div>
            ))}
        </div>
    )
}

export default Homepage