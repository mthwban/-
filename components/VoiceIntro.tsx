import React, { useState } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { Volume2, Loader2, Pause } from 'lucide-react';
import { Language } from '../types.ts';
import { UI_STRINGS } from '../constants.tsx';

interface Props { lang: Language; }

const VoiceIntro: React.FC<Props> = ({ lang }) => {
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audioSource, setAudioSource] = useState<AudioBufferSourceNode | null>(null);

  const handlePlay = async () => {
    if (playing) {
      audioSource?.stop();
      setPlaying(false);
      return;
    }

    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = lang === 'ar' 
        ? "بصوت احترافي وواثق، قدم ملخصاً مهنياً لمحمد ثوبان: خبير تحليل العمليات الصناعية، الذي يتمتع بخبرة تزيد عن 10 سنوات في إدارة المشاريع الميدانية الكبيرة وتحديداً في موسم الحج بإدارة 150 ألف وحدة."
        : "In a professional and confident voice, introduce Mohamed Thwban: An Industrial Operations Analysis expert with over 10 years of experience in large-scale field management, specifically managing 150,000 units during Hajj.";

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: lang === 'ar' ? 'Puck' : 'Zephyr' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
        const buffer = await decodeAudioData(decode(base64Audio), ctx, 24000, 1);
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.onended = () => {
          setPlaying(false);
          setAudioSource(null);
        };
        source.start();
        setAudioSource(source);
        setPlaying(true);
      }
    } catch (e) {
      console.error("Voice Error:", e);
    } finally {
      setLoading(false);
    }
  };

  function decode(base64: string) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i);
    return bytes;
  }

  async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
    return buffer;
  }

  return (
    <button 
      onClick={handlePlay}
      disabled={loading}
      className={`px-8 py-5 border rounded-full transition-all flex items-center justify-center gap-3 shadow-xl ${playing ? 'bg-red-500/10 border-red-500/30 text-red-500' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : playing ? (
        <Pause className="w-5 h-5" />
      ) : (
        <Volume2 className="w-5 h-5 text-[#D4AF37]" />
      )}
      <span className="font-black text-[10px] uppercase tracking-widest">
        {loading ? (lang === 'ar' ? 'جاري التحليل...' : 'Synthesizing...') : playing ? (lang === 'ar' ? 'إيقاف' : 'Stop Bio') : UI_STRINGS.hero.ctaVoice[lang]}
      </span>
    </button>
  );
};

export default VoiceIntro;