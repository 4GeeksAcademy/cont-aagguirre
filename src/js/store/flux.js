const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: []

		},
		actions: {

			agregarAgenda: async () => {
				try{
				const response = await fetch('https://playground.4geeks.com/contact/agendas/alejaaguirre', {
					method: 'POST',
					body: JSON.stringify([]),
					headers: { 'Content-Type': 'application/json' }
				});
				if (response.ok) {
					getActions().contactosCreados(); //se cargan los contactos creados para esa agendas
				} else {
					console.error("error al cargar:");
				}
			} catch(error){
				console.error("error al crear:", error)
			}

				
			},


			contactosCreados: async () => {
				
				const response = await fetch('https://playground.4geeks.com/contact/agendas/alejaaguirre/contacts');
				if (response.ok) {
					const data = await response.json();//obt los datos de la resp
					return getStore({ contact: data })//accedo al store y a los contactos, aso con data. 
				} else {
					console.error("error", error)
					getActions().agregarAgenda()//SI se borro la agenda la crea. 

				}

			
		}



















		}
	}
}
			

export default getState;
