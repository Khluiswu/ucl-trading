export default function Navbar() {
  return (
    <div className="bg-black text-white flex justify-between items-center px-8 py-4 border-b border-gray-800">
      
      <div className="font-bold">
        <span className="border border-yellow-500 px-2 py-1 mr-2">TS</span>
        UCL TRADING SOCIETY
      </div>

      <div className="space-x-8 text-sm">
        <a href="/">Home</a>
        <a href="/divisions">Divisions</a>
        <a href="/events">Events</a>
        <a href="/research">Research</a>
        <a href="/about">About</a>
      </div>

      <button className="bg-yellow-500 text-black px-4 py-2">
        Join Society
      </button>
    </div>
  );
}