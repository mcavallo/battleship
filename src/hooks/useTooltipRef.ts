import { useCallback, useRef } from 'react';
import { TooltipRefProps } from 'react-tooltip';

export const useTooltipRef = () => {
  const tooltipRef = useRef<TooltipRefProps>(null);

  const openTooltip = useCallback((id: string, content: string) => {
    tooltipRef.current?.open({
      anchorSelect: `#${id}`,
      content,
    });
  }, []);

  const closeTooltip = useCallback(() => {
    tooltipRef.current?.close();
  }, []);

  return {
    tooltipRef,
    openTooltip,
    closeTooltip,
  };
};
