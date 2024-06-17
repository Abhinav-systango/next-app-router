import Link from "next/link";
import React from "react";

const App = () => {
  return (
    <div className="flex gap-5 py-10 items-center">
      App
      <Link
        href={"/products"}
        className="animate-pulse py-2 px-4 bg-red-500 rounded font-semibold"
      >
        Products
      </Link>

    </div>
  );
};

export default App;
