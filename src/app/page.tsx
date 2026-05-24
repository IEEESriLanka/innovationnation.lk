import Image from "next/image";

// Figma asset URLs - valid for 7 days
const imgWhatWeOffer = "/final-pitch.jpg";

export default function Home() {
  const competitionSteps = [
    {
      title: 'National Awareness Session',
      desc: 'Official launch of INSL 2026, introducing the program to university students across Sri Lanka. An expert-led online session engages a wide student audience and encourages inclusive involvement.'
    },
    {
      title: 'Road to INSL Program',
      desc: 'Prepares participants through awareness and guidance activities before the main competition begins. Builds early understanding of entrepreneurship and strengthens readiness for zonal-level participation.'
    },
    {
      title: 'Zonal Competitions',
      desc: 'Conducted across four zones covering all IEEE Student Branches in Sri Lanka, with Idea and Business stages. 3 teams per stage from each zone are selected, advancing 24 teams to the Quarter Finals.'
    },
    {
      title: 'Quarter Finals',
      desc: 'Top 24 teams participate in structured workshops to enhance innovation, business, and pitching skills. Evaluations from Idea and Business stages select 12 teams to progress with assigned mentors.'
    },
    {
      title: 'Semi Final',
      desc: 'Top 12 teams compete in Idea and Business stages, presenting refined business solutions to judges. The best 6 teams are selected to advance to the Final Pitch stage.'
    },
    {
      title: 'Final Pitch',
      desc: 'Top 6 teams deliver final refined pitches to a panel of expert judges. One winner will be selected for each stage: Idea Stage and Business Stage.'
    },
    {
      title: 'Investor Lounge',
      desc: 'Final stage connecting top startups with investors and industry leaders for exposure. Enables networking, funding opportunities, and potential partnerships for scaling ideas.'
    }
  ];

  return (
    <main className="bg-[#0c0325] min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        {/* Background Images */}
        <div className="absolute -top-25 w-full h-auto min-h-100 md:min-h-150 lg:min-h-217 overflow-hidden">
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
          className="absolute inset-0 w-full h-auto min-h-100 md:min-h-150 lg:min-h-217"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(75, 50, 168, 0.1) 30%, rgba(61, 41, 138, 0.6) 40%, rgba(49, 32, 109, 0.8) 55%, rgba(41, 28, 93, 0.95) 75%, rgb(35, 23, 78) 100%, rgb(29, 20, 66) 100%)',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-25 flex flex-col justify-end min-h-100 md:min-h-150 lg:min-h-217">
          {/* Logo aligned with content padding */}
          <div className="mb-auto mt-25">
            <Image
              src="/logo.png"
              alt="INSL logo"
              width={160}
              height={56}
              className="w-24 sm:w-28 md:w-32 lg:w-40 object-contain"
              priority
            />
          </div>

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
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch min-h-125" style={{ minHeight: '75vh' }}>
          {/* Text Content */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-19 py-12 lg:py-16 flex flex-col justify-center">
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
        <div className="relative z-20 px-4 sm:px-6 lg:px-25.25">
          <h2 className="text-[#bdafff] text-3xl sm:text-4xl md:text-5xl lg:text-[74.916px] font-bold mb-12 sm:mb-16 md:mb-20">
            WHAT DOES INSL OFFER?
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-[52px_80px]">
            {[
              {
                title: 'Competition',
                description: 'To recognize achievements, talents, and innovative ideas at a national level',
                image: '/offers/competition.jpg'
              },
              {
                title: 'Workshops',
                description: '',
                image: '/offers/workshops.jpg'
              },
              {
                title: 'Innovation & Entrepreneurship',
                description: '',
                image: '/offers/innovation.jpg'
              },
              {
                title: 'Pitch Deck Mastery',
                description: '',
                image: '/offers/pitch-deck.jpg'
              },
              {
                title: 'Mentoring Sessions',
                description: 'One-on-one sessions with industry experts and domain specialists',
                image: '/offers/mentoring.jpg'
              },
              {
                title: 'Investment Opportunities',
                description: 'Access to investor networking and investor lounge opportunities',
                image: '/offers/investment.jpg'
              },
              {
                title: 'Weekly Deal Show',
                description: 'Potential competitors with fundable pitches will get the opportunity to feature in the Weekly Deal Show',
                image: '/offers/deal-show.jpg'
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#4b32a8] overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative h-32 sm:h-40 md:h-48 lg:h-62.25 shrink-0">
                  <Image
                    src={item.image}
                    alt={`${item.title} background`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#4b32a8]/45 via-[#4b32a8]/15 to-transparent" />
                </div>
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
      <section className="relative w-full bg-[#0c0325]">
        <div className="relative z-20 px-4 sm:px-6 lg:px-30 py-12 sm:py-16 md:py-20 lg:py-24">
          <h2 className="text-[#bdafff] text-3xl sm:text-4xl md:text-5xl lg:text-[74.916px] font-bold text-center">
            COMPETITION STRUCTURE
          </h2>

          <p className="text-[#d7cff9] text-center max-w-3xl mx-auto mt-6">
            A clear progression from awareness to investor connections — designed to prepare, test and scale the best student innovations across Sri Lanka.
          </p>

          {/* Timeline / Steps */}
          <div className="mt-14 mx-auto">
            <div className="overflow-x-auto pb-4 [scrollbar-width:thin] [scrollbar-color:#5d45b6_transparent]">
              <div className="min-w-[1120px] px-2 sm:px-4">
                <div className="grid grid-cols-7 grid-rows-[minmax(220px,1fr)_84px_minmax(220px,1fr)] gap-x-4 sm:gap-x-5 lg:gap-x-6">
                  {competitionSteps.map((step, idx) => (
                    <article
                      key={`top-${step.title}`}
                      className={`${idx % 2 === 0 ? 'row-start-1' : 'row-start-3'} self-stretch snap-center`}
                      style={{ gridColumnStart: idx + 1 }}
                    >
                      <div className="relative h-full  border border-[#5e46b4]/45 bg-[#1a1135] px-4 py-5 sm:px-5 sm:py-6">
                        <div className="absolute right-3 top-1 text-[60px] sm:text-[68px] font-black leading-none text-[#6a51cd]/20 select-none">
                          {String(idx + 1).padStart(2, "0")}
                        </div>

                        <div className="relative z-10">
                          

                          <h3 className="mt-3 text-white text-base sm:text-lg font-semibold leading-snug">
                            {step.title}
                          </h3>

                          <p className="mt-2 text-[#d7cff9] text-xs sm:text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}

                  {competitionSteps.map((step, idx) => (
                    <div
                      key={`mid-${step.title}`}
                      className="relative row-start-2 flex items-center justify-center"
                      style={{ gridColumnStart: idx + 1 }}
                    >
                      {idx > 0 && <span className="absolute left-0 right-1/2 h-px bg-[#6e52cf]/70" aria-hidden />}
                      {idx < competitionSteps.length - 1 && <span className="absolute left-1/2 right-0 h-px bg-[#6e52cf]/70" aria-hidden />}

                      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#bdafff]/70 bg-[#2b1d59]" aria-hidden>
                        <div className="h-2.5 w-2.5 rounded-full bg-[#bdafff]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

       
          </div>
        </div>
      </section>

      {/* Idea vs Business Stage Section */}
      <section className="relative w-full overflow-hidden bg-[#0c0325] py-16 sm:py-24 lg:py-32">
        {/* Decorative Circuit Board Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top Right Traces */}
          <svg className="absolute right-0 top-0 h-full w-1/2 opacity-60" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMin meet">
            <path d="M 250 0 L 250 50 L 300 100 L 400 100" stroke="#3d1466" strokeWidth="1.5" />
            <circle cx="300" cy="100" r="2.5" fill="#a468ff" opacity="0.8" />
            <circle cx="250" cy="50" r="2.5" fill="#a468ff" opacity="0.8" />

            <path d="M 280 0 L 280 80 L 320 120 L 400 120" stroke="#3d1466" strokeWidth="1.5" />
            <circle cx="320" cy="120" r="2.5" fill="#a468ff" opacity="0.8" />
            <circle cx="280" cy="80" r="2.5" fill="#a468ff" opacity="0.8" />

            <path d="M 310 0 L 310 130 L 350 170 L 400 170" stroke="#3d1466" strokeWidth="1.5" />
            <circle cx="350" cy="170" r="2.5" fill="#a468ff" opacity="0.8" />
          </svg>

          {/* Bottom Left Traces */}
          <svg className="absolute left-0 bottom-0 h-full w-1/2 opacity-60" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMax meet">
            <path d="M 0 450 L 80 450 L 130 500 L 130 600" stroke="#3d1466" strokeWidth="1.5" />
            <circle cx="80" cy="450" r="2.5" fill="#a468ff" opacity="0.8" />
            <circle cx="130" cy="500" r="2.5" fill="#a468ff" opacity="0.8" />

            <path d="M 0 480 L 50 480 L 100 530 L 100 600" stroke="#3d1466" strokeWidth="1.5" />
            <circle cx="50" cy="480" r="2.5" fill="#a468ff" opacity="0.8" />
            <circle cx="100" cy="530" r="2.5" fill="#a468ff" opacity="0.8" />

            <path d="M 0 520 L 40 520 L 70 550 L 70 600" stroke="#3d1466" strokeWidth="1.5" />
            <circle cx="70" cy="550" r="2.5" fill="#a468ff" opacity="0.8" />

            <path d="M 0 560 L 20 560 L 40 580 L 40 600" stroke="#3d1466" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="relative z-10 mx-[6%] px-10 sm:px-6 lg:px-19">
          {/* Main title */}
          <div className="mb-20 sm:mb-32 text-center">
            <h2 className="text-[#e9c7ff] text-3xl sm:text-5xl md:text-[52px] font-bold leading-tight tracking-wide">
              IDEA STAGE vs BUSINESS STAGE
            </h2>
          </div>

          <div className="flex flex-col space-y-24 sm:space-y-32">
            {/* Idea Stage */}
            <div className="relative w-full">
              {/* Left Line & Dot */}
              <div className="absolute left-2 sm:left-4 top-6 -bottom-40 w-0.75 bg-[#531b81]"></div>
              <div className="absolute left-2 sm:left-4 top-6 h-8.5 w-8.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#531b81]"></div>

              <div className="pl-12 sm:pl-20">
                <h3 className="text-[#bc71ff] text-[2.5rem] font-black mb-8 tracking-wide">
                  IDEA STAGE
                </h3>
                <div className="space-y-4 text-white/95 text-[1rem]  font-semibold tracking-wider leading-loose">
                  <p>HAVE AN IDEA BUT HAVEN'T STARTED DEVELOPING YET?</p>
                  <p>JOIN THE IDEA STAGE,</p>
                  <p>WE WILL HELP YOU AND TURN YOUR CONCEPT INTO REALITY.</p>
                  <p>JUST BRING YOUR IDEA AND LET'S BUILD IT TOGETHER.</p>
                </div>
              </div>
            </div>

            {/* Business Stage */}
            <div className="relative w-full mt-5">
              {/* Right Line & Dot */}
              <div className="absolute right-2 sm:right-4 -top-25 -bottom-25 w-0.75 bg-[#531b81]"></div>
              <div className="absolute right-2 sm:right-4 top-6 h-8.5 w-8.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#531b81]"></div>

              <div className="pr-12 sm:pr-20 text-right">
                <h3 className="text-[#bc71ff]  text-[2.5rem] font-black mb-8 tracking-wide">
                  BUSINESS STAGE
                </h3>
                <div className="space-y-4 text-white/95 text-[1rem]  font-semibold tracking-wider leading-loose">
                  <p>HAVE AN IDEA BUT HAVEN'T STARTED DEVELOPING YET?</p>
                  <p>JOIN THE IDEA STAGE,</p>
                  <p>WE WILL HELP YOU AND TURN YOUR CONCEPT INTO REALITY.</p>
                  <p>JUST BRING YOUR IDEA AND LET'S BUILD IT TOGETHER.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Partners Section */}
      <section className="relative w-full bg-[#0c0325] py-16 sm:py-24 lg:py-32 flex flex-col items-center justify-center">
        <h2 className="text-[#e9c7ff] text-3xl sm:text-5xl md:text-[52px] font-bold leading-tight tracking-wide mb-16 sm:mb-20 text-center">
          OFFICIAL PARTNERS
        </h2>

        <div className="flex flex-col items-center space-y-20 sm:space-y-24 w-full px-4">
          {/* Organized By */}
          <div className="flex flex-col items-center space-y-8 sm:space-y-10 w-full">
            <h3 className="text-white text-xl sm:text-2xl lg:text-[28px] font-medium tracking-wide">
              Organized by
            </h3>
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-[450px] h-24 sm:h-32 lg:h-40">
              <Image
                src="/ypsl-logo-white.png"
                alt="IEEE Young Professionals Sri Lanka"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* Investment Partner */}
          <div className="flex flex-col items-center space-y-8 sm:space-y-10 w-full">
            <h3 className="text-white text-xl sm:text-2xl lg:text-[28px] font-medium tracking-wide">
              Investment Partner
            </h3>
            <div className="bg-white px-6 py-6 sm:px-10 sm:py-8 w-72 sm:w-96 md:w-[450px] lg:w-[500px] flex items-center justify-center">
              <div className="relative w-full h-24 sm:h-32 lg:h-40">
                <Image
                  src="/lan-logo-full.png"
                  alt="Lankan Angel Network"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
