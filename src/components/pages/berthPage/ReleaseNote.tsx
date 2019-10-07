import React from 'react';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import './releaseNote.scss';

const ReleaseNote = () => (
  <Container>
    <Row>
      <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
        <div className="vene-release-note">
          <FormattedMessage id="page.winter_storage.release_note.title" tagName="h3" />
          <FormattedHTMLMessage id="page.winter_storage.release_note.description" />
          <FormattedMessage id="page.winter_storage.release_note.list_title" tagName="strong" />
          <ol className="vene-release-note__list">
            <li className="vene-release-note__list-item">
              <FormattedMessage id="page.winter_storage.release_note.list_item.one" />
            </li>
            <li className="vene-release-note__list-item">
              <FormattedMessage id="page.winter_storage.release_note.list_item.two" />
            </li>
            <li className="vene-release-note__list-item">
              <FormattedMessage id="page.winter_storage.release_note.list_item.three" />
            </li>
          </ol>
        </div>
      </Col>
    </Row>
  </Container>
);

export default ReleaseNote;
