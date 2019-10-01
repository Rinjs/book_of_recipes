import c from '../../const/action-const';

export const RemoveRecipe = (id) => ({
  type: c.REMOVE_RECIPE,
  id,
});
