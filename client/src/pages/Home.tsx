import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Brain, Zap, Target, Award, BookOpen, ArrowRight } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white" style={{ fontFamily: 'var(--font-body)' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-lg text-slate-900">{t('nav.title')}</span>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#strategies" className="text-sm text-slate-600 hover:text-slate-900">{t('nav.strategies')}</a>
            <a href="#execution" className="text-sm text-slate-600 hover:text-slate-900">{t('nav.execution')}</a>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                {t('hero.title')} <span className="text-blue-600">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-slate-600">
                {t('hero.subtitle')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/execution-plan">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  {t('hero.cta')} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Button size="lg" variant="outline">
                {t('hero.learn')}
              </Button>
            </div>
            <div className="flex gap-6 text-sm text-slate-600 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>{t('hero.badges.research')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>{t('hero.badges.practical')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>{t('hero.badges.actionable')}</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663396905230/boyDWadomoEMoDaQZJRLhk/adhd-hero-brain-hjshYvB2w5QEWM6ispA3sT.webp"
              alt="ADHD Brain Illustration"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">{t('problem.title')}</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {t('problem.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <Zap className="w-8 h-8 text-amber-400 mb-2" />
                <CardTitle className="text-white">{t('problem.items.dopamine.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                {t('problem.items.dopamine.description')}
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <Brain className="w-8 h-8 text-blue-400 mb-2" />
                <CardTitle className="text-white">{t('problem.items.executive.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                {t('problem.items.executive.description')}
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <Target className="w-8 h-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">{t('problem.items.working.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                {t('problem.items.working.description')}
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <Award className="w-8 h-8 text-red-400 mb-2" />
                <CardTitle className="text-white">{t('problem.items.perfectionism.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                {t('problem.items.perfectionism.description')}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section id="strategies" className="py-20">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('strategies.title')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('strategies.subtitle')}
            </p>
          </div>

          <Tabs defaultValue="psychological" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="psychological">{t('strategies.psychological.title')}</TabsTrigger>
              <TabsTrigger value="behavioral">{t('strategies.behavioral.title')}</TabsTrigger>
              <TabsTrigger value="environment">{t('strategies.environment.title')}</TabsTrigger>
              <TabsTrigger value="execution">{t('strategies.execution.title')}</TabsTrigger>
            </TabsList>

            <TabsContent value="psychological">
              <Card>
                <CardHeader>
                  <CardTitle>{t('strategies.psychological.title')}</CardTitle>
                  <CardDescription>{t('strategies.psychological.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(t('strategies.psychological.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="behavioral">
              <Card>
                <CardHeader>
                  <CardTitle>{t('strategies.behavioral.title')}</CardTitle>
                  <CardDescription>{t('strategies.behavioral.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(t('strategies.behavioral.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="environment">
              <Card>
                <CardHeader>
                  <CardTitle>{t('strategies.environment.title')}</CardTitle>
                  <CardDescription>{t('strategies.environment.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(t('strategies.environment.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="execution">
              <Card>
                <CardHeader>
                  <CardTitle>{t('strategies.execution.title')}</CardTitle>
                  <CardDescription>{t('strategies.execution.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(t('strategies.execution.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center space-y-4">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663396905230/boyDWadomoEMoDaQZJRLhk/adhd-starter-quest-fZrStPL9u74oBKKP89fLxA.webp"
              alt="Starter Quest"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold">{t('cta.title')}</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <a href="/execution-plan">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                {t('cta.button')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('faq.title')}</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {(t('faq.items', { returnObjects: true }) as any[]).map((item: any, idx: number) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold text-slate-900">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">{t('cta.title')}</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="/execution-plan">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                {t('cta.button')}
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              {t('cta.share')}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
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
