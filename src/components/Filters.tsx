import { FILTERS_BUTTONS } from '../const'
import { type FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void

}

export const Filters: React.FC<Props> = (
  { filterSelected, onFilterChange }
) => {
  const handleClick = (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onFilterChange(filter)
  }
  return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
                  const isSelected = key === filterSelected
                  const className = isSelected ? 'selected' : ''
                  return (
                        <li key={key}>
                            <a
                            className={className}
                            onClick={handleClick(key as FilterValue)}
                            href={href}
                            >
                            {literal}
                            </a>
                        </li>
                  )
                })
            }
        </ul>
  )
}
