const GetObjectsDOM = (IdObjectsDOM, MainObject) => {
	for (const [key, value] of Object.entries(IdObjectsDOM))
	{
		MainObject[key] = document.getElementById(value);
	}
	// return MainObject;
}

export { GetObjectsDOM };
