import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import CertificateText from "./CertificateText";
import CertificateImage from "./CertificateImage";
import { certificatesSection } from "../../lib/data";

export default function CertificateMain() {
  return (
    <div id="certificate" className="max-w-6xl mx-auto px-4 py-20 mt-10">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
          {/* //heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-cyan mb-12 text-center font-bold">
          {certificatesSection.heading}
        </h2>

        <div className="flex flex-col gap-16 lg:flex-row lg:gap-24 bg-brown p-8 md:p-12 rounded-2xl mb-20">
          {certificatesSection.items.map((item) => (
            <div key={item.name} className="flex flex-col items-center text-center flex-1">
              <CertificateText certName={item.name} />
              <CertificateImage
                urlz={item.imageSrc}
                name={item.imageLabel ?? item.name}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
