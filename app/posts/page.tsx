import { Suspense } from "react";
import Posts from ".";

export default function Page() {

	return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts />
    </Suspense>
	)
}
