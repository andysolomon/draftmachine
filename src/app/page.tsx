import { db } from '~/server/db'
 
export default async function Page() {
    const posts = await db.query.posts.findMany()
    const athletes = await db.query.Athlete.findMany()

    return (
        <main>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.name}</li>
                ))}
            </ul>
            <h1>Athletes</h1>
            <ul>
                {athletes.map((athlete) => (
                    <li key={athlete.id}>{athlete.firstName} {athlete.lastName}</li>
                ))}
            </ul>
        </main>
    )
}
