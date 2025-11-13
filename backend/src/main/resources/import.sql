-- Este script será executado automaticamente pelo Spring Boot
-- para popular o banco de dados com os produtos da pasta /frontend/public/img

-- Discos de MPB
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Djavan (Frutificar)', 
    'Djavan', 
    1982, 
    299.90, 
    '/img/djavan.png', 
    'disco', 
    'Um clássico da MPB, "Frutificar" é o quarto álbum de estúdio do cantor e compositor brasileiro Djavan, lançado em 1982.', 
    'Usado (VG+)'
);

INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'A Tábua de Esmeralda', 
    'Jorge Ben', 
    1974, 
    450.00, 
    '/img/ze-ramalho.png', -- ATENÇÃO: A imagem é do Zé Ramalho, mas o título é Jorge Ben. Ajuste se necessário.
    'disco', 
    'Considerado uma obra-prima da música brasileira, misturando samba, rock psicodélico e elementos místicos.', 
    'Usado (NM)'
);

-- Discos de Rock
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Nevermind', 
    'Nirvana', 
    1991, 
    350.00, 
    '/img/nirvana.png', 
    'disco', 
    'O álbum que definiu o grunge e mudou a história do rock. Inclui o hit "Smells Like Teen Spirit".', 
    'Novo (Lacrado)'
);

INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'The Dark Side of the Moon', 
    'Pink Floyd', 
    1973, 
    420.00, 
    '/img/pink-floyd.png', 
    'disco', 
    'Álbum conceitual icônico, conhecido por sua produção inovadora e letras filosóficas.', 
    'Usado (G+)'
);

INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'A Night at the Opera', 
    'Queen', 
    1975, 
    380.00, 
    '/img/queen.png', 
    'disco', 
    'Inclui a lendária "Bohemian Rhapsody". Um marco do rock progressivo e da ópera rock.', 
    'Usado (VG+)'
);

-- Discos de Pop e Eletrônico
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Folklore', 
    'Taylor Swift', 
    2020, 
    310.00, 
    '/img/taylor-swift.png', 
    'disco', 
    'Álbum aclamado pela crítica, gravado durante a pandemia, com foco em composições indie-folk.', 
    'Novo (Lacrado)'
);

INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Discovery', 
    'Daft Punk', 
    2001, 
    550.00, 
    '/img/daft-punk.png', 
    'disco', 
    'Segundo álbum de estúdio da dupla francesa, definindo a french house com hits como "One More Time".', 
    'Usado (NM)'
);

-- Discos de Música Clássica
INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Tchaikovsky: O Lago dos Cisnes', 
    'Orquestra Sinfônica de Londres', 
    1977, 
    120.00, 
    '/img/lago-dos-cisnes.png', 
    'disco', 
    'Gravação de referência de uma das peças de balé mais famosas de todos os tempos.', 
    'Usado (VG)'
);

INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'As Quatro Estações (Vivaldi)', 
    'Orquestra de Câmara Inglesa', 
    1981, 
    99.00, 
    '/img/orquestra.png', 
    'disco', 
    'Interpretação vibrante da obra-prima de Vivaldi por uma das orquestras de câmara mais renomadas.', 
    'Usado (VG+)'
);

-- ===================================================================
-- NOVOS PRODUTOS: Acessórios (Adicionados agora)
-- ===================================================================

INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Agulha de Reposição ATN95E', 
    'Audio-Technica', 
    2024, 
    249.90, 
    '/img/acessorios/agulha.png', 
    'acessorio', 
    'Agulha de diamante elíptica de reposição, compatível com cápsulas AT95E e similares.', 
    'Novo'
);

INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Caixa de Madeira para Discos (50 LPs)', 
    'RePlayce Essentials', 
    2024, 
    220.00, 
    '/img/acessorios/caixa.png', 
    'acessorio', 
    'Armazene sua coleção com estilo. Caixa de pinus reforçada com acabamento premium.', 
    'Novo'
);

INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Escova de Fibra de Carbono Antiestática', 
    'RePlayce Essentials', 
    2024, 
    89.90, 
    '/img/acessorios/escova.png', 
    'acessorio', 
    'Remove poeira e estática dos seus discos de vinil com segurança, melhorando a qualidade do som.', 
    'Novo'
);

INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Nivelador de Prato (Bubble Level)', 
    'RePlayce Essentials', 
    2024, 
    75.00, 
    '/img/acessorios/nivelador.png', 
    'acessorio', 
    'Garanta que seu toca-discos esteja perfeitamente nivelado para a melhor performance de áudio.', 
    'Novo'
);

INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Kit 50 Plásticos Internos Antiestáticos', 
    'RePlayce Essentials', 
    2024, 
    65.00, 
    '/img/acessorios/plastico.png', 
    'acessorio', 
    'Proteja seus LPs contra arranhões e poeira com plásticos internos de alta qualidade.', 
    'Novo'
);

INSERT INTO PRODUCTS (TITLE, ARTIST, YEAR_RELEASE, PRICE, IMAGE_URL, CATEGORY, DESCRIPTION, CONDITION_STATE) 
VALUES (
    'Slipmat de Cortiça para Toca-Discos', 
    'Turntable Lab', 
    2024, 
    119.90, 
    '/img/acessorios/slipmat.png', 
    'acessorio', 
    'Melhora a aderência do disco e reduz a vibração e a estática. Feito de cortiça e borracha.', 
    'Novo'
);