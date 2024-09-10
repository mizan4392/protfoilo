import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

function SocialLinks() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Connect with me</p>
        <h2 className={styles.sectionHeadText}>My Social Links</h2>
      </motion.div>
      <div className="flex flex-wrap gap-10">
        <a href="https://twitter.com/dev_mizan4392" target="blank">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
            alt="dev_mizan4392"
            height="30"
            width="40"
          />
        </a>
        <a href="https://www.linkedin.com/in/mizan4392/" target="blank">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="https://www.linkedin.com/in/md-mizanur-rahaman-4608a813b/"
            height="30"
            width="40"
          />
        </a>
        <a href="https://stackoverflow.com/users/7766317/mizan" target="blank">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg"
            alt="https://stackoverflow.com/users/7766317/mizan"
            height="30"
            width="40"
          />
        </a>
        <a
          href="https://fb.com/https://www.facebook.com/mizanurrahman.sobuz.7/"
          target="blank"
        >
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg"
            alt="https://www.facebook.com/mizanurrahman.sobuz.7/"
            height="30"
            width="40"
          />
        </a>
        <a href="https://instagram.com/sobuz247" target="blank">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
            alt="sobuz247"
            height="30"
            width="40"
          />
        </a>
        <a href="https://www.hackerrank.com/mizan4392" target="blank">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg"
            alt="mizan4392"
            height="30"
            width="40"
          />
        </a>
      </div>
    </>
  );
}

export default SectionWrapper(SocialLinks, "");
