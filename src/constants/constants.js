const TRANSITION = {
  duration: '300ms',
  timing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  delay: '0ms',
};

const ROUTES = {
  home: '/',
  operations: 'operations',
  reports: 'reports',
};

const OPERATION_TYPES = {
  expenses: 'expenses',
  incomes: 'income',
};
export default (TRANSITION, ROUTES, OPERATION_TYPES);
