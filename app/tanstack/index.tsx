'use client'

import { url } from '@/api/index'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Posts from '../components/posts'

export default function GetData() {
	// Access the client
	const queryClient = useQueryClient()

	// Queries
	const { isPending, error, data } = useQuery({
		queryKey: ['postData'],
		queryFn: () => fetch(url).then((res) => res.json()),
	})

	if (isPending) return 'Loading...'

	if (error) return 'An error has occurred: ' + error.message

	// Mutations
	// const mutation = useMutation({
	// 	mutationFn: mutations function,
	// 	onSuccess: () => {
	// 		// Invalidate and refetch
	// 		queryClient.invalidateQueries({ queryKey: ['querykey'] })
	// 	},
	// })

	return <Posts data={data} />
}
