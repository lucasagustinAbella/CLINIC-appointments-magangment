import styles from "../styles/CancelButton.module.css";

import React, { useState } from 'react';


const CancelButton = ({ status, onCancel }) => {
    const handleCancel = () => {
      if (status === 'active') {
        onCancel(); 
      }
    };
  
    return (
      <button onClick={handleCancel} disabled={status === 'cancelled'} className={styles.cancelButton}>
        {status === 'cancelled' ? 'Cancelled' : 'Cancel'}
      </button>
    );
  };
  
  export default CancelButton;