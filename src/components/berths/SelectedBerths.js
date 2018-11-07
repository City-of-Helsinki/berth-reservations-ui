import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Alert, Container, Button } from 'reactstrap';
import SelectedBerth from './SelectedBerth';

const SelectedBerths = ({ berths, moveUp, moveDown }) => (
  <Container>
    <FormattedMessage tagName="h1" id="page.berth.selected.title" />
    <FormattedMessage tagName="p" id="page.berth.selected.paragraph.first" />
    <FormattedMessage tagName="p" id="page.berth.selected.paragraph.second" />
    <hr />
    <FormattedMessage tagName="span" id="page.berth.selected.info_text" />
    <hr />

    {berths.size > 0 ? (
      <div>
        {berths.map(berth => (
          <SelectedBerth key={berth.identifier} berth={berth} moveUp={moveUp} moveDown={moveDown} />
        ))}
      </div>
    ) : (
      <Alert color="danger">
        <FormattedMessage tagName="strong" id="page.berth.selected.alert.strong" />
        <FormattedMessage tagName="h1" id="page.berth.selected.alert.paragraph" />
      </Alert>
    )}
    <Button type="submit">
      <FormattedMessage tagName="span" id="page.berth.selected.submit" />
    </Button>
  </Container>
);

export default SelectedBerths;
