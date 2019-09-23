//Axios modyo uri
var axios_modyo = axios.create({
	baseURL: "{{site.url}}"
});

var axios_auth = axios.create({
	baseURL: "{{ site.account_url }}" + '/auth/openidc'
});

var axios_api = axios.create({
	baseURL: "https://integracion.sbseguros.co"
});

axios_api.interceptors.request.use(function (request) {
	return axios_auth.get('/access_token').then(function(response){
		request.headers.authorization='Bearer '+ response.data.access_token;
		return request;
	}).catch(function (error) {
		return Promise.reject(error);
	});
});
