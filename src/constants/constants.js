const transition = {
  duration: '300ms',
  timing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  delay: '0ms',
};

const routes = {
  home: '/',
  operations: 'operations',
  reports: 'reports',
};

const operationTypes = {
  expenses: 'expenses',
  incomes: 'incomes',
};
export default (transition, routes, operationTypes);
