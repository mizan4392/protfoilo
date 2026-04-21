/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailJs from "@emailjs/browser";
import { SectionWrapper } from "../hoc/SectionWrapper";
function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef<any>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!form.name || !form.email || !form.message) {
      toast("Please fill in all fields");
      setLoading(false);
      return;
    }
    emailJs
      .send(
        "service_t7y93zq",
        "template_g1ys5fj",
        {
          from_name: form.name,
          to_name: "Mizan",
          from_email: form.email,
          to_email: "md.mizan4392@gmail.com",
          message: form.message,
        },
        "lrTkPKrocPao9ilyC",
      )
      .then(
        () => {
          setLoading(false);
          toast("Thank you. I will get back to you as soon as possible");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          toast("Something went Wrong!!");
        },
      );
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className="min-h-screen w-full bg-[#070A12] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Form */}
        <div className="bg-[#0E1224]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-8">Contact.</h1>

          <div className="space-y-5">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <div>
                <label className="text-sm text-gray-300">Your Name</label>
                <input
                  value={form.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="What is your Name?"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[#12172A] border border-white/10 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What is your Email?"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[#12172A] border border-white/10 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Your Message</label>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[#12172A] border border-white/10 focus:outline-none focus:border-purple-500 resize-none"
                />
              </div>

              <button className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 transition font-medium">
                {loading ? "Sending..." : "send"}
              </button>
            </form>
          </div>
        </div>

        {/* Right - Modern Abstract Visual (replaces globe) */}
        <div className="relative flex items-center justify-center">
          {/* Glow background */}
          <div className="absolute w-72 h-72 bg-purple-500/30 blur-3xl rounded-full animate-pulse" />
          <div className="absolute w-60 h-60 bg-indigo-500/20 blur-2xl rounded-full animate-ping" />

          {/* Abstract blob */}
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 opacity-80 blur-sm animate-spin-slow" />

            <div className="absolute inset-6 rounded-full bg-[#070A12] border border-white/10 flex items-center justify-center">
              <span className="text-sm text-gray-300 tracking-widest">
                LET’S CONNECT
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(ContactSection, "contact");
