import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import useSkills from '../hooks/useSkills'

const categories = ["Backend", "Frontend", "DevOps", "Database"]

const SkillBar = ({ name, level, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="space-y-2"
  >
    <div className="flex justify-between items-center">
      <span className="text-text-primary text-sm font-medium">{name}</span>
      <span className="font-mono text-primary text-xs">{level}%</span>
    </div>
    <div className="h-1.5 bg-border rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
      />
    </div>
  </motion.div>
)

const SkillSkeleton = () => (
  <div className="card animate-pulse space-y-4">
    <div className="h-3 bg-border rounded w-1/3" />
    {Array(3).fill(0).map((_, i) => (
      <div key={i} className="space-y-2">
        <div className="flex justify-between">
          <div className="h-3 bg-border rounded w-1/4" />
          <div className="h-3 bg-border rounded w-8" />
        </div>
        <div className="h-1.5 bg-border rounded-full" />
      </div>
    ))}
  </div>
)

const Skills = () => {
  const { skills, loading } = useSkills()

  return (
    <section id="skills" className="section-container">
      <SectionTitle
        tag="skills"
        title="Tech Stack"
        subtitle="Technologies I work with and the tools I use to ship production-ready software."
      />

      <div className="grid md:grid-cols-2 gap-10">
        {loading
          ? Array(4).fill(0).map((_, i) => <SkillSkeleton key={i} />)
          : categories.map((category) => {
              const categorySkills = skills.filter((s) => s.category === category)
              if (!categorySkills.length) return null

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card space-y-5"
                >
                  <h3 className="font-mono text-secondary text-sm uppercase tracking-widest">
                    // {category}
                  </h3>
                  <div className="space-y-4">
                    {categorySkills.map((skill, i) => (
                      <SkillBar key={skill.name} {...skill} index={i} />
                    ))}
                  </div>
                </motion.div>
              )
            })
        }
      </div>
    </section>
  )
}

export default Skills