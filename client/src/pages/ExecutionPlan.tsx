import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InteractiveChecklist } from "@/components/InteractiveChecklist";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function ExecutionPlan() {
  const { t } = useTranslation();

  const phase1Items = [
    {
      id: 'audit',
      label: t('executionPlan.phase1.tasks.audit.label'),
      description: t('executionPlan.phase1.tasks.audit.description'),
      completed: false,
    },
    {
      id: 'architecture',
      label: t('executionPlan.phase1.tasks.architecture.label'),
      description: t('executionPlan.phase1.tasks.architecture.description'),
      completed: false,
    },
    {
      id: 'kanban',
      label: t('executionPlan.phase1.tasks.kanban.label'),
      description: t('executionPlan.phase1.tasks.kanban.description'),
      completed: false,
    },
  ];

  const phase2Items = [
    {
      id: 'focus-zone',
      label: t('executionPlan.phase2.tasks.focusZone.label'),
      description: t('executionPlan.phase2.tasks.focusZone.description'),
      completed: false,
    },
    {
      id: 'starter-quest',
      label: t('executionPlan.phase2.tasks.starterQuest.label'),
      description: t('executionPlan.phase2.tasks.starterQuest.description'),
      completed: false,
    },
    {
      id: 'weekly-retro',
      label: t('executionPlan.phase2.tasks.weeklyRetro.label'),
      description: t('executionPlan.phase2.tasks.weeklyRetro.description'),
      completed: false,
    },
  ];

  const dailySteps = t('executionPlan.dailyRoutine.steps', { returnObjects: true }) as any[];
  const retroItems = t('executionPlan.weeklyRetro.items', { returnObjects: true }) as any[];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>{t('executionPlan.back')}</span>
            </a>
          </Link>
          <h1 className="text-lg font-bold text-slate-900">{t('executionPlan.title')}</h1>
          <div className="w-20 flex justify-end">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-12">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('executionPlan.title')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('executionPlan.subtitle')}
            </p>
          </div>

          {/* Phase 1 */}
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">1</div>
                <div>
                  <CardTitle className="text-blue-900">{t('executionPlan.phase1.title')}</CardTitle>
                  <CardDescription className="text-blue-700">{t('executionPlan.phase1.description')}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <InteractiveChecklist 
                title={t('executionPlan.phase1.title')}
                items={phase1Items}
              />
            </CardContent>
          </Card>

          {/* Phase 2 */}
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold">2</div>
                <div>
                  <CardTitle className="text-green-900">{t('executionPlan.phase2.title')}</CardTitle>
                  <CardDescription className="text-green-700">{t('executionPlan.phase2.description')}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <InteractiveChecklist 
                title={t('executionPlan.phase2.title')}
                items={phase2Items}
              />
            </CardContent>
          </Card>

          {/* Daily Routine */}
          <Card>
            <CardHeader>
              <CardTitle>{t('executionPlan.dailyRoutine.title')}</CardTitle>
              <CardDescription>{t('executionPlan.dailyRoutine.subtitle')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {dailySteps.map((step: any, idx: number) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-bold flex-shrink-0">{idx + 1}</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{step.title}</h4>
                      <p className="text-slate-600 text-sm mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-slate-700">
                  <strong>{t('executionPlan.dailyRoutine.note')}</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Retro Template */}
          <Card>
            <CardHeader>
              <CardTitle>{t('executionPlan.weeklyRetro.title')}</CardTitle>
              <CardDescription>{t('executionPlan.weeklyRetro.subtitle')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {retroItems.map((item: any, idx: number) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-2">{item.emoji} {item.title}</p>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Energy Log Template */}
          <Card>
            <CardHeader>
              <CardTitle>{t('executionPlan.energyLog.title')}</CardTitle>
              <CardDescription>{t('executionPlan.energyLog.subtitle')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="font-semibold text-slate-900">Time</div>
                  <div className="font-semibold text-slate-900">Energy Level</div>
                  <div className="font-semibold text-slate-900">Task Type</div>
                </div>
                {['08:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00'].map((time, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-sm text-slate-600">{time}</div>
                    <div className="text-sm text-slate-600">⚡ / 😐 / 😴</div>
                    <div className="text-sm text-slate-600">Complex / Simple</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 mt-4">
                {t('executionPlan.energyLog.note')}
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center space-y-4">
            <h3 className="text-2xl font-bold">{t('executionPlan.cta.title')}</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              {t('executionPlan.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                {t('executionPlan.cta.print')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                {t('executionPlan.cta.share')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-20">
        <div className="container text-center space-y-4">
          <p>{t('footer.text')}</p>
          <p className="text-sm">
            {t('footer.description')}
          </p>
        </div>
      </footer>
    </div>
  );
}
