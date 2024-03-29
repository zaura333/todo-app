export type ErrorType = '' | 'Load' | 'Title' | 'Add' | 'Delete' | 'Update';

export enum Errors {
  Load = 'Unable to load todos',
  Title = 'Title should not be empty',
  Add = 'Unable to add a todo',
  Delete = 'Unable to delete a todo',
  Update = 'Unable to update a todo',
}
