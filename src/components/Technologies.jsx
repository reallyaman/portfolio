import {
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { motion } from "motion/react";

const iconVariants = (duration) => ({
  hidden: { y: -10 },
  animate: { y: [10, -10], 
    transition: {
    duration: duration,
    repeat : Infinity,
    repeatType: "reverse"
  }}
});

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="my-20 text-center text-4xl text-neutral-300"
      >
        Skills
      </motion.h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-[#61DBFB]" />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            width="72"
            height="48"
            src="https://img.icons8.com/color/48/c-plus-plus-logo.png"
            alt="c-plus-plus-logo"
          />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-[#06b6d4]" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            width={72}
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiNGNDQzMzYiIGQ9Ik0yMy42NSwyNC44OThjLTAuOTk4LTEuNjA5LTEuNzIyLTIuOTQzLTIuNzI1LTUuNDU1QzE5LjIyOSwxNS4yLDMxLjI0LDExLjM2NiwyNi4zNywzLjk5OWMyLjExMSw1LjA4OS03LjU3Nyw4LjIzNS04LjQ3NywxMi40NzNDMTcuMDcsMjAuMzcsMjMuNjQ1LDI0Ljg5OCwyMy42NSwyNC44OTh6Ii8+PHBhdGggZmlsbD0iI0Y0NDMzNiIgZD0iTTIzLjg3OCwxNy4yN2MtMC4xOTIsMi41MTYsMi4yMjksMy44NTcsMi4yOTksNS42OTVjMC4wNTYsMS40OTYtMS40NDcsMi43NDMtMS40NDcsMi43NDNzMi43MjgtMC41MzYsMy41NzktMi44MThjMC45NDUtMi41MzQtMS44MzQtNC4yNjktMS41NDgtNi4yOThjMC4yNjctMS45MzgsNi4wMzEtNS41NDMsNi4wMzEtNS41NDNTMjQuMzExLDExLjYxMSwyMy44NzgsMTcuMjd6Ii8+PGc+PHBhdGggZmlsbD0iIzE1NjVDMCIgZD0iTTMyLjA4NCAyNS4wNTVjMS43NTQtLjM5NCAzLjIzMy43MjMgMy4yMzMgMi4wMSAwIDIuOTAxLTQuMDIxIDUuNjQzLTQuMDIxIDUuNjQzczYuMjI1LS43NDIgNi4yMjUtNS41MDVDMzcuNTIxIDI0LjA1MyAzNC40NjQgMjMuMjY2IDMyLjA4NCAyNS4wNTV6TTI5LjEyOSAyNy4zOTVjMCAwIDEuOTQxLTEuMzgzIDIuNDU4LTEuOTAyLTQuNzYzIDEuMDExLTE1LjYzOCAxLjE0Ny0xNS42MzguMjY5IDAtLjgwOSAzLjUwNy0xLjYzOCAzLjUwNy0xLjYzOHMtNy43NzMtLjExMi03Ljc3MyAyLjE4MUMxMS42ODMgMjguNjk1IDIxLjg1OCAyOC44NjYgMjkuMTI5IDI3LjM5NXoiLz48cGF0aCBmaWxsPSIjMTU2NUMwIiBkPSJNMjcuOTM1LDI5LjU3MWMtNC41MDksMS40OTktMTIuODE0LDEuMDItMTAuMzU0LTAuOTkzYy0xLjE5OCwwLTIuOTc0LDAuOTYzLTIuOTc0LDEuODg5YzAsMS44NTcsOC45ODIsMy4yOTEsMTUuNjMsMC41NzJMMjcuOTM1LDI5LjU3MXoiLz48cGF0aCBmaWxsPSIjMTU2NUMwIiBkPSJNMTguNjg2LDMyLjczOWMtMS42MzYsMC0yLjY5NSwxLjA1NC0yLjY5NSwxLjgyMmMwLDIuMzkxLDkuNzYsMi42MzIsMTMuNjI3LDAuMjA1bC0yLjQ1OC0xLjYzMkMyNC4yNzEsMzQuNDA0LDE3LjAxNCwzNC41NzksMTguNjg2LDMyLjczOXoiLz48cGF0aCBmaWxsPSIjMTU2NUMwIiBkPSJNMzYuMjgxLDM2LjYzMmMwLTAuOTM2LTEuMDU1LTEuMzc3LTEuNDMzLTEuNTg4YzIuMjI4LDUuMzczLTIyLjMxNyw0Ljk1Ni0yMi4zMTcsMS43ODRjMC0wLjcyMSwxLjgwNy0xLjQyNywzLjQ3Ny0xLjA5M2wtMS40Mi0wLjgzOUMxMS4yNiwzNC4zNzQsOSwzNS44MzcsOSwzNy4wMTdDOSw0Mi41MiwzNi4yODEsNDIuMjU1LDM2LjI4MSwzNi42MzJ6Ii8+PHBhdGggZmlsbD0iIzE1NjVDMCIgZD0iTTM5LDM4LjYwNGMtNC4xNDYsNC4wOTUtMTQuNjU5LDUuNTg3LTI1LjIzMSwzLjA1N0MyNC4zNDEsNDYuMTY0LDM4Ljk1LDQzLjYyOCwzOSwzOC42MDR6Ii8+PC9nPjwvc3ZnPg=="
          />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            width={72}
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiMwMjc3QkQiIGQ9Ik0yNC4wNDcsNWMtMS41NTUsMC4wMDUtMi42MzMsMC4xNDItMy45MzYsMC4zNjdjLTMuODQ4LDAuNjctNC41NDksMi4wNzctNC41NDksNC42N1YxNGg5djJIMTUuMjJoLTQuMzVjLTIuNjM2LDAtNC45NDMsMS4yNDItNS42NzQsNC4yMTljLTAuODI2LDMuNDE3LTAuODYzLDUuNTU3LDAsOS4xMjVDNS44NTEsMzIuMDA1LDcuMjk0LDM0LDkuOTMxLDM0aDMuNjMydi01LjEwNGMwLTIuOTY2LDIuNjg2LTUuODk2LDUuNzY0LTUuODk2aDcuMjM2YzIuNTIzLDAsNS0xLjg2Miw1LTQuMzc3di04LjU4NmMwLTIuNDM5LTEuNzU5LTQuMjYzLTQuMjE4LTQuNjcyQzI3LjQwNiw1LjM1OSwyNS41ODksNC45OTQsMjQuMDQ3LDV6IE0xOS4wNjMsOWMwLjgyMSwwLDEuNSwwLjY3NywxLjUsMS41MDJjMCwwLjgzMy0wLjY3OSwxLjQ5OC0xLjUsMS40OThjLTAuODM3LDAtMS41LTAuNjY0LTEuNS0xLjQ5OEMxNy41NjMsOS42OCwxOC4yMjYsOSwxOS4wNjMsOXoiLz48cGF0aCBmaWxsPSIjRkZDMTA3IiBkPSJNMjMuMDc4LDQzYzEuNTU1LTAuMDA1LDIuNjMzLTAuMTQyLDMuOTM2LTAuMzY3YzMuODQ4LTAuNjcsNC41NDktMi4wNzcsNC41NDktNC42N1YzNGgtOXYtMmg5LjM0M2g0LjM1YzIuNjM2LDAsNC45NDMtMS4yNDIsNS42NzQtNC4yMTljMC44MjYtMy40MTcsMC44NjMtNS41NTcsMC05LjEyNUM0MS4yNzQsMTUuOTk1LDM5LjgzMSwxNCwzNy4xOTQsMTRoLTMuNjMydjUuMTA0YzAsMi45NjYtMi42ODYsNS44OTYtNS43NjQsNS44OTZoLTcuMjM2Yy0yLjUyMywwLTUsMS44NjItNSw0LjM3N3Y4LjU4NmMwLDIuNDM5LDEuNzU5LDQuMjYzLDQuMjE4LDQuNjcyQzE5LjcxOSw0Mi42NDEsMjEuNTM2LDQzLjAwNiwyMy4wNzgsNDN6IE0yOC4wNjMsMzljLTAuODIxLDAtMS41LTAuNjc3LTEuNS0xLjUwMmMwLTAuODMzLDAuNjc5LTEuNDk4LDEuNS0xLjQ5OGMwLjgzNywwLDEuNSwwLjY2NCwxLjUsMS40OThDMjkuNTYzLDM4LjMyLDI4Ljg5OSwzOSwyOC4wNjMsMzl6Ii8+PC9zdmc+"
          />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            width={72}
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiNGNDUxMUUiIGQ9Ik00Mi4yLDIyLjFMMjUuOSw1LjhDMjUuNCw1LjMsMjQuNyw1LDI0LDVjMCwwLDAsMCwwLDBjLTAuNywwLTEuNCwwLjMtMS45LDAuOGwtMy41LDMuNWw0LjEsNC4xYzAuNC0wLjIsMC44LTAuMywxLjMtMC4zYzEuNywwLDMsMS4zLDMsM2MwLDAuNS0wLjEsMC45LTAuMywxLjNsNCw0YzAuNC0wLjIsMC44LTAuMywxLjMtMC4zYzEuNywwLDMsMS4zLDMsM3MtMS4zLDMtMywzYy0xLjcsMC0zLTEuMy0zLTNjMC0wLjUsMC4xLTAuOSwwLjMtMS4zbC00LTRjLTAuMSwwLTAuMiwwLjEtMC4zLDAuMXYxMC40YzEuMiwwLjQsMiwxLjUsMiwyLjhjMCwxLjctMS4zLDMtMywzcy0zLTEuMy0zLTNjMC0xLjMsMC44LTIuNCwyLTIuOFYxOC44Yy0xLjItMC40LTItMS41LTItMi44YzAtMC41LDAuMS0wLjksMC4zLTEuM2wtNC4xLTQuMUw1LjgsMjIuMUM1LjMsMjIuNiw1LDIzLjMsNSwyNGMwLDAuNywwLjMsMS40LDAuOCwxLjlsMTYuMywxNi4zYzAsMCwwLDAsMCwwYzAuNSwwLjUsMS4yLDAuOCwxLjksMC44czEuNC0wLjMsMS45LTAuOGwxNi4zLTE2LjNjMC41LTAuNSwwLjgtMS4yLDAuOC0xLjlDNDMsMjMuMyw0Mi43LDIyLjYsNDIuMiwyMi4xeiIvPjwvc3ZnPg=="
          />
        </motion.div>

        <motion.div
          variants={iconVariants(3.2)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            width={72}
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiNmZmQ2MDAiIGQ9Ik02LDQyVjZoMzZ2MzZINnoiLz48cGF0aCBmaWxsPSIjMDAwMDAxIiBkPSJNMjkuNTM4IDMyLjk0N2MuNjkyIDEuMTI0IDEuNDQ0IDIuMjAxIDMuMDM3IDIuMjAxIDEuMzM4IDAgMi4wNC0uNjY1IDIuMDQtMS41ODUgMC0xLjEwMS0uNzI2LTEuNDkyLTIuMTk4LTIuMTMzbC0uODA3LS4zNDRjLTIuMzI5LS45ODgtMy44NzgtMi4yMjYtMy44NzgtNC44NDEgMC0yLjQxIDEuODQ1LTQuMjQ0IDQuNzI4LTQuMjQ0IDIuMDUzIDAgMy41MjguNzExIDQuNTkyIDIuNTczbC0yLjUxNCAxLjYwN2MtLjU1My0uOTg4LTEuMTUxLTEuMzc3LTIuMDc4LTEuMzc3LS45NDYgMC0xLjU0NS41OTctMS41NDUgMS4zNzcgMCAuOTY0LjYgMS4zNTQgMS45ODUgMS45NTFsLjgwNy4zNDRDMzYuNDUyIDI5LjY0NSAzOCAzMC44MzkgMzggMzMuNTIzIDM4IDM2LjQxNSAzNS43MTYgMzggMzIuNjUgMzhjLTIuOTk5IDAtNC43MDItMS41MDUtNS42NS0zLjM2OEwyOS41MzggMzIuOTQ3ek0xNy45NTIgMzMuMDI5Yy41MDYuOTA2IDEuMjc1IDEuNjAzIDIuMzgxIDEuNjAzIDEuMDU4IDAgMS42NjctLjQxOCAxLjY2Ny0yLjA0M1YyMmgzLjMzM3YxMS4xMDFjMCAzLjM2Ny0xLjk1MyA0Ljg5OS00LjgwNSA0Ljg5OS0yLjU3NyAwLTQuNDM3LTEuNzQ2LTUuMTk1LTMuMzY4TDE3Ljk1MiAzMy4wMjl6Ii8+PC9zdmc+"
          />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbSql className="text-7xl text-[#00758F]" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies