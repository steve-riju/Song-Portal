INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish,author)
VALUES 
-- 1
(101, 'നിന്റെ കരുണ', 'സ്തോത്ര ഗീതങ്ങൾ', 
 'നിന്റെ കരുണ എത്ര മഹത്വം ഉള്ളതാകുന്നു...', 
 'Ninte karuna ethra mahatwam ullathakunnu...' ,'G.P'),

-- 2
(102, 'സ്നേഹമായ ഈശോ', 'ആരാധനാഗീതങ്ങൾ', 
 'സ്നേഹമായ ഈശോ, നിന്‍റെ സ്നേഹത്താല്‍ ഞാന്‍ രക്ഷപ്പെട്ടു...', 
 'Snehamaya Eesho, ninte sneham thaal njan rakshappettu...','K.V.S'),

-- 3
(103, 'പ്രഭാതത്തിൽ ഞാൻ ഉണരുന്നു', 'പ്രഭാത ഗീതങ്ങൾ', 
 'പ്രഭാതത്തിൽ ഞാൻ ഉണരുന്നു നിന്റെ നാമം ഉയർത്തുന്നു...', 
 'Prabhaathathil njan unarunnu ninte naamam uyarthunnu...','M.E.C'),

-- 4
(104, 'Yeshuvin Sneham', 'ഇംഗ്ലീഷ് ഗാനങ്ങൾ', 
 'യേശുവിന്റെ സ്നേഹം എന്നെ ജീവിപ്പിക്കുന്നു...', 
 'Yeshuvin sneham enne jeevippikkunnu...','J.J');
 
 INSERT INTO song (
   title, song_no, category, lyrics_malayalam, lyrics_manglish, author
) VALUES (
  
  'കൃപയേറും കർത്താവിലെൻ വിശ്വാസം',
  120,
  'സ്തോത്ര ഗീതങ്ങൾ',
  'കൃപയേറും കർത്താവിലെൻ വിശ്വാസം\nഅതിനാൽ ഹൃദിയെന്തു നല്ലാശ്വാസം\nദുരിതങ്ങൾ നിറയുമീ ഭൂവാസം\nകൃപയാൽ മനോഹരമായ്\n[Chorus] കൃപ കൃപയൊന്നെന്നാശ്രയമായ് ഹാല്ലേലുയ്യാ\nകൃപ കൃപയൊന്നെന്നാനന്ദമായ്\nവൈരികൾ വന്നാലുമെതിരുയർന്നാലും\nകൃപമതിയെന്നാളും\n1. ബലഹീനതയിൽ നല്ല ബലമേകും\nമരുഭൂമിയിലാനന്ദത്തണലാകും\nഇരുൾ പാതയിലനുദിനമൊളി നൽകും\nകൃപയൊന്നെന്നാശ്രയമായ്\n2. എന്‍റെ താഴ്ചയിലവനെ-ന്നെയോർത്തല്ലോ\nഘോരവൈരിയിൻ ബലമവൻ തകർത്തല്ലോ\nതന്‍റെ കൈകളിലവനെന്നെ ചേർത്തല്ലോ\nസ്തോത്രഗീതം പാടിടും ഞാൻ\n3. പ്രതികൂലങ്ങളനവധി വന്നാലും\nഅനുകൂലമെനിക്കവനെന്നാളും\nതിരു ജീവിതത്തന്നവനினிமേലും\nകൃപയാൽ നടത്തുമെന്നെ\n--- K.V.S',
  'Than yerum karthavil en vishwasam\nAthinaal hrudiyenthu nalla aashwasam\nDurithangal nirayumi bhoovaasam\nKrupa yaal manoharamayi\n[Chorus] Krupa krupayonnenna ashrayamaayi Hallelujah\nKrupa krupayonnenna aanandamaayi\nVairikal vannaalum ethiruyarnnalum\nKrupa mathiyennu aalochikkam\n1. Balahenathayil nalla balamekkum\nMarubhoomiyil aanandath thanalakkum\nIrul paathayil anudinam oli nalkum\nKrupa yonnenna aashrayamaayi\n2. Ente thaazhchayil avan enne orthallo\nGhora vairiyude balam avan thakarthallo\nThanthae kaikallil avan enne cherthallo\nStothrageetham paadidum njan\n3. Prathikoolangal anavathi vannaalum\nAnukoolam enikk avan ennaalum\nThiru jeevitham thanne avan inimeelum\nKrupa yaal nadathum enne\n--- K.V.S',
  'G.P'
);

use cba_song_db;

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (401, 'Sample Song 401', 'പ്രഭാത ഗീതങ്ങൾ', 'Sample Song 401 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 401 lyrics in Manglish...', 'M.E.C', '2025-01-01 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (402, 'Sample Song 402', 'ഇംഗ്ലീഷ് ഗാനങ്ങൾ', 'Sample Song 402 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 402 lyrics in Manglish...', 'J.J', '2025-01-02 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (403, 'Sample Song 403', 'സ്നേഹഗീതങ്ങൾ', 'Sample Song 403 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 403 lyrics in Manglish...', 'A.K', '2025-01-03 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (404, 'Sample Song 404', 'വിശ്വാസഗീതങ്ങൾ', 'Sample Song 404 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 404 lyrics in Manglish...', 'R.J', '2025-01-04 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (405, 'Sample Song 405', 'സന്ധ്യാകീർത്തനങ്ങൾ', 'Sample Song 405 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 405 lyrics in Manglish...', 'S.M', '2025-01-05 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (406, 'Sample Song 406', 'സ്തോത്ര ഗീതങ്ങൾ', 'Sample Song 406 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 406 lyrics in Manglish...', 'G.P', '2025-01-06 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (407, 'Sample Song 407', 'ആരാധനാഗീതങ്ങൾ', 'Sample Song 407 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 407 lyrics in Manglish...', 'K.V.S', '2025-01-07 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (408, 'Sample Song 408', 'പ്രഭാത ഗീതങ്ങൾ', 'Sample Song 408 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 408 lyrics in Manglish...', 'M.E.C', '2025-01-08 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (409, 'Sample Song 409', 'ഇംഗ്ലീഷ് ഗാനങ്ങൾ', 'Sample Song 409 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 409 lyrics in Manglish...', 'J.J', '2025-01-09 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (410, 'Sample Song 410', 'സ്നേഹഗീതങ്ങൾ', 'Sample Song 410 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 410 lyrics in Manglish...', 'A.K', '2025-01-10 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (411, 'Sample Song 411', 'വിശ്വാസഗീതങ്ങൾ', 'Sample Song 411 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 411 lyrics in Manglish...', 'R.J', '2025-01-11 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (412, 'Sample Song 412', 'സന്ധ്യാകീർത്തനങ്ങൾ', 'Sample Song 412 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 412 lyrics in Manglish...', 'S.M', '2025-01-12 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (413, 'Sample Song 413', 'സ്തോത്ര ഗീതങ്ങൾ', 'Sample Song 413 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 413 lyrics in Manglish...', 'G.P', '2025-01-13 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (414, 'Sample Song 414', 'ആരാധനാഗീതങ്ങൾ', 'Sample Song 414 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 414 lyrics in Manglish...', 'K.V.S', '2025-01-14 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (415, 'Sample Song 415', 'പ്രഭാത ഗീതങ്ങൾ', 'Sample Song 415 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 415 lyrics in Manglish...', 'M.E.C', '2025-01-15 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (416, 'Sample Song 416', 'ഇംഗ്ലീഷ് ഗാനങ്ങൾ', 'Sample Song 416 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 416 lyrics in Manglish...', 'J.J', '2025-01-16 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (417, 'Sample Song 417', 'സ്നേഹഗീതങ്ങൾ', 'Sample Song 417 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 417 lyrics in Manglish...', 'A.K', '2025-01-17 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (418, 'Sample Song 418', 'വിശ്വാസഗീതങ്ങൾ', 'Sample Song 418 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 418 lyrics in Manglish...', 'R.J', '2025-01-18 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (419, 'Sample Song 419', 'സന്ധ്യാകീർത്തനങ്ങൾ', 'Sample Song 419 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 419 lyrics in Manglish...', 'S.M', '2025-01-19 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (420, 'Sample Song 420', 'സ്തോത്ര ഗീതങ്ങൾ', 'Sample Song 420 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 420 lyrics in Manglish...', 'G.P', '2025-01-20 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (421, 'Sample Song 421', 'ആരാധനാഗീതങ്ങൾ', 'Sample Song 421 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 421 lyrics in Manglish...', 'K.V.S', '2025-01-21 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (422, 'Sample Song 422', 'പ്രഭാത ഗീതങ്ങൾ', 'Sample Song 422 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 422 lyrics in Manglish...', 'M.E.C', '2025-01-22 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (423, 'Sample Song 423', 'ഇംഗ്ലീഷ് ഗാനങ്ങൾ', 'Sample Song 423 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 423 lyrics in Manglish...', 'J.J', '2025-01-23 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (424, 'Sample Song 424', 'സ്നേഹഗീതങ്ങൾ', 'Sample Song 424 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 424 lyrics in Manglish...', 'A.K', '2025-01-24 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (425, 'Sample Song 425', 'വിശ്വാസഗീതങ്ങൾ', 'Sample Song 425 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 425 lyrics in Manglish...', 'R.J', '2025-01-25 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (426, 'Sample Song 426', 'സന്ധ്യാകീർത്തനങ്ങൾ', 'Sample Song 426 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 426 lyrics in Manglish...', 'S.M', '2025-01-26 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (427, 'Sample Song 427', 'സ്തോത്ര ഗീതങ്ങൾ', 'Sample Song 427 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 427 lyrics in Manglish...', 'G.P', '2025-01-27 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (428, 'Sample Song 428', 'ആരാധനാഗീതങ്ങൾ', 'Sample Song 428 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 428 lyrics in Manglish...', 'K.V.S', '2025-01-28 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (429, 'Sample Song 429', 'പ്രഭാത ഗീതങ്ങൾ', 'Sample Song 429 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 429 lyrics in Manglish...', 'M.E.C', '2025-01-29 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (430, 'Sample Song 430', 'ഇംഗ്ലീഷ് ഗാനങ്ങൾ', 'Sample Song 430 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 430 lyrics in Manglish...', 'J.J', '2025-01-30 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (431, 'Sample Song 431', 'സ്നേഹഗീതങ്ങൾ', 'Sample Song 431 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 431 lyrics in Manglish...', 'A.K', '2025-01-31 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (432, 'Sample Song 432', 'വിശ്വാസഗീതങ്ങൾ', 'Sample Song 432 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 432 lyrics in Manglish...', 'R.J', '2025-02-01 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (433, 'Sample Song 433', 'സന്ധ്യാകീർത്തനങ്ങൾ', 'Sample Song 433 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 433 lyrics in Manglish...', 'S.M', '2025-02-02 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (434, 'Sample Song 434', 'സ്തോത്ര ഗീതങ്ങൾ', 'Sample Song 434 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 434 lyrics in Manglish...', 'G.P', '2025-02-03 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (435, 'Sample Song 435', 'ആരാധനാഗീതങ്ങൾ', 'Sample Song 435 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 435 lyrics in Manglish...', 'K.V.S', '2025-02-04 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (436, 'Sample Song 436', 'പ്രഭാത ഗീതങ്ങൾ', 'Sample Song 436 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 436 lyrics in Manglish...', 'M.E.C', '2025-02-05 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (437, 'Sample Song 437', 'ഇംഗ്ലീഷ് ഗാനങ്ങൾ', 'Sample Song 437 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 437 lyrics in Manglish...', 'J.J', '2025-02-06 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (438, 'Sample Song 438', 'സ്നേഹഗീതങ്ങൾ', 'Sample Song 438 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 438 lyrics in Manglish...', 'A.K', '2025-02-07 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (439, 'Sample Song 439', 'വിശ്വാസഗീതങ്ങൾ', 'Sample Song 439 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 439 lyrics in Manglish...', 'R.J', '2025-02-08 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (440, 'Sample Song 440', 'സന്ധ്യാകീർത്തനങ്ങൾ', 'Sample Song 440 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 440 lyrics in Manglish...', 'S.M', '2025-02-09 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (441, 'Sample Song 441', 'സ്തോത്ര ഗീതങ്ങൾ', 'Sample Song 441 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 441 lyrics in Manglish...', 'G.P', '2025-02-10 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (442, 'Sample Song 442', 'ആരാധനാഗീതങ്ങൾ', 'Sample Song 442 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 442 lyrics in Manglish...', 'K.V.S', '2025-02-11 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (443, 'Sample Song 443', 'പ്രഭാത ഗീതങ്ങൾ', 'Sample Song 443 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 443 lyrics in Manglish...', 'M.E.C', '2025-02-12 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (444, 'Sample Song 444', 'ഇംഗ്ലീഷ് ഗാനങ്ങൾ', 'Sample Song 444 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 444 lyrics in Manglish...', 'J.J', '2025-02-13 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (445, 'Sample Song 445', 'സ്നേഹഗീതങ്ങൾ', 'Sample Song 445 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 445 lyrics in Manglish...', 'A.K', '2025-02-14 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (446, 'Sample Song 446', 'വിശ്വാസഗീതങ്ങൾ', 'Sample Song 446 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 446 lyrics in Manglish...', 'R.J', '2025-02-15 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (447, 'Sample Song 447', 'സന്ധ്യാകീർത്തനങ്ങൾ', 'Sample Song 447 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 447 lyrics in Manglish...', 'S.M', '2025-02-16 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (448, 'Sample Song 448', 'സ്തോത്ര ഗീതങ്ങൾ', 'Sample Song 448 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 448 lyrics in Manglish...', 'G.P', '2025-02-17 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (449, 'Sample Song 449', 'ആരാധനാഗീതങ്ങൾ', 'Sample Song 449 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 449 lyrics in Manglish...', 'K.V.S', '2025-02-18 10:00:00.000');

INSERT INTO song (song_no, title, category, lyrics_malayalam, lyrics_manglish, author, created_at)
VALUES (450, 'Sample Song 450', 'പ്രഭാത ഗീതങ്ങൾ', 'Sample Song 450 ഗാനത്തിന്റെ മലയാളം വരികൾ...', 'Sample Song 450 lyrics in Manglish...', 'M.E.C', '2025-02-19 10:00:00.000');

SELECT * FROM cba_song_db.song;
