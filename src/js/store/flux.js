const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [
				{
					name: "name",
					addres : "addres",
					phone: "phone",
					email: "email"
				}
			]

		},
		actions: {
 

			//en caso de que la agenda ya este creada en la API
			crearAgenda : () => {
				fetch('https://playground.4geeks.com/contact/agendas/alejaaguirre')
					.then((resultado) => {
						if (resultado.ok === false) { //evalue si esta creado  y sino, paso a la otra funcion q lo crea
							getActions().crearUsuario()
							
						}else{
							return resultado.json(); //pide el formato json y llega la data.
						}
					})
					.then((data)=>{
						console.log(data) 
						setStore({contact: data.contact}) // accedo al store contacta, se q data tiene dentro contact (arreglo co todos los contactos. )
						//el contact de arriba se ira agregando y dejara de ser un arreglo vacio. 
					})
					.catch((error)=>{
						console.log("error")
					})
				},


			//En caso de que se verifique sino existe la agenda, me la crea y luego vuelve a la función anterior. 	
			crearUsuario: () => {
				fetch('https://playground.4geeks.com/contact/agendas/alejaaguirre', {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify([])
				})
					.then((resultado) => { //una vez creado, vuelvo a llamar a la funcion anterior
						console.log(resultado)
						return resultado.json();
					})
					.then((data) => { //una vez creado el usuario con la petición  post, vuelvo a mi función anterior. 
						getActions().crearAgenda()
						console.log(data)
					})
					.catch(error =>
						console.log("error al cargar")

					)
			},


			//añadir los contactos para esa agenda. 
			agregarContactos : (contact)=>{
				fetch("https://playground.4geeks.com/contact/agendas/alejaaguirre/contacts",{
					method: "POST",
					headers :{ "Content-Type": "application/json"
				 }, body: JSON.stringify(contact)
				})
				.then((resultado)=>{
					console.log(resultado);
					return resultado.json()
				}
				)
				.then((data)=>{
					getActions().obtenerContactos()
				})
				.catch((error)=>{
					console.error("error al cargar los contactos;:",error)
				})

			},

			//en caso de tener contactos, obtenerlos. 
			obtenerContactos: () => {
				fetch("https://playground.4geeks.com/contact/agendas/alejaaguirre", {
					method: "GET"
				})
				.then((respuesta) => {
					console.log(respuesta);
					return respuesta.json();
				})
				.then((data) => {
					getStore({ contact: data.contact });
				})
				.catch((error) => {
					console.error("Error al obtener los contactos:", error);
				});
			}



















		}
	}
}


export default getState;
