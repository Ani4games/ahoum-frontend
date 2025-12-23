interface CategoryChipProps {
  label: string
  selected: boolean
  onSelect: () => void
}
export const CategoryChip: React.FC<CategoryChipProps> = ({ label, selected, onSelect }) => {
  return (
    <div
      className={`category-chip ${selected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      {label}
    </div>
  )
}

export default CategoryChip