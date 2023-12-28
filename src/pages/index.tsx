import { SignIn, UserButton, useUser } from "@clerk/nextjs";
import Head from "next/head";

import { api } from "~/utils/api";

export default function Home() {
  const user = useUser();
  console.log("user", user);
  const { data, isLoading, error } = api.pack.packList.useQuery();

  return (
    <>
      <Head>
        <title>PackPal Lite</title>
        <meta name="description" content="Let's plan your next adventure" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user.isSignedIn && <UserButton afterSignOutUrl="/" />}
      <main className="bg #F0F0F4 flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-[hsl(218, 100%, 33%)] text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Hello,{" "}
            <span className="text-[hsl(280,100%,70%)]">
              {user.isSignedIn ? user?.user?.fullName : "adventurer"}.
            </span>
          </h1>
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            <h4 className="text-lg">
              {user?.isSignedIn
                ? "Let's plan your next adventure."
                : "Log in to start planning your next adventure."}
            </h4>
            <div className="container flex flex-col items-center justify-center">
              {!user?.isSignedIn && <SignIn />}
            </div>
            <div></div>
          </div>
          <div className="text-[hsl(218, 100%, 33%)] text-2xl">
            {isLoading && (
              <p className="container flex flex-col items-center justify-center">
                🎒 Packs loading...
              </p>
            )}
            {error && (
              <p className="container flex flex-col items-center justify-center">
                Something went wrong 🙀
              </p>
            )}
            {user?.isSignedIn &&
              (!!data && data?.length > 0
                ? data.map(({ id, name }) => <h5 key={id}>{name}</h5>)
                : "To get started, create a new pack.")}
          </div>
        </div>
      </main>
    </>
  );
}
