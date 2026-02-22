import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiEye } from 'react-icons/fi'
import SectionTitle from '../components/ui/SectionTitle'
import Badge from '../components/ui/Badge'
import useProjects from '../hooks/useProjects'

const ImageModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-surface border border-border rounded-2xl overflow-hidden max-w-3xl w-full"
        >
          <div className="flex justify-between items-center px-5 py-4 border-b border-border">
            <div>
              <h3 className="text-text-primary font-semibold">{project.title}</h3>
              <p className="text-text-muted text-xs font-mono mt-0.5">{project.tech.join(' · ')}</p>
            </div>
            <button
              onClick={onClose}
              className="text-text-muted hover:text-primary transition-colors p-1"
            >
              <FiX size={20} />
            </button>
          </div>
          <div className="p-4">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg object-cover max-h-96"
              />
            ) : (
              <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
                <p className="text-text-muted font-mono text-sm">No preview available</p>
              </div>
            )}
            <p className="text-text-secondary text-sm leading-relaxed mt-4">
              {project.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const ProjectCard = ({ project, index, onView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary font-mono font-bold text-sm">
          {String(index + 1).padStart(2, '00')}
        </div>
        <button
          onClick={() => onView(project)}
          className="text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-mono"
          aria-label="View project preview"
        >
          <FiEye size={16} />
          <span>Preview</span>
        </button>
      </div>

      <h3 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
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
}

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
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="section-container">
      <SectionTitle
        tag="projects"
        title="Things I've Built"
        subtitle="A selection of projects that demonstrate my approach to software development."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array(6).fill(0).map((_, i) => <ProjectSkeleton key={i} />)
          : projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onView={setSelectedProject}
              />
            ))
        }
      </div>

      {selectedProject && (
        <ImageModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects