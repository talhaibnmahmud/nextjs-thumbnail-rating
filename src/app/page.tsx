"use client";

import { UserButton, auth, useSession } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const { isSignedIn } = useSession();

  const createThumbnail = useMutation(api.thumbnails.createThumbnail);

  return (
    <main className="min-h-dvh grid place-content-center">
      <UserButton />

      <form id="thumbnail-form" onSubmit={async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const title = form.get("title") as string;
        await createThumbnail({ title });
      }}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" className="text-black" />
        <button type="submit">Create Thumbnail</button>
      </form>
    </main>
  );
}
