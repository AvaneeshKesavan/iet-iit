export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white text-black">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight">
          ABOUT US
        </h2>

        {/* Subheading */}
        <h3 className="text-lg md:text-xl font-semibold mb-16 text-gray-700">
          The Institution of Engineering and Technology on Campus - Informatics
          Institute of Technology
        </h3>

        {/* Description */}
        <p
          className="text-lg md:text-lg leading-relaxed text-gray-800 space-y-6 mx-auto"
          style={{ maxWidth: "900px" }}
        >
          IET On Campus – Informatics Institute of Technology (IIT) is a vibrant
          student chapter affiliated with the prestigious Institution of
          Engineering and Technology (IET). Our mission is to empower the next
          generation of engineers, technologists, and innovators by bridging the
          gap between academic knowledge and real-world applications.
          <br />
          At IIT, we create an engaging environment where students can thrive
          through hands-on workshops, technical talks, industry exposure, and
          collaborative projects. From cutting-edge tech events to professional
          networking sessions, we provide a platform for students to enhance
          their skills, explore emerging technologies, and grow as future
          leaders in engineering.
          <br />
          We believe in fostering a passion for innovation, encouraging
          teamwork, and nurturing career development through continuous
          learning. Join us in our journey to inspire, innovate, and make a
          meaningful impact in the world of technology.
        </p>
      </div>
    </section>
  );
}
