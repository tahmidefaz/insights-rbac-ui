import moment from 'moment';

export const scrollToTop = () => document.getElementById('root').scrollTo({
  behavior: 'smooth',
  top: 0,
  left: 0
});

export const getCurrentPage = (limit = 1, offset = 0) => Math.floor(offset / limit) + 1;

export const getNewPage = (page = 1, offset) => (page - 1) * offset;

export const mappedProps = (apiProps) => Object.entries(apiProps).reduce((acc, [ key, value ]) => ({
  ...acc,
  ...value && { [key]: value }
}), {});
