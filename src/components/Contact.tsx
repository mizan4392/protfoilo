/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import emailJs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
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
        "lrTkPKrocPao9ilyC"
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
        }
      );
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your Name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your Email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="cursor-pointer py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl bg-[#915EFF]"
          >
            {loading ? "Sending..." : "send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
