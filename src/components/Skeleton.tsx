interface SkeletonProps {
  height: string
  width?: string
}
export const Skeleton = ({ height, width = '100%' }: SkeletonProps) => {
    return (
        <div
            className="animate-pulse bg-gray-300 rounded-md"
            style={{ height, width }}
        ></div>
    )
}
export default Skeleton