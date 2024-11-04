import Navbar from '../app/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Welcome to My Website!</h1>
      </div>
    </div>
  );
}
