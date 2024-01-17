export enum Classification {
  CIANITA_I = 'Cianita I',
  CIANITA_II = 'Cianita II',
  CIANITA_III = 'Cianita III',
  CIANITA_IV = 'Cianita IV',
  OPALA_I = 'Opala I',
  OPALA_II = 'Opala II',
  OPALA_III = 'Opala III',
  OPALA_IV = 'Opala IV',
  OPALA_V = 'Opala V',
  GOETHITA_I = 'Goethita I',
  GOETHITA_II = 'Goethita II',
  GOETHITA_III = 'Goethita III',
  GOETHITA_IV = 'Goethita IV',
  GOETHITA_V = 'Goethita V',
  QUARTZO_I = 'Quartzo I',
  QUARTZO_II = 'Quartzo II',
  QUARTZO_III = 'Quartzo III',
  QUARTZO_IV = 'Quartzo IV',
  QUARTZO_V = 'Quartzo V',
  RUBI_I = 'Rubi I',
  RUBI_II = 'Rubi II',
  RUBI_III = 'Rubi III',
  RUBI_IV = 'Rubi IV',
  RUBI_V = 'Rubi V',
  ESMERALDA_I = 'Esmeralda I',
  ESMERALDA_II = 'Esmeralda II',
  ESMERALDA_III = 'Esmeralda III',
  ESMERALDA_IV = 'Esmeralda IV',
  ESMERALDA_V = 'Esmeralda V',
  DIAMANTE_I = 'Diamante I',
  DIAMANTE_II = 'Diamante II',
  DIAMANTE_III = 'Diamante III',
  DIAMANTE_IV = 'Diamante IV',
  DIAMANTE_V = 'Diamante V',
}

export interface Level {
  id: number;
  description: string;
  begin: number;
  end: number;
}

// enum Classificacao {
//   CIANITA_I = { id: 1, description: 'Cianita I', begin: 0, end: 120 },
//   CIANITA_II = { id: 2, description: 'Cianita II', begin: 120, end: 240 },
//   CIANITA_III = { id: 3, description: 'Cianita III', begin: 240, end: 360 },
//   CIANITA_IV = { id: 4, description: 'Cianita IV', begin: 360, end: 480 },
//   OPALA_I = { id: 5, description: 'Opala I', begin: 480, end: 600 },
//   OPALA_II = { id: 6, description: 'Opala II', begin: 600, end: 720 },
//   OPALA_III = { id: 7, description: 'Opala III', begin: 720, end: 900 },
//   OPALA_IV = { id: 8, description: 'Opala IV', begin: 900, end: 1080 },
//   OPALA_V = { id: 9, description: 'Opala V', begin: 1080, end: 1260 },
//   GOETHITA_I = { id: 10, description: 'Goethita I', begin: 1260, end: 1440 },
//   GOETHITA_II = { id: 11, description: 'Goethita II', begin: 1440, end: 1620 },
//   GOETHITA_III = { id: 12, description: 'Goethita III', begin: 1620, end: 1860 },
//   GOETHITA_IV = { id: 13, description: 'Goethita IV', begin: 1860, end: 2100 },
//   GOETHITA_V = { id: 14, description: 'Goethita V', begin: 2100, end: 2340 },
//   QUARTZO_I = { id: 15, description: 'Quartzo I', begin: 2340, end: 2580 },
//   QUARTZO_II = { id: 16, description: 'Quartzo II', begin: 2580, end: 2820 },
//   QUARTZO_III = { id: 17, description: 'Quartzo III', begin: 2820, end: 3180 },
//   QUARTZO_IV = { id: 18, description: 'Quartzo IV', begin: 3180, end: 3540 },
//   QUARTZO_V = { id: 19, description: 'Quartzo V', begin: 3540, end: 3900 },
//   RUBI_I = { id: 20, description: 'Rubi I', begin: 3900, end: 4260 },
//   RUBI_II = { id: 21, description: 'Rubi II', begin: 4260, end: 4620 },
//   RUBI_III = { id: 22, description: 'Rubi III', begin: 4620, end: 5040 },
//   RUBI_IV = { id: 23, description: 'Rubi IV', begin: 5040, end: 5460 },
//   RUBI_V = { id: 24, description: 'Rubi V', begin: 5460, end: 5880 },
//   ESMERALDA_I = { id: 25, description: 'Esmeralda I', begin: 5880, end: 6300 },
//   ESMERALDA_II = { id: 26, description: 'Esmeralda II', begin: 6300, end: 6720 },
//   ESMERALDA_III = { id: 27, description: 'Esmeralda III', begin: 6720, end: 7560 },
//   ESMERALDA_IV = { id: 28, description: 'Esmeralda IV', begin: 7560, end: 8400 },
//   ESMERALDA_V = { id: 29, description: 'Esmeralda V', begin: 8400, end: 9240 },
//   DIAMANTE_I = { id: 30, description: 'Diamante I', begin: 9240, end: 10080 },
//   DIAMANTE_II = { id: 31, description: 'Diamante II', begin: 10080, end: 10920 },
//   DIAMANTE_III = { id: 32, description: 'Diamante III', begin: 10920, end: 11760 },
//   DIAMANTE_IV = { id: 33, description: 'Diamante IV', begin: 11760, end: 12600 },
//   DIAMANTE_V = { id: 34, description: 'Diamante V', begin: 12600, end: 13440 },
// }