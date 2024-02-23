'use client'

import { useEffect, useState } from 'react'

type NewsPost = {
	author: string
	title: string
	description: string
	url: string
	source: string
	image: string
	category: string
	language: string
	country: string
	published_at: string
}

type Error = {
	message: string
}

async function getData() {
	const res = await fetch(
		`http://api.mediastack.com/v1/news?access_key=${process.env.ACCESS_KEY}&limit=1&countries=us&languages=en`
	)
	if (!res.ok) {
		console.log(res.status)
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default function Page() {
	const [newsPost, setNewsPost] = useState<NewsPost | undefined>(undefined)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getData()
				const posts: NewsPost[] = data.data
				if (posts.length > 0) {
					setNewsPost(posts[0]) // Assuming you want to display the first post
				} else {
					throw new Error('No news found')
				}
			} catch (error) {
				setError(error as Error)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>
	if (!newsPost) return <div>No news found</div>

	return (
		<main>
			<h2>News</h2>
			<h2>{newsPost.title}</h2>
			<p>{newsPost.description}</p>
			<p>{newsPost.published_at}</p>
		</main>
	)
}
