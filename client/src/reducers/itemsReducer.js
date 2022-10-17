import { ITEMS_CREATE_FAIL, ITEMS_CREATE_REQUEST, ITEMS_CREATE_SUCCESS, ITEMS_DELETE_FAIL, ITEMS_DELETE_REQUEST, ITEMS_DELETE_SUCCESS, ITEMS_LIST_FAIL, ITEMS_LIST_REQUEST, ITEMS_LIST_SUCCESS, ITEMS_UPDATE_FAIL, ITEMS_UPDATE_REQUEST, ITEMS_UPDATE_SUCCESS } from "../constatnts/itemsConstatnts";

export const itemsReducer =(state={items: [] },action)=>{
    switch(action.type){
        case ITEMS_LIST_REQUEST:
        return{loading:true};
        case ITEMS_LIST_SUCCESS:
        return{loading:false , items:action.paylod};
        case ITEMS_LIST_FAIL:
        return{loading:false, items:action.paylod};
        default:
            return state;
    }
};


export const itemsCreateReducer =(state={},action)=>{
    switch(action.type){
        case ITEMS_CREATE_REQUEST:
        return{loading:true};
        case ITEMS_CREATE_SUCCESS:
        return{loading:false , success:true};
        case ITEMS_CREATE_FAIL:
        return{loading:false, error:action.paylod};
        default:
            return state;
    }
};


export const itemsUpdateReducer =(state={},action)=>{
    switch(action.type){
        case ITEMS_UPDATE_REQUEST:
        return{loading:true};
        case ITEMS_UPDATE_SUCCESS:
        return{loading:false , success:true};
        case ITEMS_UPDATE_FAIL:
        return{loading:false, error:action.paylod , success :false };
        default:
            return state;
    }
};


export const itemsDeleteReducer =(state={},action)=>{
    switch(action.type){
        case ITEMS_DELETE_REQUEST:
        return{loading:true};
        case ITEMS_DELETE_SUCCESS:
        return{loading:false , success:true};
        case ITEMS_DELETE_FAIL:
        return{loading:false, error:action.paylod , success :false };
        default:
            return state;
    }
};
