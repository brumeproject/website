import "@/styles/index.css";

import { Nullable } from "@/libs/nullable";
import { Immutable } from "@hazae41/immutable";
import type { AppProps } from "next/app";
import { RefObject, useCallback, useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [update, setUpdate] = useState<RefObject<Nullable<() => Promise<void>>>>()

  useEffect(() => {
    navigator.serviceWorker.addEventListener("controllerchange", () => location.reload())
  }, [])

  const register = useCallback(async () => {
    setUpdate({ current: await Immutable.register("/service_worker.latest.js") })
  }, [])

  useEffect(() => {
    register().catch(console.error)
  }, [register])

  useEffect(() => {
    update?.current?.().catch(console.error)
  }, [update])

  return <Component {...pageProps} />;
}
