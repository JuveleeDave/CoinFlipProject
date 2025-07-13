import { useState } from 'react';
// import './CoinFlip.css'; // Optional: separate styles

function CoinFlip() {
  const [side, setSide] = useState(null);
  const [flipping, setFlipping] = useState(false);

  const flipCoin = () => {
    setFlipping(true);
    setTimeout(() => {
      const result = Math.random() < 0.5 ? 'heads' : 'tails';
      setSide(result);
      setFlipping(false);
    }, 600);
  };

  const coinImage =
    side === 'heads'
      ? '/coin-heads.svg'
      : side === 'tails'
      ? '/coin-tails.svg'
      : '/coin-heads.svg'; // default before first flip

  return (
    <div className="coin-container">
      <img
        src={coinImage}
        alt={side || 'Coin'}
        className={`coin ${flipping ? 'flipping' : ''}`}
      />
      <button onClick={flipCoin} disabled={flipping}>
        {flipping ? 'Flipping...' : 'Flip Coin'}
      </button>
      {side && <p className="result">Result: {side.toUpperCase()}</p>}
    </div>
  );
}

export default CoinFlip;
