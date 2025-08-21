import React, { useState, useEffect, useRef } from "react";

export default function MacOSPublicationCard() {
  const gameRef = useRef(null);

  const initialEnemies = Array.from({ length: 6 }, (_, row) =>
    Array.from({ length: 8 }, (_, col) => ({ x: 20 + col * 30, y: 20 + row * 30 }))
  ).flat();

  const [playerX, setPlayerX] = useState(120);
  const [bullets, setBullets] = useState([]);
  const [enemies, setEnemies] = useState(initialEnemies);
  const [enemyDir, setEnemyDir] = useState(1);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(690);
  const [level, setLevel] = useState(2);
  const [gameOver, setGameOver] = useState(false);
  const [focused, setFocused] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const shootSoundRef = useRef(null);
  const enemyHitSoundRef = useRef(null);
  const gameOverSoundRef = useRef(null);

  useEffect(() => {
    if (gameRef.current) gameRef.current.focus();
  }, []);

  useEffect(() => {
    if (!gameStarted) return;
    let moveLeft = false;
    let moveRight = false;

    const handleKeyDown = (e) => {
      if (gameOver) return;
      if (e.key === "ArrowLeft") moveLeft = true;
      if (e.key === "ArrowRight") moveRight = true;
      if (e.key === " ") shoot();
    };

    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft") moveLeft = false;
      if (e.key === "ArrowRight") moveRight = false;
    };

    const moveInterval = setInterval(() => {
      setPlayerX((prev) => {
        let newX = prev;
        if (moveLeft) newX = Math.max(prev - 5, 0);
        if (moveRight) newX = Math.min(prev + 5, 260);
        return newX;
      });
    }, 30);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      clearInterval(moveInterval);
    };
  }, [gameOver, gameStarted]);

  const shoot = () => {
    if (gameOver || !gameStarted) return;
    if (soundEnabled && shootSoundRef.current) shootSoundRef.current.play();
    setBullets((prev) => [...prev, { offsetX: 10, y: 270 }]);
  };

  useEffect(() => {
    if (!gameStarted) return;
    const bulletInterval = setInterval(() => {
      if (gameOver) return;
      setBullets((prevBullets) => {
        const newBullets = prevBullets
          .map((b) => ({ ...b, y: b.y - 5 }))
          .filter((b) => b.y > 0);

        let hits = [];
        const updatedEnemies = enemies.filter((enemy) => {
          const hit = newBullets.some((b) => {
            const bulletX = playerX + b.offsetX;
            return bulletX >= enemy.x && bulletX <= enemy.x + 20 && b.y >= enemy.y && b.y <= enemy.y + 20;
          });
          if (hit) hits.push(enemy);
          return !hit;
        });

        if (hits.length > 0) {
          if (soundEnabled && enemyHitSoundRef.current) enemyHitSoundRef.current.play();
          setScore((prev) => {
            const newScore = prev + hits.length * 10;
            if (newScore > highScore) setHighScore(newScore);
            return newScore;
          });
        }

        if (updatedEnemies.length === 0) {
          if (soundEnabled && gameOverSoundRef.current) gameOverSoundRef.current.play();
          setGameOver(true);
        }

        setEnemies(updatedEnemies);
        return newBullets;
      });
    }, 50);
    return () => clearInterval(bulletInterval);
  }, [enemies, gameOver, gameStarted, playerX]);

  useEffect(() => {
    if (!gameStarted) return;
    const enemyInterval = setInterval(() => {
      if (gameOver) return;

      let edgeReached = false;
      setEnemies((prev) => {
        const moved = prev.map((e) => ({ ...e, x: e.x + 5 * enemyDir }));
        edgeReached = moved.some((e) => e.x < 0 || e.x > 260);
        return moved;
      });

      if (edgeReached) {
        setEnemies((prev) => prev.map((e) => ({ ...e, y: e.y + 10, x: e.x - 5 * enemyDir })));
        setEnemyDir((dir) => -dir);
      }

      if (enemies.some((e) => e.y >= 250)) {
        if (soundEnabled && gameOverSoundRef.current) gameOverSoundRef.current.play();
        setGameOver(true);
      }
    }, 500);

    return () => clearInterval(enemyInterval);
  }, [enemyDir, gameOver, enemies, gameStarted]);

  const resetGame = () => {
    setPlayerX(120);
    setBullets([]);
    setEnemies(initialEnemies);
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-10 relative">
       {/* Thin accent lines on corners */}
       <span className="absolute top-0 left-0 h-4 w-0.5 bg-purple-500 rounded-sm"></span>
        <span className="absolute top-0 right-0 h-4 w-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 left-0 h-4 w-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 right-0 h-4 w-0.5 bg-purple-500 rounded-sm"></span>

        <span className="absolute top-0 left-0 w-4 h-0.5 bg-purple-500 rounded-sm"></span>
        <span className="absolute top-0 right-0 w-4 h-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 left-0 w-4 h-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 right-0 w-4 h-0.5 bg-purple-500 rounded-sm"></span>
        <div className="absolute top-12 right-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
        <div className="absolute top-12 left-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"></div>


      <audio ref={shootSoundRef} src="/sounds/shoot.mp3" preload="auto" />
      <audio ref={enemyHitSoundRef} src="/sounds/enemy-hit.mp3" preload="auto" />
      <audio ref={gameOverSoundRef} src="/sounds/game-over.mp3" preload="auto" />

      <div className="pt-14 max-w-8xl mx-auto relative rounded-xl bg-gradient-to-br from-black via-zinc-900 to-black p-6 border border-zinc-800 shadow-inner">
        <span className="tracking-widest">• SPACE INVADERS</span>
        <span className="tracking-widest">
          INITIATE PHX9000 <span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-1"></span>
        </span>
      </div>

      <div className="pt-14 max-w-5xl mx-auto relative rounded-xl bg-gradient-to-br from-black via-zinc-900 to-black p-6  shadow-inner">
        <h2 className="text-lg font-semibold text-white mb-2 mt-2">
          Defend Earth from the alien invasion
        </h2>

        <div
          ref={gameRef}
          tabIndex={0}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`rounded-xl bg-gradient-to-b from-[#0a0a1a] to-[#0a0a22] border border-zinc-700 p-4 shadow-inner text-center relative aspect-[16/9] w-full overflow-hidden focus:outline-none ${focused ? 'ring-2 ring-purple-400' : ''}`}
        >
          <div className="text-purple-400 font-bold tracking-wide mb-2 text-lg">
            {gameOver ? "GAME OVER" : (gameStarted ? "PLAYING" : "DEMO MODE")}
          </div>

          <div className="text-left text-zinc-400 text-xs mb-4">
            <p>SCORE: {score}</p>
            <p className="text-zinc-500">HIGH SCORE {highScore}</p>
            <p className="text-zinc-500">LEVEL: {level}</p>
          </div>

          <div className="relative w-full h-72 mx-auto bg-black border border-zinc-700">
            {enemies.map((enemy, idx) => (
              <div
                key={idx}
                className="absolute w-5 h-5 bg-purple-600 rounded-sm animate-pulse"
                style={{ left: `${enemy.x}px`, top: `${enemy.y}px` }}
              ></div>
            ))}

            <div
              className="absolute bottom-2 w-0 h-0 border-l-8 border-r-8 border-b-[12px] border-l-transparent border-r-transparent border-b-purple-500 animate-bounce"
              style={{ left: `${playerX}px` }}
            ></div>

            {bullets.map((b, i) => (
              <div
                key={i}
                className={`absolute w-1 h-3 ${focused ? 'bg-pink-400' : 'bg-purple-400'} animate-ping`}
                style={{ left: `${playerX + b.offsetX}px`, top: `${b.y}px` }}
              ></div>
            ))}
          </div>

          <div className="absolute top-4 right-4 flex gap-3">
            <button className="text-zinc-400 hover:text-white">🎮</button>
            <button
              className="text-zinc-400 hover:text-white"
              onClick={() => setSoundEnabled(!soundEnabled)}
            >
              {soundEnabled ? '🔊' : '🔇'}
            </button>
          </div>

          {!gameStarted && !gameOver && (
            <button
              onClick={() => setGameStarted(true)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded text-xs"
            >
              START GAME
            </button>
          )}

          {gameOver && (
            <button
              onClick={resetGame}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded text-xs"
            >
              RESET
            </button>
          )}
        </div>

        <div className="text-xs text-zinc-600 mt-6">ACTIVE</div>
      </div>

      <div className="text-right text-xs text-zinc-600 mt-2 pr-2">LOC: 2025-04-07</div>
    </div>
  );
}
