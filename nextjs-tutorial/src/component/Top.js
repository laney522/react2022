import { Header } from 'semantic-ui-react'
import Gnb from './Gnb';

export default function Top() {
  return (
    <div>
      <div style={{ display:'flex', paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/laney.png"
            alt="logo"
            style={{ display: "block", width: 80 }}
          />
        </div>
          <Header as="h1">Laney</Header>
      </div>
      <Gnb />
    </div>
  );
}