import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../src/components/Icon';

storiesOf('Icon', module)
  .add('checkbox', () => (
    <Icon glyph='checkbox' />
  ))
  .add('checkmark', () => (
    <Icon glyph='checkmark' />
  ))
  .add('photo', () => (
    <Icon glyph='photo' />
  ))