import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { api } from "~/utils/api";

export default function Packs() {
  const user = useUser();
  const { data, isLoading, error } = api.pack.packList.useQuery();

  return (
    <>
      <div className="flex-item container flex items-center justify-between">
        <div>image</div>
        {user.isSignedIn && <UserButton afterSignOutUrl="/" />}
      </div>
      <main className="bg #F0F0F4 flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold">
          Hello, <span className="text-indigo-900">{user?.user?.fullName}</span>
          .
        </h1>
        <div className="container flex items-center justify-center gap-4 px-4 py-8">
          <h2 className="text-3xl">Let's plan your next adventure.</h2>
          <Link
            className="rounded-md bg-indigo-900 px-2 py-0.5 text-slate-200"
            href="/new-pack"
          >
            Create a new pack 🎒
          </Link>
        </div>
        <div className="container flex flex-col items-center justify-center">
          <div className="text-2xl">
            {isLoading && (
              <p className="container flex flex-col items-center justify-center">
                🎒 Packs loading... 🎒
              </p>
            )}
            {error && (
              <p className="container flex flex-col items-center justify-center">
                ⛈️ Something went wrong! ⛈️
              </p>
            )}
            {!!data && data?.length > 0
              ? data.map(({ id, name }) => <h5 key={id}>{name}</h5>)
              : "To get started, create a new pack."}
          </div>
        </div>
      </main>
    </>
  );
}
