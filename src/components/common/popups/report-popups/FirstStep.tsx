const FirstStep = () => (
  <div>
    <h3 className="mb-2 pt-3 text-[18px] font-bold leading-tight text-black md:pt-3 md:text-lg">
      Why are you reporting this listing?
    </h3>
    <p className="text-base md:text-sm">This won’t be shared with the Host.</p>

    <div className="mt-6 md:mt-4">
      <div className="flex flex-col">
        {[
          'It’s inaccurate or incorrect',
          'It’s not a real place to stay',
          'It’s a Scam',
          'It’s a Offensive',
          'It’s a Something else',
        ].map((day) => (
          <div
            key={day}
            className="flex items-center justify-between border-b border-b-[#C4C4C4] last:border-b-0"
          >
            <label
              htmlFor={day}
              className="w-full cursor-pointer py-5 text-base md:ml-2 md:w-auto md:py-[14px] md:text-[13px]"
            >
              {day}
            </label>
            <input
              type="radio"
              id={day}
              name="classStarting"
              className="h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default FirstStep;
