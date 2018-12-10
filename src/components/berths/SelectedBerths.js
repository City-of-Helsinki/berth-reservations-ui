import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Alert, Container, Button } from 'reactstrap';
import styled from 'styled-components';
import SelectedBerth from './SelectedBerth';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em;
`;

const SelectedBerths = ({
  berths,
  moveUp,
  moveDown,
  progress,
  deselectBerth,
  selectedServices
}) => {
  const requiredServices = Array.from(selectedServices.entries())
    .filter(([, value]) => value)
    .map(([key]) => key);

  return (
    <Container>
      <FormattedMessage tagName="h1" id="page.berth.selected.title" />
      <FormattedMessage tagName="p" id="page.berth.selected.paragraph.first" />
      <FormattedMessage tagName="p" id="page.berth.selected.paragraph.second" />
      <hr />
      <FormattedMessage tagName="span" id="page.berth.selected.info_text" />
      <hr />

      {berths.size > 0 ? (
        <div>
          {berths.map((berth, index) => (
            <SelectedBerth
              index={index}
              first={index === 0}
              last={index === berths.size - 1}
              key={berth.identifier}
              berth={berth}
              moveUp={moveUp}
              moveDown={moveDown}
              deselectBerth={deselectBerth}
              missingServices={requiredServices.reduce((acc, service) => {
                if (!berth[service]) {
                  acc.push(service);
                }
                return acc;
              }, [])}
            />
          ))}
        </div>
      ) : (
        <Alert color="danger">
          <FormattedMessage tagName="strong" id="page.berth.selected.alert.strong" />
          <FormattedMessage tagName="h1" id="page.berth.selected.alert.paragraph" />
        </Alert>
      )}
      <ButtonWrapper>
        <Button onClick={progress} outline color="primary" size="lg" disabled={berths.size === 0}>
          <FormattedMessage tagName="span" id="page.berth.selected.submit" />
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default SelectedBerths;
