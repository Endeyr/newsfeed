export default async function getData() {
	const endpoint = 'https://newsapi.org/v2/top-headlines?'
	const query = 'biden'
	const country = 'us'
	const pageSize = '1'
	const api_key = process.env.API_KEY
	const url = `${endpoint}q=${query}&country=${country}&pageSize=${pageSize}&apiKey=${api_key}`
	const res = await fetch(url)
	if (!res.ok) {
		console.log(res.status)
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}
