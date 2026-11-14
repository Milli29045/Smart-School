"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Sora, Inter } from "next/font/google";

const display = Sora({ subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const H = display.className;

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const pastel = ["#DBEAFE", "#E5E7EB", "#BFD6FA", "#D9E2F0"];

const slides = [
  ["1509062522246-3755977927d7", "Modern classrooms"],
  ["1503676260728-1c00da094a0b", "Happy learning"],
  ["1427504494785-3a9ca7044f45", "Creative activities"],
  ["1523240795612-9a054b0db644", "Interactive studies"],
  ["1546410531-bb4caa6b424d", "Learning together"],
  ["1503454537195-1dcabb73ffb9", "Art and creativity"],
  ["1580582932707-520aed937b7b", "Our campus"],
  ["1577896851231-70ef18881754", "Bright futures"],
];

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Academics", "#academics"],
  ["Classes", "#classes"],
  ["Gallery", "#gallery"],
  ["Teachers", "#teachers"],
  ["Contact", "#contact"],
];

const stats: [number, string, string][] = [
  [20, "+", "years of teaching"],
  [1000, "+", "happy students"],
  [50, "+", "qualified teachers"],
];

const values = [
  ["🧸", "Small classes", "Teachers have time for every child."],
  ["🔬", "Modern learning", "Labs, library and activity-based lessons."],
  ["💙", "Kind values", "Respect, honesty and responsibility."],
  ["💌", "Parent updates", "Regular reports and open meetings."],
];

const programs = [
  ["🌱", "Primary", "1503454537195-1dcabb73ffb9", "Reading, writing, numbers and plenty of hands-on creative work to build strong foundations."],
  ["🧪", "Middle", "1532094349884-543bc11b234d", "Science labs, group projects and discussion that teach students to think and solve problems."],
  ["🎓", "Secondary", "1523050854058-8df90110c9f1", "Exam preparation, career guidance and the confidence to move on to higher education."],
];

const facilities = [
  ["Library", "1497633762265-9d179a990aa6", "Quiet corners and a growing collection of books."],
  ["Science lab", "1532094349884-543bc11b234d", "Hands-on experiments for curious minds."],
  ["Computer lab", "1517694712202-14dd9538aa97", "Digital skills from an early age."],
  ["Art room", "1503454537195-1dcabb73ffb9", "Space to draw, paint and build."],
];

const stages: [string, string, string[]][] = [
  ["🧸", "Early years", ["Playgroup", "Nursery", "Kindergarten"]],
  ["📚", "Primary", ["Grade 1–2", "Grade 3–4", "Grade 5–6"]],
  ["🎓", "Middle & secondary", ["Grade 7–8", "Grade 9–10"]],
];
const allClasses = stages.flatMap(([, , classes]) => classes);

const gallery = [
  ["1546410531-bb4caa6b424d", "Students in class", "col-span-2 row-span-2"],
  ["1522202176988-66273c2fd55f", "Group study", ""],
  ["1497633762265-9d179a990aa6", "Library books", ""],
  ["1456513080510-7bf3a84b82f8", "Quiet reading time", ""],
  ["1580582932707-520aed937b7b", "School building", "col-span-2"],
  ["1571260899304-425eee4c7efc", "Young learners", ""],
];

const teachers = [
  ["Sarah Ahmed", "Mathematics", "1580489944761-15a19d654956"],
  ["David Smith", "Science", "1500648767791-00dcc994a43e"],
  ["Ayesha Khan", "English", "1551836022-d5d88e9218df"],
];

const admissionFields = [
  ["Student name", "text", "Enter student name"],
  ["Parent name", "text", "Enter parent name"],
  ["Email address", "email", "Enter email address"],
  ["Phone number", "tel", "Enter phone number"],
];

const contactInfo = [
  ["📍", "School address", "Main Road, Your City, Pakistan"],
  ["📞", "Phone", "+92 300 0000000"],
  ["✉️", "Email", "info@smartschool.com"],
  ["🕒", "School hours", "Monday – Friday, 8:00 AM – 2:00 PM"],
];

const wrap = "mx-auto max-w-6xl px-6";
const frame = "border-[6px] border-white shadow-[0_14px_34px_rgba(11,18,32,0.16)]";
const cardShadow = "shadow-[0_10px_30px_rgba(11,18,32,0.06)]";

const input =
  "w-full rounded-2xl border-2 border-[#CBD5E1] bg-white px-4 py-3 text-[#0B1220] outline-none transition-all duration-300 focus:border-[#3B82F6] focus:shadow-[0_4px_20px_rgba(59,130,246,0.15)] focus:ring-4 focus:ring-[#DBEAFE]";

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-[#3B82F6] px-8 py-3.5 text-center font-bold text-white shadow-[0_5px_0_#1D4ED8] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-[0_7px_0_#1D4ED8] active:translate-y-[4px] active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white";

const btnGhost =
  "inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-3.5 text-center font-bold text-white backdrop-blur transition-all duration-200 hover:bg-white/20 active:translate-y-[4px] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white";

const btnSoft =
  "mt-6 rounded-full bg-[#E8EEF6] px-6 py-2.5 text-sm font-bold text-[#0B1220] transition hover:bg-[#DBEAFE]";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const fallback = window.setTimeout(() => setVisible(true), 900);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          window.clearTimeout(fallback);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.ceil(to / 60));
    const timer = window.setInterval(() => {
      current += step;
      if (current >= to) {
        current = to;
        window.clearInterval(timer);
      }
      setCount(current);
    }, 20);

    return () => window.clearInterval(timer);
  }, [to]);

  return <span>{count}{suffix}</span>;
}

function Photo({
  src,
  alt,
  className = "",
  style,
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`group overflow-hidden bg-[#CBD5E1] ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
}

function Wave({ top, color }: { top: string; color: string }) {
  return (
    <div aria-hidden="true" style={{ background: top, lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-10 w-full md:h-16"
      >
        <path
          d="M0,40 C240,95 480,-10 720,40 C960,90 1200,-5 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

function Head({
  tag,
  title,
  text,
  light = false,
}: {
  tag?: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <Reveal>
      {tag && (
        <span className="text-sm font-bold uppercase tracking-wider text-[#3B82F6]">
          {tag}
        </span>
      )}
      <h2
        className={`${H} ${tag ? "mt-2" : ""} max-w-2xl text-4xl font-bold leading-tight md:text-5xl ${
          light ? "text-white" : "text-[#0B1220]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 max-w-xl text-lg ${light ? "text-[#CBD5E1]" : ""}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [admitted, setAdmitted] = useState(false);
  const [messaged, setMessaged] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setCur((previous) => (previous + 1) % total);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused, total]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClassClick = (grade: string) => {
    setSelectedClass(grade);
    document.getElementById("admissions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={`${body.className} overflow-x-hidden bg-[#F6F8FB] text-[#0B1220]`}>
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .modal-pop { animation: fadeInScale 0.25s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .modal-pop { animation: none; }
        }
      `}</style>

      <header className="sticky top-3 z-50 px-4 pt-2">
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "bg-white/95 shadow-[0_12px_32px_rgba(11,18,32,0.14)] backdrop-blur-md"
              : "bg-white/80 shadow-[0_6px_20px_rgba(11,18,32,0.08)] backdrop-blur"
          }`}
        >
          <a href="#home" className={`${H} group flex items-center gap-2.5 text-2xl font-bold text-[#0B1220]`}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#DBEAFE] text-xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              🎒
            </span>
            Smart School
          </a>

          <div className="hidden items-center gap-6 text-[15px] font-semibold lg:flex">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative py-1 transition-colors hover:text-[#3B82F6] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[#3B82F6] after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#admissions"
              className="rounded-full bg-[#0B1220] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3B82F6] hover:shadow-md"
            >
              Apply now
            </a>
            <button
              type="button"
              onClick={() => setMenu((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menu}
              className="rounded-full bg-[#E8EEF6] px-3.5 py-2 text-[#0B1220] transition active:scale-95 lg:hidden"
            >
              {menu ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {menu && (
          <div className="modal-pop mx-auto mt-2 flex max-w-6xl flex-col rounded-3xl bg-white/95 p-3 shadow-xl backdrop-blur-md lg:hidden">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenu(false)}
                className="rounded-2xl px-4 py-3 font-semibold transition hover:bg-[#DBEAFE] hover:text-[#0B1220]"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <section
        id="home"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative flex min-h-[500px] items-center overflow-hidden bg-[#0B1220] pb-10 pt-12 sm:min-h-[540px] lg:min-h-[580px]"
      >
        {slides.map(([id, title], index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={id}
            src={u(id, 1600)}
            alt={title}
            loading={index < 2 ? "eager" : "lazy"}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ${
              index === cur ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/60 to-[#0B1220]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/80 to-transparent" />

        <div className={`${wrap} relative w-full py-8 sm:py-10 lg:py-12`}>
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#60A5FA]" />
              Admissions open for 2026–27
            </p>

            <h1 className={`${H} max-w-2xl text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl`}>
              A happy place where every child loves to learn.
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
              Strong academics, creative play and caring teachers, so your child grows in confidence every day.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#admissions" className={btnPrimary}>Enroll your child</a>
              <a href="#about" className={btnGhost}>Learn about us</a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="grid w-full max-w-[420px] grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md">
              {stats.map(([number, suffix, label]) => (
                <div key={label} className="min-w-0 px-2 py-3 text-center sm:px-4">
                  <p className={`${H} text-lg font-bold text-white sm:text-2xl`}>
                    <Counter to={number} suffix={suffix} />
                  </p>
                  <p className="mt-0.5 text-[10px] leading-3 text-white/70 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>

            <div className="flex max-w-full flex-wrap items-center gap-3 rounded-2xl border border-white/15 bg-white/10 py-2 pl-4 pr-2 text-white backdrop-blur-md">
              <span className="min-w-[110px] text-sm font-medium">{slides[cur][1]}</span>
              <div className="flex flex-wrap gap-1.5">
                {slides.map(([id], index) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setCur(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      index === cur ? "w-5 bg-white" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setCur((cur - 1 + total) % total)}
                aria-label="Previous slide"
                className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition hover:bg-white/30"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setCur((cur + 1) % total)}
                aria-label="Next slide"
                className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition hover:bg-white/30"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <Wave top="#0B1220" color="#E8EEF6" />

      <section id="about" className="scroll-mt-28 bg-[#E8EEF6] py-16">
        <div className={`${wrap} grid items-center gap-14 lg:grid-cols-2`}>
          <Reveal className="relative pb-8">
            <Photo
              src={u("1577896851231-70ef18881754", 900)}
              alt="Students working together"
              className={`h-[400px] -rotate-[3deg] rounded-[2.5rem] transition-all duration-500 hover:rotate-0 ${frame}`}
            />
            <Photo
              src={u("1588072432836-e10032774350", 700)}
              alt="Teacher helping a student"
              className={`absolute -bottom-2 right-0 h-40 w-40 rotate-[6deg] rounded-[2rem] transition-all duration-500 hover:rotate-0 hover:scale-105 md:h-48 md:w-48 ${frame}`}
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-5 text-sm font-bold uppercase tracking-[3px] text-[#3B82F6]">
                Welcome to Smart School
              </p>
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h2 className={`${H} text-3xl font-bold leading-tight text-[#0B1220] md:text-4xl`}>
                    Education that makes a difference.
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[#0B1220]">
                    We believe every student can succeed. Our classrooms encourage curiosity,
                    confidence, discipline and academic excellence, and every child is known by name.
                  </p>
                </div>
                <Photo
                  src={u("1509062522246-3755977927d7", 900)}
                  alt="Students learning in a modern classroom"
                  className={`h-64 w-full rounded-[2rem] ${frame}`}
                />
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map(([icon, title, description]) => (
                <div key={title} className="rounded-2xl bg-white p-4 shadow-sm">
                  <span className="text-2xl">{icon}</span>
                  <h3 className={`${H} mt-2 font-bold text-[#0B1220]`}>{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#0B1220]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Wave top="#E8EEF6" color="#F8FAFC" />

      <section id="academics" className="scroll-mt-28 bg-[#F8FAFC] py-16">
        <div className={wrap}>
          <Head
            tag="Curriculum"
            title="Quality education for every stage."
            text="Programs designed to help every student grow, from first lessons to board exams."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {programs.map(([icon, title, id, description], index) => (
              <Reveal key={title} delay={index * 120}>
                <article className="group h-full rounded-[2.5rem] bg-white p-4 shadow-[0_10px_30px_rgba(11,18,32,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(11,18,32,0.12)]">
                  <div className="relative">
                    <Photo src={u(id, 800)} alt={`${title} education`} className="h-56 rounded-[2rem]" />
                    <span
                      className="absolute -bottom-5 left-5 grid h-12 w-12 place-items-center rounded-full border-4 border-white text-2xl shadow-sm transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                      style={{ background: pastel[index] }}
                    >
                      {icon}
                    </span>
                  </div>
                  <div className="px-3 pb-3 pt-9">
                    <h3 className={`${H} text-2xl font-semibold text-[#0B1220]`}>{title}</h3>
                    <p className="mt-2 leading-7">{description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Wave top="#F8FAFC" color="#E8EEF6" />

      <section id="facilities" className="scroll-mt-28 bg-[#E8EEF6] py-16">
        <div className={wrap}>
          <Head title="Our facilities." text="Spaces designed for reading, experimenting, creating and exploring." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map(([title, id, description], index) => (
              <Reveal key={title} delay={index * 100}>
                <div className="relative h-80 overflow-hidden rounded-[2rem] shadow-[0_10px_30px_rgba(11,18,32,0.10)]">
                  <Photo src={u(id, 700)} alt={title} className="h-full w-full" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1220]/85 via-[#0B1220]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className={`${H} text-xl font-semibold`}>{title}</h3>
                    <p className="mt-1 text-sm text-white/80">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Wave top="#E8EEF6" color="#E5E7EB" />

      <section id="classes" className="scroll-mt-28 bg-[#E5E7EB] py-16">
        <div className={wrap}>
          <Head title="Find your child’s grade." text="Click any grade below to jump straight to its admission application." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stages.map(([icon, stage, items], index) => (
              <Reveal key={stage} delay={index * 120}>
                <div className={`h-full rounded-[2.5rem] bg-white p-8 ${cardShadow} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}>
                  <div className="text-4xl">{icon}</div>
                  <h3 className={`${H} mt-3 text-2xl font-semibold text-[#0B1220]`}>{stage}</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {items.map((grade) => (
                      <button
                        key={grade}
                        type="button"
                        onClick={() => handleClassClick(grade)}
                        className="cursor-pointer rounded-full border-2 border-[#E5E7EB] bg-[#F8FAFC] px-4 py-2 font-semibold text-[#0B1220] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3B82F6] hover:bg-[#DBEAFE]"
                      >
                        {grade} ↗
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Wave top="#E5E7EB" color="#DBEAFE" />

      <section id="gallery" className="scroll-mt-28 bg-[#DBEAFE] py-16">
        <div className={wrap}>
          <Head title="A day at Smart School." text="Classrooms, library and playful learning. Click any photo to expand." />
          <Reveal
            delay={150}
            className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-4 md:auto-rows-[190px] md:grid-cols-4"
          >
            {gallery.map(([id, alt, span]) => (
              <Photo
                key={alt}
                src={u(id, 900)}
                alt={alt}
                onClick={() => setLightbox({ src: u(id, 1400), alt })}
                className={`rounded-[2rem] transition-all duration-300 odd:-rotate-1 even:rotate-1 hover:z-10 hover:rotate-0 hover:scale-[1.02] ${frame} ${span}`}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0B1220]/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="modal-pop relative max-w-3xl overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightbox.src} alt={lightbox.alt} className="max-h-[75vh] w-full object-cover" />
            <div className="flex items-center justify-between bg-white px-6 py-4">
              <p className={`${H} font-semibold text-[#0B1220]`}>{lightbox.alt}</p>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="rounded-full bg-[#E8EEF6] px-4 py-1.5 text-sm font-bold text-[#0B1220] transition hover:bg-[#3B82F6] hover:text-white"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}

      <Wave top="#DBEAFE" color="#F6F8FB" />

      <section id="teachers" className="scroll-mt-28 py-16">
        <div className={wrap}>
          <Head title="Meet our teachers." text="Experienced educators dedicated to student success." />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {teachers.map(([name, subject, id], index) => (
              <Reveal key={name} delay={index * 120}>
                <div className="group text-center">
                  <Photo
                    src={u(id, 600)}
                    alt={name}
                    className="mx-auto h-56 w-56 rounded-full border-[8px] border-white shadow-[0_12px_30px_rgba(11,18,32,0.16)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl"
                    style={{ outline: `8px solid ${pastel[index]}` }}
                  />
                  <h3 className={`${H} mt-6 text-xl font-semibold text-[#0B1220]`}>{name}</h3>
                  <p
                    className="mx-auto mt-2 inline-block rounded-full px-4 py-1 text-sm font-bold text-[#0B1220] transition-transform duration-300 group-hover:scale-105"
                    style={{ background: pastel[index] }}
                  >
                    {subject} teacher
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Wave top="#F6F8FB" color="#0B1220" />

      <section id="admissions" className="scroll-mt-28 bg-[#0B1220] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Head
            title="Give your child a bright future."
            text="Fill in the form and our office will contact you within two working days."
            light
          />

          {admitted ? (
            <div className="modal-pop mt-10 rounded-[2.5rem] bg-white p-10 text-center shadow-xl">
              <div className="text-5xl">🎉</div>
              <h3 className={`${H} mt-3 text-2xl font-semibold text-[#0B1220]`}>Application received</h3>
              <p className="mt-2">Thank you. We will call you soon to confirm the next steps.</p>
              <button type="button" onClick={() => setAdmitted(false)} className={btnSoft}>
                Submit another application
              </button>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setAdmitted(true);
              }}
              className="mt-10 rounded-[2.5rem] bg-white p-8 shadow-2xl md:p-10"
            >
              <h3 className={`${H} mb-6 text-2xl font-semibold text-[#0B1220]`}>Student admission form</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {admissionFields.map(([label, type, placeholder]) => (
                  <div key={label}>
                    <label className="mb-2 block font-bold text-[#0B1220]">{label}</label>
                    <input type={type} placeholder={placeholder} required className={input} />
                  </div>
                ))}
                <div>
                  <label className="mb-2 block font-bold text-[#0B1220]">Select class</label>
                  <select
                    required
                    value={selectedClass}
                    onChange={(event) => setSelectedClass(event.target.value)}
                    className={input}
                  >
                    <option value="" disabled>Select a class</option>
                    {allClasses.map((grade) => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-bold text-[#0B1220]">Date of birth</label>
                  <input type="date" required className={input} />
                </div>
              </div>
              <div className="mt-6">
                <label className="mb-2 block font-bold text-[#0B1220]">Home address</label>
                <textarea rows={3} placeholder="Enter your complete address" required className={input} />
              </div>
              <button type="submit" className={`${btnPrimary} mt-8 w-full`}>
                Submit application ✨
              </button>
            </form>
          )}
        </div>
      </section>

      <Wave top="#0B1220" color="#E8EEF6" />

      <section id="contact" className="scroll-mt-28 bg-[#E8EEF6] py-16">
        <div className={wrap}>
          <Head title="Get in touch." text="Have questions? We would love to hear from you." />
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <Reveal className="space-y-5">
              {contactInfo.map(([icon, title, detail], index) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:shadow-md"
                >
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-xl"
                    style={{ background: pastel[index] }}
                  >
                    {icon}
                  </span>
                  <div>
                    <h3 className={`${H} font-semibold text-[#0B1220]`}>{title}</h3>
                    <p>{detail}</p>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={150}>
              {messaged ? (
                <div className="modal-pop grid h-full place-items-center rounded-[2.5rem] bg-white p-10 text-center shadow-md">
                  <div>
                    <div className="text-5xl">💌</div>
                    <h3 className={`${H} mt-3 text-2xl font-semibold text-[#0B1220]`}>Message sent</h3>
                    <p className="mt-2">Thank you. We will reply by email.</p>
                    <button type="button" onClick={() => setMessaged(false)} className={btnSoft}>
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setMessaged(true);
                  }}
                  className="rounded-[2.5rem] bg-white p-8 shadow-md"
                >
                  <h3 className={`${H} mb-6 text-2xl font-semibold text-[#0B1220]`}>Send us a message</h3>
                  {[
                    ["Your name", "text"],
                    ["Your email", "email"],
                    ["Subject", "text"],
                  ].map(([label, type]) => (
                    <div key={label} className="mb-5">
                      <label className="mb-2 block font-bold text-[#0B1220]">{label}</label>
                      <input type={type} required className={input} />
                    </div>
                  ))}
                  <div className="mb-6">
                    <label className="mb-2 block font-bold text-[#0B1220]">Message</label>
                    <textarea rows={4} required className={input} />
                  </div>
                  <button type="submit" className={`${btnPrimary} w-full`}>Send message</button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <Wave top="#E8EEF6" color="#0B1220" />

      <footer className="bg-[#0B1220] px-6 pb-8 pt-6 text-[#CBD5E1]">
        <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className={`${H} flex items-center gap-2 text-2xl font-bold text-white`}>🎒 Smart School</h2>
            <p className="mt-4 leading-7">
              Building bright futures through quality education, creativity, discipline and innovation.
            </p>
            <div className="mt-5 flex gap-5 font-semibold">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition hover:text-[#93C5FD]">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-[#93C5FD]">Instagram</a>
            </div>
          </div>

          <div>
            <h3 className={`${H} mb-4 text-lg font-semibold text-white`}>Quick links</h3>
            <ul className="space-y-3">
              {links.slice(0, 5).map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-[#93C5FD]">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`${H} mb-4 text-lg font-semibold text-white`}>Admissions</h3>
            <ul className="space-y-3">
              <li><a href="#admissions" className="transition hover:text-[#93C5FD]">Apply for admission</a></li>
              <li><a href="#academics" className="transition hover:text-[#93C5FD]">Academic programs</a></li>
              <li><a href="#classes" className="transition hover:text-[#93C5FD]">Explore classes</a></li>
              <li><a href="#contact" className="transition hover:text-[#93C5FD]">Ask a question</a></li>
            </ul>
          </div>

          <div>
            <h3 className={`${H} mb-4 text-lg font-semibold text-white`}>Contact</h3>
            <ul className="space-y-3">
              <li>📍 Main Road, Your City, Pakistan</li>
              <li>📞 +92 300 0000000</li>
              <li>✉️ info@smartschool.com</li>
              <li>🕒 Mon – Fri, 8 AM – 2 PM</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-sm md:flex-row">
          <p>© 2026 Smart School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="transition hover:text-[#93C5FD]">Privacy policy</a>
            <a href="#home" className="transition hover:text-[#93C5FD]">Terms &amp; conditions</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
