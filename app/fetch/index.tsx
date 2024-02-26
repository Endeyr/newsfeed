import { url } from '@/api/index'

async function getPosts() {
	const response = await fetch(url)

	if (!response.ok) {
		console.log(response.status)
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}
	return response.json()
}

export default async function Posts() {
	const data = await getPosts()

	if (!data || data.length === 0) return <div>No Posts</div>

	const post = data[0]

	return (
		<main>
			<h2>Post</h2>
			<p>{post.title}</p>
			<p>{post.body}</p>
		</main>
	)
}
