export default function StatsCard() {
  return (
    <div className="bg-gray-900 p-6 rounded-xl w-80 text-white">
      <p className="text-green-400 mb-4">● LIVE SOCIETY PULSE</p>

      <div className="flex justify-between py-2">
        <span>Active Members</span>
        <span>350+</span>
      </div>

      <div className="flex justify-between py-2">
        <span>Events</span>
        <span>24+</span>
      </div>

      <div className="flex justify-between py-2">
        <span>Attendance</span>
        <span className="text-green-400">87%</span>
      </div>
    </div>
  );
}