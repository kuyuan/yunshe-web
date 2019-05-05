import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Badge from '../src/components/Badge';

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Badge kind='default' />
  ))
  .add('Custom label', () => (
    <Badge kind='default' label={text('label', 'Custom')} />
  ))
  .add('With onClick action', () => (
    <Badge kind='default' onClick={action('badge click')} />
  ))
  .add('With tooltip', () => (
    <Badge kind='default' tipText='Default badge XD' />
  ))
  .add('Pro', () => (
    <Badge kind='pro' />
  ))
  .add('Blocked', () => (
    <Badge kind='blocked' />
  ))
  .add('Pending', () => (
    <Badge kind='pending' />
  ))
  .add('Moderator', () => (
    <Badge kind='moderator' />
  ))
  .add('Admin', () => (
    <Badge kind='admin' />
  ))
