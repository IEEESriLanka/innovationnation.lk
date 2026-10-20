"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: 'Hasidu Fernando',
    role: 'Chair',
    organization: 'IEEE Innovation Nation Sri Lanka 2026',
    phone: '(+94) 70 144 0168',
    email: 'hasidu.chamoditha234@gmail.com',
    image: '/hasidu.png',
    imagePosition: 'center 20%',
  },
  {
    name: 'Sanugi Wickramasinghe',
    role: 'Secretary',
    organization: 'IEEE Innovation Nation Sri Lanka 2026',
    phone: '(+94) 71 654 2724',
    email: 'sanugidwickramasinghe@gmail.com',
    image: '/sanugi.png',
    imagePosition: 'center 20%',
  },
  {
    name: 'Shafkhan Mohammed',
    role: 'Vice Chair - Program',
    organization: 'IEEE Innovation Nation Sri Lanka 2026',
    phone: '(+94) 76 450 5146',
    email: 'shafkhan@ieee.org',
    image: '/shafkan.png',
    imagePosition: 'center 15%',
  },

  {
    name: 'Tiromi Gunarathne',
    role: 'Vice Chair - Finance Team',
    organization: 'IEEE Innovation Nation Sri Lanka 2026',
    phone: '(+94) 70 373 3484',
    email: 'gwtiromigunarathne@gmail.com',
    image: '/tiromi.jpeg',
    imagePosition: 'center 20%',
  },
  {
    name: 'Tharusha Jayasooriya',
    role: 'Vice Chair - PV Team',
    organization: 'IEEE Innovation Nation Sri Lanka 2026',
    phone: '(+94) 72 810 3079',
    email: 'tharushamjayasooriya@gmail.com',
    image: '/tharusha.png',
    imagePosition: 'center 20%',
  }
];

const organizingCommittee = [
  {
    name: "Sandaruwi Athukorala",
    role: "Coordinator - Program Team",
    organization: "IEEE Innovation Nation Sri Lanka 2026",
    phone: "(+94) 74 124 5926",
    email: "sandaruwiathukorala@gmail.com",
    image: "/team/organizing/sandaruwi_athukorala.jpg",
    imagePosition: "center 20%"
  },
  {
    name: "Kithmi Githara",
    role: "Coordinator - PV Team",
    organization: "IEEE Innovation Nation Sri Lanka 2026",
    phone: "(+94) 70 155 0630",
    email: "kithmigithara35@gmail.com",
    image: "/team/organizing/kithmi_githara.jpg",
    imagePosition: "center 20%"
  },
  {
    name: "Pamodya Wijesinghe",
    role: "Coordinator - Program Team",
    organization: "IEEE Innovation Nation Sri Lanka 2026",
    phone: "(+94) 71 463 3028",
    email: "wapamodyawijesinghe@gmail.com",
    image: "/team/organizing/pamodya_wijesinghe.jpg",
    imagePosition: "center 20%"
  },
  {
    name: "Ranshitha Attanayake",
    role: "Coordinator - PV Team",
    organization: "IEEE Innovation Nation Sri Lanka 2026",
    phone: "(+94) 77 211 4058",
    email: "r.aththanayake99@gmail.com",
    image: "/team/organizing/ranshitha_attanayake.jpg",
    imagePosition: "center 20%"
  },
  {
    name: "Vindya Wickramathilaka",
    role: "Coordinator - Program Team",
    organization: "IEEE Innovation Nation Sri Lanka 2026",
    phone: "(+94) 75 458 2086",
    email: "vindyacharuni13@gmail.com",
    image: "/team/organizing/vindya_wickramathilaka.jpg",
    imagePosition: "center 20%"
  },
  {
    name: "Malshani Dissanayaka",
    role: "Coordinator - Secretary Team",
    organization: "IEEE Innovation Nation Sri Lanka 2026",
    phone: "(+94) 77 433 9162",
    email: "malsdiss7@gmail.com",
    image: "/team/organizing/malshani_dissanayaka.jpg",
    imagePosition: "center 20%"
  },
  {
    name: "Hirusha Jayasundara",
    role: "Coordinator - Secretary Team",
    organization: "IEEE Innovation Nation Sri Lanka 2026",
    phone: "(+94) 76 067 5755",
    email: "hirushajayausndara03@gmail.com",
    image: "/team/organizing/hirusha_jayasundara.jpg",
    imagePosition: "center 20%"
  },
  {
    name: "Niruna Karunarathne",
    role: "Coordinator - Program Team",
    organization: "IEEE Innovation Nation Sri Lanka 2026",
    phone: "(+94) 70 267 3180",
    email: "nirunakarunaratne@gmail.com",
    image: "/team/organizing/niruna_karunarathne.jpg",
    imagePosition: "center 20%"
  },
  {
    name: "Lithila Herath",
    role: "Coordinator - Finance Team",
    organization: "IEEE Innovation Nation Sri Lanka 2026",
    phone: "(+94) 77 083 4246",
    email: "lithilawmlh@gmail.com",
    image: "/team/organizing/lithila_herath.jpg",
    imagePosition: "center 20%"
  },
  {
    name: "Adithya Kulasekaram",
    role: "Coordinator - Finance Team",
    organization: "IEEE Innovation Nation Sri Lanka 2026",
    phone: "(+94) 77 282 9093",
    email: "adithyakulasekaram@gmail.com",
    image: "/team/organizing/adithya_kulasekaram.jpg",
    imagePosition: "center 20%"
  }
];

export default function Team() {
  return (
    <main className="bg-[#0c0325] min-h-screen w-full overflow-x-hidden text-white selection:bg-[#bc71ff] selection:text-white">
      {/* Navbar/Header */}
      <Header activePage="team" />

      {/* Meet the Team */}
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pt-40 pb-32">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
              The Executive Committee
            </h2>
            <p className="text-[#d7cff9] font-light text-lg">
              Meet the core leadership team behind INSL 2026.
            </p>
          </div>

          {/* Hasidu - Top Center */}
          <div className="flex justify-center w-full mb-8 lg:mb-12">
            <motion.div
              key={teamMembers[0].name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] bg-[#1a1a24] w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
            >
              {/* Image Top Half */}
              <div className="relative w-full aspect-[4/3] bg-[#0c0325]">
                <Image
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: teamMembers[0].imagePosition }}
                />
              </div>

              {/* Content Bottom Half */}
              <div className="p-6 xl:p-8 bg-[#1f1f2e] flex flex-col flex-1 border-t-2 border-[#bc71ff]/50">
                <h3 className="text-lg xl:text-xl font-semibold text-white mb-1">{teamMembers[0].name}</h3>
                <p className="text-[#d7cff9] text-xs xl:text-sm mb-4 font-medium">{teamMembers[0].role}</p>

                <p className="text-white/70 text-xs xl:text-sm font-light mb-4 flex-1">
                  {teamMembers[0].organization}
                </p>

                <div className="flex flex-col gap-1 text-[11px] xl:text-xs text-white/50 font-light mt-auto">
                  <span className="truncate" title={teamMembers[0].email}>{teamMembers[0].email}</span>
                  <span>{teamMembers[0].phone}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Rest of the team - 4 in a row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 w-full max-w-7xl mx-auto">
            {teamMembers.slice(1).map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
                className="flex flex-col rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] bg-[#1a1a24] w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
              >
                {/* Image Top Half */}
                <div className="relative w-full aspect-[4/3] bg-[#0c0325]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: member.imagePosition }}
                  />
                </div>

                {/* Content Bottom Half */}
                <div className="p-6 xl:p-8 bg-[#1f1f2e] flex flex-col flex-1 border-t-2 border-[#bc71ff]/50">
                  <h3 className="text-lg xl:text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-[#d7cff9] text-xs xl:text-sm mb-4 font-medium">{member.role}</p>

                  <p className="text-white/70 text-xs xl:text-sm font-light mb-4 flex-1">
                    {member.organization}
                  </p>

                  <div className="flex flex-col gap-1 text-[11px] xl:text-xs text-white/50 font-light mt-auto">
                    <span className="truncate" title={member.email}>{member.email}</span>
                    <span>{member.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Organizing Committee Section */}
          <div className="mt-32 mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
              Organizing Committee
            </h2>
            <p className="text-[#d7cff9] font-light text-lg">
              The dedicated coordinators making the vision a reality.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 w-full max-w-7xl mx-auto">
            {organizingCommittee.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                className="flex flex-col rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] bg-[#1a1a24] w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
              >
                {/* Image Top Half */}
                <div className="relative w-full aspect-[4/3] bg-[#0c0325]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: member.imagePosition }}
                  />
                </div>

                {/* Content Bottom Half */}
                <div className="p-6 xl:p-8 bg-[#1f1f2e] flex flex-col flex-1 border-t-2 border-[#bc71ff]/50">
                  <h3 className="text-lg xl:text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-[#d7cff9] text-xs xl:text-sm mb-4 font-medium">{member.role}</p>

                  <p className="text-white/70 text-xs xl:text-sm font-light mb-4 flex-1">
                    {member.organization}
                  </p>

                  <div className="flex flex-col gap-1 text-[11px] xl:text-xs text-white/50 font-light mt-auto">
                    <span className="truncate" title={member.email}>{member.email}</span>
                    <span>{member.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer activePage="team" />
    </main>
  );
}
