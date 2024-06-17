"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button className="px-4 py-2 bg-red-500" onClick={() => router.back()}>
      Back
    </button>
  );
};

export default BackButton;
