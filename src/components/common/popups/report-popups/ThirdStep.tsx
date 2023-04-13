const ThirdStep = () => (
  <div>
    <h3 className="mb-2 pt-3 text-[18px] font-bold leading-tight text-black md:pt-3 md:text-lg">
      How did they ask you to pay?
    </h3>

    <div className="mt-8 pb-2">
      <div className="flex flex-wrap gap-2">
        {[
          'Bank or wire transfer',
          'Credit or debit card',
          'Cash',
          'PayPal',
          'MoneyGram',
          'Western Union',
          'Something else',
        ].map((item) => (
          <button
            key={item}
            type="button"
            className="rounded-full border border-[#C4C4C4] px-4 py-2 text-base text-[#444] hover:border-black hover:bg-black hover:text-white md:text-xs"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  </div>
);
export default ThirdStep;
