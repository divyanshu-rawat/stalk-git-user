

const intialState = {
	data: []
}

export const Reducer = (state = intialState , action) =>{

	console.log('In Reducer',action);
	
	switch(action.type){

		case 'GET_GITHUB_API_DATA':

			state.data = action.data;
			return { data: state.data };
			break;

		default:
			return state;

	}

}