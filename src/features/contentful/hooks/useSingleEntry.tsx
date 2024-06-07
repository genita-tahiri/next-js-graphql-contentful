import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { getEntryById } from "../graphql/api";

function useSingleEntry<T = any>(entryID: string, type?: string) {
  const [entry, setEntry] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { locale } = router;

  async function fetchEntry(id: string, currentLocale: string) {
    const data = await getEntryById(id, currentLocale, type);
    return data;
  }

  useEffect(() => {
    if (entryID)
      fetchEntry(entryID, locale)
        .then((result: any) => {
          if (result) {
            setEntry(result);
          }
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entryID, locale]);

  return { entry, loading };
}
export default useSingleEntry;
