/* eslint-disable @next/next/no-img-element */

export default function About() {
  return (
    <>
      <div className="text-xl py-16 bg-[url('/bg.png')] bg-no-repeat h-[400px] bg-cover max-w-[2000px]">
        <h1 className="text-4xl text-center">About Us</h1>
        <p className="text-center py-6 text-3xl">
          The journey behind the gaming revolution
        </p>
      </div>

      <div className="bg-amber-950 text-white px-4 py-6">
        <span className="text-3xl">Our Services</span>
        <p className="py-3">
          Our Story CoreLine Solutions is proudly headquartered in Pune,
          <br />
          India. As an Indian-owned company, we are committed to supporting the
          nation’s vision of
          <br /> global leadership in innovation and digital
          <br />
          transformation. Our foundation is built on strong national values,
          driving us to contribute to a <br />
          knowledge-based economy.
          <br /> Our team of industry experts brings deep sector knowledge to
          every project. We deliver high
          <br />
          -quality IT infrastructure and digital transformation services,
          leveraging the latest advancements
          <br />
          in AI and machine learning. By automating processes, extracting
          valuable insights from data,
          <br />
          and fostering innovation, we help businesses optimize operations,
          reduce costs, and unlock <br />
          new revenue streams in today’s rapidly evolving digital landscape.
        </p>
      </div>

      <div className="text-center text-white bg-amber-600 py-16">
        <span className="text-4xl">Our Values</span>
        <h1 className="text-2xl">
          The core principles that drive everything we do in our quest to
          redefine gaming
        </h1>
      </div>

      {/* Innovation Section Starts Here */}
      <section className="grid grid-cols-1 md:grid-cols-3 bg-amber-200 px-4">
        <div className="max-w-md mx-auto text-center p-6 bg-gray-600 shadow-lg rounded-lg my-10">
          <div className="flex justify-center">
            <img
              src="/idea.gif"
              className="w-32 h-32 animate-bounce"
              alt="Idea Icon"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-2 hover:text-red-500 cursor-pointer">
            Innovation
          </h2>
          <p className="text-white">
            We constantly push the boundaries of what&apos;s possible, embracing
            new technologies and creative approaches to deliver fresh gaming
            experiences.
          </p>
        </div>

        <div className="max-w-md mx-auto text-center p-6 bg-gray-600 shadow-lg rounded-lg my-10">
          <div className="flex justify-center">
            <img
              src="/HappyClients.gif"
              className="w-32 h-32 animate-bounce"
              alt="Happy Clients"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-2 hover:text-red-500 cursor-pointer">
            Quality
          </h2>
          <p className="text-white">
            We&apos;re committed to excellence in every aspect of our games,
            from stunning visuals and immersive sound to engaging gameplay and
            compelling narratives.
          </p>
        </div>

        <div className="max-w-md mx-auto text-center p-6 bg-gray-600 shadow-lg rounded-lg my-10">
          <div className="flex justify-center">
            <img
              src="/Deal.png"
              className="w-32 h-32 animate-bounce"
              alt="Community Icon"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-2 hover:text-red-500 cursor-pointer">
            Community
          </h2>
          <p className="text-white">
            We constantly push the boundaries of what&apos;s possible, embracing
            new technologies and creative approaches to deliver fresh gaming
            experiences.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="text-center mb-10">
          <span className="text-4xl font-bold">
            Our <span className="text-red-500">Team</span>
          </span>
          <h1 className="text-2xl mt-2 text-gray-700">
            Meet the passionate creators, developers, and visionaries behind
            CORELINE
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {/* Sachin Lokhande Flip Card */}
          <div className="perspective">
            <div className="relative w-full h-64 transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="/business-man-avatar-profile_1133257-2431.webp"
                  alt="Sachin Lokhande"
                  className="w-24 h-24 rounded-full mb-4 mx-auto"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  Sachin Lokhande
                </h2>
                <p className="text-red-500 font-medium mt-2">Founder & CEO</p>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-amber-700 p-6 rounded-lg shadow-md text-center">
                <p className=" text-white">
                  Sachin Lokhande is the visionary Founder & CEO of CORELINE,
                  leading the company with a passion for innovation and a
                  commitment to excellence in the gaming industry.
                </p>
              </div>
            </div>
          </div>

          {/* Shaikh Sameer Flip Card */}
          <div className="perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="/business-man-avatar-profile_1133257-2431.webp"
                  alt="Sameer shaikh"
                  className="w-24 h-24 rounded-full mb-4 mx-auto"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  Shaikh Sameer
                </h2>
                <p className="text-red-500 text-xl mt-2">Project Manager</p>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-amber-700 p-6 shadow-md text-center">
                <p className="  text-white">
                  Shaikh Sameer is a Project Manager with expertise in MERN
                  stack development and proven managerial skills, driving team
                  success and delivering high-quality solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Mudassir Sayyad Flip Card */}
          <div className="perspective">
            <div className="relative w-full h-64 transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="/business-man-avatar-profile_1133257-2431.webp"
                  alt="Mudassir Sayyad"
                  className="w-24 h-24 rounded-full mb-4 mx-auto"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  Mudassir Sayyad
                </h2>
                <p className="text-red-500 font-medium mt-2">
                  Full stack Developer
                </p>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-amber-700 p-6 rounded-lg shadow-md text-center">
                <p className="">
                  Mudassir Sayyad is a Full Stack Developer,
                  <br /> contributing to the development of robust,
                  <br /> web applications and delivering efficient <br />
                  end-to-end solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Aniket Bisure  Flip Card */}
          <div className="perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="/business-man-avatar-profile_1133257-2431.webp"
                  alt="Aniket Bisure"
                  className="w-24 h-24 rounded-full mb-4 mx-auto"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  Aniket Bisure
                </h2>
                <p className="text-red-500 text-xl mt-2">
                  Mern Stack Developer
                </p>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-amber-700 p-6 shadow-md text-center">
                <p className="  text-white">
                  Aniket Bisure MERN stack development and <br /> proven
                  managerial skills, driving team <br />
                  success and delivering high-quality
                  <br /> solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-4 gap-5 text-white bg-black p-10">
        <div>
          <img src="/logo_with_new_bg.png" alt="" className="w-10 h-10 " />
          <h1 className="text-3xl font-bold">CoreLine</h1>
          <p className="mt-2">
            The ultimate gaming destination where gamers unite, explore, and
            conquer new digital realms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Games</h2>
          <ul className="space-y-1">
            <li>Action</li>
            <li>Horror</li>
            <li>Strategy</li>
            <li>RPG</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Support</h2>
          <ul className="space-y-1">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div className="col-span-4 text-center text-gray-400 mt-10">
          © 2025 CoreLine. All rights reserved.
        </div>
      </div>
    </>
  );
}
