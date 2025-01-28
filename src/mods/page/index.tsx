import { AnchorChip } from "@/libs/ui/anchors";
import { Ascii } from "@/mods/ascii";
import { Locale } from "@/mods/locale";
import { useLocaleContext } from "@/mods/locale/mods/context";
import Head from "next/head";
import { useEffect, useState } from "react";

export function Page() {
  const locale = useLocaleContext().getOrThrow()
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setClosed(true)
      setTimeout(() => {
        setClosed(false)
      }, 150)
    }, 5000)
  }, [])

  return <div className="p-safe h-full w-full flex flex-col overflow-y-scroll animate-opacity-in">
    <Head>
      <title>Brume</title>
    </Head>
    <div className="grow flex flex-col w-full m-auto max-w-6xl">
      <div className="h-[100dvh] flex flex-col p-8">
        <div className="h-[max(24rem,100dvh_-_16rem)] flex flex-col justify-center items-center">
          <div className="text-default-contrast whitespace-pre-wrap font-[monospace] text-[min(1vw,8px)] leading-[min(1vw,8px)]"
            dir="ltr">
            {closed ? Ascii.closed : Ascii.normal}
          </div>
        </div>
        <div className="h-16 grow shrink-0" />
        <div className="font-medium text-6xl">
          Brume
        </div>
        <div className="h-2 shrink-0" />
        <div className="text-default-contrast text-2xl">
          {Locale.get(Locale.TechnologiesToHideYourselfInPlainSight, locale)}
        </div>
        <div className="h-4 shrink-0" />
        <div className="flex flex-wrap gap-2">
          <AnchorChip
            href="https://wallet.brume.money"
            rel="noreferrer"
            target="_blank"
            dir="ltr">
            Wallet
          </AnchorChip>
          <AnchorChip
            href="https://dexscreener.com/ethereum/0xD0EbFe04Adb5Ef449Ec5874e450810501DC53ED5"
            rel="noreferrer"
            target="_blank"
            dir="ltr">
            $BRUME
          </AnchorChip>
          <AnchorChip
            href="https://x.com/BrumeProject"
            rel="noreferrer"
            target="_blank"
            dir="ltr">
            X.com
          </AnchorChip>
          <AnchorChip
            href="https://discord.gg/KVEPWfN9jK"
            rel="noreferrer"
            target="_blank"
            dir="ltr">
            Discord
          </AnchorChip>
          <AnchorChip
            href="https://juicebox.money/v2/p/748?tabid=about"
            rel="noreferrer"
            target="_blank"
            dir="ltr">
            Juicebox
          </AnchorChip>
          <AnchorChip
            href="https://github.com/brumeproject"
            rel="noreferrer"
            target="_blank"
            dir="ltr">
            GitHub
          </AnchorChip>
          <AnchorChip
            href="https://www.tldraw.com/s/v2_c_WZN9Q33cGQyF_RdbXqLUt"
            rel="noreferrer"
            target="_blank"
            dir="ltr">
            Tldraw
          </AnchorChip>
        </div>
      </div>
    </div>
  </div>
}
