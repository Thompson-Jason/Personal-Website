// Small date helpers pulled out of components: the react-hooks/purity lint
// rule flags Date.now()/new Date() called directly inside a component body,
// so this keeps that impurity contained to a plain function instead.

export function isWithinDays(isoDate: string, days: number): boolean {
  const elapsedMs = Date.now() - new Date(isoDate).getTime();
  return elapsedMs <= days * 24 * 60 * 60 * 1000;
}
