import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

function ContactPage() {
  return (
    <>
      {/* Top Banner */}
      <div className="text-center bg-[url('/bgimg3.webs.webp')] bg-no-repeat h-[400px] bg-cover max-w-[2000px] text-white flex items-center justify-center">
        <span className="text-red-600 text-6xl font-bold">Contact Us</span>
      </div>

      {/* Contact Section */}
      <div className="min-h-screen bg-black text-white flex justify-center items-center p-8">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Get In <span className="text-red-600">Touch</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-red-600 text-2xl" />
                <p>+91 9209486151 (HR) / +91 7517999933 / +91 8261090881</p>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-red-600 text-2xl" />
                <p>info@corelineitsolutions.com</p>
              </div>

              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-red-600 text-2xl" />
                <p>
                  CITY VISTA - Kolte Patil Developers Ashoka Nagar, Kharadi
                  Pune, Maharashtra 411014
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-10">
              Connect With <span className="text-red-600">Us</span>
            </h3>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="p-3 border border-red-600 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-3 border border-red-600 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="p-3 border border-red-600 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-[#0f0f0f] rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">
              Send Us a <span className="text-red-600">Message</span>
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 rounded-lg bg-[#101623] text-white focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded-lg bg-[#101623] text-white focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg bg-[#101623] text-white focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full p-3 rounded-lg bg-[#101623] text-white focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center text-4xl">
        <span>
          Find <span className="text-red-500 "> Us </span>{" "}
        </span>
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7564.792603276282!2d73.93292009117859!3d18.55616370127877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c37942ddc8d9%3A0x5617a3bcbfc7565f!2sCity%20Vista%2C%20Kharadi!5e0!3m2!1sen!2sin!4v1758865463191!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <section className="bg-gray-600 text-white">
        <div className="grid">
          <div>
            <img src="/logo_with_new_bg.png" alt="" className="w-10 h-10 " />
            <h1 className="text-3xl font-bold">CoreLine</h1>
            <p className="mt-2">
              The ultimate gaming destination where gamers unite, explore,
              <br /> and conquer new digital realms.
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
      </section>
    </>
  );
}

export default ContactPage;
