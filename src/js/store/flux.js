const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: []

		},
		actions: {

			crearAgenda : () => {
				fetch("https://playground.4geeks.com/contact/agendas/alejaaguirre")
					.then((resultado) => {
						if (resultado.ok === false) { //evalue si esta creado  y sino, paso a la otra funcion q lo crea
							getActions().crearUsuario()
							
						}else{
							return resultado.json(); //pide el formato json y llega la data.
						}
					})
					.then((data)=>{
						console.log(data) 
						setStore({contact:data.contact}) // accedo al store contacta, se q data tiene dentro contact (arreglo co todos los contactos. )
						//el contact de arriba se ira agregando y dejara de ser un arreglo vacio. 
					})
					.catch((error)=>{
						console.log("error")
					})
				},

			crearUsuario: () => {
				fetch("https://playground.4geeks.com/contact/agendas/alejaaguirre", {
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
			}


















		}
	}
}


export default getState;
