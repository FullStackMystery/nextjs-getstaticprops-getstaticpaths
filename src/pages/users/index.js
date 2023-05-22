import React from 'react'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { allUsers: data }
    }
}

export default function Users ({ allUsers }) {
  return (
    <div>
        <h1>All Users</h1>
        {
            allUsers.map(user=>(
                <div key={user.id}>
                    <a>
                        <h3>
                            {user.name}
                        </h3>
                    </a>
                </div>
            ))
        }
    </div>
  )
}

