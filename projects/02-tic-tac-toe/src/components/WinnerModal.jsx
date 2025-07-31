import { Square } from "./Square"

export function WinnerModal({winner, resetGame}) {
    if (winner === null) return null

    const WinnerText = winner === false ? 'Draw!' : `Winner:`

    return (
        <section className="winner">
            <div className="text">
                <h2>
                    {WinnerText}
                </h2>

                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                    <button onClick={resetGame}>Start again</button>
                </footer>

            </div>
        </section>
    )
}