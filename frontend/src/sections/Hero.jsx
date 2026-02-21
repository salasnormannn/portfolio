import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { PERSONAL_INFO } from '../constants'
import Button from '../components/ui/Button'

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="glow-dot animate-pulse" />
            <span className="font-mono text-text-secondary text-sm">
              Open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-tight mb-4">
            Hi, I&apos;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Norman
            </span>
          </h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-mono text-text-secondary mb-6">
              <span className="text-primary">{'>'}</span> Java Developer{' '}
              <span className="text-muted">&amp;</span> DevOps Engineer
            </h2>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-text-secondary text-lg max-w-xl leading-relaxed mb-10"
          >
            {PERSONAL_INFO.intro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button href="#projects">View Projects</Button>
            <Button variant="outline" href="/resume.pdf" download="Norman_Salas_Resume.pdf">
              Download Resume
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-6"
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-text-muted hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-text-muted hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="font-mono text-xs">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero