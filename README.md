# Dashboards

Front-end navegável desenvolvido para o Projeto Integrador.

A aplicação tem como proposta permitir a criação e visualização de dashboards personalizáveis para acompanhamento de métricas pessoais em diferentes categorias, como Fitness, Finanças, Produtividade e Estudos.

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Base UI
- Lucide Icons

## Estado atual

Esta etapa do projeto é focada exclusivamente no front-end.

Atualmente, a aplicação utiliza dados mockados para representar o funcionamento futuro do sistema e simular os principais fluxos de navegação.

Não fazem parte desta etapa:

- Back-end
- Banco de dados
- Autenticação real
- Persistência de dados
- Operações CRUD persistentes

Essas funcionalidades poderão ser desenvolvidas em etapas posteriores do projeto.

## Funcionalidades atuais

- Landing page pública
- Fluxos simulados de login e cadastro
- Layout principal com sidebar responsiva
- Página de visão geral
- Indicadores de métricas
- Gráficos com dados simulados
- Acompanhamento de metas
- Registros recentes
- Listagem de dashboards
- Visualização detalhada de dashboard
- Edição simulada de dashboard
- Gerenciamento de dados com inserção local de registros
- Página de análises e tendências
- Modelos de dashboards
- Página de configurações
- Navegação responsiva para diferentes tamanhos de tela

## Execução local

### Requisitos

- Node.js
- npm

### Instalação

Clone o repositório:
```bash
git clone https://github.com/Christopher-m-oliver/dashboards_site.git
```

Entre na pasta do projeto:
```bash
cd dashboards_site
```

Instale as dependências:
```bash
npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Depois, acesse: [http://localhost:3000](http://localhost:3000)

## Observações

Os dados utilizados atualmente são simulados.

A inclusão de registros na área de gerenciamento de dados é feita apenas no estado local da interface e não permanece após recarregar a página.
