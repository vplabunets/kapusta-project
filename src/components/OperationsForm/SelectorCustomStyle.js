export const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: '275px',
    padding: 2,
    fontSize: '14px',
  }),

  control: (_, { selectProps: { width } }) => ({
    display: 'flex',
    height: '44px',
    fontSize: '12px',
    lineHeight: '14px',
    paddingLeft: '19px',
    color: '#C7CCDC',
  }),

  placeholder: defaultStyles => {
    return {
      ...defaultStyles,
      color: '#C7CCDC',
      margin: 0,
    };
  },
  indicatorSeparator: styles => ({ display: 'none' }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = '#C7CCDC';

    return { ...provided, opacity, transition, color };
  },
};
