import { GameWorld, GameLevel } from './types';
import { TOAN7_CHAPTERS_METADATA } from '../../data/toan7/chaptersMetadata';
import { MYSTERY_IMAGES } from '../mysterious-picture/mysteryImages';

const WORLD_ICONS = ['🏝️', '🌲', '📐', '🏛️', '📊', '⚖️', '🏰', '🎲', '⛰️', '🪐'];
const BOSS_TITLES: Record<string, { name: string; icon: string; examSetId: string; bossType: 'topic' | 'midterm' | 'final' }> = {
  chuong_1_so_huu_ti: { name: 'Trùm Rồng Số Hữu Tỉ', icon: '🐉', examSetId: 'toan7_pt_01', bossType: 'topic' },
  chuong_2_so_thuc: { name: 'Đại Tướng Căn Bậc Hai', icon: '👹', examSetId: 'toan7_pt_02', bossType: 'midterm' },
  chuong_3_goc_song_song: { name: 'Thần Thú Góc Song Song', icon: '🦅', examSetId: 'toan7_pt_02', bossType: 'midterm' },
  chuong_4_tam_giac_bang_nhau: { name: 'Chúa Tể Tam Giác Bằng Nhau', icon: '🛡️', examSetId: 'toan7_pt_03', bossType: 'final' },
  chuong_5_thu_thap_du_lieu: { name: 'Đại Ma Vương Học Kì 1', icon: '👑', examSetId: 'toan7_pt_03', bossType: 'final' },
  chuong_6_ti_le_thuc: { name: 'Dị Nhân Tỉ Lệ Thức', icon: '⚖️', examSetId: 'toan7_pt_04', bossType: 'midterm' },
  chuong_7_bieu_thuc_dai_so: { name: 'Hắc Ma Đa Thức Một Biến', icon: '🧙‍♂️', examSetId: 'toan7_pt_04', bossType: 'midterm' },
  chuong_8_bien_co_xac_suat: { name: 'Quái Thú Xác Suất May Rủi', icon: '🎲', examSetId: 'toan7_pt_05', bossType: 'final' },
  chuong_9_quan_he_tam_giac: { name: 'Vệ Binh Đường Đồng Quy', icon: '⚔️', examSetId: 'toan7_pt_05', bossType: 'final' },
  chuong_10_hinh_khoi_thuc_tien: { name: 'Long Vương Cuối Kì 2 (Điểm 10)', icon: '🐲', examSetId: 'toan7_pt_06', bossType: 'final' },
};

export function buildGameWorlds(): GameWorld[] {
  return TOAN7_CHAPTERS_METADATA.map((chap, chapIdx) => {
    const worldImage = MYSTERY_IMAGES[chapIdx % MYSTERY_IMAGES.length];

    // Alternating levels within each chapter: Picture -> Treasure -> Picture -> Treasure ...
    const levels: GameLevel[] = chap.topics.map((top, topIdx) => {
      const isPicture = topIdx % 2 === 0;
      const gameType = isPicture ? 'picture' : 'treasure';

      return {
        id: `${chap.id}_lvl_${topIdx + 1}`,
        worldId: chap.id,
        levelNumber: topIdx + 1,
        title: isPicture ? `Ải ${topIdx + 1}: Mảnh Ghép ${top.shortName}` : `Ải ${topIdx + 1}: Mê Cung ${top.shortName}`,
        subtitle: isPicture ? 'Tính toán số học để lật mở kiệt tác tranh bí ẩn' : 'Vượt chướng ngại vật & giải toán đố lời văn',
        topicId: top.id,
        gameType,
        galleryImageId: isPicture ? worldImage.id : undefined,
        isBoss: false,
        starsEarned: 0,
        isUnlocked: topIdx === 0,
        highscore: 0,
      };
    });

    // Append Boss Level
    const bossMeta = BOSS_TITLES[chap.id] || {
      name: `Boss Tổng Hợp ${chap.shortName}`,
      icon: '👑',
      examSetId: 'toan7_pt_01',
      bossType: 'topic' as const,
    };

    levels.push({
      id: `${chap.id}_boss`,
      worldId: chap.id,
      levelNumber: levels.length + 1,
      title: `MÀN BOSS: ${bossMeta.name}`,
      subtitle: bossMeta.bossType === 'midterm' ? 'Đề thi Giữa Kì tổng hợp' : bossMeta.bossType === 'final' ? 'Đề thi Học Kì toàn diện' : 'Đề tổng ôn chuyên đề',
      gameType: 'boss',
      isBoss: true,
      bossType: bossMeta.bossType,
      bossName: bossMeta.name,
      bossIcon: bossMeta.icon,
      examSetId: bossMeta.examSetId,
      starsEarned: 0,
      isUnlocked: false,
      highscore: 0,
    });

    return {
      id: chap.id,
      worldNumber: chapIdx + 1,
      name: `Thế Giới ${chapIdx + 1}: ${chap.shortName}`,
      shortName: chap.shortName,
      description: chap.description,
      color: chap.color,
      themeIcon: WORLD_ICONS[chapIdx % WORLD_ICONS.length],
      levels,
    };
  });
}
