import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { PERSONAL_INFO } from '../constants'
import Button from '../components/ui/Button'

const useTypewriter = (texts, speed, pauseTime) => {
  const spd = speed || 80
  const pause = pauseTime || 2000
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        setDisplayText(currentText.slice(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? spd / 2 : spd)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts, spd, pause])

  return displayText
}

const ProfilePhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
      className="flex justify-center items-center"
    >
      {/* Outer floating wrapper */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Rotating gradient ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
          className="absolute -inset-[3px] rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, #6366f1, #22d3ee, #6366f1, #22d3ee, #6366f1)',
            borderRadius: '50%',
          }}
        />

        {/* Static glow behind */}
        <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl" />

        {/* Hover glow ring */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative group"
        >
          {/* Inner glow on hover */}
          <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

          {/* Photo container */}
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[3px] border-background">
            <img
              src="/profile.png"
              alt="Norman Lee Salas"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
          </div>
        </motion.div>

        {/* Floating badge — top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, type: 'spring' }}
          className="absolute -top-2 -right-2 bg-surface border border-border rounded-xl px-3 py-1.5 shadow-lg"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-xs text-text-secondary">Available</span>
          </div>
        </motion.div>

        {/* Floating badge — bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: 'spring' }}
          className="absolute -bottom-3 -left-4 bg-surface border border-border rounded-xl px-3 py-1.5 shadow-lg"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-sm">☕</span>
            <span className="font-mono text-xs text-text-secondary">Java Dev</span>
          </div>
        </motion.div>

        {/* Floating badge — bottom right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, type: 'spring' }}
          className="absolute -bottom-2 -right-6 bg-surface border border-border rounded-xl px-3 py-1.5 shadow-lg"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-sm">🚀</span>
            <span className="font-mono text-xs text-text-secondary">DevOps</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const Hero = () => {
  const roles = [
    'Java Developer',
    'DevOps Engineer',
    'Backend Developer',
    'Spring Boot Developer',
  ]
  const typewriterText = useTypewriter(roles, 80, 2000)

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Two column layout */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">

          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6 justify-center md:justify-start"
            >
              <span className="glow-dot animate-pulse" />
              <span className="font-mono text-text-secondary text-sm">
                Open to opportunities
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-4">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Norman
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-mono text-text-secondary mb-6">
                <span className="text-primary">{'>'}</span>{' '}
                <span className="text-text-primary">{typewriterText}</span>
                <span className="animate-pulse text-primary ml-0.5">|</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-text-secondary text-lg max-w-xl leading-relaxed mb-10 mx-auto md:mx-0"
            >
              {PERSONAL_INFO.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start"
            >
              <Button href="#projects">View Projects</Button>
              <Button variant="outline" href="/resume.pdf" download="Norman_Salas_Resume.pdf">
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 justify-center md:justify-start"
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

          {/* Right — Profile photo */}
          <div className="flex-shrink-0 md:w-auto">
            <ProfilePhoto />
          </div>

        </div>
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