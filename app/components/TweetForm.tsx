"use client";
import { useActionState, useEffect } from "react";
import { createTweet } from "../actions/actions";
import toast from "react-hot-toast";

const TweetForm = () => {
	const [state, action, isPending] = useActionState(createTweet, null);
	useEffect(() => {
		if (state?.success) {
			toast.success(state.success);
		} else {
			toast.error(state?.error!);
		}
	}, [state?.success, state?.error]);

	return (
		<form action={action} className="max-w-md mx-auto mt-20 p-6">
			<div className="mb-4">
				<label htmlFor="tweet" className="block text-gray-700 font-bold mb-2">
					Tweet:
				</label>
				<textarea
					name="tweet"
					id="tweet"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					rows={5}
					minLength={50}
					maxLength={500}
					placeholder="Write a tweet"
				></textarea>
			</div>
			<button
				type="submit"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full"
				disabled={isPending}
			>
				{isPending ? "Tweeting..." : "Tweet"}
			</button>
		</form>
	);
};
export default TweetForm;
