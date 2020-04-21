import { render } from '@testing-library/svelte'

import App from '../src/app.svelte'

test('shows proper heading when rendered', () => {
  const { getByText } = render(App, { name: 'World' })

  expect(getByText('World')).toBeInTheDocument()
})
