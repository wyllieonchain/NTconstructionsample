import Image from "next/image";
import ContactForm from "../../components/ContactForm";

export default function BookAConsultation() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-white">
        <Image
          src="/bookconsultation.jpeg"
          alt="A person sketching out plans for a construction project"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="absolute inset-0 bg-black/70 -z-10" />
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8">Book a Consultation</h1>
          <div className="flex justify-center space-x-4">
            <a href="mailto:Nick@ntconstructionltd.ca" className="bg-white hover:bg-gray-300 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              Email Us
            </a>
            <a href="tel:613-850-2924" className="bg-white hover:bg-gray-300 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white text-black py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
} 