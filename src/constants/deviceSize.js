const size = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1280px',
};
const device = {
  mobile: `screen and (min-width: ${size.mobile})`,
  tablet: `screen and (min-width: ${size.tablet})`,
  laptop: `screen and (min-width: ${size.laptop})`,
};
export default device;
