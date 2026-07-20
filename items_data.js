/*
 * items_data.js
 * ─────────────────────────────────────────────────────────────
 * База данных предметов Elemental Dungeons (Value List / Dev Tool).
 * Вынесена из index.html отдельным файлом, чтобы редактировать
 * предметы, статы и цены не трогая основной код сайта.
 *
 * Содержимое:
 *   - Таблицы статов оружия и брони по роллам (CB, DB, DD2, ... FZH, LZS, HKR, KRS, VS, HVS)
 *   - REFORGE_MODS / REFORGES — модификаторы и список рероллов
 *   - RARITY — метки и CSS-классы редкости
 *   - GROWTH_RATE — коэффициент роста
 *   - UPGRADE_COSTS — стоимость апгрейда по уровням
 *   - GODLY_AUTO — предметы с авто-отображением колонки Godly
 *   - ITEMS — оружие (ITEMS.weapon) и броня (ITEMS.armor)
 *   - ACC_DATA — реликвии (underworld / angel / extra)
 *   - IMAGE_PATHS — пути к картинкам предметов
 *
 * ВАЖНО: этот файл должен подключаться <script src="items_data.js">
 * ДО основного скрипта index.html, так как index.html использует
 * эти переменные (ITEMS, ACC_DATA, RARITY и т.д.) напрямую.
 * ─────────────────────────────────────────────────────────────
 */

const CB  = {1:8032.5,2:8112.825,3:8193.15,4:8273.475,5:8353.8,6:8434.125,7:8514.45,8:8594.775,9:8675.1,10:8755.425,11:8835.75};
const DB  = {1:6300,2:6363,3:6426,4:6489,5:6552,6:6615,7:6678,8:6741,9:6804,10:6867,11:6930};
const DD2 = {6:5126.44,7:5175.298,8:5224.156,9:5273.014,10:5321.872,11:5370.73};
const TL  = {1:7875,2:7953.75,3:8032.5,4:8111.25,5:8190,6:8268.75,7:8347.5,8:8426.25,9:8505,10:8583.75,11:8662.5};
const TLE = {1:7350,2:7423.5,3:7497,4:7570.5,5:7644,6:7717.5,7:7791,8:7864.5,9:7938,10:8011.5,11:8085};
const CUF = {1:4462.5,2:4507.125,3:4551.75,4:4596.375,5:4641,6:4685.625,7:4730.25,8:4774.875,9:4819.5,10:4864.125,11:4908.75};
const CUW = {1:6300,2:6363,3:6426,4:6489,5:6552,6:6615,7:6678,8:6741,9:6804,10:6867,11:6930};
const WS = {1:8925,2:9014.25,3:9103.5,4:9192.75,5:9282,6:9371.25,7:9460.5,8:9549.75,9:9639,10:9728.25,11:9817.5};
const DCR = {1:4725,2:4772.25,3:4819.5,4:4866.75,5:4914,6:4961.25,7:5008.5,8:5055.75,9:5103,10:5150.25,11:5197.5};
const ME  = {1:6300,2:6363,3:6426,4:6489,5:6552,6:6615,7:6678,8:6741,9:6804,10:6867,11:6930};
const GLS = {1:4777.5,2:4825.275,3:4873.05,4:4920.825,5:4968.6,6:5016.375,7:5064.15,8:5111.925,9:5159.7,10:5207.475,11:5255.25};
const VLS = {1:3727.5,2:3764.775,3:3802.05,4:3839.325,5:3876.6,6:3913.875,7:3951.15,8:3988.425,9:4025.7,10:4062.975,11:4100.25};
const SRS = {1:5040,2:5090.4,3:5140.8,4:5191.2,5:5241.6,6:5292,7:5342.4,8:5392.8,9:5443.2,10:5493.6,11:5544};
const EAS = {1:8190,2:8271.9,3:8353.8,4:8435.7,5:8517.6,6:8599.5,7:8681.4,8:8763.3,9:8845.2,10:8927.1,11:9009};
const CBA = {1:2100,2:2121,3:2142,4:2163,5:2184,6:2205,7:2226,8:2247,9:2268,10:2289,11:2310};
const GBL = {1:42,2:42.42,3:42.84,4:43.26,5:43.68,6:44.1,7:44.52,8:44.94,9:45.36,10:45.78,11:46.2};
const LNSFMR = {1:31.5,2:31.815,3:32.13,4:32.445,5:32.76,6:33.075,7:33.39,8:33.705,9:34.02,10:34.335,11:34.65};
const WB = {1:10500,2:10605,3:10710,4:10815,5:10920,6:11025,7:11130,8:11235,9:11340,10:11445,11:11550};
const SS = {1:7350,2:7423.5,3:7497,4:7570.5,5:7644,6:7717.5,7:7791,8:7864.5,9:7938,10:8011.5,11:8085};
const FB = {1:15750,2:15907.5,3:16065,4:16222.5,5:16380,6:16537.5,7:16695,8:16852.5,9:17010,10:17167.5,11:17325};
const RN = {1:6300,2:6363,3:6426,4:6489,5:6552,6:6615,7:6678,8:6741,9:6804,10:6867,11:6930};
const TBLE = {1:7875,2:7953.75,3:8032.5,4:8111.25,5:8190,6:8268.75,7:8347.5,8:8426.25,9:8505,10:8583.75,11:8662.5};
const HMCQB = {1:5250,2:5302.5,3:5355,4:5407.5,5:5460,6:5512.5,7:5565,8:5617.5,9:5670,10:5722.5,11:5775};
const TB = {1:8400,2:8484,3:8568,4:8652,5:8736,6:8820,7:8904,8:8988,9:9072,10:9156,11:9240};
const HMLR = {1:6037.5,2:6097.875,3:6158.25,4:6218.625,5:6279,6:6339.375,7:6399.75,8:6460.125,9:6520.5,10:6580.875,11:6641.25};
const AV = {1:8452.5,2:8537.025,3:8621.55,4:8706.075,5:8790.6,6:8875.125,7:8959.65,8:9044.175,9:9128.7,10:9213.225,11:9297.75};

const FZH = {
  Helmet:     {1:787.5,2:795.375,3:803.25,4:811.125,5:819,6:826.875,7:834.75,8:842.625,9:850.5,10:858.375,11:866.25},
  Chestplate: {1:708.85,2:715.9074,3:722.9648,4:730.0222,5:737.0796,6:744.137,7:751.1944,8:758.2518,9:765.3092,10:772.3666,11:779.424},
  Leggings:   {1:682.5,2:689.317,3:696.134,4:702.951,5:709.768,6:716.585,7:723.402,8:730.219,9:737.036,10:743.853,11:750.67}
};
const LZS = {
  Helmet:     {1:577.5,2:583.275,3:589.05,4:594.825,5:600.6,6:606.375,7:612.15,8:617.925,9:623.7,10:629.475,11:635.25},
  Chestplate: {1:603.75,2:609.7875,3:615.825,4:621.8625,5:627.9,6:633.9375,7:639.975,8:646.0125,9:652.05,10:658.0875,11:664.125},
  Leggings:   {1:682.5,2:689.317,3:696.134,4:702.951,5:709.768,6:716.585,7:723.402,8:730.219,9:737.036,10:743.853,11:750.67}
};
const HKR = {
  Helmet:     {1:840.0003,2:848.40033,3:856.80036,4:865.20039,5:873.60042,6:882.00045,7:890.40048,8:898.80051,9:907.20054,10:915.60057,11:924.0006},
  Chestplate: {1:840.0003,2:848.40033,3:856.80036,4:865.20039,5:873.60042,6:882.00045,7:890.40048,8:898.80051,9:907.20054,10:915.60057,11:924.0006},
  Leggings:   {1:840.0003,2:848.40033,3:856.80036,4:865.20039,5:873.60042,6:882.00045,7:890.40048,8:898.80051,9:907.20054,10:915.60057,11:924.0006}
};
const KRS = {
  Helmet:     {1:787.5,2:795.375,3:803.25,4:811.125,5:819,6:826.875,7:834.75,8:842.625,9:850.5,10:858.375,11:866.25},
  Chestplate: {1:787.5,2:795.375,3:803.25,4:811.125,5:819,6:826.875,7:834.75,8:842.625,9:850.5,10:858.375,11:866.25},
  Leggings:   {1:787.5,2:795.375,3:803.25,4:811.125,5:819,6:826.875,7:834.75,8:842.625,9:850.5,10:858.375,11:866.25}
};

const VS = {
  Helmet:     {1:1050,2:1060.5,3:1071,4:1081.5,5:1092,6:1102.5,7:1113,8:1123.5,9:1134,10:1144.5,11:1155},
  Chestplate: {1:1050,2:1060.5,3:1071,4:1081.5,5:1092,6:1102.5,7:1113,8:1123.5,9:1134,10:1144.5,11:1155},
  Leggings:   {1:1050,2:1060.5,3:1071,4:1081.5,5:1092,6:1102.5,7:1113,8:1123.5,9:1134,10:1144.5,11:1155}
};

const HVS = {
  Helmet:     {1:1575,2:1590.75,3:1606.5,4:1622.25,5:1638,6:1653.75,7:1669.5,8:1685.25,9:1701,10:1716.75,11:1732.5},
  Chestplate: {1:1575,2:1590.75,3:1606.5,4:1622.25,5:1638,6:1653.75,7:1669.5,8:1685.25,9:1701,10:1716.75,11:1732.5},
  Leggings:   {1:1575,2:1590.75,3:1606.5,4:1622.25,5:1638,6:1653.75,7:1669.5,8:1685.25,9:1701,10:1716.75,11:1732.5},
};

const REFORGE_MODS = {
  Vicious:1.4,Cruel:1.3,Savage:1.1,Dangerous:1.1,Frenzied:1.3,
  Furious:1.2,Legendary:1.2,Hasty:1.1,Swift:1.0,Relentless:1.2,
  Precise:1.0,Superior:1.2,Godly:1.5,Ruthless:1.3,Murderous:0.9,
  Mystical:1.1,Mythical:1.4
};
const REFORGES = [
  {name:"Godly",     dmg:"+50%", crit:"+20%", knk:"+20%"},
  {name:"Vicious",   dmg:"+40%", crit:"-20%", knk:"0%"},
  {name:"Mythical",  dmg:"+40%", crit:"+30%", knk:"+30%"},
  {name:"Cruel",     dmg:"+30%", crit:"0%",   knk:"+20%"},
  {name:"Frenzied",  dmg:"+30%", crit:"+20%", knk:"+20%"},
  {name:"Ruthless",  dmg:"+30%", crit:"+10%", knk:"+20%"},
  {name:"Furious",   dmg:"+20%", crit:"0%",   knk:"+30%"},
  {name:"Legendary", dmg:"+20%", crit:"+10%", knk:"+10%"},
  {name:"Relentless",dmg:"+20%", crit:"+20%", knk:"+20%"},
  {name:"Superior",  dmg:"+20%", crit:"+10%", knk:"+10%"},
  {name:"Savage",    dmg:"+10%", crit:"-10%", knk:"-10%"},
  {name:"Dangerous", dmg:"+10%", crit:"0%",   knk:"0%"},
  {name:"Hasty",     dmg:"+10%", crit:"+20%", knk:"+10%"},
  {name:"Mystical",  dmg:"+10%", crit:"+30%", knk:"0%"},
  {name:"Swift",     dmg:"0%",   crit:"+30%", knk:"0%"},
  {name:"Precise",   dmg:"0%",   crit:"+20%", knk:"+10%"},
  {name:"Murderous", dmg:"-10%", crit:"-10%", knk:"-30%"}
];

const RARITY = {
  legendary: { label: 'Legendary', cssClass: 'rarity-legendary' },
  mythic:    { label: 'Mythic',    cssClass: 'rarity-mythic'    },
  ascended:  { label: 'Ascended',  cssClass: 'rarity-ascended'  },
  secret:    { label: 'Secret',    cssClass: 'rarity-secret'    },
};

const GROWTH_RATE = 1/21;

const UPGRADE_COSTS = {
   1:500,    2:1500,   3:2750,   4:4000,   5:6000,   6:8000,   7:10500,  8:13000,  9:15500,  10:18000,
  11:21000, 12:24500, 13:28000, 14:32000, 15:35000, 16:45000, 17:57500, 18:70000, 19:73000,  20:88000,
  21:100000,  22:150000,  23:250000,  24:400000,  25:550000,  26:700000,  27:900000,  28:1100000, 29:1300000, 30:1800000,
  31:2300000, 32:2800000, 33:3300000, 34:3800000, 35:4300000, 36:4800000, 37:5300000, 38:5800000, 39:6300000, 40:6800000,
  41:7300000, 42:7800000, 43:8300000, 44:8800000, 45:9300000, 46:9800000, 47:10300000,48:10800000,49:11300000,50:11800000,
  51:12300000,52:12800000,53:13300000,54:13800000,55:14300000,56:14800000,57:15300000,58:15800000,59:16300000,60:16800000,
  61:17300000,62:17800000,63:18300000,64:18800000,65:19300000,66:19800000,67:20300000,68:20800000,69:21300000,70:21800000,
  71:22300000,72:22800000,73:23300000,74:23800000,75:24300000,76:24800000,77:25300000,78:25800000,79:26300000,80:26800000,
  81:27800000,82:28800000,83:29800000,84:30800000,85:31800000,86:32800000,87:33800000,88:34800000,89:35800000,90:36800000,
  91:37800000,92:38800000,93:39800000,94:40800000,95:41800000,96:42800000,97:43800000,98:44800000,99:45800000
};

// Предметы, для которых в таблице роллов автоматически показывается
// колонка Godly (и Corrupted & Godly) — используется в index.html.
const GODLY_AUTO = new Set(['asc_ws','asc_mb','asc_lk','asc_me','asc_at','asc_ad','asc_av','gl_st','vl_st','sr_st','as_vq']);

const ITEMS = {
  weapon:[
    {id:'asc_at',name:"Abyssal Trident",               stats:CB,  maxUpg:74,  rarity:'ascended',  delay:0.5,   minRoll:6},
    {id:'asc_ad',name:"Ascended Daggers",              stats:DD2, maxUpg:74,  rarity:'ascended',  delay:0.25,  minRoll:6},
    {id:'asc_av',name:"Ascended Voidblade",            stats:CB,  maxUpg:74,  rarity:'ascended',  delay:0.75,  minRoll:6},
    {id:'ct_ba', name:"Contest Battleaxe",             stats:CBA,  maxUpg:99,  rarity:'secret',    delay:0.5,   minRoll:1},
    {id:'cb',    name:"Conqueror's Blade",             stats:CB,  maxUpg:45,  rarity:'mythic',    delay:0.5,   minRoll:1},
    {id:'cup',   name:"Cupid's Fury",                  stats:CUF, maxUpg:74,  rarity:'ascended',  delay:0.5,   minRoll:1},
    {id:'cup_sw',name:"Cupid's Wrath",                 stats:CUW, maxUpg:99,  rarity:'secret',    delay:0.5,   minRoll:1},
    {id:'dcr',   name:"Diamond Cracker",               stats:DCR, maxUpg:34,  rarity:'legendary', delay:0.5,   minRoll:1},
    {id:'db',    name:"Doombringer",                   stats:DB,  maxUpg:34,  rarity:'legendary', delay:0.5,   minRoll:1},
    {id:'ea_st', name:"Easter Spear",                  stats:EAS, maxUpg:99,  rarity:'secret',    delay:0.5,   minRoll:1},
    {id:'gb_ln', name:"Gubby Launcher",                stats:GBL, maxUpg:99,  rarity:'secret',    delay:1,     minRoll:1},
    {id:'gl_st', name:"Glitched Staff",                stats:GLS, maxUpg:99,  rarity:'secret',    delay:0.5,   minRoll:6},
    {id:'asc_lk',name:"Lightning Katana V2",           stats:CB,  maxUpg:74,  rarity:'ascended',  delay:0.5,   minRoll:6},
    {id:'lnsfmr',name:"Like N' Subscribe For More Content", stats:LNSFMR, maxUpg:99, rarity:'secret', delay:0.5, minRoll:1},
    {id:'me',    name:"Magma's Edge",                  stats:ME,  maxUpg:44,  rarity:'mythic',    delay:0.6,   minRoll:1},
    {id:'asc_me',name:"Ascended Magma Edge",           stats:CB,  maxUpg:74,  rarity:'ascended',  delay:0.65,  minRoll:6},
    {id:'asc_mb',name:"Menta Blade V2",                stats:CB,  maxUpg:74,  rarity:'ascended',  delay:0.5,   minRoll:6},
    {id:'sr_st', name:"Serious Staff",                 stats:SRS, maxUpg:99,  rarity:'secret',    delay:0.5,   minRoll:6},
    {id:'tl',    name:"Timelost Conqueror's Blade",    stats:TL,  maxUpg:44,  rarity:'mythic',    delay:0.45,  minRoll:1},
    {id:'tl_le', name:"Timelost Conqueror's Blade LE", stats:TLE, maxUpg:44,  rarity:'mythic',    delay:0.375, minRoll:1},
    {id:'vl_st', name:"Viltron's Staff",               stats:VLS, maxUpg:74,  rarity:'ascended',  delay:0.4,   minRoll:6},
    {id:'asc_ws',name:"Ascended Wooden Sword",         stats:WS,  maxUpg:74,  rarity:'ascended',  delay:0.5,   minRoll:11},
    {id:'sh_sc', name:"Shadow Scythe",                 stats:SS,  maxUpg:74,  rarity:'ascended',  delay:0.5,   minRoll:1},
    {id:'wb',    name:"Curious Wooden Bow",            stats:WB,  maxUpg:74,  rarity:'ascended',  delay:0.5,   minRoll:1},
    {id:'fb',    name:"Firework Bow",                  stats:FB,  maxUpg:44,  rarity:'mythic',    delay:0.5,   minRoll:1},
    {id:'tb',    name:"Terrablade",                    stats:TB,  maxUpg:44,    rarity:'mythic',  delay:0.5,   minRoll:1},
    {id:'tble',  name:"Terrablade LE",                 stats:TBLE,  maxUpg:99,  rarity:'secret',  delay:0.5,   minRoll:1},
    {id:'rn',    name:"Rainbow Noodle",                stats:WB,    maxUpg:44,  rarity:'mythic',  delay:0.5,   minRoll:1},
    {id:'hm_lr',  name:"HydroMaxx LR",                 stats:HMLR,  maxUpg:99,  rarity:'secret',  delay:0.5,   minRoll:1},
    {id:'hm_cqb', name:"HydroMaxx CQB",                stats:HMCQB, maxUpg:44,  rarity:'mythic',  delay:0.5,   minRoll:1},
    {id:'pn',    name:"Pool Noodle",                   stats:RN,    maxUpg:34,  rarity:'legendary', delay:0.5,   minRoll:1},
    {id:'lws',   name:"Lionel's War Sword",            stats:SS,    maxUpg:44,  rarity:'mythic',    delay:0.4,   minRoll:1},
    {id:'as_vq', name:"Ascendant Vanquisher",          stats:AV,    maxUpg:99,  rarity:'secret',    delay:0.5,   minRoll:6},
    {id:'hm_mini', name:"HydroMaxx MINI",              stats:HMCQB, maxUpg:99,  rarity:'secret',    delay:0.5,   minRoll:1},
    {id:'hm_lrxl', name:"HydroMaxx LRXL",              stats:HMCQB, maxUpg:99,  rarity:'secret',    delay:0.5,   minRoll:1},
  ],
  armor:[
    {id:'fzh', name:"Furious Zeus Set",    stats:FZH, maxUpg:45, isArmor:true, rarity:'mythic',    minRoll:1},
    {id:'hds', name:"Hades Set",           stats:FZH, maxUpg:45, isArmor:true, rarity:'mythic',    minRoll:1},
    {id:'hks', name:"Heroic Kronax Set",   stats:HKR, maxUpg:44, isArmor:true, rarity:'mythic',    minRoll:1},
    {id:'ks',  name:"Kronax Set",          stats:KRS, maxUpg:44, isArmor:true, rarity:'mythic',    minRoll:1},
    {id:'lzs', name:"Zeus Set (Legendary)",stats:LZS, maxUpg:34, isArmor:true, rarity:'legendary', minRoll:1},
    {id:'vs',  name:"Viltron Set",         stats:VS,  maxUpg:44, isArmor:true, rarity:'mythic',    minRoll:1},
    {id:'hvs',  name:"Heroic Viltron Set", stats:HVS, maxUpg:44, isArmor:true, rarity:'mythic',    minRoll:1},
  ]
};

// Автоматическая сортировка по алфавиту (по name), чтобы не нужно было вручную
// следить за порядком добавления предметов в массивах выше.
Object.values(ITEMS).forEach(list => {
  list.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base', numeric: true }));
});

// ── ACCESSORIES DATA ──
const ACC_DATA = {
  underworld: [
    { id:'ancient_runes',    name:'Ancient Runes',            type:'sword',  rolls:{1:19.80,2:20.00,3:20.20,4:20.39,5:20.59,6:20.79,7:20.99,8:21.19,9:21.38,10:21.58,11:21.78} },
    { id:'holy_pendant',     name:'Holy Pendant',             type:'health', rolls:{1:17.60,2:17.78,3:17.95,4:18.13,5:18.30,6:18.48,7:18.66,8:18.83,9:19.01,10:19.18,11:19.36} },
    { id:'lunar_necklace',   name:'Lunar Necklace',           type:'magic',  rolls:{1:17.60,2:17.78,3:17.95,4:18.13,5:18.30,6:18.48,7:18.66,8:18.83,9:19.01,10:19.18,11:19.36} },
    { id:'sorcerous_ring',   name:'Sorcerous Ring',           type:'magic',  rolls:{1:19.80,2:20.00,3:20.20,4:20.39,5:20.59,6:20.79,7:20.99,8:21.19,9:21.38,10:21.58,11:21.78} },
    { id:'sword_necklace_uw',name:'Sword Damage Necklace',    type:'sword',  rolls:{1:17.60,2:17.78,3:17.95,4:18.13,5:18.30,6:18.48,7:18.66,8:18.83,9:19.01,10:19.18,11:19.36} },
    { id:'tranquil_necklace',name:'Tranquil Necklace',        type:'health', rolls:{1:19.80,2:20.00,3:20.20,4:20.39,5:20.59,6:20.79,7:20.99,8:21.19,9:21.38,10:21.58,11:21.78} },
    { id:'wise_necklace',    name:'Wise Necklace',            type:'health', rolls:{1:17.60,2:17.78,3:17.95,4:18.13,5:18.30,6:18.48,7:18.66,8:18.83,9:19.01,10:19.18,11:19.36} },
  ],
  angel: [
    { id:'angels_holy_pendant',  name:"Angel's Holy Pendant",      type:'sword',  rolls:{1:23.10,2:23.33,3:23.56,4:23.79,5:24.02,6:24.26,7:24.49,8:24.72,9:24.95,10:25.18,11:25.41} },
    { id:'angels_lunar_necklace',name:"Angel's Lunar Necklace",    type:'magic',  rolls:{1:26.40,2:26.66,3:26.93,4:27.19,5:27.46,6:27.72,7:27.98,8:28.25,9:28.51,10:28.78,11:29.04} },
    { id:'angels_wise_necklace', name:"Angel's Wise Necklace",     type:'health', rolls:{1:24.20,2:24.44,3:24.68,4:24.93,5:25.17,6:25.41,7:25.65,8:25.89,9:26.14,10:26.38,11:26.62} },
    { id:'celestial_ring',       name:'Celestial Ring',            type:'magic',  rolls:{1:27.50,2:27.78,3:28.05,4:28.33,5:28.60,6:28.88,7:29.15,8:29.43,9:29.70,10:29.98,11:30.25} },
    { id:'skyborne_runes',       name:'Skyborne Runes',            type:'sword',  rolls:{1:23.10,2:23.33,3:23.56,4:23.79,5:24.02,6:24.26,7:24.49,8:24.72,9:24.95,10:25.18,11:25.41} },
    { id:'vitalis_necklace',     name:'Vitalis Necklace',          type:'health', rolls:{1:25.30,2:25.55,3:25.81,4:26.06,5:26.31,6:26.57,7:26.82,8:27.07,9:27.32,10:27.58,11:27.83} },
  ],
  extra: [
    { id:'contest_ring',         name:"Contest Ring",              type:'magic',  rolls:{1:38.50,2:38.89,3:39.27,4:39.66,5:40.04,6:40.42,7:40.81,8:41.20,9:41.58,10:41.97,11:42.35} },    
    { id:'easter_ring',          name:"Easter Ring",               type:'easter',  rolls:{1:11.00,2:11.11,3:11.22,4:11.33,5:11.44,6:11.55,7:11.66,8:11.77,9:11.88,10:11.99,11:12.10} },
    { id:'graviton_ring',        name:"Graviton Ring",             type:'magic',  rolls:{1:27.50,2:27.78,3:28.05,4:28.33,5:28.60,6:28.88,7:29.15,8:29.43,9:29.70,10:29.98,11:30.25} },
    { id:'lord_prismas',         name:"Lord Prisma's Ring",       type:'magic',  rolls:{1:38.50,2:38.89,3:39.27,4:39.66,5:40.04,6:40.42,7:40.81,8:41.20,9:41.58,10:41.97,11:42.35} },
    { id:'lucky_charm_banner',   name:"Lucky Charm Banner",        type:'luck',   rolls:{1:5.50,2:5.56,3:5.61,4:5.67,5:5.72,6:5.78,7:5.83,8:5.89,9:5.94,10:6.00,11:6.05} },
    { id:'torrential_aspect',    name:"Torrential Aspect",         type:'magic',  rolls:{1:33.00,2:33.33,3:33.66,4:33.99,5:34.32,6:34.65,7:34.98,8:35.31,9:35.64,10:35.97,11:36.30} },
    { id:'fission_ring',         name:"Fission Ring",              type:'magic',  rolls:{1:38.50,2:38.89,3:39.27,4:39.66,5:40.04,6:40.42,7:40.81,8:41.20,9:41.58,10:41.97,11:42.35} },
  ]
};

// Та же автосортировка по алфавиту, что и для ITEMS.
Object.values(ACC_DATA).forEach(list => {
  list.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base', numeric: true }));
});

let currentAccSubcat = 'underworld';
let currentAccItem = null;

const IMAGE_PATHS = {
  baseDir: 'images/Stuff/',
  weapons: {
    'cb':       'Weapons/conqblade.webp',
    'tl':       'Weapons/tlconqblade.webp',
    'tl_le':    'Weapons/tlconqblade.webp',
    'db':       'Weapons/doombringer.webp',
    'dcr':      'Weapons/diamondcrack.webp',
    'asc_mb':   'Weapons/mentav2.webp',
    'asc_ad':   'Weapons/ascdaggers.webp',
    'asc_at':   'Weapons/abysstrident.webp',
    'asc_av':   'Weapons/ascvoidblade.webp',
    'cup':      'Weapons/cupidfury.webp',
    'cup_sw':   'Weapons/cupidwrath.webp',
    'asc_lk':   'Weapons/lightkatanav2.webp',
    'me':       'Weapons/magmaedge.webp',
    'asc_me':   'Weapons/magmaedgev2.webp',
    'asc_ws':   'Weapons/woodenv2.webp',
    'gl_st':    'Weapons/glitchedstaff.webp',
    'vl_st':    'Weapons/glitchedstaff.webp',
    'sr_st':    'Weapons/seriously.webp',
    'ea_st':    'Weapons/easterstaff.webp',
    'ct_ba':    'Weapons/cupidwrath.webp',
    'gb_ln':    'Weapons/gubbylauncher.webp',
    'lnsfmr':   'Weapons/lnsfmr.webp',
    'sh_sc':    'Weapons/shadowscythe.webp',
    'wb':       'Weapons/woodenbow.webp',
    'fb':       'Weapons/fireworkbow.webp',
    'tb':       'Weapons/terrablade.webp',
    'tble':     'Weapons/terrablade.webp',
    'rn':       'Weapons/rainbownoodle.webp',
    'hm_cqb':   'Weapons/hydromaxxcqb.webp',
    'hm_lr':    'Weapons/hydromaxxlr.webp',
    'pn':       'Weapons/poolnoodle.webp',
    'lws':      'Weapons/conqblade.webp',
    'as_vq':    'Weapons/magmaedgev2.webp',
    'hm_lrxl':  'Weapons/hydromaxxlrxl.webp',
    'hm_mini':  'Weapons/hydromaxxmini.webp',
  },
  armors: {
    'fzh': { Helmet:'Armors/fzhelmet.webp', Chestplate:'Armors/fzchest.webp', Leggings:'Armors/fzleggings.webp' },
    'hds': { Helmet:'Armors/hadeshelmet.webp', Chestplate:'Armors/hadeschest.webp', Leggings:'Armors/hadesleggings.webp' },
    'hks': { Helmet:'Armors/kronaxhelmet.webp', Chestplate:'Armors/kronaxchest.webp', Leggings:'Armors/kronaxleggings.webp' },
    'ks':  { Helmet:'Armors/kronaxhelmet.webp', Chestplate:'Armors/kronaxchest.webp', Leggings:'Armors/kronaxleggings.webp' },
    'lzs': { Helmet:'Armors/zhelmet.webp', Chestplate:'Armors/zchest.webp', Leggings:'Armors/zleggings.webp' },
    'vs':  { Helmet:'Armors/vhelmet.webp', Chestplate:'Armors/vchest.webp', Leggings:'Armors/vleggings.webp' },
    'hvs':  { Helmet:'Armors/vhelmet.webp', Chestplate:'Armors/vchest.webp', Leggings:'Armors/vleggings.webp' }
  }
};
