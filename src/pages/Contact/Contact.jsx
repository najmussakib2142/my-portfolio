import { FaEnvelope, FaPhone, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-24 container mx-auto px-6 pb-20">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Get in touch</h3>
          <p className="text-gray-700 mb-4">Email, phone, or WhatsApp — I'm available for internships & freelance work.</p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <a href="mailto:najmus.sakib@example.com" className="link">najmus.sakib@example.com</a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone />
              <a href="tel:+8801XXXXXXXXX" className="link">+8801XXXXXXXXX</a>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp />
              <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noreferrer" className="link">WhatsApp</a>
            </div>

            <div className="mt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="btn btn-ghost mr-2"><FaGithub /></a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="btn btn-ghost"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div>
          <form
            onSubmit={(e)=>{ e.preventDefault(); alert("Form submitted locally — integrate EmailJS / Firebase later to send real messages."); }}
            className="bg-base-100 p-6 rounded shadow"
          >
            <div className="mb-3">
              <label className="label"><span className="label-text">Your Name</span></label>
              <input type="text" className="input input-bordered w-full" required />
            </div>
            <div className="mb-3">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" className="input input-bordered w-full" required />
            </div>
            <div className="mb-3">
              <label className="label"><span className="label-text">Message</span></label>
              <textarea className="textarea textarea-bordered w-full" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
