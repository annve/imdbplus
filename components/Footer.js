import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
          <img
            src="https://a.storyblok.com/f/133261/3039x582/a60d166ec2/logo-colored-full.png/m/200x0"
            alt="IMDBPlus Logo"
            className=""
          />
        </div>
        <p>IMDB Plus is every bit as good as IMDB. Plus!</p>
        <p>Ain' it?!</p>
      </div>
    </footer>



  )
}

export default Footer
