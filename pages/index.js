import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <motion.h1 className="text-3xl font-bold underline" initial={{ y: -25, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Get ready to vote!
      </motion.h1>
    </div>
  )
}