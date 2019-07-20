/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const GET_SMURF='GET_SMURF';
export const GET_SMURF_SUCCESS='GET_SMURF_SUCCESS';
export const UPDATING_SMURF='UPDATING_SMURF';
export const UPDATE_SMURF_SUCCESS='UPDATE_SMURF_SUCCESS';
export const DELETEING_SMURF='DELETING_SMURF';
export const CREATING_SMURF='CREATING_SMURF';
export const CREATE_SMURF='CREATE_SMURF';
export const ERR='ERR';

const URL='http://localhost:3333/smurfs'
//get action type
export const getSmurfs=()=>{
  const smurfs=axios.get(`${URL}`);
  return dispatch=>{
    dispatch({type:GET_SMURF});
      smurfs.then(responsse=>{
        dispatch({type:GET_SMURF_SUCCESS,payload:Response.data});
      }).catch(err=>{
        dispatch({type:ERR,payload:err})
      })
  };
};
// post action type
export const createSmurf=smurf=>{
  const newSmurf=axios.post(`${URL}`,smurf)
  return dispatch=>{
    dispatch({type:CREATING_SMURF});
    newSmurf.then(({data})=>{
      dispatch({type:CREATE_SMURF,payload:data});
    }).catch(err=>{
      dispatch({type:ERR,payload:err})
    });
  };
}
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
