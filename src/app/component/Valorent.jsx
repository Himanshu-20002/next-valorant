import React from 'react';
import AnimatedTitle from './AnimatedTitle';

const Valorent = () => {
  return (
    <main className="w-screen overflow-hidden relative font-general">
      {/* Hero Section */}
      <section
        className="relative flex flex-col min-h-[50vh] w-full bg-gray-900 text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/img/actNew.avif')" }}
      >
        <div className="flex flex-col justify-center items-start text-left px-6 sm:px-12 lg:px-20 py-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            SEASON 2025 // ACT IV
          </h2>
          <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
            Valorant is a free-to-play first-person shooter developed and published by Riot Games. Combining tactical shooting mechanics with unique character abilities, it offers a fresh take on the competitive shooter genre.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* We Are Valorant Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full min-h-[60dvh] bg-white items-center px-6 sm:px-12 lg:px-20 py-12">
        <div className=" flex flex-col text-left items-center">
          <AnimatedTitle
            title="WE<b>ARE</b>VALORANT"
            containerClass="p-10 mb-10 special-font text-2xl md:text-3xl lg:text-4xl uppercase !text-black tracking-wide"
          />
          <h2 className="text-lg special-font md:text-xl font-[600] mb-4 text-gray-800">
            DEFY THE LIMITS
          </h2>
          <p className="text-center max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed text-gray-700">
            Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. Think faster than your opponent to survive.
          </p>
          <button className="text-center bg-[#f83656] hover:bg-[#d12e48] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
            Learn More
          </button>
        </div>
        <div className="flex justify-center items-center">
          <video
            src="/videos/valointro.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full max-h-[50vh] object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

     {/* Agents Section */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full min-h-[60dvh] bg-[#f83656] items-center px-6 sm:px-12 lg:px-20 py-12">
  <div className="flex justify-center items-center">
    <img
      src="/img/agentTogether.avif"
      alt="Agents"
      className="w-full max-w-md h-auto object-cover rounded-xl shadow-lg"
    />
  </div>
  <div className="flex flex-col text-center items-center lg:text-left p-10 text-white">
    <AnimatedTitle
      title="YOUR<b>AGENTS</b>"
      containerClass="text-3xl special-font md:text-4xl lg:text-5xl uppercase tracking-wide mb-6"
    />
    <p className="flex justify-center text-center max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed  lg:mx-0">
      Choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.
    </p>
    <div className="flex justify-center ">
      <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
        Learn More
      </button>
    </div>
  </div>
</section>
      {/* Maps Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full min-h-[60dvh] bg-gray-100 items-center px-6 sm:px-12 lg:px-20 py-12">
        <div className="flex flex-col  text-center items-center">
          <AnimatedTitle
            title="YOUR<b>MAPS</b>"
            containerClass="p-10 special-font mb-10 text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide !text-black"
          />
          <p className="flex justify-center text-center max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed  lg:mx-0">
            Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.
          </p>
          <button className=" text-center bg-[#f83656] hover:bg-[#d12e48] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
            Learn More
          </button>
        </div>
        <div className="flex  justify-center items-center">
          <img
            src="/img/split.avif"
            alt="Map Split"
            className="w-full max-w-md h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>
    </main>
  );
};

export default Valorent;