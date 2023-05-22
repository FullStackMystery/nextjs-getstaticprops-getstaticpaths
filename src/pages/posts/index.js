import React from 'react'
import styles from '../../app/styles/users.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: { allPosts: data }
    }
}


export default function Posts({allPosts}) {
  return (
    <div className={styles.single}>
        <h1>All Posts</h1>
        {
            allPosts.map(post=>(
                <Link href={'/posts/'+post.id} key={post.id}>
                        <h3>
                            {post.title}
                        </h3>
                </Link>
            ))
        }
    </div>
  )
}
