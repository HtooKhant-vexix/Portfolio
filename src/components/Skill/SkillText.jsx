import React from 'react'
import { motion } from 'framer-motion'

const SkillText = () => {
  return (
    <motion.div
      whileInView={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0 , opacity: 0 }}
      // viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 40,
        // ease: "easeOut",
        delay: 0.7,
      }}
      className="text-5xl font-bold text-white text-center mt-[-200px] lg:mt-[-150px]"
    >
      SKILLS
    </motion.div>
  );
}

export default SkillText