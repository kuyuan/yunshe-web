import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';

storiesOf('Button', module)
  .add('Default', () => (
    <Button kind='default'>Default</Button>
  ))
  .add('Primary', () => (
    <Button kind='primary'>Primary</Button>
  ))
  .add('Warning', () => (
    <Button kind='warning'>Warning</Button>
  ))
  .add('Outline', () => (
    <Button kind='outline'>Outline</Button>
  ))
  .add('Warn Outline', () => (
    <Button kind='warn-outline'>Warn Outline</Button>
  ))
  .add('Primary Outline', () => (
    <Button kind='primary-outline'>Primary Outline</Button>
  ))
  .add('Light Outline', () => (
    <Button kind='light-outline'>Light Outline</Button>
  ))
  .add('Text', () => (
    <Button kind='text'>Text Button</Button>
  ))
  .add('Hyper Link Button', () => (
    <Button kind='default' href='http://www.google.com'>Google</Button>
  ))
