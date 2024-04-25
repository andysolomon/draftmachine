import { ClientOnly } from './client'
import { db } from '~/server/db'
 
export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default async function Page() {
    const posts = await db.query.posts.findMany()
    const athletes = await db.query.Athlete.findMany()
    console.log('Posts :: ', posts)
    console.log('Athletes :: ', athletes)
    return <ClientOnly athletes={athletes} />
}
