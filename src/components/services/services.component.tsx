import styles from './Services.module.css'
import { CardServiceComponent } from './card-service.component'

const ServicesComponent = () => {
  return (
    <div className={styles.container} id='our-services'>
      <div className={styles.backgroundContainer}>
        <img className={styles.imgContainer} src='/background.jpg' alt='background' />
      </div>
      <div className={styles.descriptionContainer}>
        <h4 className={styles.title}>Legal Practive</h4>
        <h2 className={styles.description}>Our Lawyer Has Been A Good Friend of Mine For A Long Time.</h2>
      </div>
      <div className={styles.cardsContainer}>
        <CardServiceComponent icon='e0af' title='Real State Law' description='Legal services for property transactions, disputes, and real estate investments.' />
        <CardServiceComponent icon='e9d4' title='Criminal Lawyer' description='Defense against criminal charges, ensuring fair trial and representation.' />
        <CardServiceComponent icon='e589' title='Domestic Violence' description='Legal support and representation for domestic abuse victims.' />
        <CardServiceComponent icon='e84f' title='Financial Settlements' description='Assistance with financial disputes, settlements, and agreements.' />
        <CardServiceComponent icon='e90e' title='Digital Media Law' description='Legal guidance for digital media, copyright, and online content.' />
        <CardServiceComponent icon='f8d9' title='Family Crime Law' description='Legal services for crimes involving family members and domestic relations.' />
      </div>
    </div>
  )
}

export default ServicesComponent