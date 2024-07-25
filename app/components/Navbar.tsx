"use client";
import { User } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
interface Props {
	user: User | null;
}

const Navbar = ({ user }: Props) => {
	return (
		<nav className="flex container items-center justify-between">
			<div className="flex items-center gap-2">
				<Image src={"/Tweetly.png"} alt="logo" width={100} height={100} />
			</div>
			<div>
				{!user && (
					<button
						onClick={() => signIn("github")}
						className="bg-cyan-400 text-white px-6 py-2 rounded-lg hover:opacity-70"
					>
						Sign in
					</button>
				)}
				{user?.name && (
					<div className="flex gap-3 items-center">
						<Image
							src={user.image!}
							alt="avatar"
							width={45}
							height={45}
							className="rounded-full"
						/>
						<button
							onClick={() => signOut()}
							className="bg-red-500 text-white px-6 py-2 rounded-lg hover:opacity-70"
						>
							Sign out
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};
export default Navbar;
