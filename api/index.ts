const endpoint = 'https://newsapi.org/v2/top-headlines?'
const query = 'biden'
const country = 'us'
const pageSize = '1'
const api_key = process.env.API_KEY

export const url = `${endpoint}q=${query}&country=${country}&pageSize=${pageSize}&apiKey=${api_key}`
