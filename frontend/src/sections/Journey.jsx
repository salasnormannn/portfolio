import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const milestones = [
  {
    year: '2021 – 2026',
    icon: '💻',
    title: 'B.S. Information Technology',
    company: 'De La Salle University',
    description:
      'Four years of turning ideas into real software. Built CLI games, full-stack web systems, a native Android app, and an IoT capstone — each project pushing further than the last.',
    tags: ['Java', 'Kotlin', 'JavaScript', 'MongoDB', 'PHP'],
    color: 'from-primary/20 to-primary/5',
    borderColor: 'border-primary/40',
    iconBg: 'bg-primary/10',
  },
  {
    year: '2023 – 2024',
    icon: '🏆',
    title: 'BusMate PH — Capstone Project',
    company: 'Eduardo M. Cojuangco Jr. Excellence Award',
    award: 'Leadership and Research Innovation',
    description:
      'Led the development of a real-time Public Utility Bus tracking system — combining a Raspberry Pi onboard device, GPS telemetry, OpenCV computer vision, and a live web dashboard. Recognized for both technical depth and leadership by the college.',
    tags: ['Node.js', 'OpenCV', 'GPS', 'Raspberry Pi', 'IoT', 'JavaScript'],
    color: 'from-yellow-500/20 to-yellow-500/5',
    borderColor: 'border-yellow-500/40',
    iconBg: 'bg-yellow-500/10',
    isAward: true,
  },
  {
    year: '2025 – 2026',
    icon: '🏢',
    title: 'Java Developer & DevOps Intern',
    company: 'ING Hubs Philippines',
    description:
      'Walked in as a fresh grad. Left having shipped real work to production. Migrated ING\'s logging infrastructure to ELKaaS, built with Java Spring Boot alongside Kafka, Flink, and Elasticsearch, contributed to frontend development on a live platform, and served as Scrum Master — facilitating standups and sprint ceremonies for the team.',
    tags: ['Java', 'Spring Boot', 'Kafka', 'Flink', 'Elasticsearch', 'Kibana', 'Scrum'],
    color: 'from-secondary/20 to-secondary/5',
    borderColor: 'border-secondary/40',
    iconBg: 'bg-secondary/10',
  },
  {
    year: '2026',
    icon: '🎓',
    title: 'Graduated — B.S. Information Technology',
    company: 'De La Salle University Manila',
    description:
      'Degree earned. Production experience in hand. I\'ve written code that runs in real systems, led ceremonies in a real team, and built projects that solve real problems. I\'m not here to learn the basics — I\'m here to keep shipping.',
    tags: ['Open to Work', 'Java', 'DevOps', 'Full Stack'],
    color: 'from-green-500/20 to-green-500/5',
    borderColor: 'border-green-500/40',
    iconBg: 'bg-green-500/10',
    isCurrent: true,
  },
]

const TimelineItem = ({ milestone, index, isLast }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative flex items-start gap-0 md:gap-8">

      {/* Desktop — Left side content */}
      <div className={`hidden md:flex flex-1 ${isLeft ? 'justify-end' : 'justify-start'}`}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-sm"
          >
            <MilestoneCard milestone={milestone} />
          </motion.div>
        )}
      </div>

      {/* Center — Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Icon bubble */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, type: 'spring', delay: 0.2 }}
          className={`w-12 h-12 rounded-full ${milestone.iconBg} border ${milestone.borderColor} flex items-center justify-center text-xl z-10 relative shadow-lg`}
        >
          {milestone.icon}
          {milestone.isCurrent && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-background" />
          )}
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ originY: 0 }}
            className="w-px h-24 bg-gradient-to-b from-border to-transparent mt-2"
          />
        )}
      </div>

      {/* Desktop — Right side content */}
      <div className={`hidden md:flex flex-1 ${!isLeft ? 'justify-start' : 'justify-end'}`}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-sm"
          >
            <MilestoneCard milestone={milestone} />
          </motion.div>
        )}
      </div>

      {/* Mobile — Always right of icon */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="md:hidden flex-1 pb-10"
      >
        <MilestoneCard milestone={milestone} />
      </motion.div>
    </div>
  )
}

const MilestoneCard = ({ milestone }) => (
  <div className={`bg-gradient-to-br ${milestone.color} border ${milestone.borderColor} rounded-2xl p-5 shadow-lg`}>
    {/* Year badge */}
    <span className="font-mono text-xs text-text-muted mb-3 block">{milestone.year}</span>

    {/* Award banner */}
    {milestone.isAward && (
      <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-3 py-1.5 mb-3">
        <span className="text-sm">🏅</span>
        <div>
          <p className="text-yellow-400 text-xs font-semibold">{milestone.company}</p>
          <p className="text-yellow-300/70 text-xs">{milestone.award}</p>
        </div>
      </div>
    )}

    {/* Title */}
    <h3 className="text-text-primary font-bold text-base mb-1">{milestone.title}</h3>

    {/* Company (non-award) */}
    {!milestone.isAward && (
      <p className="text-text-muted font-mono text-xs mb-3">{milestone.company}</p>
    )}

    {/* Description */}
    <p className="text-text-secondary text-sm leading-relaxed mb-4">{milestone.description}</p>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5">
      {milestone.tags.map((tag) => (
        <span
          key={tag}
          className="font-mono text-xs px-2 py-0.5 rounded-full bg-background/60 border border-border text-text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
)

const Journey = () => {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="journey" className="section-container">
      {/* Section header */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
          // my journey
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          From Student to Engineer
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
          Not a straight line — but every step was intentional. Here's how I went from writing
          my first Java program to shipping code in a production environment at one of the
          world's largest banks.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical center line — desktop only */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-border to-transparent -translate-x-1/2" />

        <div className="flex flex-col gap-6">
          {milestones.map((milestone, index) => (
            <TimelineItem
              key={index}
              milestone={milestone}
              index={index}
              isLast={index === milestones.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journey