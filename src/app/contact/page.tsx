import Navbar from '../components/Navbar';
export default function Contact() {
  return (
    <main>
      <Navbar />
      <div>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">
        Get in touch with us using the information below.
      </p></div>
      {/* Add contact information or form */}
    </main>
  );
}