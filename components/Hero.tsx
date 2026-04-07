export default function Hero() {
  return (
    <section className="bg-black text-white px-16 py-32 flex justify-between">

      <div className="max-w-xl">
        <p className="text-yellow-500 text-sm mb-4">
          UNIVERSITY COLLEGE LONDON — EST. 2024
        </p>

        <h1 className="text-7xl font-bold">
          Trading <span className="text-yellow-500">Society</span>
        </h1>

        <p className="mt-6 text-gray-400">
          Your institutional gateway to global markets...
        </p>

        <div className="mt-8 space-x-4">
          <button className="bg-yellow-500 text-black px-6 py-3">
            Join Society →
          </button>
          <button className="border border-gray-600 px-6 py-3">
            Learn More
          </button>
        </div>
      </div>

    </section>
  );
}