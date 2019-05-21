import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'
import { HTMLContent } from '../src/components/Content'
import { Logo } from '../src/components/Logo'

storiesOf('Button', module)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf('Content', module).add('Content', () => <HTMLContent className="hogehoge" content={Button} />)
storiesOf('Logo', module).add('Logo', () => <Logo />)
