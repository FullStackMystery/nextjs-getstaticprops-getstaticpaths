import React from 'react'
import styles from '../../app/styles/users.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { allUsers: data }
    }
}

export default function Users ({ allUsers }) {
  return (
    <div className={styles.single}>
        <h1>All Users</h1>
        {
            allUsers.map(user=>(
                <Link href={'/users/'+user.id} key={user.id}>
                        <h3>
                            {user.name}
                        </h3>
                </Link>
            ))
        }
    </div>
  )
}

