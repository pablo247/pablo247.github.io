import { GetObjectsDOM } from "../../global/utils/utils";
import { getAllData } from "../firebase/firestore";
import Data from './data';

((GetObjectsDOM, getAllData, Data) => {
	const collectionName = 'skills';

	const ObjectsDOM = ObjectsDOM || {};
	const IdObjectsDOM = {
		ContainerSkills: 'habilidades_container',
	};
	GetObjectsDOM(IdObjectsDOM, ObjectsDOM);

	const getHTML = (data) => `<li tabindex="0">${data.skill}</li>`;

	const DataProfile = new Data(getAllData, collectionName);
	DataProfile.setData(ObjectsDOM.ContainerSkills, getHTML);
})(GetObjectsDOM, getAllData, Data);
