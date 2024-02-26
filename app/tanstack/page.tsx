'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import GetData from '.'

const queryClient = new QueryClient()
export default function Page() {
	return (
		<QueryClientProvider client={queryClient}>
			<GetData />
		</QueryClientProvider>
	)
}
