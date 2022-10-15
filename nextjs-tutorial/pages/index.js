import { Head } from 'next/document';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Axios from 'axios';

export default function Home() {
  const API_URL =
    "http://makeup-api.herokuapp.com/api/vi/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then((res) => {
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
