import { PERSONAL_INFO } from '../constants'

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row
                    justify-between items-center gap-4">
      <span className="font-mono text-primary font-bold">
        ns<span className="text-secondary">.</span>dev
      </span>
      <p className="font-mono text-text-muted text-xs text-center">
        Designed & Built by{' '}
        <span className="text-text-secondary">Norman Lee Salas</span>
        {' · '}
        <span className="text-primary">salasnorman.dev</span>
      </p>
      <p className="font-mono text-text-muted text-xs">
        © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
)

export default Footer