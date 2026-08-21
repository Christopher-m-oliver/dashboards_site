import { formatRelativeTime } from "@/lib/format";
import type { RecordEntry } from "@/data/overview-mock";

export function RecordItem({
  record,
}: {
  record: RecordEntry;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-4 py-3">
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-foreground">
          {record.label}
        </p>

        <p className="mt-0.5 truncate text-xs text-muted-foreground">
          {record.detail}
        </p>
      </div>

      <time className="self-center whitespace-nowrap font-mono text-[11px] tabular-nums text-muted-foreground">
        {formatRelativeTime(record.timestamp)}
      </time>
    </div>
  );
}