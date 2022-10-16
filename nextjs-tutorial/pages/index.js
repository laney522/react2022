import { Head } from 'next/document';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Home() {
  const API_URL =
    "/api/vi/products.json?brand=maybelline";

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* <Head>
        <title>HOME | Laney</title>
      </Head> */}
    </div>
  );
}
