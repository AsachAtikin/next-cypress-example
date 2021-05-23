import get from 'lodash/get';

export const theme = (path) => (props) => get(props.theme, path);
