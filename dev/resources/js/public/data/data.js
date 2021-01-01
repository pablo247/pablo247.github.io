export default class Data {
	constructor(FuctionName, collectionName)
	{
		this.FuctionName = FuctionName;
		this.collectionName = collectionName;
	}

	async setData(Container, FunctionSetData)
	{
		await this.orderData();

		this.AllData.forEach(data => {
			Container.innerHTML += FunctionSetData(data);
		});
	}

	async orderData() {
		this.AllData = await this.FuctionName(this.collectionName);
		this.AllData.sort((data1, data2) => data1.order - data2.order);
	}
}
