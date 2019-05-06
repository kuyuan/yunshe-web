import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from '../src/components/Badge';
import Tooltip from '../src/components/Tooltip';

storiesOf('Tooltip', module)
  .add('Default', () => (
    <Tooltip
      content='I AM PRO USER'
    >
      <span>
        <Badge kind='pro' />
      </span>
    </Tooltip>
  ))