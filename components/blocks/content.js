import Link from "next/link";
import Image from 'next/image';
import logo from "../../assets/image/logo2.png";
import styles from  "../../assets/styles/content.module.scss";
import Main2Block from "./main2";

export default function Content(props) {
	const {scroll} = {...props};
	return (
		<div id='contents'>
			<div className={scroll ? `${styles.change_nav_wrap} ${styles.fixed}`  : styles.change_nav_wrap}>
				<div className={styles.change_nav_wrap__inner}>
					<h2 className={styles.logo}>
						<Link href="/" passHref>
							<a>
								<Image
									src={logo}
									alt="React Business Template with Next Js"
									layout="raw"
								/>
							</a>
						</Link>
						</h2>
					<nav className={styles.change_nav}>
						<ul>
							<li>
								<Link href="/" passHref>
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href="/" passHref>
									<a>About</a>
								</Link>
							</li>
							<li>
								<Link href="/" passHref>
									<a>Projecst</a>
								</Link>
							</li>
							<li>
								<Link href="/" passHref>
									<a>Posts</a>
								</Link>
							</li>
							<li>
								<Link href="/" passHref>
									<a>Contact</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className={scroll ? `${styles.change_nav_wrap_sp} ${styles.fixed}` : styles.change_nav_wrap_sp}>
				<h1 className={styles.logo}>
					<Link href="/" passHref>
						<a>
							<Image
								src={logo}
								alt="React Business Template with Next Js"
								layout="raw"
							/>
						</a>
					</Link>
				</h1>
			</div>
			<Main2Block />
		</div>
	)
}
