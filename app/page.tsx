
export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">
        <div className="text-2xl font-bold text-blue-800">
          Smart<span className="text-yellow-500">School</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <a href="#home" className="hover:text-blue-700">Home</a>
          <a href="#about" className="hover:text-blue-700">About</a>
          <a href="#academics" className="hover:text-blue-700">Academics</a>
          <a href="#admissions" className="hover:text-blue-700">Admissions</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
          <a href="#classes" className="hover:text-blue-700">
  Classes
</a>

<a href="#teachers" className="hover:text-blue-700">
  Teachers
</a>
        </div>

        <a
          href="#admissions"
          className="bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800"
        >
          Apply Now
        </a>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-[520px] flex items-center bg-cover bg-center px-8 md:px-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,30,65,0.72), rgba(10,30,65,0.65)), url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1800')",
        }}
      >
        <div className="max-w-2xl text-white py-20">
          <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-4">
            Welcome to Smart School
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Building Bright Futures Through Education
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            We provide quality education, develop creativity, and inspire
            students to achieve their dreams.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#admissions"
              className="bg-yellow-500 text-gray-900 px-7 py-3 rounded-lg font-semibold hover:bg-yellow-400"
            >
              Enroll Now
            </a>

            <a
              href="#about"
              className="border border-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* School Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8 md:px-20 py-14 bg-gray-50 text-center">
        <div>
          <h2 className="text-4xl font-bold text-blue-800">20+</h2>
          <p className="text-gray-600 mt-2">Years of Excellence</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-800">1000+</h2>
          <p className="text-gray-600 mt-2">Happy Students</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-800">50+</h2>
          <p className="text-gray-600 mt-2">Qualified Teachers</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 md:px-20 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-yellow-600 font-semibold uppercase tracking-widest">
            About Our School
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3 mb-6">
            Education That Makes a Difference
          </h2>

          <p className="text-gray-600 leading-8">
            At Smart School, we believe every student has the potential
            to succeed. Our learning environment encourages curiosity,
            confidence, discipline, and academic excellence.
          </p>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="px-8 md:px-20 py-20 bg-gray-50">
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-semibold uppercase tracking-widest">
            Our Academics
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3">
            Quality Education for Every Student
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide a supportive learning environment with programs
            designed to help every student grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Primary Education
            </h3>
            <p className="text-gray-600 leading-7">
              Building strong foundations in reading, writing, mathematics,
              and creative learning.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Middle Education
            </h3>
            <p className="text-gray-600 leading-7">
              Developing critical thinking, scientific knowledge,
              communication, and problem-solving skills.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Secondary Education
            </h3>
            <p className="text-gray-600 leading-7">
              Preparing students for examinations, higher education,
              and future career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="px-8 md:px-20 py-20">
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-semibold uppercase tracking-widest">
            Our Classes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3">
            Explore Our Grade Levels
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Playgroup",
            "Nursery",
            "Kindergarten",
            "Grade 1–2",
            "Grade 3–4",
            "Grade 5–6",
            "Grade 7–8",
            "Grade 9–10",
          ].map((className, index) => (
            <div
              key={className}
              className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-blue-500 transition"
            >
              <div className="text-3xl text-yellow-500 mb-3">
                {index < 3 ? "🧸" : "📖"}
              </div>
              <h3 className="font-bold text-blue-900">{className}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="px-8 md:px-20 py-20 bg-gray-50">
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-semibold uppercase tracking-widest">
            Our Faculty
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3">
            Meet Our Teachers
          </h2>
          <p className="text-gray-600 mt-4">
            Experienced educators dedicated to student success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Ahmed",
              subject: "Mathematics Teacher",
              image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600",
            },
            {
              name: "David Smith",
              subject: "Science Teacher",
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
            },
            {
              name: "Ayesha Khan",
              subject: "English Teacher",
              image:
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600",
            },
          ].map((teacher) => (
            <div
              key={teacher.name}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('${teacher.image}')` }}
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900">
                  {teacher.name}
                </h3>
                <p className="text-gray-500 mt-2">{teacher.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Admissions Section */}
      <section
        id="admissions"
        className="px-8 md:px-20 py-20 bg-blue-900"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-yellow-400 font-semibold uppercase tracking-widest">
            Admissions Open
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Give Your Child a Bright Future
          </h2>

          <p className="text-blue-100 mt-4">
            Apply for admission and become a part of our learning community.
          </p>
        </div>

        <form className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Student Admission Form
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Student Name
              </label>
              <input
                type="text"
                placeholder="Enter student name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Parent Name
              </label>
              <input
                type="text"
                placeholder="Enter parent name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                required
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                required
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Select Class
              </label>
              <select
                required
                defaultValue=""
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
              >
                <option value="" disabled>Select a class</option>
                <option>Playgroup</option>
                <option>Nursery</option>
                <option>Kindergarten</option>
                <option>Grade 1–2</option>
                <option>Grade 3–4</option>
                <option>Grade 5–6</option>
                <option>Grade 7–8</option>
                <option>Grade 9–10</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                required
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block font-medium mb-2 text-gray-700">
              Home Address
            </label>
            <textarea
              rows={3}
              placeholder="Enter your complete address"
              required
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            Submit Admission Application
          </button>
        </form>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 md:px-20 py-20 bg-gray-50">
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-semibold uppercase tracking-widest">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3">
            Get in Touch With Us
          </h2>

          <p className="text-gray-600 mt-4">
            Have questions? We would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-blue-900">
                School Address
              </h3>
              <p className="text-gray-600 mt-2">
                Main Road, Your City, Pakistan
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900">
                Phone Number
              </h3>
              <p className="text-gray-600 mt-2">
                +92 300 0000000
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900">
                Email Address
              </h3>
              <p className="text-gray-600 mt-2">
                info@smartschool.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900">
                School Hours
              </h3>
              <p className="text-gray-600 mt-2">
                Monday – Friday: 8:00 AM – 2:00 PM
              </p>
            </div>
          </div>

          <form className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Send Us a Message
            </h3>

            <div className="mb-5">
              <label className="block font-medium mb-2 text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
              />
            </div>

            <div className="mb-5">
              <label className="block font-medium mb-2 text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
              />
            </div>

            <div className="mb-5">
              <label className="block font-medium mb-2 text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                required
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
              />
            </div>

            <div className="mb-5">
              <label className="block font-medium mb-2 text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message"
                required
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-950 text-white px-8 md:px-20 pt-16 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* School Information */}
          <div>
            <h2 className="text-2xl font-bold mb-5">
              Smart<span className="text-yellow-400">School</span>
            </h2>

            <p className="text-gray-300 leading-7">
              Building bright futures through quality education,
              creativity, discipline, and innovation.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="hover:text-yellow-400">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="hover:text-yellow-400">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="#academics" className="hover:text-yellow-400">Academics</a></li>
              <li><a href="#classes" className="hover:text-yellow-400">Classes</a></li>
              <li><a href="#teachers" className="hover:text-yellow-400">Teachers</a></li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-xl font-bold mb-5">Admissions</h3>

            <ul className="space-y-3 text-gray-300">
              <li><a href="#admissions" className="hover:text-yellow-400">Apply for Admission</a></li>
              <li><a href="#academics" className="hover:text-yellow-400">Academic Programs</a></li>
              <li><a href="#classes" className="hover:text-yellow-400">Explore Classes</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Get Information</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-5">Contact Information</h3>

            <ul className="space-y-4 text-gray-300">
              <li>📍 Main Road, Your City, Pakistan</li>
              <li>📞 +92 300 0000000</li>
              <li>✉️ info@smartschool.com</li>
              <li>🕒 Monday – Friday: 8 AM – 2 PM</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-800 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <p>
            © 2026 Smart School. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a href="#home" className="hover:text-yellow-400">
              Privacy Policy
            </a>

            <a href="#home" className="hover:text-yellow-400">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
