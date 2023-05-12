import classnames from 'classnames';
import Title from '../Title/Title';
import picture from '../../img/image-home-07.jpg';
import styles from './Banner.module.scss';
import '../../_btn.module.scss';
import styleContainer from '../../_main.module.scss';


const Banner = ({ handleClick }) => {
	return (
		<section className={styles.Banner}>
			<div className={styleContainer.Container}>
				<div className={styles.Banner__wrapper}>
					<img src={picture} alt="banner" />
					<div className={styles.Banner__overlay}>
						<div>
							<Title className={styles.Banner__title}>Waffle Hooded Coat</Title>
							{/* <Link to="/" className={classnames('Btn', 'BtnDark')}>
								Shop Now
							</Link> */}
							<button
								className={classnames('Btn', 'BtnDark')}
								onClick={handleClick}
							>
								Shop Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
