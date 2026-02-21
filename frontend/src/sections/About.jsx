import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'

const About = () => {
  const facts = [
    { label: "Degree",     value: "BS Information Technology" },
    { label: "Focus",      value: "Java Backend & DevOps" },
    { label: "Status",     value: "Open to Work" },
    { label: "Location",   value: "Philippines" },
  ]

  return (
    <section id="about" className="section-container">
      <SectionTitle
        tag="about me"
        title="Who I Am"
        subtitle="A passionate IT graduate who loves building things that work reliably at scale."
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-text-secondary leading-relaxed"
        >
          <p>
            I'm <span className="text-text-primary font-medium">Norman Lee Salas</span>,
            a fresh IT graduate from the Philippines with a strong focus on
            <span className="text-primary"> Java backend development</span> and
            <span className="text-primary"> DevOps engineering</span>.
          </p>
          <p>
            I enjoy building robust, maintainable systems — from designing REST APIs
            with Spring Boot to containerizing applications with Docker and setting up
            automated CI/CD pipelines with GitHub Actions.
          </p>
          <p>
            I believe in writing code that's clean, tested, and ready for production —
            not just code that works on my machine.
          </p>
        </motion.div>

        {/* Facts card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card space-y-4"
        >
          {facts.map((fact, i) => (
            <div key={i} className="flex justify-between items-center py-3 border-b border-border last:border-0">
              <span className="font-mono text-text-muted text-sm">{fact.label}</span>
              <span className="text-text-primary font-medium text-sm">{fact.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About