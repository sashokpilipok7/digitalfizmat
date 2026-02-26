import Image from "next/image";
import { api } from "@/lib/api";
import clsx from "clsx";

import BubbleImage from "@/assets/img/main-section-bubble.png";
import MainImage from "@/assets/img/mission-section-image.png";
import styles from "./page.module.css";

async function getPosts(params) {
  return await api.get("/posts")
}

export default async function Home() {
  const posts = await getPosts()
  console.log(posts, "posts")
  console.log('sasha')
  return (

    <>
      <header className="header">
        <div className="container header-container">
          <a href="#" className="logo">
            <img src="https://placehold.co/40x40/3a6df0/ffffff?text=SF" alt="Logo" />
            <span>STUDY FLOW</span>
          </a>
          <nav className="main-nav">
            <ul>
              <li><a href="#mission">Місія</a></li>
              <li><a href="#results">Результати</a></li>
              <li><a href="#cases">Кейси</a></li>
              <li><a href="#cta">Внесок</a></li>
              <li><a href="#contacts">Контакти</a></li>
            </ul>
          </nav>
          <div className="user-actions">
            <a href="#" className="lang-switcher">UA</a>
            <a href="#" className="user-profile">
              <img src="https://placehold.co/30x30/444/fff?text=U" alt="User" />
            </a>
          </div>
          <button className="mobile-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={clsx(styles.container, styles['hero-container'])}>
            <div className={styles['hero-content']}>
              <h1>Навчайся.<br />Створюй. Надихай!</h1>
              <p>Використовуй наші інструменти для створення та розвитку власних освітніх продуктів. Ми допоможемо тобі на кожному етапі: від ідеї до реалізації. Розкрий свій потенціал та стань частиною інноваційного освітнього ком'юніті.</p>
            </div>
            <div className={styles['hero-graphic']}>
              <Image src={BubbleImage} alt="Hero Graphic" />
              {/* <img src="https://placehold.co/500x500/1a1a2e/3a6df0?text=Abstract+Graphic" alt="Abstract Graphic" /> */}
            </div>
          </div>
        </section>

        <section className={styles.mission} id="mission">
          <div className={styles.container}>
            <h2>МІСІЯ</h2>
            <p className={styles['mission-intro']}>Наша місія полягає у забезпеченні рівного доступу до якісної освіти та створенні технологічного впливу, що реалізується через потужні інструменти для самореалізації.</p>
            <div className={styles['mission-grid']}>
              <div className={styles['mission-image']}>
                <Image src={MainImage} alt="Mission Image" />
              </div>
              <div className={styles['mission-points']}>
                <ul>
                  <li>
                    <div className={styles['point-icon']}></div>
                    <div className={styles['point-text']}>
                      <h3>Розвиток освітніх технологій</h3>
                      <p>Ми створюємо інноваційні платформи, які змінюють підхід до навчання, роблячи його доступнішим та ефективнішим.</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles['point-icon']}></div>
                    <div className={styles['point-text']}>
                      <h3>Підтримка талантів</h3>
                      <p>Надаємо ресурси та менторство для молодих лідерів, щоб вони могли реалізувати свої ідеї та проекти.</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles['point-icon']}></div>
                    <div className={styles['point-text']}>
                      <h3>Соціальний вплив</h3>
                      <p>Сприяємо позитивним змінам у суспільстві через освіту та технології, формуючи майбутнє покоління.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.results} id="results">
          <div className={styles.container}>
            <h2>РЕЗУЛЬТАТИ</h2>
            <div className={styles['stats-grid']}>
              <div className={styles['stat-item']}>
                <div className={styles['stat-number']} data-target="20">0 +</div>
                <div className={styles['stat-label']}>активних учасників</div>
              </div>
              <div className={styles['stat-item']}>
                <div className={styles['stat-number']} data-target="10">0 +</div>
                <div className={styles['stat-label']}>реалізованих проектів</div>
              </div>
              <div className={styles['stat-item']}>
                <div className={styles['stat-number']} data-target="3">0 +</div>
                <div className={styles['stat-label']}>роки досвіду</div>
              </div>
              <div className={styles['stat-item']}>
                <div className={styles['stat-number']} data-target="20">0 +</div>
                <div className={styles['stat-label']}>партнерів</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cases} id="cases">
          <div className={styles.container}>
            <h2>УСПІШНІ КЕЙСИ</h2>
            <div className={styles['featured-case']}>
              <div className={styles['case-logo']}>
                <img src="https://placehold.co/300x300/1a1a2e/fca311?text=YF+Logo" alt="YouthForce Logo" />
                <h3>YouthForce: Цифрове портфоліо студента</h3>
              </div>
              <div className={styles['case-info']}>
                <h3>YouthForce — це інноваційна платформа та цифрове портфоліо студента.</h3>
                <p>Вона дозволяє студентам демонструвати свої досягнення, навички та проекти потенційним роботодавцям. Платформа інтегрує академічні та позанавчальні активності, створюючи цілісний профіль для успішного старту кар'єри.</p>
                <a href="#" className={clsx(styles.btn, styles['btn-primary'])}>Детальніше</a>
              </div>
            </div>

            <div className={styles['cards-grid']}>
              <div className={styles.card}>
                <img src="https://placehold.co/80x80/3a6df0/ffffff?text=DLH" alt="Icon" />
                <h4>Digital Learning Hub</h4>
                <p>Освітній хаб, що надає доступ до сучасних курсів та ресурсів для розвитку цифрових навичок.</p>
                <a href="#" className={styles['card-link']}>Детальніше</a>
              </div>
              <div className={styles.card}>
                <img src="https://placehold.co/80x80/3a6df0/ffffff?text=DLH" alt="Icon" />
                <h4>Digital Learning Hub</h4>
                <p>Освітній хаб, що надає доступ до сучасних курсів та ресурсів для розвитку цифрових навичок.</p>
                <a href="#" className={styles['card-link']}>Детальніше</a>
              </div>
              <div className="card">
                <img src="https://placehold.co/80x80/3a6df0/ffffff?text=DLH" alt="Icon" />
                <h4>Digital Learning Hub</h4>
                <p>Освітній хаб, що надає доступ до сучасних курсів та ресурсів для розвитку цифрових навичок.</p>
                <a href="#" className={styles['card-link']}>Детальніше</a>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="cta">
          <div className="container cta-container">
            <div className="cta-content">
              <span className="cta-overline">ЗРОБИ СВІЙ ВНЕСОК</span>
              <h1 className="cta-title">
                <span>НАВЧАЙСЯ</span>
                <span>СТВОРЮЙ</span>
                <span>НАДИХАЙ!</span>
              </h1>
              <a href="#" className="btn btn-primary">Приєднатися</a>
            </div>
            <div className="cta-description">
              <p>Долучайся до нашої спільноти та стань частиною змін. Разом ми можемо більше!</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
