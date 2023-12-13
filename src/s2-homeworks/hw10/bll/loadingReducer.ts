
type LoadingReducerState = {
    isLoading: boolean;
};

const initState: LoadingReducerState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingReducerState => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':{
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
