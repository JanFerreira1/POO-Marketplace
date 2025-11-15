# 🎶🔁 RePlayce  

RePlayce é um marketplace acadêmico criado no projeto de POO, voltado para entusiastas da música retrô. A plataforma conecta compradores e vendedores de discos de vinil, vitrolas, fitas K7, CDs e outros itens clássicos, promovendo não só a negociação, mas também o resgate da memória afetiva e da cultura musical de outras épocas.  

---

## 🛠 Tecnologias  
- **Java** – programação orientada a objetos  
- **ReactJS** – desenvolvimento da interface do usuário  
- **Git & GitHub** – versionamento e colaboração  
- **MySQL** – banco de dados

---

## ⚡ Destaques do Projeto
- **Experiência retrô com toque moderno**: interface em React com lógica em Java.
- **Promoção cultural**: fomenta a troca de itens musicais clássicos entre usuários.
- **Visão acadêmica + prática**: une conceitos de orientação a objetos com aplicação web funcional.

---

## 👥 Equipe  
- Albean Santiago  
- Deyvison Conrado  
- Janderson Ferreira  
- Joyce Cristine  
- Maria Aparecida  
- Pedro Rennil  
- Rhaldney Robert
  
---

# Entrega 1

## 📖 Histórias de Usuário
- https://docs.google.com/document/d/1A_EGGrFaKnTY2AhksK1i-sNwver_hHrx7KRK2MCcN44/edit?usp=sharing

- https://codingthefuture.atlassian.net/jira/software/projects/REP/boards/34

## 🖼 Protótipo Lo-Fi  
- [https://www.figma.com/proto/P5g2d7nrqH8aSpSbrkW5IJ/Wireframe?node-id=1-2&t=n5UcUr9YYCP6OGC1-1](https://www.figma.com/design/P5g2d7nrqH8aSpSbrkW5IJ/Wireframe?node-id=0-1&t=SHbAJxGaMqE857nc-1)

## 🎥 Screencast 
- [https://youtu.be/emA6fT1Qu-U](https://youtu.be/emA6fT1Qu-U?si=OPym2KeO_mV-7x0P)

---

# Entrega 2 

## 🎥 Screencast 
- https://www.youtube.com/watch?v=bmpB8KRJCHE

## 🪲 Print bug/issue tracker
<img width="1634" height="314" alt="issue enhancement" src="https://github.com/user-attachments/assets/978c6ff3-8e30-405b-aca5-6603070a3760" />

<img width="1889" height="428" alt="issue closed" src="https://github.com/user-attachments/assets/9836e31f-d17f-45b9-a4ec-c4b84cd76dd9" />

---

# Entrega 3
## 🎥 Screencast 
- [https://www.youtube.com/watch?v=j8IEIx_2ceE](https://www.youtube.com/watch?v=I7tHa94vazk)

## 🪲 Print bug/issue tracker
<img width="1575" height="800" alt="image" src="https://github.com/user-attachments/assets/06d50872-a895-47bc-8717-c98cfd46d6f7" />

## 🤖 Testes automatizados
- https://www.youtube.com/watch?v=XstOFRRUg1c
  
---

# Entrega 4
## 🎥 Screencast 
- 

## 🪲 Print bug/issue tracker
-

## 🤖 Testes automatizados
-

## 📌 Documentação - Como montar o projeto

**Pré-requisitos**

**Java:** JDK 17+ ou 21 recomendado (variantes OpenJDK/Temurin).
**Maven wrapper:** já incluso no projeto (mvnw / mvnw.cmd) — não precisa Maven global.
**Node.js / npm:** Node 18+ recomendado.
**Git:** para clonar o repositório (opcional se já estiver local).

**Obter o código**
Clonar: git clone https://github.com/JanFerreira1/POO-Marketplace.git

**Configurar e rodar o backend (Spring Boot)**

Vá para a pasta do backend:
cd \POO-Marketplace\backend

Build (opcional, compila e executa testes):
.\mvnw clean package

Rodar em modo desenvolvimento:
.\mvnw spring-boot:run

Observações:
O backend roda na porta 8080 por padrão (configurado em application.properties).
O banco é H2 persistente em arquivo: jdbc:h2:file:./data/replayce-db. O arquivo físico fica em replayce-db.mv.db.
Para resetar a base, pare a aplicação e remova a pasta data.

Acessar o console H2

Abra no navegador: http://localhost:8080/h2-console
JDBC URL (padrão do projeto): jdbc:h2:file:./data/replayce-db
Usuário: sa
Senha: (em branco)

**Configurar e rodar o frontend (Vite + React)**

Vá para a pasta do frontend:
cd \POO-Marketplace\frontend

Instalar dependências (apenas da primeira vez):
npm install

Rodar em modo dev:
npm run dev

Observação:
O Vite normalmente abre em http://localhost:5173.


---
## 🗓️ **Etapas do Projeto**

**Kickoff (26/08 a 29/08):** definição da ideia, equipe e repositório  
**Entrega 01 (09/09):** histórias de usuário, protótipo Lo-Fi e screencast  
**Entrega 02 (30/09):** 2 histórias implementadas e seu screencast, issue/bug tracker atualizado  
**Entrega 03 (23/10):** 2 novas histórias implementadas, refatoração, testes automatizados e screencast, issue/bug tracker atualizado       
**Entrega 04 (17/11):** 3 novas histórias implementadas, refatoração, testes e screencasts, issue/bug tracker atualizado, tutorial documentado

