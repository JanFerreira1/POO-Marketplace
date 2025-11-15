-- Este script será executado automaticamente pelo Spring Boot. Para popular o banco de dados com os produtos da pasta /frontend/public/img

/*
nomeclatura para os produtos: 
nº-nome-disco.jpg -> para incluir os discos
nº-nome-acessorio.jpg -> para incluir os acessórios
localização das imagens: /frontend/public/img/ -> /img/ no banco de dados
*/

-- PARA INCLUIR OS DISCOS - MPB
--001
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Djavan (Frutificar)', 
    'Djavan', 
    1982, 
    299.90, 
    '/img/001-luz-disco.jpg', 
    'disco', 
    'Um clássico da MPB, "Frutificar" é o quarto álbum de estúdio do cantor e compositor brasileiro Djavan, lançado em 1982.', 
    'Usado (VG+)'
);

--002
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Clube da Esquina', 
    'Milton Nascimento e Lô Borges', 
    1978, 
    200.00, 
    '/img/002-clube-disco.jpg',
    'disco', 
    'Álbum emblemático da música brasileira, reunindo talentos e influências do rock, jazz e música regional.', 
    'Usado (NM)'
);

-- PARA INCLUIR OS DISCOS - Rock
--003
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Nevermind', 
    'Nirvana', 
    1991, 
    350.00, 
    '/img/003-nevermind-disco.jpg', 
    'disco', 
    'O álbum que definiu o grunge e mudou a história do rock. Inclui o hit "Smells Like Teen Spirit".', 
    'Novo (Lacrado)'
);
--004
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'The Dark Side of the Moon', 
    'Pink Floyd', 
    1973, 
    420.00, 
    '/img/004-thedarksideofthemoon-disco.jpg', 
    'disco', 
    'Álbum conceitual icônico, conhecido por sua produção inovadora e letras filosóficas.', 
    'Usado (G+)'
);
--005
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'A Night at the Opera', 
    'Queen', 
    1975, 
    380.00, 
    '/img/005-anightattheopera-disco.jpg', 
    'disco', 
    'Inclui a lendária "Bohemian Rhapsody". Um marco do rock progressivo e da ópera rock.', 
    'Usado (VG+)'
);

-- PARA INCLUIR OS DISCOS - Pop e Eletrônico
--006
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Folklore', 
    'Taylor Swift', 
    2020, 
    310.00, 
    '/img/006-folklore-disco.jpg', 
    'disco', 
    'Álbum aclamado pela crítica, gravado durante a pandemia, com foco em composições indie-folk.', 
    'Novo (Lacrado)'
);
--007
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Discovery', 
    'Daft Punk', 
    2001, 
    250.00, 
    '/img/007-discovery-disco.jpg', 
    'disco', 
    'Segundo álbum de estúdio da dupla francesa, definindo a french house com hits como "One More Time".', 
    'Usado (NM)'
);

-- PARA INCLUIR OS DISCOS - Música Clássica
--008
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Tchaikovsky: O Lago dos Cisnes', 
    'Orquestra Sinfônica de Londres', 
    1977, 
    520.00, 
    '/img/008-lagos-disco.jpg', 
    'disco', 
    'Gravação de referência de uma das peças de balé mais famosas de todos os tempos.', 
    'Usado (VG)'
);
--009
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'As Quatro Estações (Vivaldi)', 
    'Orquestra de Câmara Inglesa', 
    1981, 
    99.00, 
    '/img/009-asquatro-disco.jpg', 
    'disco', 
    'Interpretação vibrante da obra-prima de Vivaldi por uma das orquestras de câmara mais renomadas.', 
    'Usado (VG+)'
);

-- -- PARA INCLUIR ACESSÓRIOS
--001
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Agulha de Reposição ATN95E', 
    'Audio-Technica', 
    2024, 
    319.90, 
    '/img/001-agulha-acessorio.png', 
    'acessorio', 
    'Agulha de diamante elíptica de reposição, compatível com cápsulas AT95E e similares.', 
    'Novo'
);
--002
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Caixa de Madeira para Discos (50 LPs)', 
    'RePlayce Essentials', 
    2024, 
    120.00, 
    '/img/002-caixa-acessorio.jpg', 
    'acessorio', 
    'Armazene sua coleção com estilo. Caixa de pinus reforçada com acabamento premium.', 
    'Novo'
);
--003
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Escova de Fibra de Carbono Antiestática', 
    'RePlayce Essentials', 
    2024, 
    89.90, 
    '/img/003-escova-acessorio.jpg', 
    'acessorio', 
    'Remove poeira e estática dos seus discos de vinil com segurança, melhorando a qualidade do som.', 
    'Novo'
);
--004
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Nivelador de Prato (Bubble Level)', 
    'RePlayce Essentials', 
    2024, 
    75.00, 
    '/img/004-nivel-acessorio.webp', --alterar imagem
    'acessorio', 
    'Garanta que seu toca-discos esteja perfeitamente nivelado para a melhor performance de áudio.', 
    'Novo'
);
--005
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Kit 50 Plásticos Internos Antiestáticos', 
    'RePlayce Essentials', 
    2024, 
    65.00, 
    '/img/acessorios/plastico.jpg', --alterar imagem
    'acessorio', 
    'Proteja seus LPs contra arranhões e poeira com plásticos internos de alta qualidade.', 
    'Novo'
);
--006
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Slipmat de Cortiça para Toca-Discos', 
    'Turntable Lab', 
    2024, 
    119.90, 
    '/img/acessorios/slipmat.jpg', --alterar imagem
    'acessorio', 
    'Melhora a aderência do disco e reduz a vibração e a estática. Feito de cortiça e borracha.', 
    'Novo'
);
