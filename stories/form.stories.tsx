import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Input
} from '../src/components/Form';

storiesOf('Form', module)
  .add('Basic Input', () => (
    <Input
      placeholder="bran"
    >
      Username
    </Input>
  ))
  .add('Disabled Input', () => (
    <Input
      disabled
    />
  ))