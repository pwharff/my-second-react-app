const myActions = {
  TOGGLE_SORT_ORDER: 'TOGGLE_SORT_ORDER',
  SORT_BY: 'SORT_BY',
}

const initialState = {
  asc: 1,
  sortBy: 'username',
}

export const toggleSortOrder = () => ({
  type: myActions.TOGGLE_SORT_ORDER,
})

export const changeSortBy = sortBy => ({
  type: myActions.SORT_BY,
  sortBy,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case myActions.TOGGLE_SORT_ORDER:
      return { ...state, asc: state.asc * -1 }
    case myActions.SORT_BY:
      if (action.sortBy === state.sortBy) {
        return { ...state, asc: state.asc * -1 }
      }
      return { ...state, sortBy: action.sortBy }
    default:
      return state
  }
}
