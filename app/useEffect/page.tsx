'use client'

import { useEffect, useRef, useState } from 'react'
import getData from '.'

type PostType = {
	userId: number
	id: number
	title: string
	body: string
}

type Error = {
	message: string
}

export default function Page() {
	const [post, setPost] = useState<PostType | undefined>(undefined)
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
				const posts: PostType[] = data
				if (posts.length > 0) {
					setPost(posts[0]) // Assuming you want to display the first post
				} else {
					throw new Error('No posts found')
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
	if (!post) return <div>No posts found</div>

	return (
		<main>
			<h2>Post</h2>
			<p>{post.title}</p>
			<p>{post.body}</p>
		</main>
	)
}
