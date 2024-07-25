import prisma from "@/prisma/Prisma";
import Tweet from "./Tweet";

const Tweets = async () => {
	const tweets = await prisma.tweet.findMany();
	return (
		<div className="container mx-auto flex flex-col items-center">
			{tweets.map((tweet) => (
				<Tweet
					createdAt={tweet.createdAt}
					description={tweet.description}
					id={tweet.id}
					userId={tweet.userID}
				/>
			))}
		</div>
	);
};
export default Tweets;
