import { Button } from 'react-bootstrap';
import styles from './BigClickableButton.module.css';

const BigClickableButton = ({ children, ...props }) => (
  <div className={styles.container}>
    <Button {...props} size="lg" className={styles.button}>
      {children}
    </Button>
  </div>
);

export default BigClickableButton;
