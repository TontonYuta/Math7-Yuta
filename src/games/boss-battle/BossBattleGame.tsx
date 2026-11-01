import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Question } from '../../types/exam';
import { MathRenderer } from '../../components/MathRenderer';
import { VirtualMathKeyboard } from '../../components/VirtualMathKeyboard';
import { soundFx } from '../../sound/soundFx';
import { checkAnswerCorrectness } from '../../utils/scoring';
import { Heart, Trophy, Skull, Swords, RotateCcw, ArrowLeft, Flame, Zap } from 'lucide-react';

interface BossBattleGameProps {
  bossName: string;
  bossIcon: string;
  questions: Question[];
  onVictory: (score: number, stars: number) => void;
  onExit: () => void;
}

export const BossBattleGame: React.FC<BossBattleGameProps> = ({
  bossName,
  bossIcon,
  questions,
  onVictory,
  onExit,
}) => {
  const battleQuestions = useMemo(() => {
    return questions.slice(0, 8); // 8 questions boss battle
  }, [questions]);

  const maxBossHp = battleQuestions.length * 15;
  const [bossHp, setBossHp] = useState(maxBossHp);
  const [playerHp, setPlayerHp] = useState(3);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [status, setStatus] = useState<'fighting' | 'won' | 'lost'>('fighting');
  const [score, setScore] = useState(0);
  const [selectedMcq, setSelectedMcq] = useState('');
  const [fillValue, setFillValue] = useState('');
  const [isBossHurt, setIsBossHurt] = useState(false);
  const [isPlayerHurt, setIsPlayerHurt] = useState(false);

  const currentQ = battleQuestions[currentIdx];
  const isMcq = currentQ?.type === 'mcq' && currentQ.options && currentQ.options.length > 0;

  const handleAttack = () => {
    if (!currentQ || status !== 'fighting') return;
    const ans = isMcq ? selectedMcq : fillValue.trim();
    if (!ans) return;

    const isCorrect = checkAnswerCorrectness(currentQ, ans);

    if (isCorrect) {
      soundFx.playCorrect();
      setIsBossHurt(true);
      setTimeout(() => setIsBossHurt(false), 600);

      const nextHp = Math.max(0, bossHp - 15);
      setBossHp(nextHp);
      setScore((s) => s + 25);

      if (nextHp === 0 || currentIdx + 1 >= battleQuestions.length) {
        soundFx.playVictory();
        confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
        setStatus('won');
        onVictory(score + 50, 3);
      } else {
        setCurrentIdx((i) => i + 1);
        setSelectedMcq('');
        setFillValue('');
      }
    } else {
      soundFx.playWrong();
      setIsPlayerHurt(true);
      setTimeout(() => setIsPlayerHurt(false), 600);

      const nextPlayerHp = playerHp - 1;
      setPlayerHp(nextPlayerHp);

      if (nextPlayerHp <= 0) {
        setStatus('lost');
      } else if (currentIdx + 1 < battleQuestions.length) {
        setCurrentIdx((i) => i + 1);
        setSelectedMcq('');
        setFillValue('');
      } else {
        setStatus('lost');
      }
    }
  };

  const handleRestart = () => {
    setBossHp(maxBossHp);
    setPlayerHp(3);
    setCurrentIdx(0);
    setStatus('fighting');
    setScore(0);
    setSelectedMcq('');
    setFillValue('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-red-950/40 to-black text-stone-100 p-3 sm:p-6 select-none flex flex-col justify-between">
      {/* Top Header / Arena HUD */}
      <header className="max-w-3xl mx-auto w-full bg-stone-900/90 border-2 border-red-600/60 rounded-3xl p-3 sm:p-4 shadow-2xl backdrop-blur-md">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={onExit}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-bold transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Rút lui</span>
          </button>

          {/* Boss HP Bar */}
          <div className="flex-1 max-w-md">
            <div className="flex items-center justify-between text-xs font-bold text-red-300 mb-1">
              <span className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span>{bossName}</span>
              </span>
              <span className="font-mono">{bossHp} / {maxBossHp} HP</span>
            </div>
            <div className="w-full h-3.5 bg-stone-950 rounded-full border border-red-800 overflow-hidden shadow-inner p-0.5">
              <div
                className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-all duration-300"
                style={{ width: `${(bossHp / maxBossHp) * 100}%` }}
              />
            </div>
          </div>

          {/* Player Hearts */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <Heart
                key={i}
                className={`w-5 h-5 ${i < playerHp ? 'text-red-500 fill-red-500 animate-pulse' : 'text-stone-700 opacity-40'}`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Arena Center: Boss vs Player Battle Showdown */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-around py-3">
        {/* Player */}
        <div className={`text-center space-y-1 transition-transform ${isPlayerHurt ? 'animate-shake scale-90' : ''}`}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-4xl sm:text-5xl shadow-xl">
            🐿️
          </div>
          <span className="text-xs font-bold text-amber-300 block">Dũng Sĩ Sóc</span>
        </div>

        <div className="text-red-500 font-black text-2xl animate-pulse">VS</div>

        {/* Boss */}
        <div className={`text-center space-y-1 transition-transform ${isBossHurt ? 'animate-shake scale-90 filter hue-rotate-90' : ''}`}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-red-600/20 border-2 border-red-500 flex items-center justify-center text-4xl sm:text-5xl shadow-2xl animate-pulse">
            {bossIcon}
          </div>
          <span className="text-xs font-bold text-red-300 block">{bossName}</span>
        </div>
      </div>

      {/* Question Battle Card - Expanded to max-w-4xl */}
      {status === 'fighting' && currentQ && (
        <div className="max-w-4xl mx-auto w-full bg-stone-900 border-2 border-red-500/70 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-5">
          <div className="flex items-center justify-between text-xs sm:text-sm text-stone-400 pb-2 border-b border-stone-800">
            <span className="font-bold text-amber-400">Đòn tấn công {currentIdx + 1} / {battleQuestions.length}</span>
            <span>+25 điểm mỗi đòn chuẩn xác</span>
          </div>

          <div className="p-5 bg-gradient-to-b from-stone-850 to-stone-900 rounded-2xl border border-stone-700 text-stone-100 text-base sm:text-lg leading-relaxed shadow-inner">
            <MathRenderer content={currentQ.content} className="!text-amber-100 text-base sm:text-lg font-medium" />
          </div>

          {/* Options */}
          {isMcq ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQ.options!.map((opt) => {
                const isSelected = selectedMcq === opt.key;
                return (
                  <button
                    key={opt.key}
                    onClick={() => setSelectedMcq(opt.key)}
                    className={`p-4 rounded-2xl border-2 text-left text-sm sm:text-base font-medium transition-all flex items-center gap-3 min-h-[60px] ${
                      isSelected
                        ? 'border-red-400 bg-red-950/80 text-red-100 font-bold ring-2 ring-red-500 shadow-lg scale-[1.01]'
                        : 'border-stone-700 bg-stone-850/80 hover:border-red-500/60 text-stone-200'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm shrink-0 ${
                      isSelected ? 'bg-red-500 text-white' : 'bg-stone-700 text-stone-300'
                    }`}>
                      {opt.key}
                    </span>
                    <div className="flex-1">
                      <MathRenderer content={opt.content} className="inline !text-stone-100" />
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="space-y-3 max-w-xl mx-auto">
              <input
                type="text"
                value={fillValue}
                onChange={(e) => setFillValue(e.target.value)}
                placeholder="Nhập số hoặc phân số kết quả..."
                className="w-full text-center text-xl sm:text-2xl font-mono font-bold px-4 py-3 rounded-2xl border-2 border-red-500/80 bg-stone-950 text-amber-200 focus:outline-none shadow-inner"
              />
              <VirtualMathKeyboard value={fillValue} onChange={setFillValue} />
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={handleAttack}
              disabled={isMcq ? !selectedMcq : !fillValue.trim()}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 disabled:opacity-40 text-white font-black text-sm sm:text-base tracking-wider uppercase shadow-xl flex items-center gap-2 active:scale-95 transition-transform"
            >
              <Swords className="w-5 h-5" />
              <span>TUNG CHIÊU TẤN CÔNG</span>
            </button>
          </div>
        </div>
      )}

      {/* Outcome Overlays */}
      {status !== 'fighting' && (
        <div className="max-w-md mx-auto w-full bg-stone-900 border-4 border-red-500 rounded-3xl p-6 text-center space-y-4 shadow-2xl">
          <div className="text-5xl">{status === 'won' ? '🏆' : '💀'}</div>
          <h3 className="text-2xl font-black text-amber-300">
            {status === 'won' ? 'BẠN ĐÃ HẠ GỤC BOSS!' : 'BỊ BOSS ĐÁNH BẠI!'}
          </h3>
          <p className="text-xs text-stone-300">
            {status === 'won'
              ? `Xuất sắc tiêu diệt ${bossName}! Mở khóa các màn chơi tiếp theo.`
              : 'Hãy rèn luyện thêm và thử thách lại một lần nữa!'}
          </p>
          <div className="flex gap-3 pt-2">
            <button onClick={onExit} className="flex-1 py-2.5 rounded-xl bg-stone-800 text-stone-200 text-xs font-bold">
              Rút lui
            </button>
            <button onClick={handleRestart} className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-black">
              Khiêu chiến lại
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
