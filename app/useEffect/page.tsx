'use client'

import { useEffect, useRef, useState } from 'react'
import getData from '.'

type NewsPost = {
	source: {
		id: string
		name: string
	}
	author: string
	title: string
	description: string
	url: string
	urlToImage: string
	published_at: string
	content: string
}

type Error = {
	message: string
}

export default function Page() {
	const [newsPost, setNewsPost] = useState<NewsPost | undefined>(undefined)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	const abortControllerRef = useRef<AbortController | null>(null)

	useEffect(() => {
		const controller = new AbortController()
		abortControllerRef.current = controller
		const signal = controller.signal
		const fetchData = async () => {
			try {
				const data = await getData()
				const posts: NewsPost[] = data.articles
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

		return () => {
			controller.abort()
		}
	}, [])

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>
	if (!newsPost) return <div>No news found</div>

	return (
		<main>
			<h2>News</h2>
			<h2>{newsPost.title}</h2>
			<p>{newsPost.content}</p>
			<p>{newsPost.published_at}</p>
		</main>
	)
}
