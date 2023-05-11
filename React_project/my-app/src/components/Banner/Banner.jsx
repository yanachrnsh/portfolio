import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Title from '../Title/Title';
import picture from '../../img/image-home-07.jpg';
import styles from './Banner.module.scss';
import '../../_btn.module.scss';
import styleContainer from '../../_main.module.scss';

const Banner = () => {
	return (
		<section className={styles.Banner}>
			<div className={styleContainer.Container}>
				<div className={styles.Banner__wrapper}>
					<img src={picture} alt="banner" />
					<div className={styles.Banner__overlay}>
						<div>
							<Title className={styles.Banner__title}>Waffle Hooded Coat</Title>
							<Link
								to="/"
								className={classnames('Btn', 'BtnDark')}
								// className={`${btnStyles.Btn} ${btnStyles.Btn__BtnDark}`}
							>
								Shop Now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
