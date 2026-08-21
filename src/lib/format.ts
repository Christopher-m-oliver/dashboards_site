export function formatNumber(
  value: number,
  options?: Intl.NumberFormatOptions
) {
  return new Intl.NumberFormat("pt-BR", options).format(value);
}

export function formatSigned(
  value: number,
  direction: "up" | "down" | "flat",
  options?: Intl.NumberFormatOptions
) {
  const sign = direction === "up" ? "+" : direction === "down" ? "-" : "";

  return `${sign}${formatNumber(Math.abs(value), options)}`;
}

export function formatComparisonValue(
  value: number,
  direction: "up" | "down" | "flat",
  unit?: string
) {
  const formatted = formatSigned(value, direction);

  if (!unit) {
    return formatted;
  }

  if (unit === "%") {
    return `${formatted}%`;
  }

  return `${formatted} ${unit}`;
}

export function formatRelativeTime(
  isoDate: string,
  now: Date = new Date()
) {
  const diffMs = now.getTime() - new Date(isoDate).getTime();
  const diffMinutes = Math.round(diffMs / 60000);

  if (diffMinutes < 1) {
    return "agora mesmo";
  }

  if (diffMinutes < 60) {
    return `há ${diffMinutes} min`;
  }

  const diffHours = Math.round(diffMinutes / 60);

  if (diffHours < 24) {
    return `há ${diffHours} ${diffHours === 1 ? "hora" : "horas"}`;
  }

  const diffDays = Math.round(diffHours / 24);

  return `há ${diffDays} ${diffDays === 1 ? "dia" : "dias"}`;
}