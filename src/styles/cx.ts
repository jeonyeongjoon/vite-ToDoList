import classNames from 'classnames';

export default function bind(...styles: Parameters<typeof classNames>) {
  return classNames.bind(styles);
}
