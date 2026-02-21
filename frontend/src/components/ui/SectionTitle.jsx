import { motion } from 'framer-motion'

const SectionTitle = ({ tag, title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <p className="section-tag">// {tag}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}
    </motion.div>
  )
}

export default SectionTitle