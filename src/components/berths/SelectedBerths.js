import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Alert, Button, Container } from 'reactstrap';
import SelectedBerth from './SelectedBerth';

const SelectedBerths = ({ berths, intl: { formatMessage } }) => (
  <Container>
    <FormattedMessage tagName="h1" id="page.berth.selected.title" />
    <FormattedMessage tagName="p" id="page.berth.selected.paragraph.first" />
    <FormattedMessage tagName="p" id="page.berth.selected.paragraph.second" />
    <hr />
    <FormattedMessage tagName="span" id="page.berth.selected.info_text" />
    <hr />

    {berths.size > 0 ? (
      <div>{berths.map(SelectedBerth)}</div>
    ) : (
      <Alert color="danger">
        <FormattedMessage tagName="strong" id="page.berth.selected.alert.strong" />
        <FormattedMessage tagName="h1" id="page.berth.selected.alert.paragraph" />
      </Alert>
    )}
    <Button>{formatMessage({ id: 'page.berth.selected.submit' })}</Button>
  </Container>
);

export default injectIntl(SelectedBerths);
