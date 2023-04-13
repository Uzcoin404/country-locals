const FourthStep = () => (
  <div>
    <h3 className="mb-2 pt-3 text-[18px] font-bold leading-tight text-black md:pt-3 md:text-lg">
      Describe how it’s abusive or hostile
    </h3>
    <p className="text-base md:text-sm">This won’t be shared with the Host.</p>

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
export default FourthStep;
