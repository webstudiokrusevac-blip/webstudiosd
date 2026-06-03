import HomeClient, { type Lang } from "./home-client";

const getInitialLang = (value: string | string[] | undefined): Lang => {
  const lang = Array.isArray(value) ? value[0] : value;
  return lang === "en" ? "en" : "sr";
};

export default async function Page({
  searchParams
}: {
  searchParams?: Promise<{ lang?: string | string[] }>;
}) {
  const params = await searchParams;
  return <HomeClient initialLang={getInitialLang(params?.lang)} />;
}
