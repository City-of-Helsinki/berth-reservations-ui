import React from 'react';
import { action } from '@storybook/addon-actions';
import { Container } from 'reactstrap';
import StoryRouter from 'storybook-react-router';

import Form from '../src/components/forms/Form';

export const form = storyFn => (
  <Container fluid>
    <Form onSubmit={action('onSubmit')}>{() => storyFn()}</Form>
  </Container>
);
export const container = storyFn => <Container fluid>{() => storyFn()}</Container>;
export const router = StoryRouter();
