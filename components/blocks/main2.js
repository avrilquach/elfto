import styles from  "../../assets/styles/main2.module.scss";
import Link from "next/link";
import Image from 'next/image';
import arrow from "../../assets/image/arrow01.svg";
import wave1 from "../../assets/image/img1.jpg";
import wave2 from "../../assets/image/img2.png";
export default function Main2() {
	return (
		<div id={styles.main2}>
			<section className={styles.top01}>
				<div className={styles.img01_sp}>
				</div>
				<div className={styles.left}>
					<h3 className={styles.title_en}>ABOUT</h3>
					<p>Founded by Robert Downey Jr in 2004,<br/>
						we’re an employee-owned firm pursuing a democratic <br/>
						design process that values everyone’s input. <br/>
						Today we have more than 150 people in London, <br/>
						Hong Kong and Sydney providing architecture,<br/>
						interior & urban design services from concept to completion.</p>
					<div className={styles.readmore_btn}>
						<Link href="/about" passHref>
							<a>
								<div className={styles.btn}></div>
								<Image
									src={arrow}
									alt=""
									layout="raw"
								/>
								<p>Read More</p>
							</a>
						</Link>
					</div>
				</div>
				<div className={styles.right}>
					<Image id="img_wave_top-1" width={489} height={651} src={wave1} layout="raw"/>
					<Image id="img_wave_top-2" width={250} height={353} src={wave2} layout="raw"/>
				</div>
			</section>
		</div>
	)
}
