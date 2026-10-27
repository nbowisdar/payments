const globalpay = {
	id: "globalpay",
	name: "GlobalPay",
	headline: "GLOBALPAY",
	sentenceName: "Globalpay",
	email: "Admin@globalpayapp.net",
	logo: "/img/logo-bg.svg",
	logoAlt: "GlobalPay logo",
	homeLogoWidth: 200,
	showHeroLogo: true,
	docsBase: "https://doc.globalpayapp.net",
	theme: "dark",
} as const

const mondex = {
	id: "mondex",
	name: "Mondex",
	headline: "Mondex",
	sentenceName: "Mondex",
	email: "Office@mondex.tech",
	logo: "/img/mondex.png",
	logoAlt: "Mondex logo",
	homeLogoWidth: 400,
	showHeroLogo: false,
	docsBase: "https://doc.Mondexapp.net",
	theme: "light",
} as const

export type BrandId = "globalpay" | "mondex"

export const docLinks = [
	{
		name: "Connecting Party Integration",
		path: "/integration/index.html",
	},
	{
		name: "Merchant Manual",
		path: "/merchant/index.html",
	},
	{
		name: "Manager Manual",
		path: "/manager/index.html",
	},
] as const

function missingBrand(value: string | undefined): never {
	throw new Error(
		`Set VITE_BRAND to "globalpay" or "mondex" (got ${JSON.stringify(value)}). Use bun run build:globalpay or bun run build:mondex.`,
	)
}

const selected = import.meta.env.VITE_BRAND

export const brand =
	selected === "mondex"
		? mondex
		: selected === "globalpay"
			? globalpay
			: missingBrand(selected)
