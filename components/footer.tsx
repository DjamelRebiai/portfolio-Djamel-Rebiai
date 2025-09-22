"use client"

import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">{t("footer.built")}</p>
          <p className="text-sm text-muted-foreground">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
