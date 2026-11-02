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
  mapCoords: { x: number; y: number }; // Percentage on Grand Line Map canvas
}

export const ONE_PIECE_REALMS_CONFIG: Record<string, OnePieceRealmMeta> = {
  chuong_1_so_huu_ti: {
    sagaName: 'Biển Đông: Thị Trấn Khởi Đầu Loguetown',
    islandCode: 'EAST_BLUE',
    themeSymbol: '⛵',
    bossName: '"Cá Mập Cưa" Arlong & Buggy Hề',
    bossTitle: 'Bá Chủ Biển Đông',
    bossIcon: '🦈',
    bossType: 'topic',
    examSetId: 'toan7_pt_01',
    bountyReward: '30,000,000 ฿',
    mapCoords: { x: 12, y: 78 },
  },
  chuong_2_so_thuc: {
    sagaName: 'Vương Quốc Sa Mạc Alabasta',
    islandCode: 'ALABASTA',
    themeSymbol: '🏜️',
    bossName: 'Shichibukai Sir Crocodile',
    bossTitle: 'Sa Mạc Vương • Baroque Works',
    bossIcon: '🦂',
    bossType: 'midterm',
    examSetId: 'toan7_pt_02',
    bountyReward: '81,000,000 ฿',
    mapCoords: { x: 25, y: 62 },
  },
  chuong_3_goc_va_duong_thang_song_song: {
    sagaName: 'Đảo Trên Trời Skypiea',
    islandCode: 'SKYPIEA',
    themeSymbol: '⚡',
    bossName: '"Chúa Trời" Lôi Thần Enel',
    bossTitle: 'Sấm Sét Goro Goro & Mantra',
    bossIcon: '⚡',
    bossType: 'midterm',
    examSetId: 'toan7_pt_02',
    bountyReward: '100,000,000 ฿',
    mapCoords: { x: 38, y: 35 },
  },
  chuong_4_tam_giac_bang_nhau: {
    sagaName: 'Đảo Tư Pháp Enies Lobby',
    islandCode: 'ENIES_LOBBY',
    themeSymbol: '⚖️',
    bossName: 'Thủ Lĩnh Lục Thức Rob Lucci',
    bossTitle: 'Sát Thủ CP9 • Trái Báo Đốm',
    bossIcon: '🐆',
    bossType: 'final',
    examSetId: 'toan7_pt_03',
    bountyReward: '300,000,000 ฿',
    mapCoords: { x: 50, y: 58 },
  },
  chuong_5_thong_ke_thu_thap_du_lieu: {
    sagaName: 'Quần Đảo Cây Sabaody',
    islandCode: 'SABAODY',
    themeSymbol: '🌳',
    bossName: 'Đô Đốc Hải Quân Kizaru Borsalino',
    bossTitle: 'Ánh Sáng Tối Thượng & Pacifista',
    bossIcon: '✨',
    bossType: 'final',
    examSetId: 'toan7_pt_03',
    bountyReward: '400,000,000 ฿',
    mapCoords: { x: 62, y: 74 },
  },
  chuong_6_ti_le_thuc_va_dai_luong_ti_le: {
    sagaName: 'Đại Địa Ngục Đáy Biển Impel Down',
    islandCode: 'IMPEL_DOWN',
    themeSymbol: '⛓️',
    bossName: 'Tổng Giám Ngục Magellan',
    bossTitle: 'Độc Long Phán Quyết Doku Doku',
    bossIcon: '☠️',
    bossType: 'midterm',
    examSetId: 'toan7_pt_04',
    bountyReward: '500,000,000 ฿',
    mapCoords: { x: 55, y: 88 },
  },
  chuong_7_bieu_thuc_dai_so_va_da_thuc: {
    sagaName: 'Tổng Bộ Hải Quân Marineford',
    islandCode: 'MARINEFORD',
    themeSymbol: '⚓',
    bossName: 'Đại Đô Đốc Akainu Sakazuki',
    bossTitle: 'Nham Thạch Tuyệt Đối Magu Magu',
    bossIcon: '🌋',
    bossType: 'midterm',
    examSetId: 'toan7_pt_04',
    bountyReward: '1,500,000,000 ฿',
    mapCoords: { x: 68, y: 44 },
  },
  chuong_8_bien_co_va_xac_suat: {
    sagaName: 'Đảo Người Cá Vùng Biển Sâu 10.000m',
    islandCode: 'FISHMAN_ISLAND',
    themeSymbol: '🫧',
    bossName: 'Thủ Lĩnh Hody Jones',
    bossTitle: 'Băng Tân Người Cá & Steroid',
    bossIcon: '🔱',
    bossType: 'final',
    examSetId: 'toan7_pt_05',
    bountyReward: '2,000,000,000 ฿',
    mapCoords: { x: 78, y: 68 },
  },
  chuong_9_quan_he_trong_tam_giac_dong_quy: {
    sagaName: 'Vương Quốc Samurai Wano Kuni',
    islandCode: 'WANO_KUNI',
    themeSymbol: '🐲',
    bossName: 'Tứ Hoàng Kaido Bách Thú',
    bossTitle: 'Sinh Vật Mạnh Nhất Thế Giới',
    bossIcon: '🔥',
    bossType: 'final',
    examSetId: 'toan7_pt_05',
    bountyReward: '4,611,100,000 ฿',
    mapCoords: { x: 88, y: 42 },
  },
  chuong_10_hinh_khoi_trong_thuc_tien: {
    sagaName: 'Hòn Đảo Cuối Cùng Laugh Tale',
    islandCode: 'LAUGH_TALE',
    themeSymbol: '👑',
    bossName: 'Vua Hải Tặc Gol D. Roger',
    bossTitle: 'Chủ Nhân Kho Báu One Piece',
    bossIcon: '🌟',
    bossType: 'final',
    examSetId: 'toan7_pt_06',
    bountyReward: '5,564,800,000 ฿',
    mapCoords: { x: 92, y: 18 },
  },
};

export function getRealmMeta(chapterId?: string, fallbackIndex = 0): OnePieceRealmMeta {
  if (chapterId && ONE_PIECE_REALMS_CONFIG[chapterId]) {
    return ONE_PIECE_REALMS_CONFIG[chapterId];
  }
  const defaultCoords = [
    { x: 12, y: 78 }, { x: 25, y: 62 }, { x: 38, y: 35 }, { x: 50, y: 58 },
    { x: 62, y: 74 }, { x: 55, y: 88 }, { x: 68, y: 44 }, { x: 78, y: 68 },
    { x: 88, y: 42 }, { x: 92, y: 18 }
  ];
  const idx = Math.max(0, fallbackIndex % defaultCoords.length);
  return {
    sagaName: `Hải Trình Đại Hải Trình ${idx + 1}`,
    islandCode: `ISLAND_${idx + 1}`,
    themeSymbol: '🧭',
    bossName: `Thuyền Trưởng Vùng Biển ${idx + 1}`,
    bossTitle: 'Trùm Hải Trình',
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

    // Alternating levels within each chapter
    const levels: GameLevel[] = chap.topics.map((top, topIdx) => {
      const isPicture = topIdx % 2 === 0;
      const gameType = isPicture ? 'picture' : 'treasure';

      return {
        id: `${chap.id}_lvl_${topIdx + 1}`,
        worldId: chap.id,
        levelNumber: topIdx + 1,
        title: isPicture
          ? `Ải ${topIdx + 1}: Giải Mã Poneglyph - ${top.shortName}`
          : `Ải ${topIdx + 1}: Thâm Nhập Căn Cứ - ${top.shortName}`,
        subtitle: isPicture
          ? 'Tính toán số học để giải mã văn tự cổ Joy Boy'
          : 'Vượt chướng ngại vật & giải bài toán đố thực tế',
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
    levels.push({
      id: `${chap.id}_boss`,
      worldId: chap.id,
      levelNumber: levels.length + 1,
      title: `QUYẾT ĐẤU TRÙM ARC: ${realmMeta.bossName}`,
      subtitle:
        realmMeta.bossType === 'midterm'
          ? `Chiến dịch Giữa Kì • Tiền thưởng ${realmMeta.bountyReward}`
          : realmMeta.bossType === 'final'
          ? `Đại chiến Cuối Kì • Tiền thưởng ${realmMeta.bountyReward}`
          : `Đề tổng ôn chuyên đề • Thức tỉnh Haki Bá Vương`,
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
      name: `Hải Trình ${chapIdx + 1}: ${realmMeta.sagaName}`,
      shortName: chap.shortName,
      description: `${chap.description} • Địa bàn: ${realmMeta.sagaName}`,
      color: chap.color,
      themeIcon: realmMeta.themeSymbol,
      levels,
    };
  });
}
