"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function IDCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      {/* Lanyard with Clips and Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        {/* Lanyard Clip Segments */}
        <div className="flex flex-col items-center">
          {/* Clip 1 */}
          <div className="relative mb-2 flex h-8 w-6 items-center justify-center rounded-sm bg-gradient-to-r from-gray-800 to-gray-900">
            <div className="h-3 w-3 rounded-full bg-gray-600"></div>
          </div>

          {/* Lanyard Segment 1 with PYRMIDIONS text */}
          <div className="relative mb-2 flex h-16 w-4 items-center justify-center rounded-sm bg-gradient-to-r from-black via-gray-900 to-black">
            <span className="absolute rotate-90 whitespace-nowrap text-[6px] font-bold tracking-wider text-white/80">
              PYRMIDIONS
            </span>
          </div>

          {/* Clip 2 */}
          <div className="relative mb-2 flex h-8 w-6 items-center justify-center rounded-sm bg-gradient-to-r from-gray-800 to-gray-900">
            <div className="h-3 w-3 rounded-full bg-gray-600"></div>
          </div>

          {/* Lanyard Segment 2 with PYRMIDIONS text */}
          <div className="relative mb-2 flex h-16 w-4 items-center justify-center rounded-sm bg-gradient-to-r from-black via-gray-900 to-black">
            <span className="absolute rotate-90 whitespace-nowrap text-[6px] font-bold tracking-wider text-white/80">
              PYRMIDIONS
            </span>
          </div>

          {/* Clip 3 */}
          <div className="relative mb-2 flex h-8 w-6 items-center justify-center rounded-sm bg-gradient-to-r from-gray-800 to-gray-900">
            <div className="h-3 w-3 rounded-full bg-gray-600"></div>
          </div>

          {/* Lanyard Segment 3 with PYRMIDIONS text */}
          <div className="relative mb-2 flex h-16 w-4 items-center justify-center rounded-sm bg-gradient-to-r from-black via-gray-900 to-black">
            <span className="absolute rotate-90 whitespace-nowrap text-[6px] font-bold tracking-wider text-white/80">
              PYRMIDIONS
            </span>
          </div>

          {/* Clip 4 */}
          <div className="relative mb-2 flex h-8 w-6 items-center justify-center rounded-sm bg-gradient-to-r from-gray-800 to-gray-900">
            <div className="h-3 w-3 rounded-full bg-gray-600"></div>
          </div>

          {/* Connector to Card */}
          <div className="h-4 w-1 bg-gradient-to-b from-gray-700 to-gray-800"></div>
        </div>
      </div>

      {/* ID Card Container — scaled down on narrow phones, full size from sm: up */}
      <div className="relative flex w-60 h-[343px] items-center justify-center sm:w-[280px] sm:h-[400px]">
        <motion.div
          className="relative h-[400px] w-[280px] origin-center scale-[0.857] cursor-pointer perspective-1000 sm:scale-100"
          onClick={() => setIsFlipped(!isFlipped)}
          whileHover={{ scale: 1.05 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {/* Card with Flip Animation */}
          <motion.div
            className="relative h-full w-full"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Front Side - Cartoon */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300"
              style={{
                backfaceVisibility: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 2px 4px 0 rgba(255, 255, 255, 0.2)",
              }}
            >
              {/* Card Header */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6">
                {/* Company Logo/Name */}
                <div className="mb-4 text-center">
                  <h3 className="text-2xl font-bold text-white">DEVELOPER</h3>
                  <p className="text-sm text-gray-300">ID CARD</p>
                </div>

                {/* Photo */}
                <div className="relative mx-auto mb-4 h-[180px] w-[150px] overflow-hidden rounded-xl border-4 border-gray-700 bg-gradient-to-br from-gray-700 to-gray-800">
                  <Image
                    src="/cini.png"
                    alt="Fenil RR"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name */}
                <div className="text-center">
                  <h2 className="text-xl font-bold text-white">FENIL RR</h2>
                  <p className="text-sm text-gray-300">Web Developer</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>ID: #2023</span>
                    <span>VALID</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Side - Real Photo & Info */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-white/20 p-6">
                {/* Real Photo */}
                <div className="relative mx-auto mb-4 h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-pink-500">
                  <Image src="/cini.png" alt="Fenil RR" fill className="object-cover" />
                </div>

                {/* Information */}
                <div className="space-y-3 text-sm text-white">
                  <div>
                    <p className="text-xs text-gray-400">Name</p>
                    <p className="font-semibold">Fenil RR</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Position</p>
                    <p className="font-semibold">Web Developer</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Company</p>
                    <p className="font-semibold">Grow Medico</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Experience</p>
                    <p className="font-semibold">2+ Years</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="font-semibold">Chennai, Tamil Nadu</p>
                  </div>
                </div>

                {/* QR Code Placeholder */}
                <img src="ar.svg" className="absolute bottom-4 right-4 h-12 w-12 rounded bg-white"/>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Click Hint */}
      <motion.div
        className="absolute bottom-20 text-center text-sm text-gray-400"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Click to flip the card
      </motion.div>
    </div>
  );
}
