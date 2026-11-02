import { GameWorld, GameLevel } from './types';
import { TOAN7_CHAPTERS_METADATA } from '../../data/toan7/chaptersMetadata';
import { MYSTERY_IMAGES } from '../mysterious-picture/mysteryImages';

export interface AnimeWorldMeta {
  realmName: string;
  islandCode: string;
  themeSymbol: string;
  bossName: string;
  bossIcon: string;
  bossType: 'topic' | 'midterm' | 'final';
  examSetId: string;
  mapCoords: { x: number; y: number }; // Percentage on Grand Line Map canvas
}

export const ANIME_REALMS_CONFIG: Record<string, AnimeWorldMeta> = {
  chuong_1_so_huu_ti: {
    realmName: 'Làng Cối Xay Gió & Làng Lá',
    islandCode: 'KONOHA_FOOSHA',
    themeSymbol: '🍃',
    bossName: 'Liên Minh Buggy & Quỷ Kiếm Zabuza',
    bossIcon: '⚔️',
    bossType: 'topic',
    examSetId: 'toan7_pt_01',
    mapCoords: { x: 12, y: 78 },
  },
  chuong_2_so_thuc: {
    realmName: 'Sa Mạc Alabasta & Làng Cát',
    islandCode: 'ALABASTA_SUNA',
    themeSymbol: '🏜️',
    bossName: 'Chúa Tể Cát Crocodile & Gaara',
    bossIcon: '🦂',
    bossType: 'midterm',
    examSetId: 'toan7_pt_02',
    mapCoords: { x: 25, y: 62 },
  },
  chuong_3_goc_va_duong_thang_song_song: {
    realmName: 'Đảo Trên Trời Skypiea & Làng Mây',
    islandCode: 'SKYPIEA_KUMO',
    themeSymbol: '⚡',
    bossName: 'Lôi Thần Enel & Raikage Đệ Tứ',
    bossIcon: '⚡',
    bossType: 'midterm',
    examSetId: 'toan7_pt_02',
    mapCoords: { x: 38, y: 35 },
  },
  chuong_4_tam_giac_bang_nhau: {
    realmName: 'Đảo Tư Pháp Enies Lobby & Thủy Quốc',
    islandCode: 'ENIES_LOBBY',
    themeSymbol: '⚖️',
    bossName: 'Thủ Lĩnh Lục Thức Rob Lucci CP9',
    bossIcon: '🐆',
    bossType: 'final',
    examSetId: 'toan7_pt_03',
    mapCoords: { x: 50, y: 58 },
  },
  chuong_5_thong_ke_thu_thap_du_lieu: {
    realmName: 'Quần Đảo Sabaody & Rừng Cây Khổng Lồ',
    islandCode: 'SABAODY_FOREST',
    themeSymbol: '🌳',
    bossName: 'Đô Đốc Ánh Sáng Kizaru & Orochimaru',
    bossIcon: '✨',
    bossType: 'final',
    examSetId: 'toan7_pt_03',
    mapCoords: { x: 62, y: 74 },
  },
  chuong_6_ti_le_thuc_va_dai_luong_ti_le: {
    realmName: 'Nhà Ngục Đại Tầng Impel Down',
    islandCode: 'IMPEL_DOWN',
    themeSymbol: '⛓️',
    bossName: 'Giám Ngục Độc Dược Magellan',
    bossIcon: '☠️',
    bossType: 'midterm',
    examSetId: 'toan7_pt_04',
    mapCoords: { x: 55, y: 88 },
  },
  chuong_7_bieu_thuc_dai_so_va_da_thuc: {
    realmName: 'Tổng Bộ Hải Quân Marineford & Hội Nghị Kage',
    islandCode: 'MARINEFORD',
    themeSymbol: '⚓',
    bossName: 'Đại Đô Đốc Akainu & Lãnh Đạo Danzo',
    bossIcon: '🌋',
    bossType: 'midterm',
    examSetId: 'toan7_pt_04',
    mapCoords: { x: 68, y: 44 },
  },
  chuong_8_bien_co_va_xac_suat: {
    realmName: 'Đảo Người Cá Biển Sâu & Làng Mưa Ame',
    islandCode: 'FISHMAN_AME',
    themeSymbol: '🌧️',
    bossName: 'Thần Tượng Pain Lục Đạo Luân Hồi',
    bossIcon: '👁️',
    bossType: 'final',
    examSetId: 'toan7_pt_05',
    mapCoords: { x: 78, y: 68 },
  },
  chuong_9_quan_he_trong_tam_giac_dong_quy: {
    realmName: 'Vương Quốc Wano & Thung Lũng Tận Cùng',
    islandCode: 'WANO_KUNI',
    themeSymbol: '🐲',
    bossName: 'Tứ Hoàng Kaido & Uchiha Madara Susanoo',
    bossIcon: '🔥',
    bossType: 'final',
    examSetId: 'toan7_pt_05',
    mapCoords: { x: 88, y: 42 },
  },
  chuong_10_hinh_khoi_trong_thuc_tien: {
    realmName: 'Đảo Kho Báu Laugh Tale & Lục Đạo Hiền Nhân',
    islandCode: 'LAUGH_TALE',
    themeSymbol: '👑',
    bossName: 'Vua Hải Tặc Roger & Lục Đạo Tiên Nhân',
    bossIcon: '🌟',
    bossType: 'final',
    examSetId: 'toan7_pt_06',
    mapCoords: { x: 92, y: 18 },
  },
};

export function getRealmMeta(chapterId?: string, fallbackIndex = 0): AnimeWorldMeta {
  if (chapterId && ANIME_REALMS_CONFIG[chapterId]) {
    return ANIME_REALMS_CONFIG[chapterId];
  }
  const defaultCoords = [
    { x: 12, y: 78 }, { x: 25, y: 62 }, { x: 38, y: 35 }, { x: 50, y: 58 },
    { x: 62, y: 74 }, { x: 55, y: 88 }, { x: 68, y: 44 }, { x: 78, y: 68 },
    { x: 88, y: 42 }, { x: 92, y: 18 }
  ];
  const idx = Math.max(0, fallbackIndex % defaultCoords.length);
  return {
    realmName: `Vùng Đất Hải Trình ${idx + 1}`,
    islandCode: `REALM_${idx + 1}`,
    themeSymbol: '🧭',
    bossName: `Trùm Cai Quản Vùng ${idx + 1}`,
    bossIcon: '👑',
    bossType: 'topic',
    examSetId: 'toan7_pt_01',
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
          : `Ải ${topIdx + 1}: Đột Kích Căn Cứ - ${top.shortName}`,
        subtitle: isPicture
          ? 'Giải toán số học mở khóa phong ấn tranh huyền thoại'
          : 'Vượt chướng ngại vật & giải bài toán đố lời văn',
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
      title: `QUYẾT CHIẾN TRÙM: ${realmMeta.bossName}`,
      subtitle:
        realmMeta.bossType === 'midterm'
          ? 'Chiến dịch đề thi Giữa Kì trọng tâm'
          : realmMeta.bossType === 'final'
          ? 'Đại chiến đề thi Cuối Kì toàn diện'
          : 'Tổng ôn chuyên đề & thu phục Haki Bá Vương',
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
      name: `Hải Trình ${chapIdx + 1}: ${realmMeta.realmName}`,
      shortName: chap.shortName,
      description: `${chap.description} • Căn cứ: ${realmMeta.realmName}`,
      color: chap.color,
      themeIcon: realmMeta.themeSymbol,
      levels,
    };
  });
}
