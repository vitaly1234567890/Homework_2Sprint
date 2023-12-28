const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdType):InitType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
       return  {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any

export type InitType = {
    themeId: number
}
type ChangeThemeIdType = ReturnType<typeof changeThemeId>
