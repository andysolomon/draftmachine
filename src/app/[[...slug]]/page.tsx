import { ClientOnly } from './client'
import { db } from '~/server/db'
 
export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default async function Page() {
    const posts = await db.query.posts.findMany()
    console.log('Posts :: ', posts)
    return <ClientOnly />
}
