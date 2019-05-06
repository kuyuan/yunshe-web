import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../src/components/Card';

const avatarImg = require('../support/assets/avatar.jpg');

storiesOf('Card', module)
  .add('Default', () => (
    <Card style={{width: '350px'}}>
      <img src={avatarImg} alt='avatar' />
    </Card>
  ))
