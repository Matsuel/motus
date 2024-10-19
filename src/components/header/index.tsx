interface HeaderProps {
    word: string
    attemptsRemaining: number
    error: string
}

const Header = ({
    word,
    attemptsRemaining,
    error
}: HeaderProps) => {
    return (
        <div className="app__header">
        <h1 className="app__title">
          {word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}
        </h1>

        <h1 className="app__title">
          {attemptsRemaining}
        </h1>

        {error && <div>{error}</div>}
      </div>
    )
}

export default Header