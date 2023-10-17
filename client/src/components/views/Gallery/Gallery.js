import { Button, Col, Row } from 'react-bootstrap';
import styles from './Gallery.module.scss';

const Gallery = () => {
	return (
		<div className="my-5">
			<Row>
				<Col className={`${styles.photo} mt-2`} align="center">
					<img src="/uploads/gallery/gallery-1.jpg" alt="photo" />
				</Col>
				<Col className={`${styles.photo} mt-2`} align="center">
					<img src="/uploads/gallery/gallery-2.jpg" alt="photo" />
				</Col>
				<Col className={`${styles.photo} mt-2`} align="center">
					<img src="/uploads/gallery/gallery-3.jpg" alt="photo" />
				</Col>
			</Row>
			<div align="center" className='mt-3'>
				<Button variant="dark">Show more</Button>
			</div>
		</div>
	);
};

export default Gallery;