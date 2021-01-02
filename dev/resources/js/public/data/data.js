export default class Data {
	constructor(FuctionName, collectionName)
	{
		this.FuctionName = FuctionName;
		this.collectionName = collectionName;
	}

	async setData(Container, FunctionSetData)
	{
		await this.getData();
		this.orderData();

		this.AllData.forEach(data => {
			Container.innerHTML += FunctionSetData(data);
		});
	}

	orderData()
	{
		this.AllData.sort((data1, data2) => data1.order - data2.order);
	}

	async getData()
	{
		this.AllData = await this.FuctionName(this.collectionName);
	}
}
