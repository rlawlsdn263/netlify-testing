import { getUserSession } from "@/utils/server";

export default async function Profile() {
  const user = await getUserSession();

  return (
    <main>
      <h1>Profile</h1>
      <div>
        {user && (
          <>
            <div>{user.email}</div>
            <div>{user.name}</div>
          </>
        )}
      </div>
    </main>
  );
}
