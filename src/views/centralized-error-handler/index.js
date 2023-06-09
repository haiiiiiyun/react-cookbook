import { RecipeContainer } from '../../components/recipe-container';

export const CentralizedErrorHandler = () => {
  const dependencies = [
    {
      text: 'mui',
      link: 'https://mui.com/material-ui/'
    }
  ];
  const links = [{ text: 'Clock in', link: 'clock-in' }];

  return (
    <RecipeContainer
      title="Build a centralized error handler"
      description="catch any errors for which we have not previously planned"
      dependencies={dependencies}
      links={links}
    />
  );
};
