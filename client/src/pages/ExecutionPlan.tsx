import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InteractiveChecklist } from "@/components/InteractiveChecklist";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ExecutionPlan() {
  const phase1Items = [
    {
      id: 'audit',
      label: 'Code Audit (15 min)',
      description: 'Review your project structure and identify what you\'ve built',
      completed: false,
    },
    {
      id: 'architecture',
      label: 'Document Architecture (30 min)',
      description: 'Create ARCHITECTURE.md with tech stack and component hierarchy',
      completed: false,
    },
    {
      id: 'kanban',
      label: 'Set Up Kanban Board',
      description: 'Create visual task management (Trello, Notion, GitHub Projects)',
      completed: false,
    },
  ];

  const phase2Items = [
    {
      id: 'focus-zone',
      label: 'Design Your Focus Zone',
      description: 'Prepare environment with sensory cues (music, scent, etc.)',
      completed: false,
    },
    {
      id: 'starter-quest',
      label: 'Daily Starter Quest (25 min)',
      description: 'Pick ONE small task from "Next Up" column and complete it',
      completed: false,
    },
    {
      id: 'weekly-retro',
      label: 'Weekly Retro & Adjust',
      description: 'Review what worked and what didn\'t every Friday',
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </a>
          </Link>
          <h1 className="text-lg font-bold text-slate-900">Execution Plan</h1>
          <div className="w-20" />
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-12">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Your 6-Week Roadmap</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured plan to implement ADHD strategies and complete your project
            </p>
          </div>

          {/* Phase 1 */}
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">1</div>
                <div>
                  <CardTitle className="text-blue-900">Foundation (Week 1)</CardTitle>
                  <CardDescription className="text-blue-700">Set up your system and understand your project</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <InteractiveChecklist 
                title="Phase 1 Tasks"
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
                  <CardTitle className="text-green-900">Execution (Weeks 2-6)</CardTitle>
                  <CardDescription className="text-green-700">Build momentum and complete your project</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <InteractiveChecklist 
                title="Phase 2 Tasks"
                items={phase2Items}
              />
            </CardContent>
          </Card>

          {/* Daily Routine */}
          <Card>
            <CardHeader>
              <CardTitle>Your Daily Routine</CardTitle>
              <CardDescription>Follow this structure every day</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Morning Setup (5 min)</h4>
                    <p className="text-slate-600 text-sm mt-1">Activate your focus zone: music, scent, location, etc.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Starter Quest (25 min)</h4>
                    <p className="text-slate-600 text-sm mt-1">Pick ONE micro-task from "Next Up" and complete it using Pomodoro timer</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Celebrate & Break (5 min)</h4>
                    <p className="text-slate-600 text-sm mt-1">Move task to "Done". Enjoy your reward. Take a real break.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Repeat or Extend (Optional)</h4>
                    <p className="text-slate-600 text-sm mt-1">If momentum is high, do another Pomodoro. Otherwise, that's your win for today.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-slate-700">
                  <strong>Key Principle:</strong> This routine takes 35 minutes minimum. That's your daily commitment. Anything more is a bonus.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Retro Template */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Retro Template</CardTitle>
              <CardDescription>Every Friday, ask yourself these questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-2">✅ What worked this week?</p>
                  <p className="text-slate-600 text-sm">Which strategies helped you stay on track?</p>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-2">❌ What didn't work?</p>
                  <p className="text-slate-600 text-sm">Where did you get stuck or lose momentum?</p>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-2">🔧 What will you adjust?</p>
                  <p className="text-slate-600 text-sm">What change will you make next week?</p>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-2">📊 Progress snapshot</p>
                  <p className="text-slate-600 text-sm">How many tasks did you complete? How do you feel?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Energy Log Template */}
          <Card>
            <CardHeader>
              <CardTitle>Energy Log (Track for 2 Weeks)</CardTitle>
              <CardDescription>Identify your peak productivity times</CardDescription>
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
                Once you identify your peak times, schedule complex work (debugging, new features) during those hours.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center space-y-4">
            <h3 className="text-2xl font-bold">Ready to Start?</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Print this page or bookmark it. Start with Phase 1 this week. You've got this.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Print This Plan
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                Share With Accountability Partner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-20">
        <div className="container text-center space-y-4">
          <p>Built with ❤️ for ADHD developers</p>
          <p className="text-sm">
            This guide is based on research-backed strategies for ADHD and executive function.
          </p>
        </div>
      </footer>
    </div>
  );
}
