import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePathname } from "../routes/hooks";

// ----------------------------------------------------------------------

export function useScrollToTop() {
const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
