interface NavItem {
  label: string
  icon: React.ReactNode
  path: string
}

interface BottomNavProps {
  items: NavItem[]
}
const BottomNav: React.FC<BottomNavProps> = ({ items }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md">
        <ul className="flex justify-around">
            {items.map((item) => (
                <li key={item.path} className="flex flex-col items-center p-2">
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                </li>
            ))}
        </ul>
    </nav>
  )
}
export default BottomNav