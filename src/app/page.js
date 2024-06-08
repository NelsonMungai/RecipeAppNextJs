import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to the recipe app</h1>
      <Link href={"recipe-list"}>Explore Recipes</Link>
    </div>
      );
}
