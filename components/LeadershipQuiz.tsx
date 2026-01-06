import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';
import { HelpCircle, ChevronRight, CheckCircle2, RotateCcw, Award, ShieldAlert, Sparkles, MessageCircle, Info } from 'lucide-react';

interface LeadershipQuizProps {
  lang: Language;
}

const LeadershipQuiz: React.FC<LeadershipQuizProps> = ({ lang }) => {
  const content = UI_STRINGS.quiz;
  const [currentStep, setCurrentStep] = useState<number>(-1); 
  const [score, setScore] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isPerfect, setIsPerfect] = useState<boolean>(false);

  const isFinished = currentStep >= content.questions.length;

  useEffect(() => {
    if (isFinished && score === content.questions.length * 100) {
      setIsPerfect(true);
      // @ts-ignore
      if (window.confetti) {
        // @ts-ignore
        window.confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F1D592', '#ffffff']
        });
      }
    }
  }, [isFinished, score]);

  const handleStart = () => {
    setCurrentStep(0);
    setScore(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setIsPerfect(false);
  };

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(index);
    const isCorrect = content.questions[currentStep].options[index].isCorrect;
    if (isCorrect) {
      setScore(prev => prev + 100);
    }
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentStep < content.questions.length - 1) {
      setSelectedOption(null);
      setShowFeedback(false);
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(content.questions.length);
    }
  };

  return (
    <section id="quiz" className="py-24 bg-[#020617] relative overflow-hidden scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10">
            <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em]">
              {content.badge[lang]}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            {content.title[lang]}
          </h2>
          
          {currentStep >= 0 && !isFinished && (
            <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-slate-400 text-xs font-black uppercase tracking-widest">{content.scoreLabel[lang]}</span>
              <span className="text-2xl font-black text-[#D4AF37]">{score}</span>
            </div>
          )}
        </div>

        <div className={`glass-card rounded-[3rem] p-8 md:p-12 border border-white/10 min-h-[450px] flex flex-col justify-center transition-all duration-700 relative ${isPerfect ? 'shadow-[0_0_100px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]/30' : ''}`}>
          
          {currentStep === -1 && (
            <div className="text-center space-y-8">
              <div className="w-24 h-24 gold-bg rounded-3xl mx-auto flex items-center justify-center text-black shadow-2xl rotate-6 hover:rotate-0 transition-transform cursor-pointer">
                <Award className="w-12 h-12" />
              </div>
              <p className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed font-medium">
                {lang === 'ar' 
                  ? 'هل تمتلك الرؤية المطلوبة لإدارة العمليات الميدانية المعقدة؟ اختبر ذكاءك التشغيلي وسجل نقاطك.'
                  : 'Do you have the vision required for complex field operations? Test your operational IQ and rack up points.'}
              </p>
              <button 
                onClick={handleStart}
                className="px-12 py-5 gold-bg text-black font-black rounded-2xl hover:scale-105 transition-all flex items-center gap-4 mx-auto shadow-xl group"
              >
                {content.startBtn[lang]}
                <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}

          {currentStep >= 0 && !isFinished && (
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <div className="text-[#D4AF37] font-black text-xs uppercase tracking-widest">
                  {lang === 'ar' ? 'المهمة' : 'Mission'} {currentStep + 1} / {content.questions.length}
                </div>
                <div className="flex gap-1">
                  {content.questions.map((_, i) => (
                    <div key={i} className={`h-1.5 w-12 rounded-full transition-all duration-500 ${i <= currentStep ? 'bg-[#D4AF37]' : 'bg-white/10'}`}></div>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                {content.questions[currentStep].q[lang]}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {content.questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={selectedOption !== null}
                    className={`p-6 rounded-2xl border text-right transition-all flex items-center justify-between group ${
                      selectedOption === idx 
                        ? (option.isCorrect ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-red-500/20 border-red-500 text-red-400')
                        : (selectedOption !== null && option.isCorrect ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300/50' : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:border-white/20')
                    }`}
                  >
                    <span className="text-lg font-bold flex-1">{option.text[lang]}</span>
                    {selectedOption === idx && (
                      <div className="mr-4">
                        {option.isCorrect ? <CheckCircle2 className="w-6 h-6" /> : <ShieldAlert className="w-6 h-6" />}
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {showFeedback && (
                <div className={`p-6 rounded-2xl border flex gap-4 transition-all ${content.questions[currentStep].options[selectedOption!].isCorrect ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-amber-500/5 border-amber-500/20'}`}>
                  <div className={`mt-1 flex-shrink-0 ${content.questions[currentStep].options[selectedOption!].isCorrect ? 'text-emerald-500' : 'text-amber-500'}`}>
                    <Info className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-slate-300 leading-relaxed italic">
                    {content.questions[currentStep].tip[lang]}
                  </p>
                </div>
              )}

              {selectedOption !== null && (
                <button 
                  onClick={handleNext}
                  className="w-full py-5 gold-bg text-black font-black rounded-2xl hover:scale-[1.01] transition-all flex items-center justify-center gap-4"
                >
                  {currentStep === content.questions.length - 1 ? content.finishBtn[lang] : content.nextBtn[lang]}
                  <ChevronRight className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>
          )}

          {isFinished && (
            <div className="text-center space-y-10">
              <div className="relative inline-block">
                <div className={`w-32 h-32 rounded-[2.5rem] flex items-center justify-center text-black shadow-2xl relative z-10 ${isPerfect ? 'gold-bg' : 'bg-white'}`}>
                  {isPerfect ? <Sparkles className="w-16 h-16 animate-pulse" /> : <CheckCircle2 className="w-16 h-16" />}
                </div>
                {isPerfect && <div className="absolute inset-0 gold-bg blur-3xl opacity-40 -z-10 animate-pulse scale-150"></div>}
              </div>

              <div className="space-y-4">
                <div className="text-[#D4AF37] text-sm font-black uppercase tracking-[0.5em] mb-2">{lang === 'ar' ? 'النتيجة النهائية' : 'Final Score'}</div>
                <div className="text-7xl font-black text-white mb-6">{score} / {content.questions.length * 100}</div>
                
                <p className="text-xl text-slate-300 font-bold leading-relaxed max-w-2xl mx-auto px-4">
                  {content.resultMsg[lang]}
                </p>
              </div>

              <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 max-w-lg mx-auto">
                <h4 className="text-[#D4AF37] text-sm font-black uppercase mb-4 tracking-widest">{content.hireCta[lang]}</h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact"
                    className="px-10 py-4 gold-bg text-black font-black rounded-xl hover:scale-105 transition-all flex items-center gap-3 justify-center shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {lang === 'ar' ? 'تواصل مع محمد الآن' : 'Connect with Mohamed'}
                  </a>
                  <button 
                    onClick={handleStart}
                    className="px-10 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl hover:bg-white/10 transition-all flex items-center gap-3 justify-center"
                  >
                    <RotateCcw className="w-5 h-5" />
                    {content.resetBtn[lang]}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadershipQuiz;