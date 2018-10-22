import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RegisteredBoat from '../src/components/forms/RegisteredBoat';
import BigShips from '../src/components/forms/BigShips';

storiesOf('Forms', module)
  .add('RegisteredBoat', () => <RegisteredBoat onSubmit={action('Submit')} />)
  .add('BigShips', () => {
    let submit;
    return (
      <div>
        <BigShips
          onSubmit={() => {
            console.debug('onSubmit');
          }}
          getHandleSubmit={handleSubmit => {
            console.debug('getHandleSubmit');
            submit = handleSubmit;
          }}
        />
        <button
          onClick={e => {
            console.debug('onClick');
            debugger;
            if (submit) {
              console.debug('true');
              submit(e);
            }
          }}
        >
          asdas
        </button>
      </div>
    );
  });
