// Use type safe message keys with `next-intl`
type EnMessages = typeof import("./messages/en.json");
type FrMessages = typeof import("./messages/fr.json");

declare interface IntlMessages extends EnMessages, FrMessages {}
