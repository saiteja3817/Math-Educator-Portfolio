import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCopy } from 'react-icons/fi'; // Importing a copy icon from react-icons
import styles from '../styles/CopyClipboardD.module.css';

const CopyClipboardD = () => {
  const user40 = {
    email: 'memoriestest40@gmail.com',
    password: '123',
  };

  const user678 = {
    email: 'memoriestest678@gmail.com',
    password: '123456',
  };

  // Separate states for each user's copied fields
  const [copiedField40, setCopiedField40] = useState(null);
  const [copiedField678, setCopiedField678] = useState(null);

  const handleCopy = (field, user) => {
    if (user === 'user40') {
      setCopiedField40(field);
      setTimeout(() => {
        setCopiedField40(null);
      }, 2000); // Reset after 2 seconds
    } else if (user === 'user678') {
      setCopiedField678(field);
      setTimeout(() => {
        setCopiedField678(null);
      }, 2000); // Reset after 2 seconds
    }
  };

  return (
    <div className={styles.container}>
      {/* User40 */}
      <span className={styles.users}>user40:</span>
      <div className={styles.inputContainer}>
        <label>Email:</label>
        <div className={styles.copyWrapper}>
          <input 
            type="text" 
            value={user40.email} 
            readOnly 
          />
          <CopyToClipboard text={user40.email} onCopy={() => handleCopy('email', 'user40')}>
            <FiCopy className={styles.copyIcon} />
          </CopyToClipboard>
        </div>
        {copiedField40 === 'email' && <p className={styles.copiedMessage}>Email copied!</p>}
      </div>

      <div className={styles.inputContainer}>
        <label>Password:</label>
        <div className={styles.copyWrapper}>
          <input 
            type="text" 
            value={user40.password} 
            readOnly 
          />
          <CopyToClipboard text={user40.password} onCopy={() => handleCopy('password', 'user40')}>
            <FiCopy className={styles.copyIcon} />
          </CopyToClipboard>
        </div>
        {copiedField40 === 'password' && <p className={styles.copiedMessage}>Password copied!</p>}
      </div>

      {/* User678 */}
      <span className={styles.users}>user678:</span>
      <div className={styles.inputContainer}>
        <label>Email:</label>
        <div className={styles.copyWrapper}>
          <input 
            type="text" 
            value={user678.email} 
            readOnly 
          />
          <CopyToClipboard text={user678.email} onCopy={() => handleCopy('email', 'user678')}>
            <FiCopy className={styles.copyIcon} />
          </CopyToClipboard>
        </div>
        {copiedField678 === 'email' && <p className={styles.copiedMessage}>Email copied!</p>}
      </div>

      <div className={styles.inputContainer}>
        <label>Password:</label>
        <div className={styles.copyWrapper}>
          <input 
            type="text" 
            value={user678.password} 
            readOnly 
          />
          <CopyToClipboard text={user678.password} onCopy={() => handleCopy('password', 'user678')}>
            <FiCopy className={styles.copyIcon} />
          </CopyToClipboard>
        </div>
        {copiedField678 === 'password' && <p className={styles.copiedMessage}>Password copied!</p>}
      </div>
    </div>
  );
};

export default CopyClipboardD;
