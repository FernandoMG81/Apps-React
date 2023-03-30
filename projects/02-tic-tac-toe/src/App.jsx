import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { resetGameStorage, saveGameToStorage } from './logic/storage/index.js'
import { Comment } from 'react-loader-spinner'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board')
    return boardFromLocalStorage
      ? JSON.parse(boardFromLocalStorage)
      : Array(9).fill(null)
  }
  )
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage ?? TURNS.X
  })
  const [loading, setLoading] = useState(false)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    // no actualizamos posicion si ya esta seleccionado
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Guardar Partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    // Revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const cpuMove = () => {
    if (turn === TURNS.O) {
      const emptyPositions = board
        .map((value, index) => value === null ? index : null)
        .filter((value) => value !== null)
  
      // Revisar si la CPU puede ganar en la siguiente jugada
      const cpuWinningMove = findWinningMove(emptyPositions, TURNS.O)
      if (cpuWinningMove !== null) {
        updateBoard(cpuWinningMove)
        return
      }
  
      // Revisar si el jugador humano puede ganar en la siguiente jugada
      const playerWinningMove = findWinningMove(emptyPositions, TURNS.X)
      if (playerWinningMove !== null) {
        updateBoard(playerWinningMove)
        return
      }
  
      // Si no hay posibilidad de ganar, seleccionar una posición aleatoria
      const randomIndex = Math.floor(Math.random() * emptyPositions.length)
      const position = emptyPositions[randomIndex]
      updateBoard(position)
    }
  }
  
  const findWinningMove = (emptyPositions, turn) => {
    // Revisar si hay una posición donde la CPU o el jugador humano puedan ganar en la siguiente jugada
    for (let i = 0; i < emptyPositions.length; i++) {
      const boardCopy = [...board]
      boardCopy[emptyPositions[i]] = turn
      const winner = checkWinnerFrom(boardCopy)
      if (winner === turn) {
        return emptyPositions[i]
      }
    }
    return null
  }
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      cpuMove()
      setLoading(false)
    },1000)
  }, [turn])

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >

                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <section className={loading ? 'winner' : ''}>
        {loading ? (
          <Comment
            visible={true}
            height="80"
            width="80"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#F4442E"
          />
          ) : null}

      </section>
      <WinnerModal
        winner={winner}
        resetGame={resetGame}
      />
    </main>
  )
}

export default App
