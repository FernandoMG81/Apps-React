import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'this is a test',
    important: true
  }

  const component = render(<Note note={note}/>)

  component.getByText('this is a test')
  component.getByText('make not important')
  
})


test('clicking the buttin calls event handler once', () => {
  const note = {
    content: 'this is a test',
    important: true
  }

  const mockHandler = jest.fn()

  const component = render(<Note note={note} toggleImportance={mockHandler} />)

  const button = component.getByText('make not important')
  fireEvent.click(button)

  expect(mockHandler).toHaveBeenCalledTimes(1)
  
})