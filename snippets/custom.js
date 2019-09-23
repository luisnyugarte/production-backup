
//Redirect if agent if cancelled or inactive
axios_api.get("/agente").then(function(response) {
	var siseState =  response.data.data.agent.siseState;
	var uriCanceled = "{{site.account_url}}/escritorio-virtual/usuario-cancelado";
	var uriInactive = "{{site.account_url}}/escritorio-virtual/usuario-inactivo";
	if(siseState === "C" && window.location.href != uriCanceled){
		location.href = uriCanceled;
	}    
	if(siseState === "I"){
		localStorage.setItem("siseState", "I");
	}
}).catch(function(error) {
	console.log("error agents");
});

document.addEventListener('DOMContentLoaded', function () {
	//Header
	if(document.getElementById('header_banner')){
		new Vue({
			el: '#header_banner',
			delimiters: [
				"${", "}"
			],
			data: function(){
				return{
					dropdown: false,
					agentName: '',
					agentStatus: '',
					printData: [],
					brokerNameLogin:{brokerData: "{{user.name}}"},
					eventBus: vueBus,
					siseState: window.localStorage.removeItem('siseState')
				};
			},
			created: function(){
				var vm = this;
				vm.hideDropdown();
				axios_api.get("/agente").then(function(response){
					vm.agentName = response.data.data.agent.name;
					var siseState = response.data.data.agent.siseState;
					if(siseState == "I"){
						vm.agentStatus = "Usuario Inactivo";
					}
				});
			},
			methods: {
				hideDropdown: function(){
					this.dropdown = false;
				}
			},
			watch: {
				brokerNameLogin: function(value){
					this.eventBus.$emit("userSelected", value);
				}
			}
		});
	} 
});