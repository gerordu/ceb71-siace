import { Route, UrlSegment, UrlSegmentGroup } from '@angular/router';

export const ComplexUrlMatcher =
  (paramName: string, regex: RegExp) =>
  (segments: UrlSegment[], segmentGroup: UrlSegmentGroup, route: Route) => {
    const parts = [regex];
    const posParams: { [key: string]: UrlSegment } = {};
    const consumed: UrlSegment[] = [];

    let currentSegment = 0;

    for (let i = 0; i < parts.length; ++i) {
      if (currentSegment >= segments.length) {
        return null;
      }
      const current = segments[currentSegment];

      if (!current.path.match(parts[i])) {
        return null;
      }

      posParams[paramName] = current;
      consumed.push(current);
      currentSegment++;
    }

    if (
      route.pathMatch === 'full' &&
      (segmentGroup.hasChildren() || currentSegment < segments.length)
    ) {
      return null;
    }

    return { consumed, posParams };
  };
