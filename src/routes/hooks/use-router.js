import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';

// ----------------------------------------------------------------------

export function useRouter() {
  const history = useHistory();

  const router = useMemo(
    () => ({
      back: () => history.goBack(),
      forward: () => history.goForward(),
      reload: () => window.location.reload(),
      push: (href) => history.push(href),
      replace: (href) => history.replace(href),
    }),
    [history]
  );

  return router;
}
