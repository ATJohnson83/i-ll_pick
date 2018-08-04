fetch('https://developers.zomato.com/api/v2.1/categories',
{
	method: "GET",
	headers: {
		"Accept" : "application/json",
		"user-key" : "44480ab9410857d4da3e86a03f077a60"
	}
})
  .then(response => response.json())
  .then(json => console.log(json))