import { UserButton, auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();
  console.log( userId);

  return (
    <main className="min-h-dvh grid place-content-center">
      <UserButton />
    </main>
  );
}
