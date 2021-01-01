import { GetObjectsDOM } from "../../global/utils/utils";
import { getAllData } from "../firebase/firestore";
import Data from "./data";

((GetObjectsDOM, getAllData, Data) => {
	const collectionName = 'technologies';

	const ObjectsDOM = ObjectsDOM || {};
	const IdObjectsDOM = {
		ContainerTechnologies: 'tecnologias_container',
	};
	GetObjectsDOM(IdObjectsDOM, ObjectsDOM);

	const getHTML = (data) => `<p tabindex="0">${data.name}</p>`;

	const dataTechnologies = new Data(getAllData, collectionName);
	dataTechnologies.setData(ObjectsDOM.ContainerTechnologies, getHTML);
})(GetObjectsDOM, getAllData, Data);
