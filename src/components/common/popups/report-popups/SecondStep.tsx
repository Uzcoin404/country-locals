const SecondStep = () => (
  <div>
    <h3 className="mb-2 pt-3 text-[18px] font-bold text-black md:pt-3 md:text-lg md:leading-tight">
      Describe how it’s inacurate or incorrect
    </h3>

    <div className="mt-8">
      <textarea
        name=""
        id=""
        placeholder="Ex: This listing says it’s an entire home but it’s actually a private room."
        className="min-h-[200px] w-full rounded-lg border-2 border-[#C4C4C4] p-5 text-base focus-visible:border-black focus-visible:outline-none md:min-h-[160px] md:text-sm"
      />
    </div>
  </div>
);
export default SecondStep;
