const RegularButton: React.FC<{ 
  text: string, 
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  className?: string,
  buttonColor?: string
}> = ({ text, onClick, className, buttonColor }) => {
  buttonColor = typeof buttonColor === 'undefined' ? 'bg-gray-500 hover:bg-gray-700' : buttonColor

  return (
    <button
      onClick={onClick}
      className={`p-2 text-white rounded-md transition-all delay-75 ${buttonColor} ${className}`}
    >
      {text}
    </button>
  )
}

export default RegularButton