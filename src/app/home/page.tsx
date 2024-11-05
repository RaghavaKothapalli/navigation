import Link from "next/link";
import Navbar from '../components/Navbar';

export default function Home() {
  return ( 
    <main className="max-w-4xl mx-auto p-6">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Site</h1>
      <p className="text-lg mb-4">
        This is the home page of our website.
      </p>
      {/* Add more content as needed */}
      <Link href="/">Home</Link>
    </main>
  );
}