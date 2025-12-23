interface FilterSidebarProps {
  categories: string[]
  selected: string[]
  onChange: (categories: string[]) => void
}
export const FilterSidebar: React.FC<FilterSidebarProps> = ({
    categories,
    selected,
    onChange
}) => {
    const toggleCategory = (category: string) => {
        if (selected.includes(category)) {
            onChange(selected.filter(c => c !== category));
        } else {
            onChange([...selected, category]);
        }
    };
    return (
        <div className="filter-sidebar">
            <h3>Filter by Categories</h3>
            <ul>
                {categories.map(category => (
                    <li key={category}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selected.includes(category)}
                                onChange={() => toggleCategory(category)}
                            />
                            {category}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
import React from 'react';
export default FilterSidebar;