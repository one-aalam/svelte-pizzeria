import { render } from '@testing-library/svelte'
import App from '../src/App.test.svelte'

describe('App', () => {
  test('should render greeting', () => {
    const { getByText } = render(App, { props: { name: 'world' } })

    expect(getByText('Hello world!'))
  })

//   test('should change button text after click', async () => {
//     const { getByText } = render(App, { props: { name: 'world' } })

//     fireEvent.click(getByText('Button Text'))

//     const button = await waitForElement(() => getByText('Button Clicked'))

//     expect(button).toBeInTheDocument()
//   })
})