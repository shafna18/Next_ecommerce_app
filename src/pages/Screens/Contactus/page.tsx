import styles from "./Contact.module.css"
const Contact = () => {
    return ( 
       <div>
    <div className={styles.contact}>
        <ul className={styles.ul}>
            <h3 className={styles.heading}>SOCIAL MEDIA</h3>
            <li className={styles.info}>Whatsapp:+1 (555) 123-4567</li>
            <li className={styles.info}>Facebook:amazon123</li>
            <li className={styles.info}>Facebook:amazon123</li>
            <li className={styles.info}>Instagram:_amazon_</li>
            <li className={styles.info}>Twitter:amazon</li>

        </ul>
    </div>
        <div className={styles.formlabel}>
          <input className={styles.input} name="Name" placeholder="Name"/>
          <input className={styles.input} name="Email" placeholder="Email"/>
          <textarea className={styles.textinput} placeholder="Message"></textarea>
          <button className={styles.button}>
            Send
          </button>
        </div>
        </div>
     );
}
 
export default Contact;