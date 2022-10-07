import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div style={{ display: "flex", paddingTop: 20 }}>
      <div style={{ flex: "100px 0 0" }}>
        <img
          src="/images/laney.jpg"
          alt="logo"
          style={{ display: "block", width: 80 }}
        />
      </div>
      <img src="/images/laney.jpg" alt="logo" />
      <Header as="h1">Laney</Header>
      <Gnb />
    </div>
  );
}