"use client";

import { useTranslations, useLocale } from "next-intl";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@client/components/ui/select";

import { locales, useRouter, usePathname } from "@client/utils/i18n";
import { Language } from "@client/types/Language";

const LanguagePicker: React.FC = () => {
  const tLanguages = useTranslations("Languages");
  const router = useRouter();
  const pathname = usePathname();
  const baseLocale = useLocale();

  function onSelectChange(nextLocale: Language) {
    router.replace(pathname, { locale: nextLocale });
  }

  const currentLocale = baseLocale as Language;

  return (
    <Select onValueChange={onSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder={
            tLanguages(currentLocale) || tLanguages("select a language")
          }
        />
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem value={locale}>
            {tLanguages(locale as Language)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguagePicker;
