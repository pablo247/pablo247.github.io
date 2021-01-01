import { GetObjectsDOM } from "../../global/utils/utils";
import { getAllData } from "../firebase/firestore";
import Data from "./data";

((GetObjectsDOM, getAllData, Data) => {
	const collectionName = 'educations';

	const ObjectsDOM = ObjectsDOM || {};
	const IdObjectsDOM = {
		ContainerEducation: 'educacion_container',
	};
	GetObjectsDOM(IdObjectsDOM, ObjectsDOM);

	const getHTML = (data) =>
	`<li>
		<p tabindex="0">
			<b>${data.title}</b>
			<span class="uk-margin-small-left uk-margin-small-right">|</span>
			<b>${data.startDate} - ${data.endDate}</b>
		</p>
		<p tabindex="0" class="uk-margin-left">${data.school}</p>
	</li>`;

	const data = new Data(getAllData, collectionName);
	data.setData(ObjectsDOM.ContainerEducation, getHTML);
})(GetObjectsDOM, getAllData, Data);
