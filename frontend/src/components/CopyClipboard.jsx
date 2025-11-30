import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCopy } from 'react-icons/fi'; // Importing a copy icon from react-icons
import styles from '../styles/CopyClipboard.module.css';

const CopyClipboard = () => {
  const username = 'sai';  // Hardcoded username
  const password = 'sai1234';  // Hardcoded password
  const [copiedField, setCopiedField] = useState(null); // To track which field was copied

  const handleCopy = (field) => {
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000); // Reset after 2 seconds
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label>Username:</label>
        <div className={styles.copyWrapper}>
          <input 
            type="text" 
            value={username} 
            readOnly 
          />
          <CopyToClipboard text={username} onCopy={() => handleCopy('username')}>
            <FiCopy className={styles.copyIcon} />
          </CopyToClipboard>
        </div>
        {copiedField === 'username' && <p className={styles.copiedMessage}>Username copied!</p>}
      </div>

      <div className={styles.inputContainer}>
        <label>Password:</label>
        <div className={styles.copyWrapper}>
          <input 
            type="text" 
            value={password} 
            readOnly 
          />
          <CopyToClipboard text={password} onCopy={() => handleCopy('password')}>
            <FiCopy className={styles.copyIcon} />
          </CopyToClipboard>
        </div>
        {copiedField === 'password' && <p className={styles.copiedMessage}>Password copied!</p>}
      </div>
    </div>
  );
};

export default CopyClipboard;
