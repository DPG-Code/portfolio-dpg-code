import { fireEvent,render,screen } from "@testing-library/react"

import ProjectsCard from "../ProjectsCard"
import { works } from "../../consts"

describe('ProjectsCard Component - First Item Rendering',() => {
  beforeEach(() => {
    render(
      <ProjectsCard />
    )
  })

  test('Should render title in uppercase',() => {
    const firstItem = works[0]
    expect(screen.getByText(firstItem.title.toUpperCase())).toBeDefined()
  })

  test('Should render description',() => {
    const firstItem = works[0]
    expect(screen.getByText(firstItem.description)).toBeDefined()
  })

  test('Should render technologies',() => {
    const firstItem = works[0]
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
    const firstItem = works[0]
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

  test('Should the previous button be clicked render the previous item',() => {
    const prevButton = screen.getByTestId('prev-project')
    fireEvent.click(prevButton)

    const previousItem = works[works.length - 1]
    const IndexOfPreviousItem = works.indexOf(previousItem) + 1
    const imageOfPreviousItem = screen.getByAltText(previousItem.title)

    expect(screen.getAllByText(previousItem.title.toUpperCase())).toBeDefined()
    expect(screen.getAllByText(previousItem.description)).toBeDefined()
    expect(screen.getAllByText(`0${IndexOfPreviousItem}`)).toBeDefined()
    expect(imageOfPreviousItem).toBeDefined()
  })

  test('Should the next button be clicked render the next item',() => {
    const nextButton = screen.getByTestId('next-project')
    fireEvent.click(nextButton)

    const nextItem = works[1]
    const IndexOfNextItem = works.indexOf(nextItem) + 1
    const imageOfNextItem = screen.getByAltText(nextItem.title)

    expect(screen.getAllByText(nextItem.title.toUpperCase())).toBeDefined()
    expect(screen.getAllByText(nextItem.description)).toBeDefined()
    expect(screen.getAllByText(`0${IndexOfNextItem}`)).toBeDefined()
    expect(imageOfNextItem).toBeDefined()
  })
})