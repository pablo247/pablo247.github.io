import { GetObjectsDOM } from "../../global/utils/utils";
import { getAllData } from "../firebase/firestore";
import Data from './data';

class DataLinks extends Data
{
	constructor(FuctionName, collectionName)
	{
		super(FuctionName, collectionName);
	}

	async setData(ObjectsDOM, GetObjectsDOM)
	{
		await this.getData();
		this.AllData.forEach(data => {
			const IdObjectsDOM = {
				Container: data.container_id,
			};
			GetObjectsDOM(IdObjectsDOM, ObjectsDOM);

			ObjectsDOM.Container[data.attribute] = data.link;
			console.log(data.link);
			console.log(ObjectsDOM.Container);
		});
	}
}

((GetObjectsDOM, getAllData, DataLinks) => {
	const collectionName = 'links';

	const ObjectsDOM = ObjectsDOM || {};

	const Data = new DataLinks(getAllData, collectionName);
	Data.setData(ObjectsDOM, GetObjectsDOM);
})(GetObjectsDOM, getAllData, DataLinks);
