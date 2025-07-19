<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=4C89F8&height=120&section=header"/>

<img width="1584" height="396" alt="LinkedIn cover - 29" src="https://github.com/user-attachments/assets/d1c05723-0bec-4ce7-8dee-1ef8c95ebf3e" />

<br>
<br>

# 📈 API de Análise de Investimentos

[![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow.svg)]()
[![NestJS](https://img.shields.io/badge/NestJS-v10-red.svg)]()
[![Prisma](https://img.shields.io/badge/Prisma-ORM-blue.svg)]()
[![MySQL](https://img.shields.io/badge/MySQL-Database-orange.svg)]()

## 📋 Descrição

API REST desenvolvida em NestJS para análise fundamentalista de ações da bolsa de valores brasileira. O sistema permite o gerenciamento de empresas, cálculo de indicadores de valuation, rentabilidade, crescimento e análise de preços teto utilizando metodologias como Bazin e Graham.

## 🚀 Funcionalidades Implementadas

### ✅ Módulos Base
- **Empresas**: CRUD completo para cadastro de empresas da bolsa
  - Cadastro com nome, ticker, setor e cotação atual
  - Validação de dados com class-validator
  - Relacionamentos com todos os módulos de análise

### 🔄 Módulos em Desenvolvimento
- **Valuation**: Indicadores P/L, P/VP, Dívida/PL, Dívida/EBITDA, EV/EBITDA
- **Rentabilidade**: ROE, Margem Líquida, Dividend Yield atual e histórico
- **Crescimento**: CAGR de receita e lucro (atual, 3 anos, 6 anos)
- **Preço Teto**: Cálculos Bazin e Graham com margem de segurança
- **Análises**: Sistema de recomendações com pontuação
- **Histórico de Preços**: Armazenamento de cotações e volumes
- **Portfólios**: Gestão de carteiras de investimento

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js, NestJS, TypeScript
- **ORM**: Prisma
- **Banco de Dados**: MySQL
- **Validação**: class-validator, class-transformer
- **Testes**: Jest
- **Documentação**: Swagger (planejado)

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/) (versão 8 ou superior)
- [Git](https://git-scm.com/)

## ⚡ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/investment-api.git
cd investment-api
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:
```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/investment_db"
PORT=3000
```

### 4. Configure o banco de dados
```bash
# Gere o client Prisma
npx prisma generate

# Execute as migrações
npx prisma migrate dev

# (Opcional) Visualize o banco com Prisma Studio
npx prisma studio
```

### 5. Execute a aplicação
```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start:prod
```

## 📖 Uso da API

### Endpoints Disponíveis

#### Empresas
```http
POST   /empresas          # Criar empresa
GET    /empresas          # Listar todas as empresas
GET    /empresas/:id      # Buscar empresa por ID
PUT    /empresas/:id      # Atualizar empresa
DELETE /empresas/:id      # Remover empresa
```

#### Exemplo de Requisição
```json
POST /empresas
{
  "nome": "Petróleo Brasileiro S.A.",
  "ticker": "PETR4",
  "setor": "Petróleo e Gás",
  "cotacaoAtual": 38.50
}
```

## 🏗️ Arquitetura do Projeto

```
src/
├── empresa/           # Módulo principal - CRUD de empresas
├── valuation/         # Indicadores de valuation
├── rentabilidade/     # Métricas de rentabilidade
├── crescimento/       # Indicadores de crescimento
├── precoteto/         # Cálculos de preço justo
├── analise/           # Sistema de recomendações
├── portfolio/         # Gestão de carteiras
├── portfolioempresa/  # Relação portfólio-empresa
├── historicoprecos/   # Histórico de cotações
└── prisma/           # Configuração do ORM
```

## 🧪 Testes

```bash
# Executar todos os testes
npm run test

# Testes em modo watch
npm run test:watch

# Cobertura de testes
npm run test:cov
```

## 📊 Modelo de Dados

O sistema utiliza as seguintes entidades principais:

- **Empresa**: Dados básicos da empresa (nome, ticker, setor, cotação)
- **Valuation**: Múltiplos de valuation (P/L, P/VP, etc.)
- **Rentabilidade**: Indicadores de rentabilidade (ROE, margem líquida, DY)
- **Crescimento**: Taxas de crescimento CAGR
- **PrecoTeto**: Preços justos calculados (Bazin, Graham)
- **Analise**: Recomendações de investimento
- **HistoricoPrecos**: Série histórica de cotações
- **Portfolio**: Carteiras de investimento

## 🚀 Futuras Melhorias

### 📈 Funcionalidades Planejadas

#### Alta Prioridade
- [ ] **Integração com APIs Financeiras**
  - Consumo automático de dados da B3/Yahoo Finance
  - Atualização automática de cotações
  - Histórico automático de preços

- [ ] **Sistema de Análise Fundamentalista Completo**
  - Implementação completa dos cálculos de valuation
  - Algoritmos de recomendação baseados em múltiplos indicadores
  - Score de investimento automatizado

- [ ] **Dashboard e Relatórios**
  - Interface web para visualização dos dados
  - Gráficos interativos de performance
  - Relatórios em PDF

#### Média Prioridade
- [ ] **Autenticação e Autorização**
  - Sistema de login com JWT
  - Controle de acesso por perfis
  - Proteção de rotas sensíveis

- [ ] **Notificações e Alertas**
  - Alertas de preço (máximo/mínimo)
  - Notificações de eventos corporativos
  - Alertas de recomendações

- [ ] **API de Machine Learning**
  - Predição de preços usando algoritmos ML
  - Análise de sentimento de notícias
  - Detecção de padrões técnicos

#### Baixa Prioridade
- [ ] **Aplicativo Mobile**
  - App React Native
  - Push notifications
  - Modo offline

- [ ] **Integrações Avançadas**
  - Webhook para eventos de mercado
  - Integração com corretoras (APIs)
  - Importação de extratos

### 🔧 Melhorias Técnicas

#### Infraestrutura
- [ ] **Containerização**
  - Dockerfile otimizado
  - Docker Compose para desenvolvimento
  - Kubernetes para produção

- [ ] **CI/CD**
  - Pipeline GitHub Actions
  - Testes automatizados
  - Deploy automatizado

- [ ] **Monitoramento**
  - Logs estruturados (Winston)
  - Métricas de performance (Prometheus)
  - Health checks

#### Performance e Escalabilidade
- [ ] **Cache Inteligente**
  - Redis para cache de cotações
  - Cache de consultas frequentes
  - Invalidação automática

- [ ] **Otimizações de Banco**
  - Índices estratégicos
  - Queries otimizadas
  - Read replicas

- [ ] **Rate Limiting**
  - Proteção contra abuso de API
  - Throttling por usuário
  - Quota de requisições

#### Qualidade de Código
- [ ] **Documentação Avançada**
  - Swagger/OpenAPI completo
  - Postman Collections
  - Guias de uso detalhados

- [ ] **Testes Abrangentes**
  - Cobertura de testes > 80%
  - Testes de integração
  - Testes E2E

- [ ] **Code Quality**
  - ESLint + Prettier configurados
  - Husky para pre-commit hooks
  - SonarQube para análise estática

### 📊 Funcionalidades Específicas do Domínio

#### Análise Técnica
- [ ] **Indicadores Técnicos**
  - Médias móveis (SMA, EMA)
  - RSI, MACD, Bollinger Bands
  - Suporte e resistência automáticos

#### Análise Fundamentalista Avançada
- [ ] **Comparação Setorial**
  - Benchmarking com peers
  - Ranking por setor
  - Análise relativa de múltiplos

- [ ] **Análise de Governança**
  - Score ESG
  - Análise de insider trading
  - Composição acionária

#### Gestão de Risco
- [ ] **Cálculos de Risco**
  - VaR (Value at Risk)
  - Correlação entre ativos
  - Diversificação de portfólio

### 🎯 Roadmap de Releases

#### v1.0.0 - MVP (Q1 2024)
- CRUD completo de empresas ✅
- Módulos básicos de análise
- API funcional

#### v1.1.0 - Core Features (Q2 2024)
- Integração com APIs financeiras
- Cálculos de valuation completos
- Sistema de recomendações

#### v1.2.0 - Dashboard (Q3 2024)
- Interface web básica
- Gráficos e visualizações
- Relatórios

#### v2.0.0 - Advanced Features (Q4 2024)
- Autenticação completa
- Machine Learning
- App mobile

## 🤝 Contribuições

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por Gabriel lucas rodrigues souza

## 📞 Suporte

- Email: gabriellglrs@gmail.com
- LinkedIn: https://www.linkedin.com/in/gabriellglrs/
- Issues: [GitHub Issues]([https://github.com/gabriellglrs/investment-api/issues)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub!

 <br>

 <br>
<div align="center">
  <img src="https://github.com/user-attachments/assets/ed7208b8-6bdc-4c82-98aa-8c8cb9c1428f" height="150"/>
</div>

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=4C89F8&height=120&section=footer"/>
