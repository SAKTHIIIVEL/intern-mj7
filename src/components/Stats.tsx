import Counter from "./resuable/Counter";

const Stats = () => {
  return (
    <div className="flex justify-around text-center h-[700px] items-center text-white py-20 bg-black">
      <div>
        <h2 className="text-8xl font-bold">
          <Counter end={10} />
        </h2>
        <p className="text-red-500 text-[20px] mt-2">Years in the business</p>
      </div>

      <div>
        <h2 className="text-8xl font-bold">
          <Counter end={20} />
        </h2>
        <p className="text-red-500 text-[20px] mt-2">Projects Completed</p>
      </div>

      <div>
        <h2 className="text-8xl font-bold">
          <Counter end={25} />
        </h2>
        <p className="text-red-500 text-[20px] mt-2">Happy Partners</p>
      </div>

      <div>
        <h2 className="text-8xl font-bold">
          <Counter end={50} />
        </h2>
        <p className="text-red-500 text-[20px] mt-2">Active Followers</p>
      </div>
    </div>
  );
};

export default Stats;
