"use client";

// Next
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
// Next Intl
import { useLocale } from "next-intl";
// React
import { useState } from "react";
// Images
import sa from "../../public/sa.png"
import gb from "../../public/gb.png"
import fr from "../../public/fr.png"


const SwitchLanguages = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const lang = useLocale() as "ar" | "en" | "fr"
    const [open, setOpen] = useState<boolean>(false);

    // Get current query string
    const queryString = searchParams.toString();
    // Preserve query parameters in URL
    const querySuffix = queryString ? `?${queryString}` : "";

    // Extract path segments after language
    const pathSegments = pathname ? pathname.split("/").filter(Boolean) : [];
    const basePath = pathSegments.slice(1).join("/");
    const pathSuffix = basePath ? `/${basePath}` : "";

    const handleActiveLanguageButttonText = {
        "ar": "العربية",
        "en": "English",
        "fr": "Français",
        "es": "Español",
        "tr": "Türkçe"
    }

    const handleActiveLanguageImage = {
        "ar": sa,
        "en": gb,
        "fr": fr
    }

    return (
        <div className="desktop-language-switcher language-switcher">
            <div className="flex items-center gap-2" onClick={() => setOpen(!open)}>
                <Image src={handleActiveLanguageImage[lang]} className="language-flag" alt={handleActiveLanguageButttonText[lang]} />
                <span className={'text-gray-600'}>{handleActiveLanguageButttonText[lang]}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>


            {open && (
                <div className="language-dropdown">
                    <Link
                        href={`/ar${pathSuffix}${querySuffix}`}
                        className={`language-item ${lang === "ar" ? "active" : ""}`}
                    >
                        <Image src={sa} className="language-flag" alt="العربية" />
                        <span className="language-name">العربية</span>
                        <span className="language-code">AR</span>
                    </Link>
                    <Link
                        href={`/en${pathSuffix}${querySuffix}`}
                        className={`language-item ${lang === "en" ? "active" : ""}`}
                    >
                        <Image src={gb} className="language-flag" alt="English" />
                        <span className="language-name">English</span>
                        <span className="language-code">EN</span>
                    </Link>
                    <Link
                        href={`/fr${pathSuffix}${querySuffix}`}
                        className={`language-item ${lang === "fr" ? "active" : ""}`}
                    >
                        <Image src={fr} className="language-flag" alt="Français" />
                        <span className="language-name">Français</span>
                        <span className="language-code">FR</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default SwitchLanguages;