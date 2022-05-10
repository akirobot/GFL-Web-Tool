var _DOLLS = [
    {ID:1, Name:'SAA', Type:'HG', Star:4, Health:400, Ammo:30, Ration:30, DMG:36, EVA: 76, ACC:49, ROF:47, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:2, Name:'M1911', Type:'HG', Star:2, Health:365, Ammo:30, Ration:30, DMG:27, EVA:74, ACC:50, ROF:57, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:3, Name:'M9', Type:'HG', Star:3, Health:380, Ammo:30, Ration:30, DMG:29, EVA:66, ACC:56, ROF:61, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:4, Name:'Python', Type:'HG', Star:5, Health:350, Ammo:30, Ration:30, DMG:40, EVA:82, ACC:81, ROF:49, Move:15, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:5, Name:'M1895', Type:'HG', Star:5, Health:350, Ammo:30, Ration:30, DMG:32, EVA:92, ACC:46, ROF:44, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:6, Name:'Tokarev', Type:'HG', Star:3, Health:430, Ammo:30, Ration:30, DMG:31, EVA:66, ACC:47, ROF:52, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:7, Name:'Stechkin', Type:'HG', Star:4, Health:415, Ammo:30, Ration:30, DMG:28, EVA:66, ACC:44, ROF:65, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:8, Name:'Makarov', Type:'HG', Star:3, Health:315, Ammo:30, Ration:30, DMG:26, EVA:96, ACC:61, ROF:61, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:9, Name:'P38', Type:'HG', Star:2, Health:330, Ammo:30, Ration:30, DMG:28, EVA:81, ACC:49, ROF:57, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:10, Name:'PPK', Type:'HG', Star:2, Health:285, Ammo:30, Ration:30, DMG:25, EVA:100, ACC:59, ROF:63, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:11, Name:'P08', Type:'HG', Star:3, Health:350, Ammo:30, Ration:30, DMG:31, EVA:80, ACC:46, ROF:55, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:12, Name:'C96', Type:'HG', Star:3, Health:415, Ammo:30, Ration:30, DMG:29, EVA:61, ACC:41, ROF:62, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:13, Name:'Type92', Type:'HG', Star:3, Health:315, Ammo:30, Ration:30, DMG:31, EVA:80, ACC:46, ROF:61, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:14, Name:'Astra', Type:'HG', Star:3, Health:400, Ammo:30, Ration:30, DMG:33, EVA:68, ACC:45, ROF:52, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:15, Name:'G17', Type:'HG', Star:3, Health:315, Ammo:30, Ration:30, DMG:29, EVA:87, ACC:58, ROF:61, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:16, Name:'Thompson', Type:'SMG', Star:5, Health:1190, Ammo:85, Ration:60, DMG:31, EVA:56, ACC:12, ROF:82, Move:15, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:17, Name:'M3', Type:'SMG', Star:2, Health:925, Ammo:85, Ration:60, DMG:30, EVA:67, ACC:13, ROF:68, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:18, Name:'MAC-10', Type:'SMG', Star:3, Health:880, Ammo:85, Ration:60, DMG:28, EVA:68, ACC:11, ROF:91, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:19, Name:'FMG-9', Type:'SMG', Star:3, Health:705, Ammo:85, Ration:60, DMG:26, EVA:90, ACC:13, ROF:92, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:20, Name:'Vector', Type:'SMG', Star:5, Health:925, Ammo:85, Ration:60, DMG:30, EVA:71, ACC:11, ROF:101, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:21, Name:'PPSh-41', Type:'SMG', Star:2, Health:970, Ammo:85, Ration:60, DMG:26, EVA:56, ACC:11, ROF:93, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:22, Name:'PPS-43', Type:'SMG', Star:3, Health:880, Ammo:85, Ration:60, DMG:33, EVA:65, ACC:13, ROF:74, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:23, Name:'PP-90', Type:'SMG', Star:4, Health:795, Ammo:85, Ration:60, DMG:25, EVA:86, ACC:13, ROF:96, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:24, Name:'PP-2000', Type:'SMG', Star:2, Health:795, Ammo:85, Ration:60, DMG:30, EVA:74, ACC:11, ROF:80, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:25, Name:'MP40', Type:'SMG', Star:2, Health:925, Ammo:85, Ration:60, DMG:29, EVA:58, ACC:13, ROF:76, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:26, Name:'Gr MP5', Type:'SMG', Star:4, Health:840, Ammo:85, Ration:60, DMG:30, EVA:68, ACC:13, ROF:89, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:27, Name:'Skorpion', Type:'SMG', Star:3, Health:795, Ammo:85, Ration:60, DMG:24, EVA:83, ACC:13, ROF:95, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:28, Name:'Gr MP7', Type:'SMG', Star:5, Health:990, Ammo:85, Ration:60, DMG:30, EVA:69, ACC:13, ROF:91, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:29, Name:'Sten MkII', Type:'SMG', Star:3, Health:925, Ammo:85, Ration:60, DMG:26, EVA:75, ACC:15, ROF:78, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:31, Name:'Beretta M38', Type:'SMG', Star:2, Health:1015, Ammo:85, Ration:60, DMG:32, EVA:52, ACC:12, ROF:75, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:32, Name:'Micro Uzi', Type:'SMG', Star:3, Health:795, Ammo:85, Ration:60, DMG:24, EVA:79, ACC:11, ROF:104, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:33, Name:'m45', Type:'SMG', Star:2, Health:925, Ammo:85, Ration:60, DMG:30, EVA:62, ACC:12, ROF:74, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:34, Name:'M1 Garand', Type:'RF', Star:3, Health:440, Ammo:55, Ration:90, DMG:120, EVA:28, ACC:62, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:35, Name:'M1A1', Type:'RF', Star:3, Health:420, Ammo:55, Ration:90, DMG:95, EVA:42, ACC:77, ROF:38, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:36, Name:'Springfield', Type:'RF', Star:4, Health:420, Ammo:55, Ration:90, DMG:128, EVA:40, ACC:72, ROF:32, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:37, Name:'M14', Type:'RF', Star:3, Health:420, Ammo:55, Ration:90, DMG:108, EVA:27, ACC:71, ROF:43, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:38, Name:'M21', Type:'RF', Star:3, Health:465, Ammo:55, Ration:90, DMG:118, EVA:27, ACC:74, ROF:35, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:39, Name:'Mosin-Nagant', Type:'RF', Star:4, Health:440, Ammo:55, Ration:90, DMG:131, EVA:38, ACC:85, ROF:30, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:40, Name:'SVT-38', Type:'RF', Star:2, Health:420, Ammo:55, Ration:90, DMG:110, EVA:34, ACC:59, ROF:34, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:41, Name:'SKS', Type:'RF', Star:2, Health:465, Ammo:55, Ration:90, DMG:100, EVA:34, ACC:59, ROF:34, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:42, Name:'PTRD', Type:'RF', Star:4, Health:465, Ammo:55, Ration:90, DMG:159, EVA:29, ACC:75, ROF:28, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:43, Name:'SVD', Type:'RF', Star:4, Health:400, Ammo:55, Ration:90, DMG:130, EVA:33, ACC:80, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:44, Name:'SV-98', Type:'RF', Star:3, Health:420, Ammo:55, Ration:90, DMG:122, EVA:28, ACC:74, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:46, Name:'Kar98k', Type:'RF', Star:5, Health:420, Ammo:55, Ration:90, DMG:135, EVA:41, ACC:78, ROF:34, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:47, Name:'G43', Type:'RF', Star:2, Health:400, Ammo:55, Ration:90, DMG:111, EVA:28, ACC:58, ROF:40, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:48, Name:'WA2000', Type:'RF', Star:5, Health:440, Ammo:55, Ration:90, DMG:130, EVA:30, ACC:82, ROF:39, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:49, Name:'Type56R', Type:'RF', Star:3, Health:465, Ammo:55, Ration:90, DMG:103, EVA:36, ACC:65, ROF:36, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:50, Name:'Lee Enfield', Type:'RF', Star:5, Health:400, Ammo:55, Ration:90, DMG:135, EVA:40, ACC:78, ROF:36, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:51, Name:'FF FN-49', Type:'RF', Star:2, Health:465, Ammo:55, Ration:90, DMG:111, EVA:32, ACC:61, ROF:32, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:52, Name:'VM59', Type:'RF', Star:2, Health:485, Ammo:55, Ration:90, DMG:104, EVA:25, ACC:52, ROF:38, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:53, Name:'NTW-20', Type:'RF', Star:5, Health:465, Ammo:55, Ration:90, DMG:165, EVA:29, ACC:75, ROF:30, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:54, Name:'M16A1', Type:'AR', Star:4, Health:605, Ammo:60, Ration:60, DMG:47, EVA:44, ACC:46, ROF:75, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:55, Name:'M4A1', Type:'AR', Star:4, Health:550, Ammo:60, Ration:60, DMG:46, EVA:48, ACC:48, ROF:79, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:56, Name:'M4 SOPMODII', Type:'AR', Star:4, Health:550, Ammo:60, Ration:60, DMG:50, EVA:44, ACC:49, ROF:78, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:57, Name:'ST AR-15', Type:'AR', Star:4, Health:525, Ammo:60, Ration:60, DMG:48, EVA:50, ACC:50, ROF:77, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:58, Name:'AK-47', Type:'AR', Star:3, Health:660, Ammo:60, Ration:60, DMG:53, EVA:34, ACC:35, ROF:65, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:59, Name:'AK-74U', Type:'SMG', Star:5, Health:970, Ammo:85, Ration:60, DMG:35, EVA:67, ACC:13, ROF:83, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:60, Name:'AS Val', Type:'AR', Star:4, Health:660, Ammo:60, Ration:60, DMG:39, EVA:49, ACC:46, ROF:75, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:61, Name:'StG44', Type:'AR', Star:3, Health:635, Ammo:60, Ration:60, DMG:53, EVA:36, ACC:46, ROF:61, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:62, Name:'Gr G41', Type:'AR', Star:5, Health:635, Ammo:60, Ration:60, DMG:50, EVA:40, ACC:48, ROF:77, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:63, Name:'Gr G3', Type:'AR', Star:2, Health:550, Ammo:60, Ration:60, DMG:55, EVA:38, ACC:46, ROF:61, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:64, Name:'Gr G36', Type:'AR', Star:4, Health:635, Ammo:60, Ration:60, DMG:47, EVA:41, ACC:44, ROF:72, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:65, Name:'HK416', Type:'AR', Star:5, Health:605, Ammo:60, Ration:60, DMG:51, EVA:44, ACC:46, ROF:76, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:66, Name:'Type56-1', Type:'AR', Star:4, Health:690, Ammo:60, Ration:60, DMG:53, EVA:35, ACC:35, ROF:69, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:68, Name:'L85A1', Type:'AR', Star:2, Health:470, Ammo:60, Ration:60, DMG:46, EVA:43, ACC:43, ROF:78, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:69, Name:'Fr FAMAS', Type:'AR', Star:4, Health:605, Ammo:60, Ration:60, DMG:44, EVA:40, ACC:48, ROF:81, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:70, Name:'FF FNC', Type:'AR', Star:3, Health:550, Ammo:60, Ration:60, DMG:51, EVA:37, ACC:46, ROF:73, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:71, Name:'Galil', Type:'AR', Star:2, Health:525, Ammo:60, Ration:60, DMG:50, EVA:43, ACC:44, ROF:66, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:72, Name:'TAR-21', Type:'AR', Star:4, Health:515, Ammo:60, Ration:60, DMG:49, EVA:44, ACC:48, ROF:79, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:73, Name:'AUG', Type:'AR', Star:5, Health:605, Ammo:60, Ration:60, DMG:55, EVA:46, ACC:57, ROF:75, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:74, Name:'SIG-510', Type:'AR', Star:2, Health:580, Ammo:60, Ration:60, DMG:56, EVA:37, ACC:41, ROF:59, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:75, Name:'M1918', Type:'MG', Star:4, Health:735, Ammo:140, Ration:90, DMG:96, EVA:33, ACC:31, ROF:114, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:8},
    {ID:77, Name:'M2HB', Type:'MG', Star:3, Health:1075, Ammo:140, Ration:90, DMG:102, EVA:16, ACC:18, ROF:100, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:10},
    {ID:78, Name:'M60', Type:'MG', Star:4, Health:910, Ammo:140, Ration:90, DMG:92, EVA:26, ACC:26, ROF:111, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:9},
    {ID:79, Name:'FF M249 SAW', Type:'MG', Star:3, Health:785, Ammo:140, Ration:90, DMG:79, EVA:36, ACC:35, ROF:139, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:8},
    {ID:80, Name:'M1919A4', Type:'MG', Star:3, Health:910, Ammo:140, Ration:90, DMG:96, EVA:22, ACC:26, ROF:99, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:9},
    {ID:81, Name:'LWMMG', Type:'MG', Star:2, Health:870, Ammo:140, Ration:90, DMG:95, EVA:22, ACC:24, ROF:90, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:9},
    {ID:82, Name:'DP28', Type:'MG', Star:2, Health:705, Ammo:140, Ration:90, DMG:88, EVA:31, ACC:28, ROF:114, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:9},
    {ID:84, Name:'RPD', Type:'MG', Star:3, Health:825, Ammo:140, Ration:90, DMG:82, EVA:34, ACC:34, ROF:121, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:8},
    {ID:85, Name:'PK', Type:'MG', Star:4, Health:950, Ammo:140, Ration:90, DMG:96, EVA:23, ACC:21, ROF:84, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:11},
    {ID:86, Name:'MG42', Type:'MG', Star:3, Health:825, Ammo:140, Ration:90, DMG:92, EVA:26, ACC:23, ROF:132, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:10},
    {ID:87, Name:'MG34', Type:'MG', Star:2, Health:825, Ammo:140, Ration:90, DMG:85, EVA:25, ACC:22, ROF:120, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:10},
    {ID:88, Name:'MG3', Type:'MG', Star:4, Health:990, Ammo:140, Ration:90, DMG:85, EVA:21, ACC:26, ROF:130, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:10},
    {ID:89, Name:'Bren', Type:'MG', Star:3, Health:870, Ammo:140, Ration:90, DMG:89, EVA:28, ACC:31, ROF:102, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:8},
    {ID:90, Name:'FF FNP-9', Type:'HG', Star:2, Health:300, Ammo:30, Ration:30, DMG:28, EVA:83, ACC:53, ROF:61, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:91, Name:'MP-446', Type:'HG', Star:2, Health:330, Ammo:30, Ration:30, DMG:30, EVA:74, ACC:53, ROF:59, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:92, Name:'SpectreM4', Type:'SMG', Star:2, Health:880, Ammo:85, Ration:60, DMG:25, EVA:66, ACC:12, ROF:88, Move:12, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:93, Name:'IDW', Type:'SMG', Star:2, Health:750, Ammo:85, Ration:60, DMG:26, EVA:85, ACC:15, ROF:75, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:94, Name:'Type64', Type:'SMG', Star:2, Health:880, Ammo:85, Ration:60, DMG:27, EVA:65, ACC:11, ROF:93, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:95, Name:'Type88', Type:'RF', Star:3, Health:510, Ammo:55, Ration:90, DMG:108, EVA:37, ACC:60, ROF:31, Move:12, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:96, Name:'Grizzly MkV', Type:'HG', Star:5, Health:430, Ammo:30, Ration:30, DMG:38, EVA:66, ACC:51, ROF:54, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:97, Name:'M950A', Type:'HG', Star:5, Health:380, Ammo:30, Ration:30, DMG:30, EVA:68, ACC:55, ROF:72, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:98, Name:'SPP-1', Type:'HG', Star:4, Health:380, Ammo:30, Ration:30, DMG:35, EVA:75, ACC:61, ROF:48, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:99, Name:'Gr Mk23', Type:'HG', Star:4, Health:400, Ammo:30, Ration:30, DMG:29, EVA:66, ACC:53, ROF:64, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:100, Name:'P7', Type:'HG', Star:4, Health:315, Ammo:30, Ration:30, DMG:32, EVA:83, ACC:62, ROF:61, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:101, Name:'UMP9', Type:'SMG', Star:4, Health:880, Ammo:85, Ration:60, DMG:26, EVA:76, ACC:14, ROF:87, Move:15, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:102, Name:'UMP40', Type:'SMG', Star:4, Health:900, Ammo:85, Ration:60, DMG:27, EVA:75, ACC:14, ROF:85, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:103, Name:'UMP45', Type:'SMG', Star:4, Health:925, Ammo:85, Ration:60, DMG:28, EVA:74, ACC:13, ROF:82, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:104, Name:'Gr G36C', Type:'SMG', Star:5, Health:1015, Ammo:85, Ration:60, DMG:32, EVA:65, ACC:12, ROF:83, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:105, Name:'OTs-12', Type:'AR', Star:3, Health:525, Ammo:60, Ration:60, DMG:42, EVA:54, ACC:54, ROF:72, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:106, Name:'FAL', Type:'AR', Star:5, Health:660, Ammo:60, Ration:60, DMG:57, EVA:38, ACC:43, ROF:72, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:107, Name:'FF F2000', Type:'AR', Star:2, Health:525, Ammo:60, Ration:60, DMG:42, EVA:40, ACC:44, ROF:81, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:108, Name:'CZ-805', Type:'AR', Star:3, Health:580, Ammo:60, Ration:60, DMG:34, EVA:41, ACC:49, ROF:75, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:109, Name:'Gr MG5', Type:'MG', Star:5, Health:990, Ammo:140, Ration:90, DMG:85, EVA:27, ACC:27, ROF:120, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:11},
    {ID:110, Name:'FG42', Type:'MG', Star:2, Health:745, Ammo:140, Ration:90, DMG:87, EVA:33, ACC:28, ROF:121, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:8},
    {ID:111, Name:'AAT-52', Type:'MG', Star:2, Health:910, Ammo:140, Ration:90, DMG:79, EVA:22, ACC:24, ROF:118, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:10},
    {ID:112, Name:'Negev', Type:'MG', Star:5, Health:870, Ammo:140, Ration:90, DMG:84, EVA:36, ACC:35, ROF:139, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:9},
    {ID:113, Name:'Serdyukov', Type:'HG', Star:3, Health:350, Ammo:30, Ration:30, DMG:33, EVA:68, ACC:58, ROF:59, Move:4, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:114, Name:'Welrod MkII', Type:'HG', Star:5, Health:400, Ammo:30, Ration:30, DMG:28, EVA:50, ACC:71, ROF:52, Move:15, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:115, Name:'Suomi', Type:'SMG', Star:5, Health:1100, Ammo:85, Ration:60, DMG:28, EVA:56, ACC:15, ROF:93, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:116, Name:'Z-62', Type:'SMG', Star:3, Health:840, Ammo:85, Ration:60, DMG:28, EVA:77, ACC:15, ROF:77, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:117, Name:'Gr PSG-1', Type:'RF', Star:4, Health:465, Ammo:55, Ration:90, DMG:120, EVA:26, ACC:73, ROF:39, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:118, Name:'9A-91', Type:'AR', Star:4, Health:580, Ammo:60, Ration:60, DMG:42, EVA:50, ACC:49, ROF:78, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:119, Name:'OTs-14', Type:'AR', Star:5, Health:550, Ammo:60, Ration:60, DMG:49, EVA:54, ACC:54, ROF:75, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:120, Name:'ARX-160', Type:'AR', Star:3, Health:495, Ammo:60, Ration:60, DMG:49, EVA:48, ACC:48, ROF:73, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:121, Name:'Mk48', Type:'MG', Star:4, Health:870, Ammo:140, Ration:90, DMG:90, EVA:26, ACC:25, ROF:112, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:10},
    {ID:122, Name:'Gr G11', Type:'AR', Star:5, Health:605, Ammo:60, Ration:60, DMG:43, EVA:41, ACC:44, ROF:95, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:123, Name:'P99', Type:'HG', Star:3, Health:300, Ammo:30, Ration:30, DMG:31, EVA:87, ACC:56, ROF:61, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:124, Name:'Super SASS', Type:'RF', Star:3, Health:440, Ammo:55, Ration:90, DMG:115, EVA:27, ACC:65, ROF:39, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:125, Name:'Gr MG4', Type:'MG', Star:5, Health:910, Ammo:140, Ration:90, DMG:84, EVA:34, ACC:34, ROF:139, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:9},
    {ID:126, Name:'NZ75', Type:'HG', Star:5, Health:365, Ammo:30, Ration:30, DMG:33, EVA:74, ACC:62, ROF:63, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:127, Name:'Type79', Type:'SMG', Star:5, Health:970, Ammo:85, Ration:60, DMG:32, EVA:70, ACC:12, ROF:88, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:128, Name:'M99', Type:'RF', Star:5, Health:440, Ammo:55, Ration:90, DMG:157, EVA:32, ACC:81, ROF:32, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:129, Name:'Type95', Type:'AR', Star:5, Health:580, Ammo:60, Ration:60, DMG:55, EVA:46, ACC:52, ROF:71, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:130, Name:'Type97', Type:'AR', Star:5, Health:580, Ammo:60, Ration:60, DMG:54, EVA:46, ACC:51, ROF:72, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:131, Name:'EVO 3', Type:'SMG', Star:3, Health:970, Ammo:85, Ration:60, DMG:23, EVA:68, ACC:13, ROF:93, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:132, Name:'Type59', Type:'HG', Star:3, Health:300, Ammo:30, Ration:30, DMG:28, EVA:96, ACC:61, ROF:61, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:133, Name:'Type63', Type:'AR', Star:2, Health:495, Ammo:60, Ration:60, DMG:51, EVA:40, ACC:40, ROF:73, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:134, Name:'AR70', Type:'AR', Star:3, Health:550, Ammo:60, Ration:60, DMG:50, EVA:41, ACC:44, ROF:71, Move:12, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:135, Name:'SR-3MP', Type:'SMG', Star:5, Health:970, Ammo:85, Ration:60, DMG:31, EVA:67, ACC:12, ROF:90, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:136, Name:'PP-19', Type:'SMG', Star:4, Health:880, Ammo:85, Ration:60, DMG:26, EVA:74, ACC:14, ROF:91, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:137, Name:'PP-19-01', Type:'SMG', Star:4, Health:970, Ammo:85, Ration:60, DMG:27, EVA:68, ACC:13, ROF:85, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:138, Name:'6P62', Type:'AR', Star:3, Health:605, Ammo:60, Ration:60, DMG:69, EVA:33, ACC:37, ROF:54, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:139, Name:'Bren Ten', Type:'HG', Star:2, Health:350, Ammo:30, Ration:30, DMG:31, EVA:63, ACC:51, ROF:58, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:140, Name:'PSM', Type:'HG', Star:3, Health:285, Ammo:30, Ration:30, DMG:24, EVA:112, ACC:67, ROF:65, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:141, Name:'Gr USPCompact', Type:'HG', Star:2, Health:330, Ammo:30, Ration:30, DMG:24, EVA:86, ACC:60, ROF:64, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:142, Name:'Five-seveN', Type:'HG', Star:5, Health:315, Ammo:30, Ration:30, DMG:31, EVA:97, ACC:57, ROF:66, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:143, Name:'RO635', Type:'SMG', Star:5, Health:970, Ammo:85, Ration:60, DMG:27, EVA:71, ACC:14, ROF:97, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:144, Name:'MT-9', Type:'SMG', Star:3, Health:1015, Ammo:85, Ration:60, DMG:25, EVA:60, ACC:13, ROF:88, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:145, Name:'OTs-44', Type:'RF', Star:3, Health:400, Ammo:55, Ration:90, DMG:157, EVA:32, ACC:67, ROF:32, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:146, Name:'G28', Type:'RF', Star:4, Health:440, Ammo:55, Ration:90, DMG:119, EVA:29, ACC:80, ROF:39, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:147, Name:'SSG 69', Type:'RF', Star:3, Health:400, Ammo:55, Ration:90, DMG:130, EVA:39, ACC:82, ROF:30, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:148, Name:'IWS 2000', Type:'RF', Star:5, Health:440, Ammo:55, Ration:90, DMG:162, EVA:29, ACC:78, ROF:32, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:149, Name:'AEK-999', Type:'MG', Star:4, Health:825, Ammo:140, Ration:90, DMG:89, EVA:28, ACC:29, ROF:120, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:150, Name:'Shipka', Type:'SMG', Star:4, Health:840, Ammo:85, Ration:60, DMG:24, EVA:79, ACC:14, ROF:95, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:151, Name:'M1887', Type:'SG', Star:5, Health:1375, Ammo:90, Ration:140, DMG:39, EVA:12, ACC:12, ROF:22, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:152, Name:'M1897', Type:'SG', Star:3, Health:1265, Ammo:90, Ration:140, DMG:35, EVA:11, ACC:11, ROF:26, Move:6, Armor:21, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:153, Name:'M37', Type:'SG', Star:4, Health:1265, Ammo:90, Ration:140, DMG:33, EVA:12, ACC:12, ROF:26, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:154, Name:'M500', Type:'SG', Star:3, Health:1320, Ammo:90, Ration:140, DMG:31, EVA:10, ACC:11, ROF:29, Move:6, Armor:21, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:155, Name:'M590', Type:'SG', Star:4, Health:1320, Ammo:90, Ration:140, DMG:32, EVA:10, ACC:11, ROF:31, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:156, Name:'Super-Shorty', Type:'SG', Star:4, Health:1210, Ammo:90, Ration:140, DMG:28, EVA:19, ACC:14, ROF:30, Move:6, Armor:20, CritRate:40, CritDamage:50, AP:15, Clip:3},
    {ID:157, Name:'Am KSG', Type:'SG', Star:5, Health:1265, Ammo:90, Ration:140, DMG:29, EVA:12, ACC:13, ROF:30, Move:6, Armor:24, CritRate:40, CritDamage:50, AP:15, Clip:5},
    {ID:158, Name:'KS-23', Type:'SG', Star:3, Health:1375, Ammo:90, Ration:140, DMG:40, EVA:10, ACC:9, ROF:25, Move:6, Armor:21, CritRate:40, CritDamage:50, AP:15, Clip:3},
    {ID:159, Name:'RMB-93', Type:'SG', Star:3, Health:1210, Ammo:90, Ration:140, DMG:30, EVA:13, ACC:11, ROF:28, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:160, Name:'Saiga-12', Type:'SG', Star:5, Health:1320, Ammo:90, Ration:140, DMG:29, EVA:11, ACC:12, ROF:35, Move:6, Armor:23, CritRate:40, CritDamage:50, AP:15, Clip:5},
    {ID:161, Name:'Type 97', Type:'SG', Star:4, Health:1320, Ammo:90, Ration:140, DMG:33, EVA:13, ACC:12, ROF:27, Move:6, Armor:20, CritRate:40, CritDamage:50, AP:15, Clip:3},
    {ID:162, Name:'SPAS-12', Type:'SG', Star:4, Health:1375, Ammo:90, Ration:140, DMG:33, EVA:9, ACC:11, ROF:32, Move:6, Armor:21, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:163, Name:'AA-12', Type:'SG', Star:5, Health:1345, Ammo:90, Ration:140, DMG:30, EVA:11, ACC:12, ROF:39, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:5},
    {ID:164, Name:'FP-6', Type:'SG', Star:5, Health:1300, Ammo:90, Ration:140, DMG:31, EVA:12, ACC:13, ROF:28, Move:6, Armor:24, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:165, Name:'M1014', Type:'SG', Star:4, Health:1375, Ammo:90, Ration:140, DMG:31, EVA:11, ACC:12, ROF:32, Move:6, Armor:21, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:166, Name:'CZ75', Type:'HG', Star:5, Health:330, Ammo:30, Ration:30, DMG:34, EVA:74, ACC:62, ROF:66, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:167, Name:'GrHK45', Type:'HG', Star:3, Health:330, Ammo:30, Ration:30, DMG:34, EVA:80, ACC:58, ROF:55, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:168, Name:'Spitfire', Type:'HG', Star:4, Health:350, Ammo:30, Ration:30, DMG:33, EVA:71, ACC:60, ROF:59, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:169, Name:'SCW', Type:'SMG', Star:3, Health:840, Ammo:85, Ration:60, DMG:30, EVA:68, ACC:12, ROF:91, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:170, Name:'ASh-12.7', Type:'AR', Star:3, Health:550, Ammo:60, Ration:60, DMG:65, EVA:36, ACC:41, ROF:59, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:171, Name:'Ribeyrolles', Type:'AR', Star:4, Health:550, Ammo:60, Ration:60, DMG:64, EVA:40, ACC:44, ROF:63, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:172, Name:'AmRFB', Type:'AR', Star:5, Health:525, Ammo:60, Ration:60, DMG:69, EVA:49, ACC:68, ROF:54, Move:10, Armor:0, CritRate:30, CritDamage:50, AP:15},
    {ID:173, Name:'PKP', Type:'MG', Star:5, Health:825, Ammo:140, Ration:90, DMG:95, EVA:29, ACC:31, ROF:127, Move:44, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:15},
    {ID:174, Name:'Type81R', Type:'RF', Star:3, Health:375, Ammo:55, Ration:90, DMG:123, EVA:41, ACC:79, ROF:32, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:175, Name:'ART556', Type:'AR', Star:5, Health:580, Ammo:60, Ration:60, DMG:53, EVA:49, ACC:53, ROF:69, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:176, Name:'TMP', Type:'SMG', Star:3, Health:750, Ammo:85, Ration:60, DMG:28, EVA:77, ACC:14, ROF:93, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:177, Name:'KLIN', Type:'SMG', Star:4, Health:950, Ammo:85, Ration:60, DMG:25, EVA:74, ACC:11, ROF:95, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:178, Name:'F1', Type:'SMG', Star:3, Health:1060, Ammo:85, Ration:60, DMG:26, EVA:60, ACC:14, ROF:79, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:179, Name:'Gd DSR-50', Type:'RF', Star:5, Health:410, Ammo:55, Ration:90, DMG:163, EVA:33, ACC:87, ROF:31, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:180, Name:'PzB39', Type:'RF', Star:4, Health:420, Ammo:55, Ration:90, DMG:148, EVA:31, ACC:71, ROF:32, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:181, Name:'T91', Type:'AR', Star:5, Health:620, Ammo:60, Ration:60, DMG:51, EVA:46, ACC:44, ROF:76, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:182, Name:'wz.29', Type:'RF', Star:3, Health:485, Ammo:55, Ration:90, DMG:113, EVA:33, ACC:65, ROF:32, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:183, Name:'Contender', Type:'HG', Star:5, Health:330, Ammo:30, Ration:30, DMG:46, EVA:82, ACC:85, ROF:44, Move:15, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:184, Name:'T-5000', Type:'RF', Star:4, Health:450, Ammo:55, Ration:90, DMG:126, EVA:28, ACC:85, ROF:36, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:185, Name:'Ameli', Type:'MG', Star:4, Health:705, Ammo:140, Ration:90, DMG:83, EVA:42, ACC:38, ROF:149, Move:4, Armor:0, CritRate:50, CritDamage:15, AP:15, Clip:8},
    {ID:186, Name:'P226', Type:'HG', Star:3, Health:365, Ammo:30, Ration:30, DMG:29, EVA:63, ACC:58, ROF:61, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:187, Name:'Ak 5', Type:'AR', Star:4, Health:580, Ammo:60, Ration:60, DMG:51, EVA:38, ACC:48, ROF:75, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:188, Name:'S.A.T.8', Type:'SG', Star:5, Health:1410, Ammo:90, Ration:140, DMG:29, EVA:12, ACC:13, ROF:33, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:189, Name:'USAS-12', Type:'SG', Star:4, Health:1300, Ammo:90, Ration:140, DMG:29, EVA:10, ACC:11, ROF:37, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:5},
    {ID:190, Name:'NS2000', Type:'SG', Star:3, Health:1265, Ammo:90, Ration:140, DMG:33, EVA:11, ACC:12, ROF:27, Move:6, Armor:20, CritRate:40, CritDamage:50, AP:15, Clip:5},
    {ID:191, Name:'M12', Type:'SMG', Star:3, Health:1015, Ammo:85, Ration:60, DMG:26, EVA:64, ACC:15, ROF:76, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:192, Name:'JS05', Type:'RF', Star:5, Health:450, Ammo:55, Ration:90, DMG:158, EVA:32, ACC:88, ROF:31, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:193, Name:'T65', Type:'AR', Star:3, Health:620, Ammo:60, Ration:60, DMG:54, EVA:40, ACC:44, ROF:76, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:194, Name:'K2', Type:'AR', Star:5, Health:635, Ammo:60, Ration:60, DMG:50, EVA:42, ACC:51, ROF:78, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:195, Name:'Gr MG23', Type:'MG', Star:3, Health:745, Ammo:140, Ration:90, DMG:80, EVA:34, ACC:34, ROF:135, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:10},
    {ID:196, Name:'Zas M21', Type:'AR', Star:5, Health:605, Ammo:60, Ration:60, DMG:55, EVA:41, ACC:48, ROF:74, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:197, Name:'Carcano M1891', Type:'RF', Star:5, Health:400, Ammo:55, Ration:90, DMG:138, EVA:42, ACC:85, ROF:34, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:198, Name:'Carcano M91/38', Type:'RF', Star:5, Health:365, Ammo:55, Ration:90, DMG:146, EVA:44, ACC:90, ROF:34, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:199, Name:'Type80', Type:'MG', Star:4, Health:870, Ammo:140, Ration:90, DMG:93, EVA:24, ACC:26, ROF:118, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:200, Name:'XM3', Type:'RF', Star:4, Health:410, Ammo:55, Ration:90, DMG:130, EVA:32, ACC:90, ROF:35, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:201, Name:'Gepard M1', Type:'RF', Star:3, Health:440, Ammo:55, Ration:90, DMG:143, EVA:28, ACC:77, ROF:30, Move:7, Armor:15, CritRate:40, CritDamage:50, AP:15},
    {ID:202, Name:'Thunder', Type:'HG', Star:4, Health:430, Ammo:30, Ration:30, DMG:46, EVA:60, ACC:57, ROF:37, Move:15, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:203, Name:'Honey Badger', Type:'SMG', Star:4, Health:990, Ammo:85, Ration:60, DMG:33, EVA:60, ACC:13, ROF:82, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:204, Name:'Ballista', Type:'RF', Star:5, Health:410, Ammo:55, Ration:90, DMG:139, EVA:35, ACC:92, ROF:36, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:205, Name:'AN-94', Type:'AR', Star:5, Health:580, Ammo:60, Ration:60, DMG:55, EVA:48, ACC:67, ROF:76, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:206, Name:'AK-12', Type:'AR', Star:5, Health:550, Ammo:60, Ration:60, DMG:56, EVA:52, ACC:62, ROF:78, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:207, Name:'CZ2000', Type:'AR', Star:4, Health:550, Ammo:60, Ration:60, DMG:48, EVA:46, ACC:44, ROF:78, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:208, Name:'HMG21', Type:'MG', Star:5, Health:845, Ammo:140, Ration:90, DMG:92, EVA:33, ACC:29, ROF:135, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:10},
    {ID:209, Name:'OTs-39', Type:'SMG', Star:3, Health:950, Ammo:85, Ration:60, DMG:27, EVA:72, ACC:14, ROF:74, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:210, Name:'CZ52', Type:'HG', Star:3, Health:380, Ammo:30, Ration:30, DMG:33, EVA:68, ACC:50, ROF:53, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:211, Name:'SRS', Type:'RF', Star:5, Health:435, Ammo:55, Ration:90, DMG:135, EVA:35, ACC:82, ROF:35, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:212, Name:'K5', Type:'HG', Star:4, Health:330, Ammo:30, Ration:30, DMG:29, EVA:81, ACC:52, ROF:62, Move:15, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:213, Name:'C-MS', Type:'SMG', Star:5, Health:925, Ammo:85, Ration:60, DMG:32, EVA:75, ACC:15, ROF:87, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:214, Name:'ADS', Type:'AR', Star:5, Health:605, Ammo:60, Ration:60, DMG:50, EVA:45, ACC:54, ROF:78, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:215, Name:'MDR', Type:'AR', Star:5, Health:595, Ammo:60, Ration:60, DMG:56, EVA:41, ACC:50, ROF:76, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:216, Name:'XM8', Type:'AR', Star:4, Health:540, Ammo:60, Ration:60, DMG:48, EVA:42, ACC:46, ROF:79, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:217, Name:'SM-1', Type:'RF', Star:3, Health:505, Ammo:55, Ration:90, DMG:95, EVA:40, ACC:79, ROF:40, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:218, Name:'T77', Type:'SMG', Star:3, Health:925, Ammo:85, Ration:60, DMG:24, EVA:69, ACC:11, ROF:92, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:220, Name:'MP-443', Type:'HG', Star:3, Health:350, Ammo:30, Ration:30, DMG:33, EVA:71, ACC:53, ROF:59, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:221, Name:'GSh-18', Type:'HG', Star:3, Health:350, Ammo:30, Ration:30, DMG:33, EVA:86, ACC:48, ROF:52, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:222, Name:'TAC-50', Type:'RF', Star:5, Health:435, Ammo:55, Ration:90, DMG:155, EVA:31, ACC:83, ROF:32, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:223, Name:'Model L', Type:'AR', Star:3, Health:550, Ammo:60, Ration:60, DMG:50, EVA:41, ACC:45, ROF:73, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:224, Name:'PM-06', Type:'SMG', Star:5, Health:950, Ammo:85, Ration:60, DMG:29, EVA:75, ACC:15, ROF:83, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:225, Name:'Cx4 Storm', Type:'SMG', Star:4, Health:900, Ammo:85, Ration:60, DMG:34, EVA:74, ACC:16, ROF:64, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:226, Name:'Mk12', Type:'RF', Star:4, Health:405, Ammo:55, Ration:90, DMG:101, EVA:32, ACC:82, ROF:46, Move:7, Armor:0, CritRate:50, CritDamage:50, AP:15},
    {ID:227, Name:'A-91', Type:'AR', Star:4, Health:565, Ammo:60, Ration:60, DMG:52, EVA:37, ACC:50, ROF:75, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:228, Name:'100 Shiki', Type:'SMG', Star:5, Health:1060, Ammo:85, Ration:60, DMG:29, EVA:67, ACC:12, ROF:76, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:229, Name:'M870', Type:'SG', Star:5, Health:1320, Ammo:90, Ration:140, DMG:33, EVA:13, ACC:12, ROF:29, Move:6, Armor:23, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:230, Name:'OBR', Type:'RF', Star:3, Health:405, Ammo:55, Ration:90, DMG:117, EVA:32, ACC:80, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:231, Name:'M82A1', Type:'RF', Star:5, Health:440, Ammo:55, Ration:90, DMG:158, EVA:30, ACC:77, ROF:34, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:232, Name:'MP-448', Type:'HG', Star:3, Health:320, Ammo:30, Ration:30, DMG:26, EVA:99, ACC:62, ROF:60, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:233, Name:'Px4 Storm', Type:'HG', Star:5, Health:340, Ammo:30, Ration:30, DMG:35, EVA:93, ACC:69, ROF:57, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:234, Name:'JS 9', Type:'SMG', Star:5, Health:900, Ammo:85, Ration:60, DMG:27, EVA:86, ACC:15, ROF:89, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:235, Name:'SPR A3G', Type:'RF', Star:4, Health:435, Ammo:55, Ration:90, DMG:130, EVA:31, ACC:83, ROF:35, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:236, Name:'K11', Type:'AR', Star:5, Health:675, Ammo:60, Ration:60, DMG:53, EVA:37, ACC:54, ROF:76, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:237, Name:'SAR-21', Type:'AR', Star:4, Health:580, Ammo:60, Ration:60, DMG:44, EVA:38, ACC:46, ROF:80, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:238, Name:'QJY-88', Type:'MG', Star:5, Health:825, Ammo:140, Ration:90, DMG:86, EVA:35, ACC:33, ROF:126, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:239, Name:'Type03', Type:'AR', Star:3, Health:580, Ammo:60, Ration:60, DMG:51, EVA:39, ACC:47, ROF:71, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:240, Name:'Mk46', Type:'MG', Star:4, Health:810, Ammo:140, Ration:90, DMG:78, EVA:36, ACC:34, ROF:142, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:9},
    {ID:241, Name:'RT-20', Type:'RF', Star:3, Health:450, Ammo:55, Ration:90, DMG:158, EVA:28, ACC:78, ROF:27, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:242, Name:'P22', Type:'HG', Star:5, Health:350, Ammo:30, Ration:30, DMG:28, EVA:110, ACC:66, ROF:62, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:243, Name:'64 Shiki', Type:'AR', Star:5, Health:625, Ammo:60, Ration:60, DMG:67, EVA:43, ACC:62, ROF:63, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:244, Name:'TEC-9', Type:'HG', Star:3, Health:415, Ammo:30, Ration:30, DMG:28, EVA:63, ACC:46, ROF:63, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:245, Name:'P90', Type:'SMG', Star:5, Health:950, Ammo:85, Ration:60, DMG:30, EVA:83, ACC:15, ROF:93, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:247, Name:'K31', Type:'RF', Star:4, Health:390, Ammo:55, Ration:90, DMG:126, EVA:37, ACC:78, ROF:39, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:248, Name:'Jericho', Type:'HG', Star:4, Health:380, Ammo:30, Ration:30, DMG:31, EVA:64, ACC:50, ROF:60, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:249, Name:'62 Shiki', Type:'MG', Star:3, Health:845, Ammo:140, Ration:90, DMG:87, EVA:28, ACC:31, ROF:122, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:9},
    {ID:250, Name:'HS2000', Type:'HG', Star:5, Health:360, Ammo:30, Ration:30, DMG:33, EVA:87, ACC:61, ROF:62, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:251, Name:'X95', Type:'SMG', Star:5, Health:970, Ammo:85, Ration:60, DMG:34, EVA:67, ACC:13, ROF:90, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:252, Name:'KSVK', Type:'RF', Star:4, Health:440, Ammo:55, Ration:90, DMG:158, EVA:30, ACC:78, ROF:31, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:253, Name:'Lewis', Type:'MG', Star:5, Health:950, Ammo:140, Ration:90, DMG:102, EVA:31, ACC:31, ROF:116, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:10},
    {ID:254, Name:'UKM-2000', Type:'MG', Star:4, Health:845, Ammo:140, Ration:90, DMG:90, EVA:26, ACC:26, ROF:115, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:255, Name:'Scout', Type:'RF', Star:3, Health:450, Ammo:55, Ration:90, DMG:114, EVA:35, ACC:78, ROF:35, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:256, Name:'Falcon', Type:'RF', Star:3, Health:440, Ammo:55, Ration:90, DMG:140, EVA:28, ACC:71, ROF:32, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:257, Name:'M200', Type:'RF', Star:5, Health:440, Ammo:55, Ration:90, DMG:145, EVA:31, ACC:96, ROF:34, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:258, Name:'Magal', Type:'AR', Star:3, Health:580, Ammo:60, Ration:60, DMG:47, EVA:43, ACC:47, ROF:70, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:259, Name:'PM-9', Type:'SMG', Star:5, Health:880, Ammo:85, Ration:60, DMG:28, EVA:85, ACC:13, ROF:102, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:260, Name:'PA-15', Type:'HG', Star:5, Health:260, Ammo:30, Ration:30, DMG:35, EVA:76, ACC:65, ROF:64, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:261, Name:'QBU-88', Type:'RF', Star:5, Health:420, Ammo:55, Ration:90, DMG:126, EVA:41, ACC:87, ROF:42, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:262, Name:'EM-2', Type:'AR', Star:4, Health:595, Ammo:60, Ration:60, DMG:57, EVA:48, ACC:48, ROF:61, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:263, Name:'Gr MG36', Type:'MG', Star:5, Health:910, Ammo:140, Ration:90, DMG:85, EVA:36, ACC:34, ROF:129, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:10},
    {ID:264, Name:'Chauchat', Type:'MG', Star:4, Health:870, Ammo:140, Ration:90, DMG:102, EVA:30, ACC:34, ROF:81, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:9},
    {ID:265, Name:'Gr HK33', Type:'AR', Star:3, Health:525, Ammo:60, Ration:60, DMG:49, EVA:46, ACC:51, ROF:73, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:266, Name:'R93', Type:'RF', Star:5, Health:405, Ammo:55, Ration:90, DMG:133, EVA:34, ACC:97, ROF:39, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:267, Name:'MP41', Type:'SMG', Star:3, Health:970, Ammo:85, Ration:60, DMG:30, EVA:60, ACC:13, ROF:77, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:268, Name:'T-CMS', Type:'RF', Star:3, Health:440, Ammo:55, Ration:90, DMG:120, EVA:27, ACC:75, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:269, Name:'Gr P30', Type:'HG', Star:4, Health:350, Ammo:30, Ration:30, DMG:32, EVA:85, ACC:62, ROF:55, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:270, Name:'4 Shiki', Type:'RF', Star:4, Health:420, Ammo:55, Ration:90, DMG:112, EVA:37, ACC:74, ROF:39, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:271, Name:'K3', Type:'MG', Star:3, Health:825, Ammo:140, Ration:90, DMG:78, EVA:35, ACC:30, ROF:134, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:272, Name:'Desert Eagle', Type:'HG', Star:5, Health:365, Ammo:30, Ration:30, DMG:41, EVA:66, ACC:57, ROF:15, Move:0, Armor:40, CritRate:40, CritDamage:50, AP:15},
    {ID:273, Name:'SSG3000', Type:'RF', Star:4, Health:440, Ammo:55, Ration:90, DMG:126, EVA:30, ACC:77, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:274, Name:'ACR', Type:'AR', Star:5, Health:580, Ammo:60, Ration:60, DMG:54, EVA:48, ACC:54, ROF:77, Move:10, Armor:0, CritRate:30, CritDamage:50, AP:15},
    {ID:275, Name:'M1895 CB', Type:'MG', Star:4, Health:950, Ammo:140, Ration:90, DMG:90, EVA:23, ACC:26, ROF:131, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:276, Name:'Kord', Type:'MG', Star:5, Health:990, Ammo:140, Ration:90, DMG:109, EVA:21, ACC:22, ROF:110, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:277, Name:'Gr VP70', Type:'HG', Star:3, Health:330, Ammo:30, Ration:30, DMG:31, EVA:75, ACC:54, ROF:60, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:278, Name:'Six12', Type:'SG', Star:3, Health:1210, Ammo:90, Ration:140, DMG:34, EVA:13, ACC:13, ROF:30, Move:6, Armor:20, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:279, Name:'INSAS', Type:'AR', Star:3, Health:550, Ammo:60, Ration:60, DMG:49, EVA:45, ACC:52, ROF:71, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:280, Name:'MAT-49', Type:'SMG', Star:4, Health:925, Ammo:85, Ration:60, DMG:29, EVA:73, ACC:14, ROF:81, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:281, Name:'CAWS', Type:'SG', Star:5, Health:1235, Ammo:90, Ration:140, DMG:30, EVA:13, ACC:12, ROF:35, Move:6, Armor:23, CritRate:40, CritDamage:50, AP:15, Clip:5},
    {ID:282, Name:'DP-12', Type:'SG', Star:5, Health:1260, Ammo:90, Ration:140, DMG:31, EVA:13, ACC:13, ROF:30, Move:6, Armor:23, CritRate:40, CritDamage:50, AP:15, Clip:5},
    {ID:283, Name:'Liberator', Type:'SG', Star:4, Health:1155, Ammo:90, Ration:140, DMG:36, EVA:15, ACC:12, ROF:30, Move:6, Armor:21, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:284, Name:'Zas M76', Type:'RF', Star:3, Health:420, Ammo:55, Ration:90, DMG:110, EVA:35, ACC:78, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:285, Name:'C-93', Type:'HG', Star:5, Health:315, Ammo:30, Ration:30, DMG:33, EVA:98, ACC:62, ROF:64, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:286, Name:'K-PDW', Type:'SMG', Star:4, Health:900, Ammo:85, Ration:60, DMG:33, EVA:71, ACC:14, ROF:81, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:287, Name:'SIG-556', Type:'AR', Star:5, Health:605, Ammo:60, Ration:60, DMG:51, EVA:45, ACC:46, ROF:76, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:288, Name:'CR-21', Type:'AR', Star:4, Health:550, Ammo:60, Ration:60, DMG:48, EVA:43, ACC:52, ROF:81, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:289, Name:'R5', Type:'AR', Star:5, Health:620, Ammo:60, Ration:60, DMG:55, EVA:43, ACC:54, ROF:76, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:290, Name:'89 Shiki', Type:'AR', Star:5, Health:605, Ammo:60, Ration:60, DMG:54, EVA:45, ACC:48, ROF:79, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:291, Name:'43M', Type:'SMG', Star:3, Health:925, Ammo:85, Ration:60, DMG:30, EVA:56, ACC:13, ROF:89, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:292, Name:'RPK-16', Type:'MG', Star:5, Health:825, Ammo:140, Ration:90, DMG:85, EVA:36, ACC:37, ROF:129, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:293, Name:'AK-15', Type:'AR', Star:5, Health:550, Ammo:60, Ration:60, DMG:58, EVA:51, ACC:52, ROF:77, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:294, Name:'Webley', Type:'HG', Star:5, Health:430, Ammo:30, Ration:30, DMG:29, EVA:81, ACC:66, ROF:57, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:295, Name:'CF-05', Type:'SMG', Star:4, Health:950, Ammo:85, Ration:60, DMG:26, EVA:73, ACC:13, ROF:87, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:296, Name:'Gr SL8', Type:'RF', Star:5, Health:425, Ammo:55, Ration:90, DMG:120, EVA:39, ACC:78, ROF:41, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:297, Name:'FI M82', Type:'AR', Star:4, Health:565, Ammo:60, Ration:60, DMG:51, EVA:46, ACC:45, ROF:75, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:298, Name:'Vepr', Type:'AR', Star:3, Health:550, Ammo:60, Ration:60, DMG:48, EVA:47, ACC:49, ROF:71, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:299, Name:'HSM10', Type:'SG', Star:3, Health:1235, Ammo:90, Ration:140, DMG:34, EVA:12, ACC:13, ROF:27, Move:6, Armor:21, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:300, Name:'CAR', Type:'MG', Star:3, Health:825, Ammo:140, Ration:90, DMG:93, EVA:29, ACC:32, ROF:112, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:301, Name:'MAS-38', Type:'SMG', Star:3, Health:950, Ammo:85, Ration:60, DMG:26, EVA:72, ACC:13, ROF:83, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:302, Name:'Defender', Type:'SG', Star:4, Health:1235, Ammo:90, Ration:140, DMG:38, EVA:17, ACC:13, ROF:27, Move:6, Armor:18, CritRate:40, CritDamage:50, AP:15, Clip:8},
    {ID:303, Name:'HP-35', Type:'HG', Star:5, Health:380, Ammo:30, Ration:30, DMG:31, EVA:89, ACC:64, ROF:58, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:304, Name:'SAF', Type:'SMG', Star:4, Health:900, Ammo:85, Ration:60, DMG:25, EVA:69, ACC:14, ROF:99, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:305, Name:'Tabuk', Type:'RF', Star:4, Health:420, Ammo:55, Ration:90, DMG:115, EVA:36, ACC:81, ROF:39, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:306, Name:'AK-Alfa', Type:'AR', Star:5, Health:580, Ammo:60, Ration:60, DMG:56, EVA:52, ACC:53, ROF:75, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:307, Name:'ZB-26', Type:'MG', Star:5, Health:910, Ammo:140, Ration:90, DMG:100, EVA:31, ACC:30, ROF:116, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:9},
    {ID:308, Name:'C14', Type:'RF', Star:3, Health:470, Ammo:55, Ration:90, DMG:128, EVA:29, ACC:77, ROF:32, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:309, Name:'WKp', Type:'HG', Star:3, Health:400, Ammo:30, Ration:30, DMG:41, EVA:65, ACC:49, ROF:44, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:310, Name:'Rex Zero 1', Type:'HG', Star:4, Health:350, Ammo:30, Ration:30, DMG:31, EVA:74, ACC:56, ROF:61, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:311, Name:'Lusa', Type:'SMG', Star:5, Health:1025, Ammo:85, Ration:60, DMG:29, EVA:69, ACC:13, ROF:94, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:312, Name:'VSK-94', Type:'RF', Star:5, Health:440, Ammo:55, Ration:90, DMG:133, EVA:32, ACC:79, ROF:38, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:313, Name:'S-ACR', Type:'AR', Star:5, Health:620, Ammo:60, Ration:60, DMG:46, EVA:42, ACC:45, ROF:91, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:314, Name:'StG-940', Type:'AR', Star:3, Health:550, Ammo:60, Ration:60, DMG:50, EVA:44, ACC:49, ROF:69, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:315, Name:'AUG Para', Type:'SMG', Star:5, Health:925, Ammo:85, Ration:60, DMG:29, EVA:83, ACC:15, ROF:88, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:316, Name:'General Liu', Type:'RF', Star:5, Health:400, Ammo:55, Ration:90, DMG:139, EVA:30, ACC:88, ROF:40, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:317, Name:'Mondragon M1908', Type:'RF', Star:4, Health:420, Ammo:55, Ration:90, DMG:112, EVA:34, ACC:74, ROF:41, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:318, Name:'VHS', Type:'AR', Star:5, Health:580, Ammo:60, Ration:60, DMG:57, EVA:47, ACC:54, ROF:78, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:319, Name:'PM1910', Type:'MG', Star:4, Health:950, Ammo:140, Ration:90, DMG:90, EVA:25, ACC:27, ROF:104, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:320, Name:'GM6 Lynx', Type:'RF', Star:3, Health:420, Ammo:55, Ration:90, DMG:135, EVA:30, ACC:75, ROF:33, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:321, Name:'TS12', Type:'SG', Star:3, Health:1210, Ammo:90, Ration:140, DMG:34, EVA:11, ACC:13, ROF:30, Move:6, Armor:21, CritRate:40, CritDamage:50, AP:15, Clip:3},
    {ID:322, Name:'QSB-91', Type:'HG', Star:3, Health:350, Ammo:30, Ration:30, DMG:36, EVA:72, ACC:58, ROF:53, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:323, Name:'LTLX7000', Type:'SG', Star:5, Health:1375, Ammo:90, Ration:140, DMG:23, EVA:11, ACC:14, ROF:28, Move:6, Armor:25, CritRate:40, CritDamage:50, AP:15, Clip:5},
    {ID:324, Name:'M6 ASW', Type:'SG', Star:5, Health:1300, Ammo:90, Ration:140, DMG:39, EVA:14, ACC:15, ROF:28, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:325, Name:'PM5', Type:'SG', Star:4, Health:1190, Ammo:90, Ration:140, DMG:34, EVA:15, ACC:12, ROF:29, Move:6, Armor:20, CritRate:40, CritDamage:50, AP:15, Clip:5},
    {ID:326, Name:'HK512', Type:'SG', Star:4, Health:1280, Ammo:90, Ration:140, DMG:37, EVA:13, ACC:15, ROF:31, Move:6, Armor:20, CritRate:40, CritDamage:50, AP:15, Clip:3},
    {ID:327, Name:'SUB-2000', Type:'SMG', Star:3, Health:970, Ammo:85, Ration:60, DMG:27, EVA:66, ACC:13, ROF:84, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:328, Name:'AR-57', Type:'SMG', Star:4, Health:915, Ammo:85, Ration:60, DMG:26, EVA:74, ACC:14, ROF:92, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:329, Name:'SVCh', Type:'RF', Star:5, Health:435, Ammo:55, Ration:90, DMG:144, EVA:30, ACC:97, ROF:35, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:330, Name:'FX-05', Type:'AR', Star:4, Health:550, Ammo:60, Ration:60, DMG:54, EVA:47, ACC:55, ROF:69, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:331, Name:'Kolibri', Type:'HG', Star:5, Health:330, Ammo:30, Ration:30, DMG:15, EVA:128, ACC:59, ROF:58, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:332, Name:'Derringer', Type:'HG', Star:4, Health:350, Ammo:30, Ration:30, DMG:31, EVA:93, ACC:60, ROF:52, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:333, Name:'VP1915', Type:'SMG', Star:5, Health:1015, Ammo:85, Ration:60, DMG:25, EVA:66, ACC:12, ROF:91, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:334, Name:'Savage 99', Type:'RF', Star:5, Health:485, Ammo:55, Ration:90, DMG:127, EVA:38, ACC:84, ROF:35, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:335, Name:'Fedorov', Type:'AR', Star:4, Health:550, Ammo:60, Ration:60, DMG:58, EVA:47, ACC:58, ROF:59, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:336, Name:'PPD-40', Type:'SMG', Star:4, Health:925, Ammo:85, Ration:60, DMG:26, EVA:75, ACC:13, ROF:88, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:337, Name:'De Lisle', Type:'RF', Star:5, Health:510, Ammo:55, Ration:90, DMG:109, EVA:38, ACC:87, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:338, Name:'SIG MCX', Type:'AR', Star:5, Health:580, Ammo:60, Ration:60, DMG:49, EVA:46, ACC:57, ROF:83, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:339, Name:'RPK-203', Type:'MG', Star:5, Health:830, Ammo:140, Ration:90, DMG:91, EVA:36, ACC:34, ROF:124, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:9},
    {ID:340, Name:'TKB-408', Type:'AR', Star:5, Health:580, Ammo:60, Ration:60, DMG:55, EVA:48, ACC:51, ROF:72, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:341, Name:'SP9', Type:'SMG', Star:5, Health:1100, Ammo:85, Ration:60, DMG:28, EVA:69, ACC:13, ROF:89, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:342, Name:'KH2002', Type:'AR', Star:5, Health:660, Ammo:60, Ration:60, DMG:53, EVA:39, ACC:51, ROF:78, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:343, Name:'APC556', Type:'AR', Star:4, Health:565, Ammo:60, Ration:60, DMG:49, EVA:45, ACC:48, ROF:77, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:344, Name:'FARA 83', Type:'AR', Star:4, Health:550, Ammo:60, Ration:60, DMG:47, EVA:44, ACC:55, ROF:77, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:345, Name:'MG338', Type:'MG', Star:5, Health:870, Ammo:140, Ration:90, DMG:104, EVA:26, ACC:26, ROF:125, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:9},
    {ID:346, Name:'CZ 100', Type:'HG', Star:4, Health:365, Ammo:30, Ration:30, DMG:29, EVA:1, ACC:54, ROF:58, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:347, Name:'SR-2', Type:'SMG', Star:5, Health:1040, Ammo:85, Ration:60, DMG:31, EVA:65, ACC:14, ROF:92, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:348, Name:'HS.50', Type:'RF', Star:5, Health:440, Ammo:55, Ration:90, DMG:159, EVA:29, ACC:84, ROF:33, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:349, Name:'AK-74M', Type:'AR', Star:4, Health:550, Ammo:60, Ration:60, DMG:51, EVA:45, ACC:57, ROF:73, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:350, Name:'FO-12', Type:'SG', Star:5, Health:1280, Ammo:90, Ration:90, DMG:30, EVA:11, ACC:13, ROF:36, Move:6, Armor:23, CritRate:40, CritDamage:50, AP:15, Clip:5},
    {ID:351, Name:'M26-MASS', Type:'SG', Star:5, Health:1265, Ammo:90, Ration:140, DMG:35, EVA:14, ACC:15, ROF:30, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:5},
    {ID:352, Name:'Supernova', Type:'SG', Star:4, Health:1320, Ammo:90, Ration:140, DMG:31, EVA:16, ACC:13, ROF:29, Move:6, Armor:19, CritRate:40, CritDamage:50, AP:15, Clip:7},
    {ID:353, Name:'MAG-7', Type:'SG', Star:4, Health:1210, Ammo:90, Ration:140, DMG:44, EVA:10, ACC:15, ROF:26, Move:6, Armor:20, CritRate:40, CritDamage:50, AP:15, Clip:5},
    {ID:354, Name:'ZiP .22', Type:'HG', Star:4, Health:330, Ammo:30, Ration:30, DMG:31, EVA:85, ACC:40, ROF:63, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:355, Name:'Vigneron M2', Type:'SMG', Star:4, Health:880, Ammo:85, Ration:60, DMG:29, EVA:75, ACC:15, ROF:85, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:356, Name:'A-545', Type:'AR', Star:5, Health:550, Ammo:60, Ration:60, DMG:55, EVA:49, ACC:53, ROF:82, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:357, Name:'Rhino', Type:'HG', Star:5, Health:365, Ammo:30, Ration:30, DMG:34, EVA:77, ACC:77, ROF:57, Move:15, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:358, Name:'PPQ', Type:'HG', Star:4, Health:350, Ammo:30, Ration:30, DMG:32, EVA:70, ACC:58, ROF:61, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:359, Name:'Sterling', Type:'SMG', Star:5, Health:990, Ammo:60, Ration:60, DMG:30, EVA:77, ACC:14, ROF:85, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:360, Name:'TF-Q', Type:'RF', Star:4, Health:450, Ammo:55, Ration:90, DMG:120, EVA:31, ACC:78, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:361, Name:'QBZ-191', Type:'AR', Star:5, Health:605, Ammo:60, Ration:60, DMG:56, EVA:46, ACC:61, ROF:78, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:362, Name:'LS26', Type:'MG', Star:4, Health:830, Ammo:140, Ration:90, DMG:108, EVA:25, ACC:30, ROF:96, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:9},
    {ID:363, Name:'MPL', Type:'SMG', Star:4, Health:925, Ammo:85, Ration:60, DMG:31, EVA:72, ACC:13, ROF:78, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:364, Name:'MPK', Type:'SMG', Star:4, Health:925, Ammo:85, Ration:60, DMG:30, EVA:75, ACC:13, ROF:78, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:365, Name:'SCR', Type:'AR', Star:5, Health:550, Ammo:60, Ration:60, DMG:51, EVA:53, ACC:55, ROF:79, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:1001, Name:'Noel', Type:'HG', Star:1, Health:300, Ammo:30, Ration:30, DMG:30, EVA:82, ACC:60, ROF:65, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:1002, Name:'Elphelt', Type:'SG', Star:1, Health:1375, Ammo:90, Ration:140, DMG:36, EVA:9, ACC:13, ROF:28, Move:6, Armor:23, CritRate:40, CritDamage:50, AP:15, Clip:5},
    {ID:1003, Name:'Kiana', Type:'HG', Star:1, Health:350, Ammo:30, Ration:30, DMG:31, EVA:76, ACC:53, ROF:64, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:1004, Name:'Raiden Mei', Type:'RF', Star:1, Health:420, Ammo:55, Ration:90, DMG:146, EVA:32, ACC:70, ROF:34, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:1005, Name:'Bronya', Type:'RF', Star:1, Health:405, Ammo:55, Ration:90, DMG:132, EVA:33, ACC:77, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:1006, Name:'Theresa', Type:'HG', Star:1, Health:415, Ammo:30, Ration:30, DMG:30, EVA:79, ACC:47, ROF:54, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:1007, Name:'Murata Himeko', Type:'AR', Star:1, Health:605, Ammo:60, Ration:60, DMG:58, EVA:42, ACC:45, ROF:64, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:1008, Name:'Seele', Type:'SG', Star:1, Health:1235, Ammo:90, Ration:140, DMG:35, EVA:13, ACC:11, ROF:27, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:5},
    {ID:1009, Name:'Clear', Type:'HG', Star:1, Health:330, Ammo:30, Ration:30, DMG:31, EVA:88, ACC:62, ROF:61, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:1010, Name:'Fail', Type:'HG', Star:1, Health:330, Ammo:30, Ration:30, DMG:31, EVA:88, ACC: 62, ROF:61, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:1017, Name:'Jill', Type:'HG', Star:1, Health:400, Ammo:30, Ration:30, DMG:30, EVA:96, ACC:53, ROF:55, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:1018, Name:'Sei', Type:'HG', Star:1, Health:425, Ammo:30, Ration:30, DMG:30, EVA:77, ACC:59, ROF:53, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:1019, Name:'Dorothy', Type:'SMG', Star:1, Health:880, Ammo:85, Ration:60, DMG:28, EVA:87, ACC:15, ROF:79, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:1020, Name:'Stella', Type:'RF', Star:1, Health:450, Ammo:55, Ration:90, DMG:117, EVA:36, ACC:84, ROF:35, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:1021, Name:'Alma', Type:'MG', Star:1, Health:975, Ammo:140, Ration:90, DMG:89, EVA:23, ACC:31, ROF:129, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:9},
    {ID:1022, Name:'Dana', Type:'SG', Star:1, Health:1345, Ammo:90, Ration:140, DMG:38, EVA:13, ACC:15, ROF:26, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:1},
    {ID:1023, Name:'Henrietta', Type:'SMG', Star:1, Health:950, Ammo:85, Ration:60, DMG:30, EVA:83, ACC:15, ROF:93, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:1024, Name:'Rico', Type:'RF', Star:1, Health:400, Ammo:55, Ration:90, DMG:130, EVA:33, ACC:80, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:1025, Name:'Triela', Type:'SG', Star:1, Health:1265, Ammo:90, Ration:140, DMG:35, EVA:11, ACC:11, ROF:26, Move:6, Armor:21, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:1026, Name:'Claes', Type:'MG', Star:1, Health:785, Ammo:140, Ration:90, DMG:79, EVA:36, ACC:35, ROF:139, Move:6, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:8},
    {ID:1027, Name:'Angelica', Type:'AR', Star:1, Health:605, Ammo:60, Ration:60, DMG:55, EVA:46, ACC:57, ROF:75, Move:10, Armor:0, CritRate:30, CritDamage:50, AP:15},
    {ID:1028, Name:'Agent Vector', Type:'SMG', Star:1, Health:925, Ammo:85, Ration:60, DMG:30, EVA:71, ACC:11, ROF:101, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:1029, Name:'Agent 416', Type:'AR', Star:1, Health:605, Ammo:60, Ration:60, DMG:51, EVA:44, ACC:46, ROF:76, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:1030, Name:'Jashin-chan', Type:'SMG', Star:1, Health:1020, Ammo:85, Ration:60, DMG:26, EVA:75, ACC:13, ROF:81, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:1031, Name:'Pekora', Type:'RF', Star:1, Health:440, Ammo:55, Ration:90, DMG:126, EVA:40, ACC:80, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:1032, Name:'Medusa', Type:'AR', Star:1, Health:610, Ammo:60, Ration:60, DMG:58, EVA:47, ACC:57, ROF:73, Move:10, Armor:0, CritRate:30, CritDamage:50, AP:15},
    {ID:1033, Name:'Yurine', Type:'MG', Star:1, Health:910, Ammo:140, Ration:90, DMG:93, EVA:24, ACC:29, ROF:128, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:10},
    {ID:1034, Name:'Minos', Type:'SG', Star:1, Health:1430, Ammo:90, Ration:140, DMG:39, EVA:11, ACC:12, ROF:24, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:4}
];

var _FOUNDDOLLS1, _FOUNDDOLLS2, _FOUNDDOLLS3, _FOUNDDOLLS4, _FOUNDDOLLS5;
var _SELECTDOLL1, _SELECTDOLL2, _SELECTDOLL3, _SELECTDOLL4, _SELECTDOLL5;

var _1SHG, _2SHG, _3SHG, _4SHG, _5SHG;
var _1SSMG, _2SSMG, _3SSMG, _4SSMG, _5SSMG;
var _1SAR, _2SAR, _3SAR, _4SAR, _5SAR;
var _1SRF, _2SRF, _3SRF, _4SRF, _5SRF;
var _1SMG, _2SMG, _3SMG, _4SMG, _5SMG;
var _1SSG, _3SSG, _4SSG, _5SSG;

function populateArrays(){
    _1SHG = new Array();
    _2SHG = new Array();
    _3SHG = new Array();
    _4SHG = new Array();
    _5SHG = new Array();

    _1SSMG = new Array();
    _2SSMG = new Array();
    _3SSMG = new Array();
    _4SSMG = new Array();
    _5SSMG = new Array();

    _1SAR = new Array();
    _2SAR = new Array();
    _3SAR = new Array();
    _4SAR = new Array();
    _5SAR = new Array();

    _1SRF = new Array();
    _2SRF = new Array();
    _3SRF = new Array();
    _4SRF = new Array();
    _5SRF = new Array();

    _1SMG = new Array();
    _2SMG = new Array();
    _3SMG = new Array();
    _4SMG = new Array();
    _5SMG = new Array();

    _1SSG = new Array();
    _3SSG = new Array();
    _4SSG = new Array();
    _5SSG = new Array();

    for (var i = 0; i < _DOLLS.length; i++){
        switch (_DOLLS[i].Star){
            case 1:
                switch (_DOLLS[i].Type){
                    case 'HG':
                        _1SHG.push(_DOLLS[i]);
                        break;
                    case 'SMG':
                        _1SSMG.push(_DOLLS[i]);
                        break;
                    case 'AR':
                        _1SAR.push(_DOLLS[i]);
                        break;
                    case 'RF':
                        _1SRF.push(_DOLLS[i]);
                        break;
                    case 'MG':
                        _1SMG.push(_DOLLS[i]);
                        break;
                    case 'SG':
                        _1SSG.push(_DOLLS[i]);
                        break;
                }
                break;
            case 2:
                switch (_DOLLS[i].Type){
                    case 'HG':
                        _2SHG.push(_DOLLS[i]);
                        break;
                    case 'SMG':
                        _2SSMG.push(_DOLLS[i]);
                        break;
                    case 'AR':
                        _2SAR.push(_DOLLS[i]);
                        break;
                    case 'RF':
                        _2SRF.push(_DOLLS[i]);
                        break;
                    case 'MG':
                        _2SMG.push(_DOLLS[i]);
                        break;
                }
                break;
            case 3:
                switch (_DOLLS[i].Type){
                    case 'HG':
                        _3SHG.push(_DOLLS[i]);
                        break;
                    case 'SMG':
                        _3SSMG.push(_DOLLS[i]);
                        break;
                    case 'AR':
                        _3SAR.push(_DOLLS[i]);
                        break;
                    case 'RF':
                        _3SRF.push(_DOLLS[i]);
                        break;
                    case 'MG':
                        _3SMG.push(_DOLLS[i]);
                        break;
                    case 'SG':
                        _3SSG.push(_DOLLS[i]);
                        break;
                }
                break;
            case 4:
                switch (_DOLLS[i].Type){
                    case 'HG':
                        _4SHG.push(_DOLLS[i]);
                        break;
                    case 'SMG':
                        _4SSMG.push(_DOLLS[i]);
                        break;
                    case 'AR':
                        _4SAR.push(_DOLLS[i]);
                        break;
                    case 'RF':
                        _4SRF.push(_DOLLS[i]);
                        break;
                    case 'MG':
                        _4SMG.push(_DOLLS[i]);
                        break;
                    case 'SG':
                        _4SSG.push(_DOLLS[i]);
                        break;
                }
                break;
            case 5:
                switch (_DOLLS[i].Type){
                    case 'HG':
                        _5SHG.push(_DOLLS[i]);
                        break;
                    case 'SMG':
                        _5SSMG.push(_DOLLS[i]);
                        break;
                    case 'AR':
                        _5SAR.push(_DOLLS[i]);
                        break;
                    case 'RF':
                        _5SRF.push(_DOLLS[i]);
                        break;
                    case 'MG':
                        _5SMG.push(_DOLLS[i]);
                        break;
                    case 'SG':
                        _5SSG.push(_DOLLS[i]);
                        break;
                }
                break;
        }
    }
}