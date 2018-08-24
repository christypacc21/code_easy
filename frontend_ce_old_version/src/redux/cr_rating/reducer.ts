// import {IRatingAction, ADD_RATING} from './actions';

// export type IRatingState = {
//     star: number;
//     content: string;
//   }[];

// export const ratingReducer = (state: IRatingState = [], action:IRatingAction) : IRatingState =>{
//       switch(action.type){
//           case ADD_RATING:
//             return state.concat([action.rating]);
//           default:
//             return state;
//       }
//   }