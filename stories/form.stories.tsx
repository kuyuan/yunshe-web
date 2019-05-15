import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Input,
  PhotoInput
} from '../src/components/Form';
import { ImageInputWrapper } from '../src/components/Form/style';

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
  .add('Avatar Input', () => (
    <ImageInputWrapper>
      <PhotoInput
        type='user'
        onChange={(e) => console.log(e.target.files[0])}
      />
    </ImageInputWrapper>
  ))
  .add('Community Cover Input', () => (
    <ImageInputWrapper>
      <PhotoInput
        type='community'
        onChange={(e) => console.log(e.target.files[0])}
      />
    </ImageInputWrapper>
  ))