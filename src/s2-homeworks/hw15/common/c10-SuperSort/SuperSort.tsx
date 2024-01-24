import React from 'react'
import Polygon2 from './Polygon 2.svg'
import Polygon5 from './Polygon 5.svg'

// добавить в проект иконки и импортировать
const downIcon = Polygon2
const upIcon = Polygon5
const noneIcon = ''

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '') {
        return down;
    } else if (sort === down) {
        return up;
    } else if (sort === up) {
        return '';
    } else {
        return down;
    }
    // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt="icon"
            />

        </span>
    )
}

export default SuperSort
