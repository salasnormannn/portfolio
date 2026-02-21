import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import SectionTitle from '../components/ui/SectionTitle'

const Counter = ({ value, label }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = parseInt(value)
    const duration = 1500
    const step = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-primary font-mono">{count}+</div>
      <div className="text-text-muted text-sm mt-1">{label}</div>
    </div>
  )
}

const About = () => {
  const facts = [
    { label: 'Degree',   value: 'BS Information Technology' },
    { label: 'Focus',    value: 'Java Backend & DevOps'     },
    { label: 'Status',   value: 'Open to Work'              },
    { label: 'Location', value: 'Philippines'               },
  ]

  const stats = [
    { value: '4',  label: 'Projects Built' },
    { value: '10', label: 'Technologies'   },
    { value: '1',  label: 'Years Studying' },
  ]

  return (
    <section id="about" className="section-container">
      <SectionTitle
        tag="about me"
        title="Who I Am"
        subtitle="A passionate IT graduate who loves building things that work reliably at scale."
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              I&apos;m{' '}
              <span className="text-text-primary font-medium">Norman Lee Salas</span>,
              a fresh IT graduate from the Philippines with a strong focus on
              <span className="text-primary"> Java backend development</span> and
              <span className="text-primary"> DevOps engineering</span>.
            </p>
            <p>
              I enjoy building robust, maintainable systems from designing REST APIs
              with Spring Boot to containerizing applications with Docker and setting up
              automated CI/CD pipelines with GitHub Actions.
            </p>
            <p>
              I believe in writing code that is clean, tested, and ready for
              production, not just code that works on my machine.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            {stats.map((stat) => (
              <Counter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </motion.div>

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