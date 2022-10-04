import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div style={{ display: "flex" }}>


      <img src="/images/laney.jpg" alt="logo" />
      <Headers as="h1">Laney</Headers>
      <Gnb />
    </div>
  );
}