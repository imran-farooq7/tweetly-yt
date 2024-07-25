import { auth } from "@/auth";
import TweetForm from "./components/TweetForm";
import Tweets from "./components/Tweets";

const Home = async () => {
	const session = await auth();
	return (
		<>
			{session?.user && (
				<div>
					<TweetForm />
					<Tweets />
				</div>
			)}
			{!session?.user && (
				<div className="text-center flex flex-col gap-2">
					<h2 className="text-4xl">Join Today</h2>
					<p>To Share Your Tweets</p>
				</div>
			)}
		</>
	);
};
export default Home;
