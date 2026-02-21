import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionTitle from '../components/ui/SectionTitle'
import Badge from '../components/ui/Badge'
import useProjects from '../hooks/useProjects'

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="card group flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg
                      flex items-center justify-center text-primary font-mono font-bold text-sm">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="flex gap-3">
        {project.github && (

            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-primary transition-colors"
            aria-label="GitHub repository"
          >
            <FiGithub size={18} />
          </a>
        )}
        {project.live && (

            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-secondary transition-colors"
            aria-label="Live demo"
          >
            <FiExternalLink size={18} />
          </a>
        )}
      </div>
    </div>

    <h3 className="text-text-primary font-semibold text-lg mb-2
                   group-hover:text-primary transition-colors">
      {project.title}
    </h3>
    <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.tech.map((t) => (
        <Badge key={t}>{t}</Badge>
      ))}
    </div>
  </motion.div>
)

// ─── LOADING SKELETON ─────────────────────────────────────────
const ProjectSkeleton = () => (
  <div className="card animate-pulse">
    <div className="w-10 h-10 bg-border rounded-lg mb-4" />
    <div className="h-4 bg-border rounded w-2/3 mb-3" />
    <div className="h-3 bg-border rounded w-full mb-2" />
    <div className="h-3 bg-border rounded w-4/5 mb-4" />
    <div className="flex gap-2">
      <div className="h-6 w-16 bg-border rounded-full" />
      <div className="h-6 w-16 bg-border rounded-full" />
    </div>
  </div>
)

const Projects = () => {
  const { projects, loading } = useProjects()

  return (
    <section id="projects" className="section-container">
      <SectionTitle
        tag="projects"
        title="Things I've Built"
        subtitle="A selection of projects that demonstrate my approach to software development."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {loading
          ? Array(4).fill(0).map((_, i) => <ProjectSkeleton key={i} />)
          : projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
        }
      </div>
    </section>
  )
}

export default Projects