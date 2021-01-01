import { GetObjectsDOM } from "../../global/utils/utils";
import { getAllData } from "../firebase/firestore";
import Data from './data';

((GetObjectsDOM, getAllData, Data) => {
	const collectionName = 'profile';

	const ObjectsDOM = ObjectsDOM || {};
	const IdObjectsDOM = {
		ContainerProfile: 'profile_container',
	};
	GetObjectsDOM(IdObjectsDOM, ObjectsDOM);

	const getHTML = (data) => `<p tabindex="0">${data.paragraph}</p>`;

	const DataProfile = new Data(getAllData, collectionName);
	DataProfile.setData(ObjectsDOM.ContainerProfile, getHTML);
})(GetObjectsDOM, getAllData, Data);
