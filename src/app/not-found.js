import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1 className="text-3xl font-bold">Not found</h1>
            <Link href={"/"}>Go Home</Link>
        </div>
    );
}