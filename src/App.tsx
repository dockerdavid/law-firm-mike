import {
  FooterComponent,
  LogoComponent,
  SliderComponent,
  AboutMeComponent,
  ContactComponent,
  ServicesComponent,
  UserInformationComponent,
  NavbarComponent,
} from "./components";
import styles from "./App.module.css";
import { useState } from "react";

const App = () => {
  const [restOfViewport, setRestOfViewport] = useState(0);

  const handleRestOfViewport = (value: number) => {
    setRestOfViewport((prev) => prev + value);
  };

  return (
    <div className={styles.container}>
      <UserInformationComponent handleRestOfViewport={handleRestOfViewport} />
      <LogoComponent handleRestOfViewport={handleRestOfViewport} />
      <NavbarComponent handleRestOfViewport={handleRestOfViewport} />
      <SliderComponent restOfViewport={restOfViewport} />
      <AboutMeComponent />
      <ServicesComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
