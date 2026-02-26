import Image from "next/image";
import { api } from "@/lib/api";
import clsx from "clsx";

import styles from "./style.module.css";

async function getPosts(params) {
    return await api.get("/posts")
}

export default async function Header() {
    return (
        <header className="header">
            <div className="container header-container">
                <a href="#" className="logo">
                    <span>CS</span>
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
    )

}