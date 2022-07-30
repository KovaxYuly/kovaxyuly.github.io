const PIECES =  { EMPTY : 0, wP : 1, wN : 2, wB : 3,wR : 4, wQ : 5, wK : 6, 
              bP : 7, bN : 8, bB : 9, bR : 10, bQ : 11, bK : 12  };
              
const BRD_FILES = 12;
const BRD_RANKS = 12;
const BRD_SQ_NUM = BRD_FILES * BRD_RANKS;

const FILES =  { FILE_A:0, FILE_B:1, FILE_C:2, FILE_D:3, 
	FILE_E:4, FILE_F:5, FILE_G:6, FILE_H:7, FILE_NONE:8 };
	
const RANKS =  { RANK_1:0, RANK_2:1, RANK_3:2, RANK_4:3, 
	RANK_5:4, RANK_6:5, RANK_7:6, RANK_8:7, RANK_NONE:8 };
	
const COLOURS = { WHITE:0, BLACK:1, BOTH:2 };

const FIRST_GAP_END = 2 * BRD_RANKS;
const LAST_GAP_START = FIRST_GAP_END + 65;
const SQUARES = {
  A1:FIRST_GAP_END + 1, B1:FIRST_GAP_END + 2, C1:FIRST_GAP_END + 3, D1:FIRST_GAP_END + 4,
  E1:FIRST_GAP_END + 5, F1:FIRST_GAP_END + 6, G1:FIRST_GAP_END + 7, H1:FIRST_GAP_END + 8,  
  A8:LAST_GAP_START - 8, B8:LAST_GAP_START - 7, C8:LAST_GAP_START - 6, D8:LAST_GAP_START - 5,
  E8:LAST_GAP_START - 4, F8:LAST_GAP_START - 3, G8:LAST_GAP_START - 2, H8:LAST_GAP_START - 1, 
  NO_SQ:LAST_GAP_START, OFFBOARD:LAST_GAP_START + 1
};

const BOOL = { FALSE:0, TRUE:1 };

var FilesBrd = new Array(BRD_SQ_NUM);
var RanksBrd = new Array(BRD_SQ_NUM);

function FR2SQ(f,r) {
 	return ( (SQUARES.A1 + (f) ) + ( (r) * BRD_FILES ) );
}