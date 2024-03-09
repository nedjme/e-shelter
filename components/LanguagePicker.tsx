import { Language } from "@/types/Language";
import { locales } from "@/constants/locales";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/utils/i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguagePicker: React.FC = () => {
  const tLanguages = useTranslations();
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
