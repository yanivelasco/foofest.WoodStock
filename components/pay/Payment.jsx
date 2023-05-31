import React from 'react';
import styles from './PaymentDetails.module.css';
import Link from 'next/link';

const PaymentDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Billing Information</h2>
        <form>
          <label htmlFor="nameOnCard">Name on Card:</label>
          <input type="text" id="nameOnCard" name="nameOnCard" required />

          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" required />

          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" required />

          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />

         <Link href='./thanks.js'>  <button type="submit">Pay</button></Link>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;