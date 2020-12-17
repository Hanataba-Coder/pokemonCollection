import { ADD_COLLECTION, DELETE_COLLECTION } from './type'

const initialState = {
    collection: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLLECTION:
            return {
            ...state,
            collection: [...state.collection, action.payload]
            }
        case DELETE_COLLECTION:
            const NewCollection = state.collection.filter(e => e.id !== action.payload.id)

            return {
              ...state,
              collection: NewCollection
            }
      default: return state
    }
  }
  
  export default reducer