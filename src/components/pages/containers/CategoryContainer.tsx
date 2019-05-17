import React, { SFC } from 'react';
import { Route } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { CategoryOptions } from '../../../types/categoryType';
import SelectedBerthPage from '../BerthPage/SelectedBerthPage/SelectedBerthPage';
import BerthPageContainer from './BerthPageContainer';
import FormPageContainer from './FormPageContainer';
import WinterBerthPageContainer from './WinterBerthPageContainer';
import WinterFormPageContainer from './WinterFormPageContainer';

const CategoryContainer: SFC<RouteComponentProps<{ category: CategoryOptions }>> = ({
  match: {
    params: { category }
  }
}) => {
  return (
    <div className="vene-category-container">
      {!category ||
        (category === CategoryOptions.BERTHS && (
          <>
            <Route path="/" component={BerthPageContainer} />
            <Route exact path={`/selected`} component={SelectedBerthPage} />
            <Route exact path={`/form`} component={FormPageContainer} />
            <Route exact path={`/form/:tab`} component={FormPageContainer} />
          </>
        ))}
      {category === CategoryOptions.WINTER_STORAGE && (
        <>
          <Route path="/" component={WinterBerthPageContainer} />
          <Route exact path={`/form`} component={WinterFormPageContainer} />
          <Route exact path={`/form/:tab`} component={WinterFormPageContainer} />
        </>
      )}
    </div>
  );
};

export default CategoryContainer;
