import { formatNumber } from "@/lib/format";
import type { SeriesPoint } from "@/data/overview-mock";

const HEIGHT = 176;
const WIDTH = 640;

const PADDING_LEFT = 46;
const PADDING_RIGHT = 12;
const PADDING_TOP = 16;
const PADDING_BOTTOM = 4;

export function MiniLineChart({
  data,
  goal,
  goalLabel = "meta",
  className,
}: {
  data: SeriesPoint[];
  goal?: number;
  goalLabel?: string;
  className?: string;
}) {
  const values = data.map((point) => point.value);

  const allValues =
    goal !== undefined
      ? [...values, goal]
      : values;

  const rawMax = Math.max(...allValues);
  const max = Math.ceil(rawMax / 2000) * 2000;
  const min = 0;
  const range = max - min || 1;

  const chartWidth = WIDTH - PADDING_LEFT - PADDING_RIGHT;
  const chartHeight = HEIGHT - PADDING_TOP - PADDING_BOTTOM;

  const step =
    chartWidth /
    (data.length - 1 || 1);

  const toY = (value: number) =>
    PADDING_TOP +
    chartHeight * (1 - (value - min) / range);

  const points = data.map((point, index) => ({
    x: PADDING_LEFT + index * step,
    y: toY(point.value),
    label: point.label,
  }));

  const path = points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
    )
    .join(" ");

  const guideValues = [
    max,
    Math.round(max / 2),
    0,
  ];

  const goalY =
    goal !== undefined
      ? toY(goal)
      : null;

  return (
    <svg
      role="img"
      aria-label="Passos registrados nos últimos sete dias"
      viewBox={`0 0 ${WIDTH} ${HEIGHT + 24}`}
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {guideValues.map((value) => {
        const y = toY(value);

        return (
          <g key={value}>
            <line
              x1={PADDING_LEFT}
              x2={WIDTH - PADDING_RIGHT}
              y1={y}
              y2={y}
              className="stroke-border"
              strokeWidth={1}
            />

            <text
              x={PADDING_LEFT - 8}
              y={y + 3}
              textAnchor="end"
              className="fill-muted-foreground font-mono text-[9px]"
            >
              {formatNumber(value)}
            </text>
          </g>
        );
      })}

      {goalY !== null ? (
        <>
          <line
            x1={PADDING_LEFT}
            x2={WIDTH - PADDING_RIGHT}
            y1={goalY}
            y2={goalY}
            className="stroke-category-fitness"
            strokeWidth={1}
            strokeDasharray="4 4"
          />

          <text
            x={WIDTH - PADDING_RIGHT}
            y={goalY - 6}
            textAnchor="end"
            className="fill-category-fitness text-[9px] font-medium"
          >
            {goalLabel}
          </text>
        </>
      ) : null}

      <path
        d={path}
        fill="none"
        className="stroke-primary"
        strokeWidth={2}
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {points.map((point) => (
        <circle
          key={point.label}
          cx={point.x}
          cy={point.y}
          r={2.75}
          className="fill-primary"
        />
      ))}

      {points.map((point) => (
        <text
          key={`${point.label}-label`}
          x={point.x}
          y={HEIGHT + 17}
          textAnchor="middle"
          className="fill-muted-foreground text-[10px]"
        >
          {point.label}
        </text>
      ))}
    </svg>
  );
}