import type { SeriesPoint } from "@/data/overview-mock";

const HEIGHT = 120;
const BAR_GAP = 10;

export function MiniBarChart({
  data,
  className,
}: {
  data: SeriesPoint[];
  className?: string;
}) {
  const max = Math.max(...data.map((d) => d.value));
  const barWidth = 28;
  const width = data.length * (barWidth + BAR_GAP) - BAR_GAP;

  return (
    <svg
      role="img"
      aria-label="Gráfico de barras — dados de exemplo"
      viewBox={`0 0 ${width} ${HEIGHT + 20}`}
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {data.map((point, i) => {
        const barHeight = (point.value / max) * HEIGHT;
        const x = i * (barWidth + BAR_GAP);
        const y = HEIGHT - barHeight;
        return (
          <g key={point.label}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              rx={3}
              className="fill-primary/80"
            />
            <text
              x={x + barWidth / 2}
              y={HEIGHT + 14}
              textAnchor="middle"
              className="fill-muted-foreground text-[10px] font-sans"
            >
              {point.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}