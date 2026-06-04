import "./App.css";
import { motion } from "framer-motion";

import {
  Download,
  MessageCircle,
  Mail,
  Rocket,
  Users,
  Shield,
  Sparkles,
  Send,
} from "lucide-react";

const products = [
  {
    icon: <MessageCircle />,
    title: "EVOIR Messenger",
    text: "Современный мессенджер для общения, каналов, чатов, медиа и будущей экосистемы Devorium.",
    status: "В разработке",
  },
  {
    icon: <Mail />,
    title: "DevoRoom Mail",
    text: "Почтовый клиент нового поколения для личной, командной и корпоративной работы.",
    status: "Скоро",
  },
  {
    icon: <Rocket />,
    title: "Future Apps",
    text: "Новые приложения студии: сервисы, инструменты, платформы и продукты для пользователей.",
    status: "Планируется",
  },
];

const teamRoles = [
  {
    name: "Кирилл Андреевич",
    role: "Основатель",
    type: "main",
  },
  {
    name: "Эдуард",
    role: "Сооснователь",
    type: "main",
  },
  {
    name: "Вакансия открыта",
    role: "Генеральный директор",
    type: "default",
  },
  {
    name: "Алексей",
    role: "Руководитель проекта EVOIR",
    type: "default",
  },
  {
    name: "Вакансия открыта",
    role: "QA Tester",
    type: "default",
  },
];

export default function App() {
  const marqueeItems = [...teamRoles, ...teamRoles];

  return (
    <div className="site">
      <div className="noise"></div>
      <div className="orb orbOne"></div>
      <div className="orb orbTwo"></div>
      <div className="orb orbThree"></div>

      <header className="navbar">
        <div className="brand">
          <img src="/logo.png" alt="Devorium Studio" className="logoImage" />
          <span>DEVORIUM STUDIO</span>
        </div>

        <nav>
          <a href="#products">Продукты</a>
          <a href="#team">Команда</a>
          <a href="#download">Скачать</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <motion.div
            className="heroText"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge">
              <Sparkles size={16} />
              Devorium Studio Ecosystem
            </div>

            <h1>
              Создаём цифровую экосистему, которая выглядит знакомо и работает
              быстро, качественно.
            </h1>

            <p>
              EVOIR Messenger, DevoRoom Mail и будущие приложения Devorium Studio —
              единое пространство для общения, работы и развития.
            </p>

            <div className="heroActions">
              <a className="primaryBtn" href="#download">
                <Download size={19} />
                Скачать
              </a>

              <a className="ghostBtn" href="#products">
                Смотреть проекты
              </a>
            </div>
          </motion.div>

          <motion.div
            className="showcase"
            initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="windowTop">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="appPreview">
              <div className="sidePanel">
                <div className="miniLogo">E</div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="chatPanel">
                <div className="chatHeader">
                  <div>
                    <strong>EVOIR Messenger</strong>
                    <small>online</small>
                  </div>
                  <Shield size={22} />
                </div>

                <div className="message left">Привет! Новый билд готов?</div>
                <div className="message right">Да, уже собираем релиз 🚀</div>
                <div className="message left">Сайт тоже выглядит мощно.</div>

                <div className="inputBar">
                  <span>Написать сообщение...</span>
                  <Send size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="products" className="section">
          <div className="sectionHead">
            <span>01 / Products</span>
            <h2>Наши продукты</h2>
          </div>

          <div className="cards">
            {products.map((item, index) => (
              <motion.div
                className="productCard"
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
              >
                <div className="cardIcon">{item.icon}</div>
                <div className="status">{item.status}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="download" className="downloadSection">
          <motion.div
            className="downloadBox"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Скачать приложения</h2>
            <p>
              Здесь будут официальные версии продуктов Devorium Studio для Windows,
              Android, iOS и Web.
            </p>

            <div className="downloadGrid">
              <button>Windows</button>
              <button>Android</button>
              <button>iOS</button>
              <button>Web</button>
            </div>
          </motion.div>
        </section>

        <section id="team" className="section teamSection">
          <div className="sectionHead teamHead">
            <span>02 / Team</span>
            <h2>Команда студии</h2>
            <p>
              Основные лица и ключевые роли Devorium Studio. Команда развивается
              вместе с продуктами EVOIR Messenger и DevoRoom Mail.
            </p>
          </div>

          <div className="teamMarquee">
            <div className="teamTrack">
              {marqueeItems.map((person, index) => (
                <div
                  className={`teamRoleCard ${person.type === "main" ? "leaderCard" : ""}`}
                  key={`${person.role}-${index}`}
                >
                  <div className="teamRoleIcon">
                    <Users size={24} />
                  </div>

                  <div>
                    <span>{person.role}</span>
                    <h3>{person.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contacts" className="footer">
        <h2>Devorium Studio</h2>
        <p>Официальный сайт студии, продуктов и будущей экосистемы.</p>

        <div className="footerLinks">
          <a
            href="https://t.me/DevoriumStudio"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>

          <a
            href="https://discord.gg/KatJPeNTsw"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>

          <a
            href="https://github.com/HugoPeak-cmd/devorium-site"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
