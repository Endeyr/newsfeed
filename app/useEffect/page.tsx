'use client'

import { Error, PostType } from '@/lib/types'
import { useEffect, useRef, useState } from 'react'
import getData from '.'
import Posts from '../components/posts'

export default function Page() {
	const [data, setData] = useState<PostType[] | undefined>(undefined)
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
				setData(data)
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
	}, [data])

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>
	if (!data) return <div>No posts found</div>

	return <Posts data={data} />
}
