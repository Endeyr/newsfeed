'use client'

import { useQuery, useQueryClient } from '@tanstack/react-query'

export default function GetData() {
	// Access the client
	const queryClient = useQueryClient()

	const endpoint = 'http://newsapi.org/v2/top-headlines?'
	const query = 'biden'
	const country = 'us'
	const pageSize = '1'
	const api_key = process.env.API_KEY
	const url = `${endpoint}q=${query}&country=${country}&pageSize=${pageSize}&apiKey=${api_key}`

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
