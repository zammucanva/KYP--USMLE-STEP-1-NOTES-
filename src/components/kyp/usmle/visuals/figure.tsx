"use client";

import { VisualRegistry } from "./registry";

/**
 * UsMLEVisualFigure — client-side lookup of a visual by id.
 *
 * The registry lives in a "use client" module (the visuals are
 * interactive client components). A server component cannot read the
 * properties of an object exported from a client module — so the page
 * passes the visualId string across the boundary and this client
 * component performs the lookup and renders the visual.
 */
export function UsMLEVisualFigure({ visualId }: { visualId: string }) {
  const Visual = VisualRegistry[visualId];
  if (!Visual) {
    return (
      <p className="p-6 text-center text-body-sm text-muted-foreground">
        Visual unavailable: {visualId}
      </p>
    );
  }
  return <Visual />;
}
