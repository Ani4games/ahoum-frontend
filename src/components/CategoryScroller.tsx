interface CategoryScrollerProps {
  categories: string[]
  selected: string
  onChange: (category: string) => void
}
export const CategoryScroller: React.FC<CategoryScrollerProps> = ({
  categories,
  selected,
  onChange
}) => {
  return (
    <div className="category-scroller">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={selected === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
import React from 'react';
export default CategoryScroller;