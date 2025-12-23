interface HeaderProps {
  title?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onLeftClick?: () => void
  onRightClick?: () => void
}
const Header: React.FC<HeaderProps> = ({
  title = 'Default Title',
  leftIcon,
    rightIcon,
    onLeftClick,
    onRightClick,
}) => {
    return (
    <header className="header">
        <div className="header-left" onClick={onLeftClick}>
            {leftIcon}
        </div>
        <h1 className="header-title">{title}</h1>
        <div className="header-right" onClick={onRightClick}>
            {rightIcon}
        </div>
    </header>
    )
}
export default Header
