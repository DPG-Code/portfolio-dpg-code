import { fireEvent,render,screen } from "@testing-library/react"

import ProjectsCard from "@/components/ProjectsCard.astro"
import { mainProject } from "@/consts.ts"

describe('ProjectsCard Component - First Item Rendering',() => {
  beforeEach(() => {
    render(
      <ProjectsCard />
    )
  })

  test('Should render title in uppercase',() => {
    const firstItem = mainProject
    expect(screen.getByText(firstItem.title.toUpperCase())).toBeDefined()
  })

  test('Should render description',() => {
    const firstItem = mainProject
    expect(screen.getByText(firstItem.description)).toBeDefined()
  })

  test('Should render technologies',() => {
    const firstItem = mainProject
    const technologies = firstItem.technologies.join(' ')
    expect(screen.queryByText(technologies)).toBeDefined()
  })

  test('Should render button "OPEN PROJECT" text',() => {
    expect(screen.getByText('OPEN PROJECT')).toBeDefined()
  })

  test('Should render item number',() => {
    expect(screen.getByText('01')).toBeDefined()
  })

  test('Should render the image',() => {
    const firstItem = mainProject
    const image = screen.getByAltText(firstItem.title)
    expect(image).toBeDefined()
  })
})

describe('WorksCard Component - Functionality',() => {
  beforeEach(() => {
    render(
      <ProjectsCard />
    )
  })
  test('Should open project link in new tab when "OPEN PROJECT" button is clicked',() => {
    const firstItem = mainProject
    const openProjectButton = screen.getByText('OPEN PROJECT')
    fireEvent.click(openProjectButton)
    expect(window.open).toHaveBeenCalledWith(firstItem.url,'_blank')
  })
})