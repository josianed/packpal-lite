import { SignIn, UserButton, useUser } from "@clerk/nextjs";
import Head from "next/head";

export default function Home() {
  const user = useUser();

  

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
          <h1 className="text-5xl font-extrabold">
            Hello,{" "}
            <span className="text-indigo-900">
              {user.isSignedIn ? user?.user?.fullName : "adventurer"}
            </span>.
          </h1>
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            <h2 className="text-3xl">
              {user?.isSignedIn
                ? "Let's plan your next adventure."
                : "Log in to start planning your next adventure."}
            </h2>
            <div className="container flex flex-col items-center justify-center">
              {!user?.isSignedIn && <SignIn />}
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
}
