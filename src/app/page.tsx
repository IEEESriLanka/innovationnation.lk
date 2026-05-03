import Image from "next/image";

// Figma asset URLs - valid for 7 days
const img92 = "https://www.figma.com/api/mcp/asset/66e0e356-35e2-4413-960d-d54b88c6a1f3";
const imgWhatWeOffer = "https://www.figma.com/api/mcp/asset/6a8f3644-4c49-4116-b347-dd3262b6cb09";
const imgHome = "https://www.figma.com/api/mcp/asset/3719fc26-04a0-47e4-a5dd-96604f217e8a";

export default function Home() {
  return (
    <main className="bg-[#0c0325] min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        {/* Background Images */}
        <div className="absolute top-[-100px] w-full h-auto min-h-[400px] md:min-h-[600px] lg:min-h-[868px] overflow-hidden">
          <Image
            src="/rectangle137.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority

          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 w-full h-auto min-h-[400px] md:min-h-[600px] lg:min-h-[868px]"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(75, 50, 168, 0.1) 30%, rgba(61, 41, 138, 0.6) 40%, rgba(49, 32, 109, 0.8) 55%, rgba(41, 28, 93, 0.95) 75%, rgb(35, 23, 78) 100%, rgb(29, 20, 66) 100%)',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-[100px] flex flex-col justify-end min-h-[400px] md:min-h-[600px] lg:min-h-[868px]">
          <h3 className="text-[#8e74f3] text-2xl sm:text-3xl md:text-4xl lg:text-[65.043px] font-semibold mb-2 sm:mb-3 md:mb-4">
            IEEE
          </h3>
          <h1 className="text-[#bdafff] text-3xl sm:text-4xl md:text-5xl lg:text-[117.078px] font-bold leading-tight mb-2 sm:mb-3">
            INNOVATION NATION
          </h1>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[103.361px] font-bold">
            SRI LANKA
          </h2>
        </div>
      </section>

      {/* Intro Section with Image */}
      <section className="relative w-full bg-[#0c0325]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch min-h-[500px]" style={{ minHeight: '75vh' }}>
          {/* Text Content */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-[76px] py-12 lg:py-16 flex flex-col justify-center">
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-[39.429px] leading-relaxed font-medium max-w-2xl">
              Innovation Nation Sri Lanka is an ecosystem that aims to build an innovation and entrepreneurial culture among
              Sri Lankan university students.
            </p>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative h-auto overflow-hidden">
            <Image
              src='/intro.png'
              alt="Innovation Nation team"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* What Does INSL Offer Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-100 pointer-events-none z-0">
          <Image
            src={imgWhatWeOffer}
            alt="What we offer background"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[rgba(12,3,37,0.7)] pointer-events-none z-10" />

        {/* Content */}
        <div className="relative z-20 px-4 sm:px-6 lg:px-[101px]">
          <h2 className="text-[#bdafff] text-3xl sm:text-4xl md:text-5xl lg:text-[74.916px] font-bold mb-12 sm:mb-16 md:mb-20">
            WHAT DOES INSL OFFER?
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-[52px_80px]">
            {[
              {
                title: 'Competition',
                description: 'To recognize achievements, talents, and innovative ideas at a national level'
              },
              {
                title: 'Workshops',
                description: ''
              },
              {
                title: 'Innovation & Entrepreneurship',
                description: ''
              },
              {
                title: 'Pitch Deck Mastery',
                description: ''
              },
              {
                title: 'Mentoring Sessions',
                description: 'One-on-one sessions with industry experts and domain specialists'
              },
              {
                title: 'Investment Opportunities',
                description: 'Access to investor networking and investor lounge opportunities'
              },
              {
                title: 'Weekly Deal Show',
                description: 'Potential competitors with fundable pitches will get the opportunity to feature in the Weekly Deal Show'
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#4b32a8] overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="h-32 sm:h-40 md:h-48 lg:h-[249px] bg-gradient-to-b from-[#5c42c0] to-[#4b32a8] flex-shrink-0" />
                <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-[25.168px] mb-3 sm:mb-4">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-[15.981px] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Structure Section */}
      <section className="relative w-full px-4 sm:px-6 lg:px-[235px] py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0c0325]">
        <h2 className="text-[#bdafff] text-3xl sm:text-4xl md:text-5xl lg:text-[74.916px] font-bold">
          COMPETITION STRUCTURE
        </h2>

        {/* Structure content would go here */}
      </section>
    </main>
  );
}
