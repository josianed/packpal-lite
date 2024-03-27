import { UserButton, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";

export default function NewPack() {
  const user = useUser();
  const { data, isLoading, error } = api.item.itemList.useQuery();

  return (
    <>
      {user.isSignedIn && <UserButton afterSignOutUrl="/" />}
        {isLoading && (
          <p className="container flex flex-col items-center justify-center">
            🎒 Gear loading... 🎒
          </p>
        )}
        {error && (
          <p className="container flex flex-col items-center justify-center">
            ⛈️ Something went wrong! ⛈️
          </p>
        )}
        <div className="container flex items-center justify-between ">
          <div>
            <h2 className="text-xl">🏕️ Gear shelf 🏕️</h2>
            {!!data && data?.length > 0
              ? data.map(({ id, name }) => (
                  <h5 className="text-lg" key={id}>
                    {name}
                  </h5>
                ))
              : "All items added to your packs will appear in your gear shelf."}
          </div>
        <div>this is the pack creator</div>
        </div>
    </>
  );
}
