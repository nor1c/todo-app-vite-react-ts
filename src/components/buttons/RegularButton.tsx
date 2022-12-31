const RegularButton: React.FC<{ 
  text: string, 
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  className?: string
}> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 text-white bg-gray-600 rounded-md transition-all delay-75 ${className} hover:bg-gray-700`}
    >
      {text}
    </button>
  )
}

export default RegularButton