export const Square = ({ children, isSelected, updateBoard, index }) => {
 
  const className = `square ${isSelected ? 'is-selected' : ''} ${children === 'X' ? 'player_x' : 'player_o'}`

  const handleClick = () => {
    updateBoard(index)
  }
console.log(children)
  return (
    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
