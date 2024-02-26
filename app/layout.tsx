import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const metadata: Metadata = {
	title: 'News API Fetching',
	description:
		'Fetching news from an api endpoint using three different methods.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					inter.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex justify-end items-center space-x-2">
						<Link href={'/'}>Home</Link>
						<Link href={'/useEffect'}>useEffect</Link>
						<Link href={'/fetch'}>NextJs</Link>
						<Link href={'/tanstack'}>Tanstack</Link>
					</div>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
