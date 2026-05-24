import Image from "next/image";
import ambassadors from "./data.json";

export default function AmbassadorsPage() {
  return (
    <main className="bg-[#0c0325] min-h-screen w-full overflow-x-hidden pt-24 sm:pt-32">
      <section className="relative w-full overflow-hidden bg-[#0c0325] py-16 sm:py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-19">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[#bc71ff] text-sm sm:text-base font-semibold uppercase tracking-[0.3em]">
              Program Ambassadors
            </p>
            <h2 className="mt-4 text-[#e9c7ff] text-3xl sm:text-5xl md:text-[52px] font-bold leading-tight tracking-wide">
              MEET OUR AMBASSADORS
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {ambassadors.map((member, idx) => (
              <article
                key={`${member.name}-${idx}`}
                className="overflow-hidden border border-[#5e46b4]/50 bg-[#150d2c]"
              >
                <div className="grid md:grid-cols-[14rem_1fr] h-full">
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-full overflow-hidden bg-[#20133f]">
                    <Image
                      src={member.image}
                      alt={`${member.name} portrait`}
                      fill
                      sizes="(max-width: 767px) 100vw, 320px"
                      className="object-cover"
                      style={{ objectPosition: member.imagePosition }}
                    />
                  </div>

                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <p className="text-[#bc71ff] text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]">
                      {member.role}
                    </p>
                    <h3 className="mt-3 text-white text-2xl sm:text-3xl font-bold leading-tight">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[#d7cff9] text-sm font-medium">
                      {member.organization}
                    </p>

                    <div className="mt-6 space-y-4 border-t border-white/10 pt-5 text-sm sm:text-base text-white/90">
                      <p>{member.phone}</p>
                      <p className="break-all">{member.email}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
