export default function Home() {
  return (
    <main className="bg-primary min-h-[100vh] h-full">
      <h1 className="text-secondary text-[30px] sm:text-[40px] lg:text-[55px] text-center pt-5 font-montserrat font-semibold">
        Marketeer
      </h1>
      <h2 className="text-white  text-[18px] sm:text-[24px] lg-text[30px] text-center py-2">
        Your Marketing Plan Architect
      </h2>
      <div className="max-w-7xl flex flex-col items-center justify-center px-2 sm:px-4 lg:px-6 mx-auto">
        <input
          type="text"
          className="block text-white border border-white rounded-lg px-3 py-2 mx-auto w-full  bg-transparent focus:outline-none"
          placeholder="Enter your marketing copy here"
        />
        <button className="rounded-xl px-6 py-2 text-white font-semibold text-[19px] flex justify-center items-center mx-auto bg-secondary my-5">
          Generate
        </button>
      </div>
    </main>
  );
}
