import { PostType } from '@/lib/types'
import Container from '../container'
import Post from './post'

const Posts = ({ data }: { data: PostType[] }) => {
	return (
		<Container className="flex flex-col">
			<div>Posts</div>
			<ul>
				{data.map((post: PostType) => {
					return <Post key={post.id} title={post.title} body={post.body} />
				})}
			</ul>
		</Container>
	)
}

export default Posts
