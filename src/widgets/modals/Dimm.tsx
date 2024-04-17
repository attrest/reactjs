interface DimmProps {
  onClick?: () => void
  isStandalone?: boolean
}

const Dimm = ({ onClick, isStandalone = false }: DimmProps) => {
  const zIndex = isStandalone ? 'z-[1000]' : 'z-[1]'

  return (
    <div
      onClick={onClick}
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-65 ${zIndex}`}
    />
  )
}

export default Dimm
