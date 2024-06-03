import { useEffect, useRef } from "react";
import { UserComponent } from "./user.component";

import styles from "./UserInformation.module.css";

type UserInformationComponentProps = {
  handleRestOfViewport: (value: number) => void;
};

const UserInformationComponent = ({ handleRestOfViewport }: UserInformationComponentProps) => {
  const userInformationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleRestOfViewport(userInformationRef.current?.clientHeight || 0);
  }, []);

  return (
    <div className={styles.container} ref={userInformationRef} id="user-information">
      <UserComponent icon="e32c" text="Contact us: +1 (716) 390 5287" />
      <UserComponent icon="e0be" text="Email: miketoole@mtjrlaw.com" />
    </div>
  );
};

export default UserInformationComponent;
