

const intial_state = {
	count: 0
}

export const Counter = (state = intial_state,action) =>{

	switch(action.type){

		case 'INCREMENT':
			return {	
				count : state.count + 1
			}

		case 'DECREMENT':
			return{
				count : state.count - 1
			}

		default:
			return{
				count : state.count
			}
			
}
}
