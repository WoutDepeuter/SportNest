-- Tags toevoegen aan laravel.tags
insert into laravel.tags (id, name, description, created_at, updated_at) values

-- Algemene sportcategorieën
(1, 'watersport', 'Sporten op of in het water', NOW(), NOW()),
(2, 'balsport', 'Sporten waarbij een bal wordt gebruikt', NOW(), NOW()),
(3, 'gevechtsport', 'Sporten met een focus op zelfverdediging of competitie', NOW(), NOW()),
(4, 'multisport', 'Combinatie van meerdere sporten', NOW(), NOW()),

-- Moeilijkheidsgraad
(5, 'moeilijkheid_makkelijk', 'Lage moeilijkheidsgraad', NOW(), NOW()),
(6, 'moeilijkheid_gemiddeld', 'Gemiddelde moeilijkheidsgraad', NOW(), NOW()),
(7, 'moeilijkheid_moeilijk', 'Hoge moeilijkheidsgraad', NOW(), NOW()),
(8, 'moeilijkheid_zeer_moeilijk', 'Zeer hoge moeilijkheidsgraad', NOW(), NOW()),

-- Uithoudingsvermogen
(9, 'uithoudingsvermogen_lage', 'Weinig uithoudingsvermogen vereist', NOW(), NOW()),
(10, 'uithoudingsvermogen_gemiddeld', 'Gemiddeld uithoudingsvermogen vereist', NOW(), NOW()),
(11, 'uithoudingsvermogen_hoog', 'Veel uithoudingsvermogen vereist', NOW(), NOW()),

-- Generieke tags
(12, 'energiek', 'Sporten met een energiek karakter', NOW(), NOW()),
(13, 'samenspel', 'Sporten met een focus op teamwork', NOW(), NOW()),
(14, 'snelheid', 'Sporten waarbij snelheid belangrijk is', NOW(), NOW()),
(15, 'kracht', 'Sporten waarbij fysieke kracht centraal staat', NOW(), NOW()),
(16, 'precisie', 'Sporten waarbij precisie en nauwkeurigheid belangrijk zijn', NOW(), NOW()),
(17, 'tactiek', 'Sporten met een tactisch element', NOW(), NOW()),
(18, 'uithoudingsvermogen_extreem', 'Extreem veel uithoudingsvermogen vereist', NOW(), NOW()),
(19, 'techniek', 'Sporten waarbij techniek belangrijk is', NOW(), NOW()),
(20, 'individueel', 'Individuele sporten', NOW(), NOW()),
(21, 'teamwerk', 'Sporten waarbij teamwork essentieel is', NOW(), NOW());

-- Tags koppelen aan sporten in laravel.sport_tags
insert into laravel.sport_tags (sport_id, tag_id) values

-- Zaalvoetbal
(1, 2), (1, 6), (1, 7), (1, 13), (1, 21),

-- Zwemmen
(2, 1), (2, 5), (2, 9), (2, 12), (2, 19),

-- Voetbal
(3, 2), (3, 6), (3, 7), (3, 13), (3, 21),

-- Turnen
(4, 6), (4, 7), (4, 15), (4, 19), (4, 20),

-- Taekwondo
(5, 3), (5, 7), (5, 15), (5, 19), (5, 20),

-- Basketbal
(6, 2), (6, 6), (6, 13), (6, 21), (6, 17),

-- Gevecht
(7, 3), (7, 7), (7, 15), (7, 20), (7, 17),

-- Synchroonzwemmen
(8, 1), (8, 5), (8, 9), (8, 12), (8, 19),

-- Schermen
(9, 3), (9, 8), (9, 16), (9, 19), (9, 20),

-- Handbal
(10, 2), (10, 6), (10, 13), (10, 21), (10, 17),

-- Triatlon
(11, 1), (11, 4), (11, 10), (11, 18), (11, 12),

-- Amerikaans voetbal
(12, 2), (12, 6), (12, 13), (12, 21), (12, 17),

-- Aikido
(13, 3), (13, 6), (13, 15), (13, 19), (13, 20),

-- Boksen
(14, 3), (14, 7), (14, 15), (14, 20), (14, 17),

-- Boogschieten
(15, 16), (15, 19), (15, 20), (15, 12), (15, 5),

-- Multisport
(16, 4), (16, 1), (16, 2), (16, 3), (16, 18),

-- School
(17, 4), (17, 2), (17, 5), (17, 6), (17, 13),

-- Badminton
(18, 2), (18, 13), (18, 19), (18, 20), (18, 16),

-- Petanque
(19, 14), (19, 5), (19, 20), (19, 13), (19, 19),

-- Tafeltennis
(20, 2), (20, 16), (20, 19), (20, 20), (20, 15),

-- Judo
(21, 3), (21, 7), (21, 15), (21, 19), (21, 20),

-- Duiken
(22, 1), (22, 5), (22, 9), (22, 19), (22, 20),

-- Hockey
(23, 2), (23, 6), (23, 13), (23, 21), (23, 17),

-- Karate
(24, 3), (24, 7), (24, 15), (24, 19), (24, 20),

-- Volleybal
(25, 2), (25, 6), (25, 13), (25, 21), (25, 17),

-- Handball
(26, 2), (26, 6), (26, 13), (26, 21), (26, 17),

-- Padel
(27, 2), (27, 14), (27, 16), (27, 13), (27, 19),

-- Yoga
(28, 5), (28, 9), (28, 15), (28, 19), (28, 20);
