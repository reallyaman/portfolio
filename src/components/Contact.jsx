import { CONTACT } from "../constants";
import { motion } from "motion/react";

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="my-10 text-center text-4xl text-neutral-200"
      >
        Get in touch
      </motion.h2>

      <div className="text-center tracking-tighter text-neutral-400">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a className="border-b" href="">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}

export default Contact