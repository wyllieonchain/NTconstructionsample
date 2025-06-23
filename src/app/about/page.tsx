import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-[#212121]">
      {/* About Section */}
      <section className="text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-24">
          {/* Text Content */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">About NT Construction</h1>
            <p className="text-base md:text-lg text-neutral-300 mb-6">Welcome to NT Construction Ltd., your premier renovation company serving Ottawa, Canada, with a commitment to delivering high-quality interior renovations. At NT Construction Ltd., we specialize in transforming spaces, whether it's creating stunning kitchens, cozy basement retreats, luxurious bathrooms, seamless additions, inviting 3/4 season rooms or stylish decks. Our main objective is providing our customers with a high quality, a well-planned approach to any project.</p>
            <p className="text-base md:text-lg text-neutral-300 mb-6">With over 15 years of experience in the industry, we have perfected our process. This allows for a seamless experience from the initial quote to the finishing touches. From concept to completion, we work closely with our clients to understand their vision and execute it with precision and excellence. Our goal is to not only meet but exceed your expectations, delivering results that enhance your lifestyle and add value to your home.</p>
            <p className="text-base md:text-lg text-neutral-300">At NT Construction Ltd., we believe in the power of craftsmanship, attention to detail, and superior customer service. When you choose us for your renovation needs, you can trust that you're getting the highest level of expertise and professionalism every step of the way. Experience the difference with NT Construction Ltd. Let us bring your renovation dreams to life.</p>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src="/aboutUs.jpg"
              alt="A team of skilled carpenters working on a project"
              width={800}
              height={600}
              className="object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white text-black py-24">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Book a Consultation</h2>
          <p className="max-w-3xl mx-auto mb-10 text-lg">
            Ready to bring your vision to life? Schedule a consultation with NT Construction Ltd. today and let our expert team turn your dreams into reality.
          </p>
          <Link href="/book-a-consultation" className="bg-[#212121] hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
} 