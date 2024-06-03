import { CustomIcon } from "../custom-icon/custom-icon.component";
import styles from "./UserInformation.module.css"

type UserComponentProps = {
    text: string;
    icon: string;
}

export const UserComponent = ({ text, icon }: UserComponentProps) => {
    return (
        <div className={styles.block}>
            <CustomIcon code={icon} style={{ color: "#FFE867" }} />
            <span className={styles.text}>{text}</span>
        </div>
    )
}
