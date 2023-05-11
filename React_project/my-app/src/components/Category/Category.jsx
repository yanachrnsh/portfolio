import classnames from 'classnames';
import '../../_btn.module.scss';
import styles from './Category.module.scss';
import { Link } from 'react-router-dom';

const Category = ({ categories }) => {
	const { img, title } = categories;
	return (
		<div className={styles.Category__item}>
			<img src={img} alt={title} />
			<div className={styles.Category__overlay}>
				<Link to="/" className={classnames('Btn', 'BtnDark')}>
					{title}
				</Link>
			</div>
		</div>
	);
};

export default Category;
