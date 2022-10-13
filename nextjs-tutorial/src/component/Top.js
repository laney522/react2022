import { Header } from 'semantic-ui-react'
import Gnb from './Gnb';

export default function Top() {
  return (
    <div>
      <img src="/images/laney.png" alt="logo" />
      <Header as="h1">Laney</Header>
      <Gnb />
    </div>
  );
}