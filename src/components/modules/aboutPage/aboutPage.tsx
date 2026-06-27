import Link from "next/link";

export default function AboutWelcome() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div>
          <img
            src="https://i.ibb.co/Z67kx8Zw/resturant-pic.jpg"
            alt="FoodHub Restaurant"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h1 className="text-4xl font-bold text-lime-600 mb-4">
            FoodHub Restaurant
          </h1>

          <p className="text-gray-600 text-lg leading-8 mb-4">
            Welcome to <span className="font-semibold">FoodHub Restaurant</span>,
            where every meal is prepared with fresh ingredients and served with
            passion. We offer a wide variety of delicious dishes, from
            traditional favorites to modern culinary creations, ensuring there's
            something for everyone.
          </p>

          <p className="text-gray-600 text-lg leading-8 mb-6">
            Whether you're joining us for a family dinner, a casual lunch, or a
            special celebration, our warm atmosphere and friendly staff are
            dedicated to making every visit memorable. At FoodHub, great food
            and exceptional service come together to create an unforgettable
            dining experience.
          </p>

          <button className="bg-lime-400 hover:bg-lime-600 text-black px-6 py-3 rounded-lg font-semibold transition">
            <Link href="/menu/foodlist">Visit Menus</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
