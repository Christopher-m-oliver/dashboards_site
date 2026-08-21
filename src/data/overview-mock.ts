export type CategoryKey =
  | "fitness"
  | "financas"
  | "produtividade"
  | "estudos";

export interface CategoryInfo {
  key: CategoryKey;
  label: string;
}

export const categories: CategoryInfo[] = [
  { key: "fitness", label: "Fitness" },
  { key: "financas", label: "Finanças" },
  { key: "produtividade", label: "Produtividade" },
  { key: "estudos", label: "Estudos" },
];

export const activeDashboard = {
  category: "fitness" as CategoryKey,
  title: "Acompanhamento semanal",
  period: "Últimos 7 dias",
};

export type ComparisonDirection = "up" | "down" | "flat";
export type ComparisonTone = "positive" | "negative" | "neutral";

export interface MetricComparison {
  direction: ComparisonDirection;
  tone: ComparisonTone;
  value: number;
  unit?: string;
  comparisonLabel: string;
}

export interface MetricReading {
  id: string;
  label: string;
  value: number;
  unit?: string;
  decimals?: number;
  comparison: MetricComparison;
}

export const fitnessMetrics: MetricReading[] = [
  {
    id: "steps",
    label: "Passos",
    value: 7940,
    comparison: {
      direction: "up",
      tone: "positive",
      value: 6,
      unit: "%",
      comparisonLabel: "desde ontem",
    },
  },
  {
    id: "calories",
    label: "Calorias",
    value: 2140,
    unit: "kcal",
    comparison: {
      direction: "up",
      tone: "neutral",
      value: 140,
      unit: "kcal",
      comparisonLabel: "desde ontem",
    },
  },
  {
    id: "weight",
    label: "Peso",
    value: 76.8,
    unit: "kg",
    decimals: 1,
    comparison: {
      direction: "down",
      tone: "neutral",
      value: 0.3,
      unit: "kg",
      comparisonLabel: "desde a semana passada",
    },
  },
  {
    id: "workouts",
    label: "Treinos concluídos",
    value: 4,
    comparison: {
      direction: "up",
      tone: "positive",
      value: 1,
      unit: "treino",
      comparisonLabel: "desde a semana passada",
    },
  },
];

export interface SeriesPoint {
  label: string;
  value: number;
}

export const weeklyStepsSeries: SeriesPoint[] = [
  { label: "Seg", value: 6200 },
  { label: "Ter", value: 8100 },
  { label: "Qua", value: 7400 },
  { label: "Qui", value: 9000 },
  { label: "Sex", value: 7940 },
  { label: "Sáb", value: 5200 },
  { label: "Dom", value: 4300 },
];

export const weeklyStepsTotal = weeklyStepsSeries.reduce(
  (total, point) => total + point.value,
  0
);

export const dailyStepsGoal = 10000;

export interface WeeklyGoal {
  id: string;
  label: string;
  current: number;
  target: number;
  unit?: string;
}

export const weeklyGoals: WeeklyGoal[] = [
  {
    id: "steps",
    label: "Passos",
    current: weeklyStepsTotal,
    target: 70000,
  },
  {
    id: "workouts",
    label: "Treinos",
    current: 4,
    target: 5,
  },
  {
    id: "water",
    label: "Água",
    current: 12,
    target: 21,
    unit: "copos",
  },
  {
    id: "sleep",
    label: "Sono",
    current: 41,
    target: 49,
    unit: "h",
  },
];

export interface RecordEntry {
  id: string;
  label: string;
  detail: string;
  timestamp: string;
}

const now = Date.now();

const hoursAgo = (hours: number) =>
  new Date(now - hours * 60 * 60 * 1000).toISOString();

export const recentRecords: RecordEntry[] = [
  {
    id: "1",
    label: "Peso registrado",
    detail: "76,8 kg",
    timestamp: hoursAgo(2),
  },
  {
    id: "2",
    label: "Treino concluído",
    detail: "Corrida — 5,2 km",
    timestamp: hoursAgo(5),
  },
  {
    id: "3",
    label: "Consumo calórico atualizado",
    detail: "2.140 kcal",
    timestamp: hoursAgo(9),
  },
  {
    id: "4",
    label: "Meta atingida",
    detail: "Treinos da semana",
    timestamp: hoursAgo(30),
  },
];

export interface DashboardStat {
  value: number;
  unit: string;
  unitPosition?: "prefix" | "suffix";
}

export interface DashboardSummary {
  id: string;
  title: string;
  category: CategoryKey;
  updatedAt: string;
  stat: DashboardStat;
}

export const myDashboards: DashboardSummary[] = [
  {
    id: "1",
    title: "Acompanhamento semanal",
    category: "fitness",
    updatedAt: hoursAgo(2),
    stat: {
      value: 2140,
      unit: "kcal",
    },
  },
  {
    id: "2",
    title: "Orçamento mensal",
    category: "financas",
    updatedAt: hoursAgo(20),
    stat: {
      value: 3240,
      unit: "R$",
      unitPosition: "prefix",
    },
  },
  {
    id: "3",
    title: "Metas semanais",
    category: "produtividade",
    updatedAt: hoursAgo(72),
    stat: {
      value: 24,
      unit: "tarefas",
    },
  },
];