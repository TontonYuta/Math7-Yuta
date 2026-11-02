import { GameWorld, GameLevel } from './types';
import { TOAN7_CHAPTERS_METADATA } from '../../data/toan7/chaptersMetadata';
import { MYSTERY_IMAGES } from '../mysterious-picture/mysteryImages';

export interface OnePieceRealmMeta {
  sagaName: string;
  islandCode: string;
  themeSymbol: string;
  bossName: string;
  bossTitle: string;
  bossIcon: string;
  bossType: 'topic' | 'midterm' | 'final';
  examSetId: string;
  bountyReward: string;
  mapCoords: { x: number; y: number }; // Percentage coords on canon Grand Line Map
}

export const ONE_PIECE_REALMS_CONFIG: Record<string, OnePieceRealmMeta> = {
  chuong_1_so_huu_ti: {
    sagaName: 'East Blue',
    islandCode: 'EAST_BLUE',
    themeSymbol: '⛵',
    bossName: 'Arlong & Buggy Hề',
    bossTitle: 'Bá Chủ Biển Đông',
    bossIcon: '🦈',
    bossType: 'topic',
    examSetId: 'toan7_pt_01',
    bountyReward: '30,000,000 ฿',
    mapCoords: { x: 12, y: 38 },
  },
  chuong_2_so_thuc: {
    sagaName: 'Alabasta',
    islandCode: 'ALABASTA',
    themeSymbol: '🏜️',
    bossName: 'Sir Crocodile',
    bossTitle: 'Sa Mạc Vương Shichibukai',
    bossIcon: '🦂',
    bossType: 'midterm',
    examSetId: 'toan7_pt_02',
    bountyReward: '81,000,000 ฿',
    mapCoords: { x: 23, y: 52 },
  },
  chuong_3_goc_va_duong_thang_song_song: {
    sagaName: 'Skypiea',
    islandCode: 'SKYPIEA',
    themeSymbol: '⚡',
    bossName: 'Lôi Thần Enel',
    bossTitle: 'Sấm Sét Goro Goro & Mantra',
    bossIcon: '⚡',
    bossType: 'midterm',
    examSetId: 'toan7_pt_02',
    bountyReward: '100,000,000 ฿',
    mapCoords: { x: 34, y: 44 },
  },
  chuong_4_tam_giac_bang_nhau: {
    sagaName: 'Enies Lobby',
    islandCode: 'ENIES_LOBBY',
    themeSymbol: '⚖️',
    bossName: 'Rob Lucci CP9',
    bossTitle: 'Sát Thủ Lục Thức • Báo Đốm',
    bossIcon: '🐆',
    bossType: 'final',
    examSetId: 'toan7_pt_03',
    bountyReward: '300,000,000 ฿',
    mapCoords: { x: 44, y: 53 },
  },
  chuong_5_thong_ke_thu_thap_du_lieu: {
    sagaName: 'Sabaody',
    islandCode: 'SABAODY',
    themeSymbol: '🌳',
    bossName: 'Đô Đốc Kizaru',
    bossTitle: 'Tia Sáng Pika Pika & Pacifista',
    bossIcon: '✨',
    bossType: 'final',
    examSetId: 'toan7_pt_03',
    bountyReward: '400,000,000 ฿',
    mapCoords: { x: 52, y: 50 },
  },
  chuong_6_ti_le_thuc_va_dai_luong_ti_le: {
    sagaName: 'Impel Down',
    islandCode: 'IMPEL_DOWN',
    themeSymbol: '⛓️',
    bossName: 'Magellan Độc Long',
    bossTitle: 'Tổng Giám Ngục Địa Ngục',
    bossIcon: '🐉',
    bossType: 'midterm',
    examSetId: 'toan7_pt_04',
    bountyReward: '500,000,000 ฿',
    mapCoords: { x: 50, y: 66 },
  },
  chuong_7_bieu_thuc_dai_so_va_da_thuc: {
    sagaName: 'Marineford',
    islandCode: 'MARINEFORD',
    themeSymbol: '⚓',
    bossName: 'Đại Đô Đốc Akainu',
    bossTitle: 'Nham Thạch Magu Magu',
    bossIcon: '🌋',
    bossType: 'midterm',
    examSetId: 'toan7_pt_04',
    bountyReward: '1,500,000,000 ฿',
    mapCoords: { x: 58, y: 48 },
  },
  chuong_8_bien_co_va_xac_suat: {
    sagaName: 'Fishman Island',
    islandCode: 'FISHMAN_ISLAND',
    themeSymbol: '🫧',
    bossName: 'Hody Jones',
    bossTitle: 'Băng Tân Người Cá',
    bossIcon: '🔱',
    bossType: 'final',
    examSetId: 'toan7_pt_05',
    bountyReward: '2,000,000,000 ฿',
    mapCoords: { x: 64, y: 62 },
  },
  chuong_9_quan_he_trong_tam_giac_dong_quy: {
    sagaName: 'Wano Kuni',
    islandCode: 'WANO_KUNI',
    themeSymbol: '🐲',
    bossName: 'Tứ Hoàng Kaido',
    bossTitle: 'Sinh Vật Mạnh Nhất Thế Giới',
    bossIcon: '🔥',
    bossType: 'final',
    examSetId: 'toan7_pt_05',
    bountyReward: '4,611,100,000 ฿',
    mapCoords: { x: 78, y: 45 },
  },
  chuong_10_hinh_khoi_trong_thuc_tien: {
    sagaName: 'Laugh Tale',
    islandCode: 'LAUGH_TALE',
    themeSymbol: '👑',
    bossName: 'Gol D. Roger',
    bossTitle: 'Vua Hải Tặc Khởi Nguyên',
    bossIcon: '🌟',
    bossType: 'final',
    examSetId: 'toan7_pt_06',
    bountyReward: '5,564,800,000 ฿',
    mapCoords: { x: 90, y: 50 },
  },
};

export function getRealmMeta(chapterId?: string, fallbackIndex = 0): OnePieceRealmMeta {
  if (chapterId && ONE_PIECE_REALMS_CONFIG[chapterId]) {
    return ONE_PIECE_REALMS_CONFIG[chapterId];
  }
  const defaultCoords = [
    { x: 12, y: 38 }, { x: 23, y: 52 }, { x: 34, y: 44 }, { x: 44, y: 53 },
    { x: 52, y: 50 }, { x: 50, y: 66 }, { x: 58, y: 48 }, { x: 64, y: 62 },
    { x: 78, y: 45 }, { x: 90, y: 50 }
  ];
  const idx = Math.max(0, fallbackIndex % defaultCoords.length);
  return {
    sagaName: `Hải Trình ${idx + 1}`,
    islandCode: `ISLAND_${idx + 1}`,
    themeSymbol: '🧭',
    bossName: `Trùm Hải Trình ${idx + 1}`,
    bossTitle: 'Trùm Vùng Biển',
    bossIcon: '👑',
    bossType: 'topic',
    examSetId: 'toan7_pt_01',
    bountyReward: '100,000,000 ฿',
    mapCoords: defaultCoords[idx],
  };
}

export function buildGameWorlds(): GameWorld[] {
  return TOAN7_CHAPTERS_METADATA.map((chap, chapIdx) => {
    const realmMeta = getRealmMeta(chap.id, chapIdx);
    const worldImage = MYSTERY_IMAGES[chapIdx % MYSTERY_IMAGES.length];

    // Alternating levels within each chapter (compact titles)
    const levels: GameLevel[] = chap.topics.map((top, topIdx) => {
      const isPicture = topIdx % 2 === 0;
      const gameType = isPicture ? 'picture' : 'treasure';

      return {
        id: `${chap.id}_lvl_${topIdx + 1}`,
        worldId: chap.id,
        levelNumber: topIdx + 1,
        title: `Ải ${topIdx + 1}: ${top.shortName}`,
        subtitle: isPicture
          ? 'Giải mã Poneglyph • Mở tranh One Piece'
          : 'Đột kích mê cung • Thu thập Berries',
        topicId: top.id,
        gameType,
        galleryImageId: isPicture ? worldImage.id : undefined,
        isBoss: false,
        starsEarned: 0,
        isUnlocked: topIdx === 0,
        highscore: 0,
      };
    });

    // Append Boss Level (compact title)
    levels.push({
      id: `${chap.id}_boss`,
      worldId: chap.id,
      levelNumber: levels.length + 1,
      title: `Trùm: ${realmMeta.bossName}`,
      subtitle:
        realmMeta.bossType === 'midterm'
          ? `Chiến dịch Giữa Kì • Nhận ${realmMeta.bountyReward}`
          : realmMeta.bossType === 'final'
          ? `Đại chiến Cuối Kì • Nhận ${realmMeta.bountyReward}`
          : `Đề tổng ôn chuyên đề • Nhận ${realmMeta.bountyReward}`,
      gameType: 'boss',
      isBoss: true,
      bossType: realmMeta.bossType,
      bossName: realmMeta.bossName,
      bossIcon: realmMeta.bossIcon,
      examSetId: realmMeta.examSetId,
      starsEarned: 0,
      isUnlocked: false,
      highscore: 0,
    });

    return {
      id: chap.id,
      worldNumber: chapIdx + 1,
      name: `${chapIdx + 1}. ${realmMeta.sagaName} - ${chap.shortName}`,
      shortName: chap.shortName,
      description: `${chap.description} • ${realmMeta.sagaName}`,
      color: chap.color,
      themeIcon: realmMeta.themeSymbol,
      levels,
    };
  });
}
