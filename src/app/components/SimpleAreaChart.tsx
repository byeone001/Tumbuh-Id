import { useMemo } from "react";

interface DataPoint {
  day: string;
  value: number;
}

interface SimpleAreaChartProps {
  data: DataPoint[];
}

export const SimpleAreaChart = ({ data }: SimpleAreaChartProps) => {
  const { points, maxValue } = useMemo(() => {
    const max = Math.max(...data.map(d => d.value));
    const padding = 20;
    const width = 100;
    const height = 100;
    const stepX = width / (data.length - 1);

    const pts = data.map((d, i) => {
      const x = i * stepX;
      const y = height - ((d.value / max) * (height - padding));
      return { x, y };
    });

    return { points: pts, maxValue: max };
  }, [data]);

  const pathD = useMemo(() => {
    if (points.length === 0) return "";

    const linePoints = points.map((p, i) =>
      `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
    ).join(' ');

    const areaPoints = `${linePoints} L ${points[points.length - 1].x} 100 L 0 100 Z`;

    return { line: linePoints, area: areaPoints };
  }, [points]);

  return (
    <div className="w-full h-full">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00D260" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00D260" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area fill */}
        <path
          d={pathD.area}
          fill="url(#areaGradient)"
        />

        {/* Line stroke */}
        <path
          d={pathD.line}
          fill="none"
          stroke="#00D260"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Labels */}
      <div className="flex justify-between mt-2 px-2">
        {data.map((d, i) => (
          <span key={d.day} className="text-xs text-brand-muted">
            {d.day}
          </span>
        ))}
      </div>
    </div>
  );
};
