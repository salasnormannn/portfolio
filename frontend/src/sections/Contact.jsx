import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import SectionTitle from '../components/ui/SectionTitle'
import { PERSONAL_INFO } from '../constants'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // API integration comes in Phase 5
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    }, 1000)
  }

  const inputClass = `w-full bg-surface border border-border rounded-lg px-4 py-3
    text-text-primary placeholder-text-muted text-sm
    focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30
    transition-colors duration-200`

  return (
    <section id="contact" className="section-container">
      <SectionTitle
        tag="contact"
        title="Get In Touch"
        subtitle="I'm currently open to new opportunities. Whether you have a question or just want to say hello — my inbox is open."
      />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-text-secondary leading-relaxed">
            I'm looking for Junior Java Developer or DevOps Engineer roles where
            I can contribute, learn, and grow with a great team.
          </p>

          <div className="space-y-4">
            <a href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors">
              <FiMail size={18} />
              <span className="font-mono text-sm">{PERSONAL_INFO.email}</span>
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer"
              className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors">
              <FiGithub size={18} />
              <span className="font-mono text-sm">GitHub</span>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer"
              className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors">
              <FiLinkedin size={18} />
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text" name="name" placeholder="Your Name"
            value={form.name} onChange={handleChange}
            required className={inputClass}
          />
          <input
            type="email" name="email" placeholder="Your Email"
            value={form.email} onChange={handleChange}
            required className={inputClass}
          />
          <textarea
            name="message" placeholder="Your Message" rows={5}
            value={form.message} onChange={handleChange}
            required className={`${inputClass} resize-none`}
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            <FiSend size={16} />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-secondary text-sm text-center font-mono"
            >
              ✓ Message sent! I'll get back to you soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact