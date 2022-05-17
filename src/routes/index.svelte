<script>
	import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
	import { db } from '../../firebase.config.js';

	let listings = [];
	// let local = [];

	const fetchHomeSlides = async () => {
		const listingsRef = collection(db, 'listings');
		const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5));
		const querySnap = await getDocs(q);

		querySnap.forEach((doc) => {
			listings.push({
				id: doc.id,
				data: doc.data()
			});
		});
	};

	fetchHomeSlides();
</script>
