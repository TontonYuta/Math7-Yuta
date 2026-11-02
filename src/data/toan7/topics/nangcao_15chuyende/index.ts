import { Question } from '../../../../types/exam';

import { HSG_CD01_THUC_HIEN_PHEP_TINH } from './cd01_thuc_hien_phep_tinh';
import { HSG_CD02_LUY_THUA_SO_TU_NHIEN } from './cd02_luy_thua_so_tu_nhien';
import { HSG_CD03_TIM_AN_CHUA_BIET } from './cd03_tim_an_chua_biet';
import { HSG_CD04_CHUNG_MINH_CHIA_HET } from './cd04_chung_minh_chia_het';
import { HSG_CD05_SO_NGUYEN_TO_HOP_SO } from './cd05_so_nguyen_to_hop_so';
import { HSG_CD06_SO_CHINH_PHUONG } from './cd06_so_chinh_phuong';
import { HSG_CD07_CAC_DANG_TOAN_PHAN_SO } from './cd07_cac_dang_toan_phan_so';
import { HSG_CD08_BAT_DANG_THUC_GTLN_GTNN } from './cd08_bat_dang_thuc_gtln_gtnn';
import { HSG_CD09_TI_LE_THUC_DAY_TI_SO } from './cd09_ti_le_thuc_day_ti_so';
import { HSG_CD10_TRI_TUYET_DOI } from './cd10_tri_tuyet_doi';
import { HSG_CD11_DA_THUC } from './cd11_da_thuc';
import { HSG_CD12_DONG_DU_THUC } from './cd12_dong_du_thuc';
import { HSG_CD13_NGUYEN_LY_DIRICHLET } from './cd13_nguyen_ly_dirichlet';
import { HSG_CD14_HINH_HOC_NANG_CAO } from './cd14_hinh_hoc_nang_cao';
import { HSG_CD15_HINH_HOC_DE_HSG } from './cd15_hinh_hoc_de_hsg';

export const HSG_15_CHUYEN_DE_QUESTIONS: Question[] = [
  ...HSG_CD01_THUC_HIEN_PHEP_TINH,
  ...HSG_CD02_LUY_THUA_SO_TU_NHIEN,
  ...HSG_CD03_TIM_AN_CHUA_BIET,
  ...HSG_CD04_CHUNG_MINH_CHIA_HET,
  ...HSG_CD05_SO_NGUYEN_TO_HOP_SO,
  ...HSG_CD06_SO_CHINH_PHUONG,
  ...HSG_CD07_CAC_DANG_TOAN_PHAN_SO,
  ...HSG_CD08_BAT_DANG_THUC_GTLN_GTNN,
  ...HSG_CD09_TI_LE_THUC_DAY_TI_SO,
  ...HSG_CD10_TRI_TUYET_DOI,
  ...HSG_CD11_DA_THUC,
  ...HSG_CD12_DONG_DU_THUC,
  ...HSG_CD13_NGUYEN_LY_DIRICHLET,
  ...HSG_CD14_HINH_HOC_NANG_CAO,
  ...HSG_CD15_HINH_HOC_DE_HSG,
];
