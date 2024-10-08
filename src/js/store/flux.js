const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				
			],

			contact:{},


		},
		actions: {


			//en caso de que la agenda ya este creada en la API
			verificarAgenda: () => {
				fetch('https://playground.4geeks.com/contact/agendas/alejaaguirre')
					.then((resultado) => {
						if (resultado.ok === false) { //evalue si esta creado  y sino, paso a la otra funcion q lo crea
							getActions().crearAgenda()

						} else {
							getActions().obtenerContactos()

						}
					})

					.catch((error) => {
						console.log("error")
					})
			},


			//En caso de que se verifique sino existe la agenda, me la crea y luego vuelve a la función anterior. 	
			crearAgenda: () => {
				fetch('https://playground.4geeks.com/contact/agendas/alejaaguirre', {
					method: "POST",
					headers: { "Content-Type": "application/json" },
				})
					.then((resultado) => { //una vez creado, vuelvo a llamar a la funcion anterior
						//console.log(resultado)
						getActions().obtenerContactos()

					})

					.catch(error =>
						console.log("error al cargar")

					)
			},


			//añadir los contactos para esa agenda. 
			agregarContactos: (todoContact) => {
				fetch("https://playground.4geeks.com/contact/agendas/alejaaguirre/contacts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					}, body: JSON.stringify(todoContact)
				})
					.then((resultado) => {
						//	console.log(resultado);
						return resultado.json()
					}
					)
					.then((data) => {
						getActions().obtenerContactos()
						//console.log(data)
					})
					.catch((error) => {
						console.error("error al cargar los contactos;:", error)
					})

			},

			//en caso de tener contactos, obtenerlos. 
			obtenerContactos: () => {
				fetch("https://playground.4geeks.com/contact/agendas/alejaaguirre", {
					method: "GET"
				})
					.then((respuesta) => {
						//console.log(respuesta);
						return respuesta.json();
					})
					.then((data) => {
						//console.log(data);
						setStore({ contacts: data.contacts });
						//console.log(getStore());
					})
					.catch((error) => {
						console.error("Error al obtener los contactos:", error);
					});
			},

			eliminarContactos: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/alejaaguirre/contacts/${id}`, {
					method: "DELETE"
				})
				
				.then(()=>{
					getActions().obtenerContactos()
				})
				.catch((error) => {
					console.error("Error al obtener los contactos:", error);
				});
			},

          actualizarContacto : (name, phone, email, address, id)=>{
			fetch(`https://playground.4geeks.com/contact/agendas/alejaaguirre/contacts/${id}`,{
				method: "PUT",
				body: JSON.stringify(
					{
						name: name,
						phone: phone,
						email: email,
						address: address
					}
				),
				headers: { "Content-Type": "application/json"}, 
			})
			.then((respuesta)=>{
				return respuesta.json()
			}
			 )
			.then(()=>{
				getActions().obtenerContactos()
			})
			.catch((error)=>{
				console.log("error  al cargar")
			})
		  },

        saveContact : (contact)=>{
			setStore({contact: contact})
		},
















		}
	}
}


export default getState;
