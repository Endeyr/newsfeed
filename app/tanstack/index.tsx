'use client'

import { url } from '@/api/index'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export default function GetData() {
	// Access the client
	const queryClient = useQueryClient()

	// Queries
	const { isPending, error, data } = useQuery({
		queryKey: ['newsData'],
		queryFn: () => fetch(url).then((res) => res.json()),
	})

	if (isPending) return 'Loading...'

	if (error) return 'An error has occurred: ' + error.message

	const article = data.articles[0]

	// Mutations
	// const mutation = useMutation({
	// 	mutationFn: mutations function,
	// 	onSuccess: () => {
	// 		// Invalidate and refetch
	// 		queryClient.invalidateQueries({ queryKey: ['querykey'] })
	// 	},
	// })

	return (
		<main>
			<h2>News</h2>
			<h2>{article.title}</h2>
			<p>{article.content}</p>
			<p>{article.published_at}</p>
		</main>
	)
}
