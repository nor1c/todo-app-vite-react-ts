const RegularButton: React.FC<{ 
  text: string, 
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  className?: string
}> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 text-white bg-gray-600 rounded-md transition-all delay-75 hover:bg-gray-700 ${className}`}
    >
      {text}
    </button>
  )
}

export default RegularButton