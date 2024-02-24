async function getPosts() {
	const api_key = process.env.API_KEY
	const url = `http://newsapi.org/v2/top-headlines?pageSize=1&country=us&apiKey=${api_key}`
	const response = await fetch(url)

	if (!response.ok) {
		console.log(response.status)
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}
	return response.json()
}

export default async function Posts() {
	const data = await getPosts()

	if (!data || !data.articles || data.articles.length === 0)
		return <div>No Articles</div>

	const article = data.articles[0]

	return (
		<main>
			<h2>Articles</h2>
			<h2>{article.title}</h2>
			<p>{article.content}</p>
			<p>{article.published_at}</p>
		</main>
	)
}
