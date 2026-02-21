import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import { SKILLS } from '../constants'

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
        transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
      />
    </div>
  </motion.div>
)

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <SectionTitle
        tag="skills"
        title="Tech Stack"
        subtitle="Technologies I work with and the tools I use to ship production-ready software."
      />

      <div className="grid md:grid-cols-2 gap-10">
        {categories.map((category) => {
          const categorySkills = SKILLS.filter((s) => s.category === category)
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
        })}
      </div>
    </section>
  )
}

export default Skills