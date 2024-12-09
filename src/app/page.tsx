import { db } from '~/server/db'
 
export default async function Page() {
    const posts = await db.query.posts.findMany()
    const athletes = await db.query.Athlete.findMany()
    const teams = await db.query.BasketballTeam.findMany()

    return (
        <main>
			<h1>Welcome</h1>
            <h1>Athletes</h1>
            <ul>
                {athletes.map((athlete) => (
                    <li key={athlete.id}>{athlete.firstName} {athlete.lastName}</li>
                ))}
            </ul>

            <h1>Teams</h1>
            <ul>
                {teams.map((team) => (
                    <li key={team.id}>{team.name} {team.location}</li>
                ))}
            </ul>
        </main>
    )
}
