import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Brain, Zap, Target, Award, BookOpen, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white" style={{ fontFamily: 'var(--font-body)' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-lg text-slate-900">ADHD Dev Strategy</span>
          </div>
          <div className="flex gap-4">
            <a href="#strategies" className="text-sm text-slate-600 hover:text-slate-900">Strategies</a>
            <a href="#execution" className="text-sm text-slate-600 hover:text-slate-900">Execution</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Start Your Projects. <span className="text-blue-600">Finish Them.</span>
              </h1>
              <p className="text-xl text-slate-600">
                Practical strategies for ADHD developers to overcome project paralysis and build momentum.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/execution-plan">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <div className="flex gap-6 text-sm text-slate-600 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Research-backed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Practical</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Actionable</span>
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
            <h2 className="text-3xl md:text-4xl font-bold">The ADHD Developer's Paradox</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              You start strong. You build momentum. Then everything stops.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <Zap className="w-8 h-8 text-amber-400 mb-2" />
                <CardTitle className="text-white">Dopamine Crash</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                Initial excitement fades. Repetitive tasks feel impossible. The brain stops producing dopamine.
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <Brain className="w-8 h-8 text-blue-400 mb-2" />
                <CardTitle className="text-white">Executive Function Gap</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                Planning, prioritization, and working memory challenges make it hard to know where to start.
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <Target className="w-8 h-8 text-red-400 mb-2" />
                <CardTitle className="text-white">Task Paralysis</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                Projects feel overwhelming. Perfectionism kicks in. You end up doing nothing.
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663396905230/boyDWadomoEMoDaQZJRLhk/adhd-dopamine-cycle-9i5UsiJrYDWPpRbkiFYsjt.webp"
              alt="Dopamine Cycle"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section id="strategies" className="py-20">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Proven Strategies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Evidence-based approaches designed specifically for ADHD brains
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 border border-slate-200">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663396905230/boyDWadomoEMoDaQZJRLhk/adhd-strategies-visual-kpB5jfPUr2h8C8AHA7TVM4.webp"
              alt="Strategies Overview"
              className="w-full h-auto rounded-lg mb-8"
            />
          </div>

          <Tabs defaultValue="psychological" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="psychological">Psychological</TabsTrigger>
              <TabsTrigger value="behavioral">Behavioral</TabsTrigger>
              <TabsTrigger value="environment">Environment</TabsTrigger>
              <TabsTrigger value="execution">Execution</TabsTrigger>
            </TabsList>

            <TabsContent value="psychological" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Progress Over Perfection</CardTitle>
                  <CardDescription>Reframe your mindset</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Replace perfectionism with "progress-ism." Your ADHD brain will resist starting if it feels like it needs to be perfect. Instead, focus on:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Functional implementation over clean code</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Learning process over final output</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Refactoring as a separate task later</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Treat Setbacks as System Bugs</CardTitle>
                  <CardDescription>Depersonalize failure</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    When you get stuck, don't blame yourself. Instead, ask: "What changed in my system?" This removes shame and turns problems into debugging exercises.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-slate-700">
                      <strong>Example:</strong> Instead of "I'm lazy," ask "Did I lose my focus environment? Did my energy crash? Is the task too big?"
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Leverage Immediate Rewards</CardTitle>
                  <CardDescription>Work with your dopamine system</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Your ADHD brain craves immediate feedback. Use this:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Celebrate micro-wins (move task to "Done" column)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Provide small rewards after completing tasks</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Track progress visually (streaks, progress bars)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="behavioral" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Externalize Everything</CardTitle>
                  <CardDescription>Offload your working memory</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Your working memory is limited. Don't keep tasks in your head:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Use a single capture inbox (Notion, Trello, paper)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Create visual kanban boards with time estimates</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Document "current state" and "next tiny action" when pausing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Starter Quests (10-Minute Tasks)</CardTitle>
                  <CardDescription>Break the starting barrier</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    "Starting" is the hardest part. Make it ridiculously easy:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Create a file</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Write one function name</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Add a comment</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Write one failing test</span>
                    </li>
                  </ul>
                  <p className="text-sm text-slate-600 mt-4">
                    These tiny wins trigger dopamine and create momentum for the next step.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="environment" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Design Your Focus Zone</CardTitle>
                  <CardDescription>Create sensory anchors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Your environment matters. Create consistent sensory cues:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <p className="font-semibold text-slate-900 mb-2">Sound</p>
                      <p className="text-sm text-slate-700">Brown noise, lofi beats (60-80 BPM)</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <p className="font-semibold text-slate-900 mb-2">Scent</p>
                      <p className="text-sm text-slate-700">Peppermint or citrus essential oil</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <p className="font-semibold text-slate-900 mb-2">Motion</p>
                      <p className="text-sm text-slate-700">Standing desk, light movement</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <p className="font-semibold text-slate-900 mb-2">Touch</p>
                      <p className="text-sm text-slate-700">Fidget object, stress ball</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Body Doubling</CardTitle>
                  <CardDescription>Leverage the power of presence</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Having someone nearby (even virtually) increases accountability and focus:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Work at a coffee shop or library</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Join online study/coworking sessions</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Share your screen with a friend</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Energy-Based Scheduling</CardTitle>
                  <CardDescription>Work with your natural rhythms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Your energy fluctuates. Track it and align tasks accordingly:
                  </p>
                  <div className="space-y-3 mt-4">
                    <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-700">🚀 Peak Energy</div>
                      <div className="text-sm text-slate-700">Complex logic, debugging, new features</div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <div className="font-semibold text-amber-700">😴 Low Energy</div>
                      <div className="text-sm text-slate-700">Code review, documentation, UI tweaks</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="execution" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pomodoro + Starter Quests</CardTitle>
                  <CardDescription>Structured time blocks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Combine time-boxing with micro-tasks:
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                    <p className="font-semibold text-slate-900 mb-3">25/5 Pomodoro Cycle</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>25 min:</strong> Work on ONE Starter Quest</li>
                      <li>• <strong>5 min:</strong> Real break (stretch, water, walk)</li>
                      <li>• <strong>After 4 cycles:</strong> 15-30 min longer break</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Retro</CardTitle>
                  <CardDescription>Iterate and improve</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Every Friday, review what worked and what didn't:
                  </p>
                  <ul className="space-y-2 text-slate-700 mt-4">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>What strategies helped this week?</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Where did I get stuck?</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>What will I adjust next week?</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Execution Plan Section */}
      <section id="execution" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Your Execution Roadmap</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Step-by-step guide to implement these strategies in your project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Phase 1: Foundation</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="phase1-1">
                  <AccordionTrigger className="text-base font-semibold">
                    <span className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm">1</span>
                      Code Audit (15 min Starter Quest)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 text-slate-700">
                    <p>Open your project folder and review the file structure. Understand what you've already built.</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>List all files in src/</li>
                      <li>Identify main components</li>
                      <li>Note areas needing refactoring</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="phase1-2">
                  <AccordionTrigger className="text-base font-semibold">
                    <span className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm">2</span>
                      Document Architecture (30 min)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 text-slate-700">
                    <p>Create ARCHITECTURE.md with your tech stack and component hierarchy.</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Framework and libraries</li>
                      <li>Folder structure</li>
                      <li>Data flow diagram</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="phase1-3">
                  <AccordionTrigger className="text-base font-semibold">
                    <span className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm">3</span>
                      Set Up Kanban Board
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 text-slate-700">
                    <p>Create a visual task management system (Trello, Notion, GitHub Projects).</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Columns: Backlog, Next Up, In Progress, Review, Done</li>
                      <li>Break down remaining requirements into micro-tasks</li>
                      <li>Add time estimates to each card</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Phase 2: Execution</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="phase2-1">
                  <AccordionTrigger className="text-base font-semibold">
                    <span className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-sm">4</span>
                      Design Your Focus Zone
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 text-slate-700">
                    <p>Prepare your environment for deep work.</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Choose your work location</li>
                      <li>Set up sensory cues (music, scent, etc.)</li>
                      <li>Remove distractions</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="phase2-2">
                  <AccordionTrigger className="text-base font-semibold">
                    <span className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-sm">5</span>
                      Daily Starter Quest (25 min)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 text-slate-700">
                    <p>Start each day with ONE small, achievable task.</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Pick from "Next Up" column</li>
                      <li>Use Pomodoro timer</li>
                      <li>Celebrate completion</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="phase2-3">
                  <AccordionTrigger className="text-base font-semibold">
                    <span className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-sm">6</span>
                      Weekly Retro & Adjust
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 text-slate-700">
                    <p>Every Friday, review and iterate.</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>What worked this week?</li>
                      <li>What didn't?</li>
                      <li>What will you change?</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center space-y-4">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663396905230/boyDWadomoEMoDaQZJRLhk/adhd-starter-quest-fZrStPL9u74oBKKP89fLxA.webp"
              alt="Starter Quest"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold">Ready to Start?</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Pick ONE Starter Quest from your project right now. Just 10 minutes. You've got this.
            </p>
            <a href="/execution-plan">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Start Your First Quest
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Common Questions</h2>
            <p className="text-lg text-slate-300">
              Answers to help you get started
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            <AccordionItem value="faq-1" className="border-slate-700">
              <AccordionTrigger className="text-white hover:text-blue-300">
                What if I still can't start even with Starter Quests?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                <p className="mb-3">This might mean:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Your task is still too big—break it down further</li>
                  <li>Your environment isn't optimized—try a different location</li>
                  <li>You need body doubling—work with someone else nearby</li>
                  <li>Your energy is low—try again at a different time</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border-slate-700">
              <AccordionTrigger className="text-white hover:text-blue-300">
                How do I maintain momentum after the first week?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                <p className="mb-3">Key strategies:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Celebrate every micro-win visibly</li>
                  <li>Vary your tasks to keep novelty</li>
                  <li>Track progress (streak counters, progress bars)</li>
                  <li>Adjust your system weekly based on what works</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border-slate-700">
              <AccordionTrigger className="text-white hover:text-blue-300">
                Should I take ADHD medication while implementing these strategies?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                <p>These strategies work with or without medication. If you're on medication, they amplify its effectiveness. If you're not, they provide structural support. Consult your doctor about what's best for you.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border-slate-700">
              <AccordionTrigger className="text-white hover:text-blue-300">
                What if my project is already too far behind?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                <p className="mb-3">It's never too late. Start with:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Honest assessment of what's done vs. what's needed</li>
                  <li>Prioritize ruthlessly—what's MVP?</li>
                  <li>Break the MVP into Starter Quests</li>
                  <li>Focus on finishing, not perfecting</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">You Can Finish This</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            ADHD isn't a character flaw. It's a different way your brain works. With the right system, you can build momentum and complete your projects.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="/execution-plan">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Start Execution Plan
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                Share With Others
              </Button>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="container text-center space-y-4">
          <p>Built with ❤️ for ADHD developers</p>
          <p className="text-sm">
            This guide is based on research-backed strategies for ADHD and executive function.
          </p>
          <p className="text-xs">
            © 2026 ADHD Dev Strategy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
