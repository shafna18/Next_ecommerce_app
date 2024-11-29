import Aboutimg from "../../../../public/images/about image.webp"
import Image from "next/image";
import styles from './About.module.css' 
const About = () => {
    return ( 
    <section className={styles.aboutus}>
      <div className={styles.about}>
        <Image src={Aboutimg} alt='' className={styles.pic} />
        <div className={styles.text}>
          <h3>About Us</h3>
          <p> Welcome to our E-Commerce platform. We offer a wide range of products to meet all your needs.
          Our mission is to provide high-quality products at competitive prices with excellent customer service.</p>
           <button className={styles.btn}>Shop Now</button>
          </div>
        </div>
    </section>
     );
}
 
export default About;
