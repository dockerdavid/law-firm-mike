import { CustomIcon } from '../custom-icon/custom-icon.component';
import styles from './Services.module.css'

type IconContainerComponentProps = {
    icon: string;
}

export const IconContainerComponent = ({ icon }: IconContainerComponentProps) => {
  return (
    <div className={styles.iconContainer}>
      <CustomIcon code={icon} style={{color: 'white'}} />
    </div>
  )
}
