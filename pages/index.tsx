import { useState, ChangeEvent, MouseEventHandler } from "react";
import Head from 'next/head';

export default function Home() {
  const [marketingCopy,setMarketingCopy] = useState('');

  const handleMarketingCopyChange = (e : ChangeEvent<HTMLTextAreaElement>) => {
    setMarketingCopy(e.target.value);
  }

  const generateImprovedMarketingCopy: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const res = await fetch("api/marketing-copy", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({marketingCopy}),
    });
    const data = await res.json();    
  }

  return (
    <div className="bg-primary min-h-[100vh] h-full pt-[20vh]">
       <Head>
        <title>
          Marketeer
        </title>
        <meta
          name="description"
          content="Your Marketing Plan Architect, enter a marketing copy and we will improve it!"
          key="desc"
        />
      </Head>
      <h1 className="text-secondary text-[30px] sm:text-[40px] lg:text-[55px] text-center pt-5 font-montserrat font-semibold">
        Marketeerv - new
      </h1>
      <h2 className="text-white  text-[18px] sm:text-[24px] lg-text[30px] text-center py-2 mb-6">
        Your Marketing Plan Architect
      </h2>
      <form className="max-w-5xl flex flex-col items-center justify-center px-2 sm:px-4 lg:px-6 mx-auto gap-5">
        <div className="relative w-full">
          <textarea
            rows={5}
            onChange={handleMarketingCopyChange}
            className="block text-white border border-white rounded-lg px-3 py-2 mx-auto w-full bg-transparent focus:outline-none resize-none"
            placeholder="Describe your product here"
          />
          <span className="absolute bottom-2 right-2 text-[14px] font-montserrat">
            <span>0</span>/30
          </span>
        </div>
        <button type="submit" onClick={generateImprovedMarketingCopy} className="rounded-xl px-6 py-2 text-white font-semibold text-[19px] flex justify-center items-center mx-auto bg-secondary">
          Generate
        </button>
      </form>
    </div>
  );
}
