import 'firebase/firestore';
import firebase from './firebase';

const db = firebase.firestore();

const apiAllData = (collection) => db.collection(collection).get();

export const getAllData = async (collection) => {
	let arrayData = [];
	const querySnapshot = await apiAllData(collection);
	querySnapshot.forEach(document => arrayData.push(document.data()));
	return arrayData;
};
