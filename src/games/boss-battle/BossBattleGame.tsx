import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Question } from '../../types/exam';
import { MathRenderer } from '../../components/MathRenderer';
import { VirtualMathKeyboard } from '../../components/VirtualMathKeyboard';
import { getDifficultyInfo } from '../../utils/difficultyBadge';
import { soundFx } from '../../sound/soundFx';
import { checkAnswerCorrectness } from '../../utils/scoring';
import { Heart, Trophy, Skull, Swords, RotateCcw, ArrowLeft, Flame, Zap } from 'lucide-react';
import { LuffyStrawHatPawn } from '../world-map/onePieceAssets';

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
    <div className="min-h-screen bg-transparent text-zinc-100 p-4 sm:p-8 select-none flex flex-col justify-between">
      {/* Top Header / Arena HUD */}
      <header className="max-w-5xl mx-auto w-full bg-[#14161f]/95 backdrop-blur-md border border-zinc-800/90 rounded-3xl p-4 sm:p-6 shadow-xl">
        <div className="flex items-center justify-between gap-6">
          <button
            onClick={onExit}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-bold transition-all border border-zinc-700/80 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-300" />
            <span>Rút lui</span>
          </button>

          {/* Boss HP Bar */}
          <div className="flex-1 max-w-lg">
            <div className="flex items-center justify-between text-xs sm:text-sm font-mono font-bold text-red-400 mb-1.5">
              <span className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="text-white font-black">Haki Boss: {bossName}</span>
              </span>
              <span className="text-red-300 font-extrabold">{bossHp} / {maxBossHp} HP</span>
            </div>
            <div className="w-full h-3.5 bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden p-0.5 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full transition-all duration-300 shadow-[0_0_12px_rgba(239,68,68,0.6)]"
                style={{ width: `${(bossHp / maxBossHp) * 100}%` }}
              />
            </div>
          </div>

          {/* Player Hearts / Pirate Will */}
          <div className="flex flex-col items-end gap-1.5">
            <span className="text-xs font-mono text-amber-400 font-black uppercase">Ý Chí Hải Tặc</span>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <Heart
                  key={i}
                  className={`w-5 h-5 ${i < playerHp ? 'text-red-500 fill-red-500' : 'text-zinc-800'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Arena Center: Boss vs Player Battle Showdown */}
      <div className="max-w-5xl mx-auto w-full flex items-center justify-around py-6">
        {/* Player */}
        <div className={`text-center space-y-2 transition-transform ${isPlayerHurt ? 'animate-shake scale-90' : ''}`}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-zinc-850 border-2 border-amber-400/60 flex items-center justify-center p-3 shadow-xl">
            <LuffyStrawHatPawn className="w-full h-full" />
          </div>
          <span className="text-xs sm:text-sm font-mono text-amber-300 block font-black">Thuyền Trưởng Mũ Rơm</span>
        </div>

        <div className="text-red-400 font-mono text-xs sm:text-sm uppercase tracking-widest px-4 py-2 rounded-2xl bg-red-950/60 border border-red-800/80 font-black shadow-[0_0_15px_rgba(239,68,68,0.4)]">
          ⚡ ĐẠI CHIẾN HAKI BÁ VƯƠNG ⚡
        </div>

        {/* Boss */}
        <div className={`text-center space-y-2 transition-transform ${isBossHurt ? 'animate-shake scale-90' : ''}`}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-red-950/70 border-2 border-red-500 ring-4 ring-red-500/30 flex items-center justify-center text-4xl shadow-xl">
            {bossIcon}
          </div>
          <span className="text-xs sm:text-sm font-mono text-red-400 block font-black">{bossName}</span>
        </div>
      </div>

      {/* Question Battle Card */}
      {status === 'fighting' && currentQ && (
        <div className="max-w-5xl mx-auto w-full bg-[#14161f]/95 backdrop-blur-md border border-zinc-800/90 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between text-xs sm:text-sm text-stone-400 pb-2 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <span className="font-bold text-amber-400">Đòn tấn công {currentIdx + 1} / {battleQuestions.length}</span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold border ${getDifficultyInfo(currentQ).bgClass} ${getDifficultyInfo(currentQ).borderClass} ${getDifficultyInfo(currentQ).colorClass}`}>
                Độ khó: {getDifficultyInfo(currentQ).starsString} ({getDifficultyInfo(currentQ).badgeText})
              </span>
            </div>
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
