import { Button } from '@mui/material'
import React from 'react'
import { FiGlobe } from 'react-icons/fi'
import { useTranslation } from "next-i18next";
import { useDirection } from '@/context/DirectionContext';
export default function LanguageButton() {
    const { t, i18n } = useTranslation();
  const { toggleDirection } = useDirection();
    return (
        <div>
            <Button
                onClick={() => toggleDirection()}
                variant="text"
                sx={{ mx: 1, gap: 1, flexGrow: 1 }}>
                <FiGlobe size={20} />
                {i18n.language === "ar" ? "English" : "العربية"}
            </Button>
        </div>
    )
}
