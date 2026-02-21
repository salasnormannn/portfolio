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

const Hero = () => {
  const roles = [
    'Java Developer',
    'DevOps Engineer',
    'Backend Engineer',
    'Spring Boot Developer',
  ]
  const typewriterText = useTypewriter(roles, 80, 2000)

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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

          <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-tight mb-4">
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
            <h2 className="text-2xl md:text-3xl font-mono text-text-secondary mb-6">
              <span className="text-primary">{'>'}</span>{' '}
              <span className="text-text-primary">{typewriterText}</span>
              <span className="animate-pulse text-primary ml-0.5">|</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-text-secondary text-lg max-w-xl leading-relaxed mb-10"
          >
            {PERSONAL_INFO.intro}
          </motion.p>

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