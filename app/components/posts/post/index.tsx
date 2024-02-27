const Post = ({ title, body }: { title: string; body: string }) => {
	return (
		<li>
			<h2>{title}</h2>
			<p>{body}</p>
		</li>
	)
}
export default Post
