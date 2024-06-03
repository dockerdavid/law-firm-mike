import styles from './Services.module.css'
import { IconContainerComponent } from './icon-container.component';

type CardServiceComponentProps = {
    icon: string;
    title: string;
    description: string;
}

export const CardServiceComponent = ({ icon, title, description }: CardServiceComponentProps) => {
  return (
    <div className={styles.card}>
      <IconContainerComponent icon={icon} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
