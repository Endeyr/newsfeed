# API Data Fetching in Next.js

This project demonstrates different approaches to fetching data from an [API](https://jsonplaceholder.typicode.com/) in a Next.js application. It includes implementations using server-side data fetching, client-side data fetching with useEffect, and client-side data fetching with @tanstack/react-query. Uses tailwindcss and shadcn for UI. Visit the current [site](https://newsfeed-endeyr.vercel.app/).

## TODO

- add pagination
- add homepage
- update styling

## Getting Started

### Prerequisites

Before running the project, you'll need:

- Node.js installed on your machine

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/news-api-nextjs.git
```

2. Navigate to the project directory:

```bash
cd news-api-nextjs
```

3. Install dependencies:

```bash
npm install
```

### Usage

1. Setup the dev environment:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open your browser and navigate to http://localhost:3000 to see the project in action.

## Approaches

1. Server-side Fetch
   In this approach, data is fetched on the server and rendered directly in the HTML before sending it to the client.

### Implementation:

- Navigate to the /fetch/index.tsx file to see the implementation.

2. Client-side Fetch with useEffect
   In this approach, data fetching is done on the client side using the useEffect hook.

### Implementation:

- Navigate to the /useEffect/index.tsx file to see the implementation.

3. Client-side Fetch with @tanstack/react-query
   In this approach, data fetching is handled with @tanstack/react-query library, which provides powerful data fetching and caching capabilities.

### Implementation:

- Navigate to the /tanstack/index.tsx file to see the implementation.

## Additional Notes

- Each approach demonstrates a different trade-off in terms of performance, initial page load time, and data freshness.
- Choose the approach that best fits your application's requirements and constraints.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
