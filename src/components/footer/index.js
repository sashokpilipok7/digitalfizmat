import Image from "next/image";
import { api } from "@/lib/api";
import clsx from "clsx";

import styles from "./style.module.css";

async function getPosts(params) {
    return await api.get("/posts")
}

export default async function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={clsx(styles.container, styles['footer-container'])}>
                <div className={styles['footer-content']}>
                    <h3>Зв'яжіться з нами</h3>
                    <p>Маєте питання або хочете співпрацювати? <br /> Ми завжди відкриті для спілкування. Напишіть нам на <a href="mailto:">cs@kpnu.edu.ua</a>
                    </p>
                </div>
                <p className={styles.copyright}>© 2026 Кафедра комп'ютерних наук. Усі права захищені.</p>
            </div>
        </footer>
    )
}