import Image from "next/image";
import Link from "next/link";
import PortfolioItem from "../components/PortfolioItem";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center md:items-end justify-center min-h-screen text-white">
        <Image
          src="/landingimage.jpeg"
          alt="A beautifully crafted wooden interior"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="w-full text-center md:text-right px-6 md:px-0 md:pr-24 lg:pr-36">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Designed for Life</h1>
          <p className="text-3xl md:text-4xl lg:text-5xl mb-8">Built for Living</p>
          <Link href="/book-a-consultation" className="bg-white hover:bg-gray-300 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section className="bg-white text-black py-24">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Exceptional Craftsmanship</h2>
          <p className="max-w-3xl mx-auto mb-10 text-lg">
            NT Construction Ltd. is dedicated to the art and craft of renovations and construction. From grand homes to bathroom renovations, we approach every project as a unique opportunity to bring to life an idea in our customers imagination.
          </p>
          <Link href="/about" className="bg-black text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300">
            Learn More
          </Link>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="bg-[#212121] text-white py-24">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <PortfolioItem imageUrl="/port1.jpg" title="Custom Decking" />
            <PortfolioItem imageUrl="/port2.jpg" title="Kitchen Renovation" />
            <PortfolioItem imageUrl="/port3.jpg" title="Bathroom Remodeling" />
          </div>
          <Link href="/portfolio" className="bg-white text-black font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            View Our Portfolio
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white text-black py-24">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <p className="text-gray-500 text-6xl font-serif leading-none mb-4">“</p>
              <p className="italic text-lg mb-6">Excellent company to deal with....5 stars all the way. I recently completed a shower reno and I could not be happier with both the end result and NT Construction. Nick the owner was very friendly and professional to deal with and Jack who completed the work was amazing - a perfect job. I couldn't be happier. Additionally their plumbing and electrical contractors (Andre and Marty) were super! Dont look any further if you need work done !</p>
              <p className="font-bold text-gray-700">- Leslie Fancy</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <p className="text-gray-500 text-6xl font-serif leading-none mb-4">“</p>
              <p className="italic text-lg mb-6">NT Construction built a mudroom onto our house in 2021. We couldn't be more happy with our experience working with Nick and his team. They finished the job on time and on budget (even with Covid supply and price challenges). They are very honest, communicative and reliable and genuinely want to do the absolute best job they can.</p>
              <p className="font-bold text-gray-700">- Tyler Howell</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <p className="text-gray-500 text-6xl font-serif leading-none mb-4">“</p>
              <p className="italic text-lg mb-6">We have used NT construction for all of our home renovations. Nick is an outstanding contractor. His estimates are extremely detailed, the workplace is kept immaculately clean and his talents shine through every time. Jack was a marvel, watching him notch and fit the stone. We highly, highly recommend Nick and his crew. He is worth every penny, and the wait. If you want to do it right, NT Construction is the place to call. 10 stars if I could.</p>
              <p className="font-bold text-gray-700">- Laurie Gagnier</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#212121] text-white py-24">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Book a Consultation</h2>
          <p className="max-w-3xl mx-auto mb-10 text-lg">
            Ready to bring your vision to life? Schedule a consultation with NT Construction Ltd. today and let our expert team turn your dreams into reality.
          </p>
          <Link href="/book-a-consultation" className="bg-white hover:bg-gray-300 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
