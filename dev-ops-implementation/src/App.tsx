import * as Tabs from '@radix-ui/react-tabs';
import * as Progress from '@radix-ui/react-progress';
import { ArrowRight, Settings, Target, Users, Clock, Activity, BarChart2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

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
        Target: {target} | Current: {current}
      </div>
    </div>
  </div>
);

const DevOpsImplementationDashboard = () => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 p-4">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-2">DevOps Implementation Plan - Tech</h1>
        <p className="text-white/80">Digital Transformation through CALMS practices and the Three Ways of DevOps</p>
      </div>

      <Tabs.Root defaultValue="overview" className="w-full">
        <Tabs.List className="flex space-x-1 rounded-lg bg-gray-100 p-1">
          <Tabs.Trigger
            value="overview"
            className="flex-1 px-3 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
          >
            Overview
          </Tabs.Trigger>
          <Tabs.Trigger
            value="metrics"
            className="flex-1 px-3 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
          >
            Metrics
          </Tabs.Trigger>
          <Tabs.Trigger
            value="timeline"
            className="flex-1 px-3 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
          >
            Timeline
          </Tabs.Trigger>
          <Tabs.Trigger
            value="implementation"
            className="flex-1 px-3 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
          >
            Implementation
          </Tabs.Trigger>
        </Tabs.List>

        <div className="mt-6">
          <Tabs.Content value="overview" className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Main Goals</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-medium">Cultural Transformation</h3>
                    <p className="text-gray-600">Implementing DevOps practices to improve team collaboration</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-medium">Automation</h3>
                    <p className="text-gray-600">Complete CI/CD pipeline with Jenkins, Docker, and Terraform</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-medium">Continuous Improvement</h3>
                    <p className="text-gray-600">Establishing metrics and feedback loops</p>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="metrics" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MetricsCard 
              title="Mean time between commit and deploy"
              current={48}
              target={2}
              icon={Clock}
            />
            <MetricsCard 
              title="Deploy success rate"
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
              title="Deploy frequency (per day)"
              current={1}
              target={3}
              icon={BarChart2}
            />
          </Tabs.Content>

          <Tabs.Content value="timeline">
            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <div>
                <h3 className="font-medium text-purple-600">Month 1-2: Preparation</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Initial infrastructure setup</li>
                  <li>• Basic team training</li>
                  <li>• Basic pipeline implementation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-purple-600">Month 3-4: Implementation</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Project migration</li>
                  <li>• Process refinement</li>
                  <li>• Monitoring implementation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-purple-600">Month 5-6: Optimization</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Process optimization</li>
                  <li>• Result analysis</li>
                  <li>• Final adjustments</li>
                </ul>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="implementation">
            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <div className="flex items-start gap-4">
                <Settings className="h-8 w-8 text-purple-500" />
                <div>
                  <h3 className="font-medium">Tools</h3>
                  <p className="text-gray-600">Jenkins, Docker, Terraform, SonarQube, ELK Stack</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-purple-500" />
                <div>
                  <h3 className="font-medium">Teams</h3>
                  <p className="text-gray-600">Development (14 devs) and Operations (4 professionals)</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Implementation Phases</h3>
                <div className="space-y-2 text-gray-600">
                  <p>1. Preparation (2 weeks)</p>
                  <p>2. Gradual Implementation (4 weeks)</p>
                  <p>3. Refinement (2 weeks)</p>
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
