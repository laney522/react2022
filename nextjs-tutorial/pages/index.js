
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import ItemList from '../src/component/ItemList';
import { Divider, Header } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState([]);

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* <title>HOME | Laney</title> */}
      <Divider />
      <Header as="h3" style={{ paddingTop: 20 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list} />
    </div>
  );
}
