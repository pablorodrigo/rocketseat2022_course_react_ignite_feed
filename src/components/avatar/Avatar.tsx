import styles from './Avatar.module.css';

interface IProps {
  hasBorder?: boolean;
  src: string;
}

export function Avatar({ hasBorder = true, src }: IProps) {
  return <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt='' />;
}
