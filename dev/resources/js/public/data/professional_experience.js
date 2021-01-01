import moment from 'moment';
import { GetObjectsDOM } from "../../global/utils/utils";
import { getAllData } from "../firebase/firestore";
import Data from './data';

moment.suppressDeprecationWarnings = true;

((GetObjectsDOM, getAllData, Data) => {
	const collectionName = 'professional_experience';

	const ObjectsDOM = ObjectsDOM || {};
	const IdObjectsDOM = {
		ContainerProfessionalExperience: 'professional_experience_container',
	};
	GetObjectsDOM(IdObjectsDOM, ObjectsDOM);

	const getHTML = (data) => {
		let startDate = (typeof data.startDate === 'object') ? data.startDate.toDate() : data.startDate;
		startDate = moment(startDate);
		startDate = (startDate.isValid()) ? startDate.format(data.formatDate) : data.startDate;
		let endDate = (typeof data.endDate === 'object') ? moment(data.endDate.toDate()) : data.endDate;
		endDate = moment(endDate);
		endDate = (endDate.isValid()) ? endDate.format(data.formatDate) : data.endDate;
		return `<li>
			<p tabindex="0">
				<b>${data.title}</b>
				<span class="uk-margin-small-left uk-margin-small-right">|</span>
				<b>${startDate} – ${endDate}</b>
			</p>
			<p tabindex="0" class="uk-margin-left">${data.company}</p>
			<p tabindex="0" class="uk-margin-left">${data.description}</p>
		</li>`;
	}

	const DataProfile = new Data(getAllData, collectionName);
	DataProfile.setData(ObjectsDOM.ContainerProfessionalExperience, getHTML);
})(GetObjectsDOM, getAllData, Data);
