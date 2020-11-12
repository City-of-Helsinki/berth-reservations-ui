import { screen, within } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

export const selectAreasSelectors = {
  boatWidth: screen.getByRole('textbox', { name: /veneen leveys, m/i }),
  boatLength: screen.getByRole('textbox', { name: /veneen pituus, m/i }),
  boatStoredOnTrailer: screen.getByRole('checkbox', { name: /vene säilytetään trailerilla/i }),
  electricity: screen.getByRole('button', { name: /sähkö/i }),
  harborListTab: screen.getByRole('tab', { name: /lista/i }),
  nextButton: screen.getByRole('button', { name: /seuraava/i }),
  getSelectButtonForArea: (name: string) => {
    const re = new RegExp(name, 'i');
    const heading = screen.getByRole('heading', { name: re });
    return within(heading.parent(0)).getByRole('button', {
      name: /lisää valittuihin/i,
    });
  },
};

export const winterStorageSelectors = {
  title: Selector('h1[class="vene-hero__title"]'),
};
