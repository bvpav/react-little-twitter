import styles from './CenterPage.module.css';

const CenterPage = ({ children }) => {
  return <main className={styles.center}>{children}</main>;
};

export default CenterPage;
