import * as Tabs from '@radix-ui/react-tabs';
import * as Progress from '@radix-ui/react-progress';
import { ArrowRight, Settings,  Target, Users, Clock, Activity, BarChart2} from 'lucide-react';
import type { LucideIcon } from 'lucide-react'

interface MetricsCardProps {
  title: string;
  current: number;
  target: number;
  icon: LucideIcon;
}

const MetricsCard = ({ title, current, target, icon: Icon }: MetricsCardProps) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center justify-between pb-2">
      <h3 className="text-sm font-medium">
        {title}
      </h3>
      <Icon className="h-4 w-4 text-gray-500" />
    </div>
    <div className="space-y-2">
      <Progress.Root className="relative overflow-hidden bg-gray-200 rounded-full w-full h-2">
        <Progress.Indicator
          className="bg-purple-600 w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${100 - (current/target) * 100}%)` }}
        />
      </Progress.Root>
      <div className="text-xs text-gray-500">
        Meta: {target} | Atual: {current}
      </div>
    </div>
  </div>
);

const DevOpsImplementationDashboard = () => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 p-4">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-2">Plano de Implementação DevOps - Tech</h1>
        <p className="text-white/80">Transformação Digital através das práticas CALMS e as Três Maneiras do DevOps</p>
      </div>

      <Tabs.Root defaultValue="overview" className="w-full">
        <Tabs.List className="flex space-x-1 rounded-lg bg-gray-100 p-1">
          <Tabs.Trigger
            value="overview"
            className="flex-1 px-3 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
          >
            Visão Geral
          </Tabs.Trigger>
          <Tabs.Trigger
            value="metrics"
            className="flex-1 px-3 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
          >
            Métricas
          </Tabs.Trigger>
          <Tabs.Trigger
            value="timeline"
            className="flex-1 px-3 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
          >
            Cronograma
          </Tabs.Trigger>
          <Tabs.Trigger
            value="implementation"
            className="flex-1 px-3 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
          >
            Implementação
          </Tabs.Trigger>
        </Tabs.List>

        <div className="mt-6">
          <Tabs.Content value="overview" className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Principais Objetivos</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-medium">Transformação Cultural</h3>
                    <p className="text-gray-600">Implementação de práticas DevOps para melhorar colaboração entre equipes</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-medium">Automação</h3>
                    <p className="text-gray-600">Pipeline CI/CD completo com Jenkins, Docker e Terraform</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-medium">Melhoria Contínua</h3>
                    <p className="text-gray-600">Estabelecimento de métricas e feedback loops</p>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="metrics" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MetricsCard 
              title="Tempo médio entre commit e deploy"
              current={48}
              target={2}
              icon={Clock}
            />
            <MetricsCard 
              title="Taxa de sucesso dos deploys"
              current={80}
              target={95}
              icon={Target}
            />
            <MetricsCard 
              title="MTTR"
              current={4}
              target={1}
              icon={Activity}
            />
            <MetricsCard 
              title="Frequência de deploys (por dia)"
              current={1}
              target={3}
              icon={BarChart2}
            />
          </Tabs.Content>

          <Tabs.Content value="timeline">
            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <div>
                <h3 className="font-medium text-purple-600">Mês 1-2: Preparação</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Setup inicial da infraestrutura</li>
                  <li>• Treinamento básico das equipes</li>
                  <li>• Implementação do pipeline básico</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-purple-600">Mês 3-4: Implementação</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Migração dos projetos</li>
                  <li>• Refinamento dos processos</li>
                  <li>• Implementação do monitoramento</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-purple-600">Mês 5-6: Otimização</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Otimização dos processos</li>
                  <li>• Análise dos resultados</li>
                  <li>• Ajustes finais</li>
                </ul>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="implementation">
            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <div className="flex items-start gap-4">
                <Settings className="h-8 w-8 text-purple-500" />
                <div>
                  <h3 className="font-medium">Ferramentas</h3>
                  <p className="text-gray-600">Jenkins, Docker, Terraform, SonarQube, ELK Stack</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-purple-500" />
                <div>
                  <h3 className="font-medium">Equipes</h3>
                  <p className="text-gray-600">Desenvolvimento (14 devs) e Operações (4 profissionais)</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Fases de Implementação</h3>
                <div className="space-y-2 text-gray-600">
                  <p>1. Preparação (2 semanas)</p>
                  <p>2. Implementação Gradual (4 semanas)</p>
                  <p>3. Refinamento (2 semanas)</p>
                </div>
              </div>
            </div>
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  );
};

export default DevOpsImplementationDashboard;