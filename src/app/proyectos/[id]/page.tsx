import { projects } from '@/data/projects'
import { ProjectDetail } from '@/components/ProjectDetail'
import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}


export function generateStaticParams() {
  return projects
    .filter((p) => !!p.detail)
    .map((p) => ({ id: p.id }))
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id)
  if (!project || !project.detail) notFound()
  return <ProjectDetail project={project} />
}
