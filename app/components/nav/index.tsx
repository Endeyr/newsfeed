import Link from 'next/link'

const Navbar = () => {
	return (
		<div className="flex justify-end items-center space-x-2">
			<Link href={'/'}>Home</Link>
			<Link href={'/useEffect'}>useEffect</Link>
			<Link href={'/fetch'}>NextJs</Link>
			<Link href={'/tanstack'}>Tanstack</Link>
		</div>
	)
}
export default Navbar
