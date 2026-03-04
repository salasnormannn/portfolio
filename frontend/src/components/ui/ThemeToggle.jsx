import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      whileTap={{ scale: 0.9 }}
      className="relative w-14 h-7 rounded-full border border-border bg-surface flex items-center px-1 transition-colors duration-300 hover:border-primary"
    >
      {/* Sliding pill */}
      <motion.div
        animate={{ x: isDark ? 0 : 28 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white shadow-md"
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              <MoonIcon />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
            >
              <SunIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle