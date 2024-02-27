import { url } from '@/api/index'
import Posts from '../components/posts'

async function getPosts() {
	const response = await fetch(url)

	if (!response.ok) {
		console.log(response.status)
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}
	return response.json()
}

export default async function DisplayPosts() {
	const data = await getPosts()
	if (!data || data.length === 0) return <div>No Posts</div>

	return <Posts data={data} />
}
