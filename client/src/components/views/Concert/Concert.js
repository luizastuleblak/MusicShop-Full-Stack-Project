import styles from './Concert.module.scss';

const Concert = () => {
	return (
		<div className={`${styles.concert} mt-4`}>
			<img src="/uploads/Concert/Concert.jpg" alt="concert" />
		</div>
	);
};

export default Concert;