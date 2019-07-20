import {GET_SMURF,GET_SMURF_SUCCESS,CREATING_SMURF,CREATE_SMURF,ERR} from '../actions/index.js';




const initialState={
  smurfs:[],
  fetchingSmurfs:false,
  addingSmurf:false,
  updatingSmurf:false,
  deletingSmurf:false,
  error:null
}

export const smurfReducer=(state=initialState,actiion)=>{
  switch(actiion.type){
    //unpack
    case GET_SMURF:
      return{...state,fetchingSmurfs:true};
    case GET_SMURF_SUCCESS:
      return{...state,smurfs:actiion.payload,fetchingSmurfs:false};
    case CREATING_SMURF:
      return{...state,addingSmurf:true};
    case CREATE_SMURF:
      return{...state,smurfs:actiion.payload,addingSmurf:false}
    case ERR:
      return{...state,gettingFriends:false,creatingFriend:false,deletingFriend:false,updatingFriend:false,err:actiion.payload};
      default:
        return state;
  }
}