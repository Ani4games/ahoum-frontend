interface EmptyStateProps {
  title: string
  message: string
  actionLabel?: string
  onAction?: () => void
}
export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
    actionLabel,
    onAction,
}) => {
    return (
    <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{message}</p>
        {actionLabel && onAction && (
        <button
            
            onClick={onAction}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >   
            {actionLabel}
        </button>
        )}
    </div>
    )
}
export default EmptyState