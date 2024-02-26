import { url } from '@/api/index'

export default async function getData() {
	const res = await fetch(url)
	if (!res.ok) {
		console.log(res.status)
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}
