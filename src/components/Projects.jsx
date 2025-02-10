import { PROJECTS } from "../constants";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";


function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="my-20 text-center text-4xl text-neutral-200"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full lg:w-1/4"
            >
              <a href={project.url}>
                <img
                  className="mb-6 rounded"
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ x: +200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-neutral-200">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                  key={index}
                >
                  {tech}
                </span>
              ))}
              <a href={project.code}>
                <div className=" flex">
                  <FaGithub className=" mt-2 text-[#cccfd5]" />
                  <span className=" ml-2 mt-1 text-neutral-300">
                    Source code
                  </span>
                </div>
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
