import React from 'react';
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.main}>
      <h1>
        <span>&#x1F629;</span>
        <br/>
        Not Found !!!
      </h1>
      <p className={styles.description}> This page doesn't exist</p>
    </div>

  );
};

export default NotFoundBlock;
