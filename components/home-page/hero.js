import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/rrez.png'
          alt='An image of Max'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Rrez</h1>
      <p>
        I blog about web development - especially front and backend frameworks
        like Next and .NET
      </p>
    </section>
  );
}

export default Hero;
