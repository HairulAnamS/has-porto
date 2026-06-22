import { useState } from "react";

export default function BattlePoint() {
  const [leftPoint, setLeftPoint] = useState(0);
  const [rightPoint, setRightPoint] = useState(0);

  const addSultan = (side) => {
    side === "left"
      ? setLeftPoint((p) => p + 5000000)
      : setRightPoint((p) => p + 5000000);
  };

  const addBoss = (side) => {
    side === "left"
      ? setLeftPoint((p) => p + 500000)
      : setRightPoint((p) => p + 500000);
  };

  const Card = ({ side, point }) => (
    <div className="w-[70%] min-h-screen border-2 border-black p-4">
      <div className="h-[50%] border flex items-center justify-center text-xl font-bold">
        FOTO
      </div>

      <div className="mt-3 border text-center font-bold py-1">
        POINT: {point.toLocaleString()}
      </div>

      <div className="mt-4 space-y-1 text-sm">
        <div className="flex justify-between"><span>BABAK 1</span><span>POINT</span></div>
        <div className="flex justify-between"><span>BABAK 2</span><span>POINT</span></div>
        <div className="flex justify-between font-semibold"><span>BABAK 3 (Saat Ini)</span><span>POINT</span></div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <button
            onClick={() => addSultan(side)}
            className="px-3 py-1 bg-black text-white rounded"
          >
            Add D.Sultan
          </button>
          <span>+5.000.000</span>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => addBoss(side)}
            className="px-3 py-1 bg-gray-700 text-white rounded"
          >
            Add D.Boss
          </button>
          <span>+500.000</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card side="left" point={leftPoint} />
        <Card side="right" point={rightPoint} />
      </div>
    </div>
  );
}
