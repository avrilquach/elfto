import Link from "next/link";
import Image from 'next/image';
import logo from '../../assets/image/logo.png';
import copy from '../../assets/image/copy.png';
import styles from  "../../assets/styles/header.module.scss";

export default function Header(props) {
	const video = '../video.mp4';
	const {scroll} = {...props}
	return (
		<header id={styles.globalHeader}>
			<div id={styles.videoArea}>
				<video id={styles.video} loop muted autoPlay controls src={video} />
			</div>
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
			<nav className={scroll ? `${styles.gnav} ${styles.hide}`  : styles.gnav}>
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
			<div className={styles.sp_menu}>
				<div className={styles.openbtn}>
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
					<span></span><span></span>
					<p className={styles.menu}>menu</p>
					<p className={styles.close}>close</p>
				</div>
				<nav id={styles.s_nav}>
					<div id={styles.s_nav_list}>
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
					</div>
				</nav>
			</div>
			<div className={styles.copy}>
				<Image
					src={copy}
					alt=""
					layout="raw"
				/>
			</div>
			<div className={styles.scrolldown_wrap}>
				<div className={styles.scrolldown_base}>
					<div className={styles.scrolldown1}></div>
				</div>
			</div>
		</header>
	)
}
