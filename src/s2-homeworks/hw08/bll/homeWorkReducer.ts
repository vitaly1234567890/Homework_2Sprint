import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state.sort((a, b) => {
                if(action.payload === 'up'){
                    if(a.name < b.name) {
                        return -1
                    }
                } else if (action.payload === 'down') {
                    if(a.name > b.name) {
                        return -1
                    }
                } return 0
            })]

            // [...state.sort((a, b) =>
            //     action.payload === 'up' ? a.name.localeCompare(b.name)
            //         : action.payload === 'down'
            //         ? b.name.localeCompare(a.name)
            //         : b.name.localeCompare(a.name)
            // )]
        }
        case 'check': {
            return [...state.filter((u) => u.age>=action.payload)] // need to fix
        }
        default:
            return state
    }
}
