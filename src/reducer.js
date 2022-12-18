import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch ( action.type ) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {...state, isLoading: false, hits: action.payload.hits, nbPages: action.payload.nbPages };
    case REMOVE_STORY:
      return {...state, hits: state.hits.filter(story => story.objectID !== action.payload.id) };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload.query, page: 0}
    case HANDLE_PAGE:
      let newPage = state.page;
      if (action.payload.value === 'decrease')
        newPage = state.page === 0 ? 0 : state.page - 1;
      else if (action.payload.value === 'increase')
        newPage = state.page === state.nbPages - 1 ? state.nbPages - 1 : state.page + 1;
      return { ...state, page: newPage }
    default:
      throw new Error ('no matching action');
  }
}

export default reducer
