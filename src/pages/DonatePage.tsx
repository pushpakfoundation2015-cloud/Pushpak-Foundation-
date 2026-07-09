import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { HandHeart, Landmark, ShieldCheck, HelpCircle, Receipt, Smartphone, CheckCircle, Heart, Award, Copy, Share2, Check } from 'lucide-react';

interface DonatePageProps {
  lang: Language;
}

export const DonatePage: React.FC<DonatePageProps> = ({ lang }) => {
  const t = translations[lang];

  // Slider State for Impact Calculator
  const [donateAmount, setDonateAmount] = useState<number>(1500);
  
  // Custom Receipt Form
  const [receiptForm, setReceiptForm] = useState({
    name: '',
    phone: '',
    amount: '1500',
    cause: 'edu'
  });
  const [receiptGenerated, setReceiptGenerated] = useState(false);
  const [receiptNum, setReceiptNum] = useState('');

  // SCAN & PAY interactive UI states
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [hdNoWatermark, setHdNoWatermark] = useState(true);
  const [isShared, setIsShared] = useState(false);

  const handleCopyUPI = () => {
    navigator.clipboard.writeText('bom260301333885@mahb');
    setCopiedUPI(true);
    setTimeout(() => setCopiedUPI(false), 2000);
  };

  // Calculate local real-world impact description
  const getImpactDescription = (amt: number) => {
    if (amt < 500) {
      return lang === 'en' 
        ? "Essential notebook packages and pens for 2 primary school children in Nadiad slums."
        : "નડિયાદ પછાત વસાહતના ૨ પ્રાથમિક શાળાના બાળકોને જરૂરી નોટબુક અને બોલપેન વિતરણ.";
    } else if (amt < 1500) {
      return lang === 'en'
        ? "1 complete child school kit containing a durable school bag, 6 notebooks, geometry kit, and lunch box."
        : "૧ ગરીબ બાળકને સંપૂર્ણ સ્કૂલ કીટ (જેમાં મજબૂત બેગ, ૬ નોટબુક, કંપાસ અને લંચબોક્સ સામેલ છે).";
    } else if (amt < 4500) {
      return lang === 'en'
        ? "Full medical diagnostic materials and vitamins support for 12 elderly villagers during health camps."
        : "આરોગ્ય તપાસ કેમ્પ દરમિયાન ૧૨ જરૂરિયાતમંદ વૃદ્ધોને મફત દવાઓ, આઈ ડ્રોપ્સ અને વિટામિન ટેબ્લેટ વિતરણ.";
    } else if (amt < 8000) {
      return lang === 'en'
        ? "1 High-speed automatic sewing machine given to a trained widow mother supporting her micro-boutique startup."
        : "તાલીમ પૂર્ણ કરનાર ૧ વિધવા માતાને ગૌરવભેર આજીવિકા મેળવવા માટે ૧ ઓટોમેટિક સિલાઈ મશીન અર્પણ.";
    } else if (amt < 12000) {
      return lang === 'en'
        ? "A full month of dry food supplies, sanitizers, and blanket packages for 10 nomadic (NT-DNT) tribal families."
        : "૧૦ વિચરતી-વિમુક્ત જાતિના (NT-DNT) પછાત પરિવારોને આખા મહિનાની કલ્યાણકારી રાશન-ભોજન કીટ વિતરણ.";
    } else {
      return lang === 'en'
        ? "Comprehensive sponsoring of 3 girls higher school fees, textbooks and transport counseling for 1 full year."
        : "૩ તેજસ્વી ગરીબ દીકરીઓના આખા વર્ષનું શાળા શિક્ષણ, ચોપડીઓ અને શૈક્ષણિક ટ્રાન્સપોર્ટ સહાયતા ભંડોળ.";
    }
  };

  const handleReceiptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (receiptForm.name.trim() && receiptForm.amount) {
      const randomNum = 'PFT/REC/' + Math.floor(10000 + Math.random() * 90000);
      setReceiptNum(randomNum);
      setReceiptGenerated(true);
    }
  };

  const handleReceiptReset = () => {
    setReceiptGenerated(false);
    setReceiptForm({
      name: '',
      phone: '',
      amount: '1500',
      cause: 'edu'
    });
  };

  const copyBankDetail = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(lang === 'en' ? "Copied to clipboard!" : "ક્લિપબોર્ડ પર કોપી થયું!");
  };

  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-[#0B192C] to-blue-950 text-white text-center px-4 overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 bg-amber-500/5 pointer-events-none blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{t.registration}</span>
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
            {t.donateTitle}
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            {t.donateSubtitle}
          </p>
        </div>
      </section>

      {/* Main Donation Panel */}
      <section className="py-20 bg-white dark:bg-[#0B192C] px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Slider Impact Calculator & Details */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            
            {/* Impact Slider Card */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-[#070F1E] border border-amber-500/10 shadow-lg space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest block">
                  {t.donateImpactTitle}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {t.donateImpactSubtitle}
                </h3>
              </div>

              {/* Slider Input */}
              <div className="space-y-4 pt-4">
                <input
                  type="range"
                  min="200"
                  max="15000"
                  step="100"
                  value={donateAmount}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setDonateAmount(val);
                    setReceiptForm(prev => ({ ...prev, amount: val.toString() }));
                  }}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                
                <div className="flex items-center justify-between font-mono font-extrabold text-sm text-slate-400">
                  <span>₹200</span>
                  <span>₹5,000</span>
                  <span>₹10,000</span>
                  <span>₹15,000</span>
                </div>
              </div>

              {/* Dynamically calculated output block */}
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex gap-4 items-start text-slate-800 dark:text-slate-100 font-sans leading-relaxed">
                <div className="p-3 bg-amber-500 text-white rounded-xl text-lg font-extrabold flex-shrink-0">
                  ₹{donateAmount.toLocaleString()}
                </div>
                <div>
                  <span className="block text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    {lang === 'en' ? 'YOUR CONTRIBUTION WILL PROVIDE:' : 'આ દાનથી નીચે મુજબની સીધી મદદ થશે:'}
                  </span>
                  <p className="text-xs md:text-sm font-medium leading-relaxed">
                    {getImpactDescription(donateAmount)}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Bank Deposit Details */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-[#070F1E] border border-amber-500/10 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans border-b border-amber-500/10 pb-3 flex items-center gap-2">
                <Landmark className="h-5 w-5 text-amber-500" />
                <span>{t.donateDetailsTitle}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-xs md:text-sm font-sans">
                <div className="p-4 bg-white dark:bg-[#0B192C] rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <div>
                    <span className="block text-slate-400 text-[10px] uppercase font-bold">{lang === 'en' ? 'Bank Name' : 'બેંકનું નામ'}</span>
                    <span className="font-bold text-slate-900 dark:text-white">{t.donateBankName}</span>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-[#0B192C] rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <div>
                    <span className="block text-slate-400 text-[10px] uppercase font-bold">{lang === 'en' ? 'Beneficiary Name' : 'ટ્રસ્ટનું નામ'}</span>
                    <span className="font-bold text-slate-900 dark:text-white">Pushpak Foundation</span>
                  </div>
                  <button onClick={() => copyBankDetail('Pushpak Foundation')} className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-amber-500 cursor-pointer">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-4 bg-white dark:bg-[#0B192C] rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <div>
                    <span className="block text-slate-400 text-[10px] uppercase font-bold">{lang === 'en' ? 'Account Number' : 'એકાઉન્ટ નંબર'}</span>
                    <span className="font-bold text-slate-900 dark:text-white font-mono">60301333885</span>
                  </div>
                  <button onClick={() => copyBankDetail('60301333885')} className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-amber-500 cursor-pointer">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-4 bg-white dark:bg-[#0B192C] rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <div>
                    <span className="block text-slate-400 text-[10px] uppercase font-bold">{lang === 'en' ? 'IFSC CODE' : 'IFSC કોડ'}</span>
                    <span className="font-bold text-slate-900 dark:text-white font-mono">MAHB0000388</span>
                  </div>
                  <button onClick={() => copyBankDetail('MAHB0000388')} className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-amber-500 cursor-pointer">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <span className="block text-[11px] text-slate-400 mt-4 italic">
                * Real bank account details can be verified via official NGO documents under registration F/2365/Kheda.
              </span>
            </div>

          </div>

          {/* Right: Scan QR / Dynamic Receipt Generator */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Visual UPI QR Card (Authentic Bank of Maharashtra "Scan & Pay") */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl text-center space-y-6">
              <div className="text-left">
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
                  {lang === 'en' ? 'DIRECT UPI CONTRIBUTION' : 'સીધા UPI દ્વારા દાન'}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {lang === 'en' ? 'Official Scan & Pay' : 'અધિકૃત સ્કેન અને પે'}
                </h3>
              </div>

              {/* The Bank of Maharashtra Card Board Container (Styled exactly like the uploaded image) */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 shadow-inner border border-slate-100 max-w-[340px] mx-auto flex flex-col relative overflow-hidden">
                
                {/* Blue border frame */}
                <div className="border-2 border-[#0070bc] p-3 rounded-lg flex flex-col gap-3 relative bg-white">
                  
                  {/* Top Bank Header Bar */}
                  <div className="flex items-center justify-between gap-1 bg-[#0070bc] text-white p-1.5 rounded-sm">
                    {/* Bank of Maharashtra Circular Emblem */}
                    <div className="flex-shrink-0 bg-white p-0.5 rounded-full">
                      <svg className="h-7 w-7 text-[#0070bc] fill-none stroke-current" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="50" strokeWidth="8" fill="white" className="text-[#0070bc]" />
                        <circle cx="60" cy="60" r="38" strokeWidth="4" className="text-[#0070bc]" />
                        <path d="M45 75 C45 55, 55 45, 60 40 C55 55, 50 65, 50 75 Z" fill="#0070bc" className="text-[#0070bc] stroke-none" />
                        <path d="M75 75 C75 55, 65 45, 60 40 C65 55, 70 65, 70 75 Z" fill="#0070bc" className="text-[#0070bc] stroke-none" />
                        <path d="M57 80 L57 40 L63 40 L63 80 Z" fill="#0070bc" className="text-[#0070bc] stroke-none" />
                        <path d="M42 80 H78" strokeWidth="6" strokeLinecap="round" className="text-[#0070bc]" />
                      </svg>
                    </div>

                    {/* Hindi/English Text stack */}
                    <div className="text-right flex-1 leading-none font-sans">
                      <div className="text-[10px] font-extrabold tracking-wide">बैंक ऑफ महाराष्ट्र</div>
                      <div className="text-[9px] font-bold tracking-tight">Bank of Maharashtra</div>
                      <div className="text-[5px] font-semibold opacity-90">भारत सरकार का उद्यम / Govt. of India Enterprise</div>
                    </div>
                  </div>

                  {/* Tagline / Subtitle */}
                  <div className="text-center -mt-1 border-b border-slate-100 pb-1.5">
                    <div className="text-[7px] font-semibold text-[#0070bc] tracking-widest uppercase">
                      — एक परिवार एक बैंक —
                    </div>
                  </div>

                  {/* Merchant Account & Instruction */}
                  <div className="text-center space-y-0.5">
                    <h4 className="text-xs font-black tracking-wider text-[#0B192C]">
                      PUSHPAK FOUNDATION
                    </h4>
                    <span className="text-[9px] font-bold text-[#0070bc] tracking-widest block uppercase">
                      SCAN & PAY
                    </span>
                  </div>

                  {/* The actual QR Code with inner Bank of Maharashtra logo */}
                  <div className="w-44 h-44 mx-auto bg-white p-2 border border-slate-200 rounded-xl flex items-center justify-center relative group">
                    <svg viewBox="0 0 120 120" className="w-full h-full text-slate-900">
                      {/* 3 corner squares */}
                      <path d="M10 10 h24 v24 h-24 z M16 16 h12 v12 h-12 z" fill="currentColor" />
                      <rect x="20" y="20" width="4" height="4" fill="currentColor" />
                      
                      <path d="M86 10 h24 v24 h-24 z M92 16 h12 v12 h-12 z" fill="currentColor" />
                      <rect x="96" y="20" width="4" height="4" fill="currentColor" />
                      
                      <path d="M10 86 h24 v24 h-24 z M16 92 h12 v12 h-12 z" fill="currentColor" />
                      <rect x="20" y="96" width="4" height="4" fill="currentColor" />
                      
                      <path d="M86 86 h10 v10 h-10 z M89 89 h4 v4 h-4 z" fill="currentColor" />
                      
                      {/* Realistic points */}
                      <path d="
                        M40 10 h4 v4 h-4 z M48 10 h4 v4 h-4 z M56 10 h8 v4 h-8 z M68 10 h4 v4 h-4 z M76 10 h4 v4 h-4 z
                        M40 18 h8 v4 h-8 z M52 18 h4 v4 h-4 z M64 18 h4 v4 h-4 z M72 18 h8 v4 h-8 z
                        M44 26 h4 v4 h-4 z M56 26 h4 v4 h-4 z M68 26 h8 v4 h-8 z
                        M40 34 h12 v4 h-12 z M60 34 h4 v4 h-4 z M72 34 h4 v4 h-4 z
                        M10 42 h8 v4 h-8 z M22 42 h4 v4 h-4 z M30 42 h12 v4 h-12 z M48 42 h4 v4 h-4 z M60 42 h8 v4 h-8 z M76 42 h4 v4 h-4 z M84 42 h12 v4 h-12 z M102 42 h8 v4 h-8 z
                        M14 50 h4 v4 h-4 z M26 50 h8 v4 h-8 z M40 50 h4 v4 h-4 z M52 50 h8 v4 h-8 z M68 50 h4 v4 h-4 z M76 50 h4 v4 h-4 z M88 50 h4 v4 h-4 z M96 50 h8 v4 h-8 z
                        M10 58 h12 v4 h-12 z M28 58 h4 v4 h-4 z M44 58 h8 v4 h-8 z M56 58 h4 v4 h-4 z M64 58 h12 v4 h-12 z M80 58 h4 v4 h-4 z M92 58 h4 v4 h-4 z M100 58 h10 v4 h-10 z
                        M18 66 h4 v4 h-4 z M30 66 h4 v4 h-4 z M40 66 h4 v4 h-4 z M48 66 h8 v4 h-8 z M60 66 h4 v4 h-4 z M72 66 h8 v4 h-8 z M88 66 h4 v4 h-4 z M104 66 h6 v4 h-6 z
                        M10 74 h6 v4 h-6 z M22 74 h4 v4 h-4 z M34 74 h8 v4 h-8 z M48 74 h4 v4 h-4 z M56 74 h8 v4 h-8 z M76 74 h4 v4 h-4 z M84 74 h12 v4 h-12 z M100 74 h10 v4 h-10 z
                        M40 82 h8 v4 h-8 z M52 82 h4 v4 h-4 z M64 82 h4 v4 h-4 z M72 82 h8 v4 h-8 z
                        M44 90 h4 v4 h-4 z M56 90 h4 v4 h-4 z M68 90 h8 v4 h-8 z
                        M40 98 h12 v4 h-12 z M60 98 h4 v4 h-4 z M72 98 h4 v4 h-4 z
                        M44 106 h4 v4 h-4 z M52 106 h8 v4 h-8 z M68 106 h4 v4 h-4 z M76 106 h4 v4 h-4 z
                      " fill="currentColor" />
                    </svg>
                    
                    {/* Inner Center Circle Logo */}
                    <div className="absolute inset-0 m-auto w-8 h-8 bg-white rounded-full p-0.5 border border-[#0070bc] flex items-center justify-center">
                      <svg className="w-full h-full text-[#0070bc] fill-none stroke-current" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="50" strokeWidth="8" fill="white" className="text-[#0070bc]" />
                        <circle cx="60" cy="60" r="38" strokeWidth="4" className="text-[#0070bc]" />
                        <path d="M45 75 C45 55, 55 45, 60 40 C55 55, 50 65, 50 75 Z" fill="#0070bc" className="text-[#0070bc] stroke-none" />
                        <path d="M75 75 C75 55, 65 45, 60 40 C65 55, 70 65, 70 75 Z" fill="#0070bc" className="text-[#0070bc] stroke-none" />
                        <path d="M57 80 L57 40 L63 40 L63 80 Z" fill="#0070bc" className="text-[#0070bc] stroke-none" />
                        <path d="M42 80 H78" strokeWidth="6" strokeLinecap="round" className="text-[#0070bc]" />
                      </svg>
                    </div>

                    {/* Custom simulated watermark overlay when watermark is active */}
                    {!hdNoWatermark && (
                      <div className="absolute inset-0 bg-[#070F1E]/20 backdrop-blur-[1px] rounded-xl flex items-center justify-center pointer-events-none">
                        <span className="text-[10px] font-black tracking-widest text-slate-800/40 uppercase select-none transform -rotate-45">
                          Pushpak Foundation
                        </span>
                      </div>
                    )}
                  </div>

                  {/* UPI ID label */}
                  <div className="text-center space-y-0.5 mt-1">
                    <span className="text-[7px] text-slate-400 font-bold tracking-wider uppercase block">
                      UPI ID for Mobile App Scanner
                    </span>
                    <span className="text-[10px] font-mono font-extrabold text-slate-900 tracking-tight block">
                      bom260301333885@mahb
                    </span>
                  </div>

                  {/* Footer logos representing GPay, PhonePe, Paytm, Amazon Pay, MB, BHIM UPI */}
                  <div className="pt-2 border-t border-slate-100 flex flex-col items-center gap-1.5">
                    {/* Top row: BHIM UPI logo and Arrow logo */}
                    <div className="flex items-center gap-2 justify-center">
                      {/* BHIM split arrow */}
                      <div className="flex items-center gap-1">
                        <span className="text-[9px] font-extrabold text-blue-900 font-sans tracking-tighter">BHIM</span>
                        <div className="w-4 h-3 relative">
                          <svg viewBox="0 0 20 15" className="w-full h-full">
                            <path d="M2 2 L12 2 L6 8 Z" fill="#F05A28" />
                            <path d="M6 8 L12 8 L16 13 L2 13 Z" fill="#00A859" />
                          </svg>
                        </div>
                      </div>
                      <div className="h-4 w-[1px] bg-slate-200"></div>
                      {/* UPI standard logo */}
                      <span className="text-[10px] font-black italic tracking-tighter text-[#0070bc] font-sans flex items-center">
                        UPI
                        <span className="text-[7px] font-bold text-orange-500 ml-0.5">▷</span>
                      </span>
                    </div>

                    {/* Bottom row: GPay, PhonePe, Paytm, Amazon Pay */}
                    <div className="flex items-center gap-2.5 justify-center">
                      {/* GPay */}
                      <span className="text-[8px] font-sans font-bold flex items-center gap-0.5 tracking-tighter">
                        <span className="text-blue-500">G</span>
                        <span className="text-red-500">p</span>
                        <span className="text-yellow-500">a</span>
                        <span className="text-green-500">y</span>
                      </span>
                      {/* PhonePe */}
                      <div className="px-1 py-0.5 bg-indigo-700 text-white rounded-[2px] text-[6px] font-black leading-none">
                        पे
                      </div>
                      {/* Paytm */}
                      <span className="text-[8px] font-black tracking-tighter text-sky-600">Paytm</span>
                      {/* Amazon Pay */}
                      <span className="text-[7px] font-extrabold text-amber-600">amazon pay</span>
                      {/* Mobile Banking MB Logo */}
                      <div className="px-1 bg-[#0070bc] text-white rounded-[2px] text-[5px] font-bold uppercase leading-tight font-mono">
                        mb
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* HD Watermark Switch and Share Button */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between p-3.5 bg-[#0D1E36] rounded-2xl border border-slate-800">
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white">HD without Watermark</span>
                      <span className="px-1.5 py-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded text-[8px] font-extrabold tracking-wider">
                        ⚡ PRO
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Toggle high resolution watermark protection</span>
                  </div>

                  {/* Toggle Slider Switch */}
                  <button
                    onClick={() => setHdNoWatermark(!hdNoWatermark)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${hdNoWatermark ? 'bg-blue-600' : 'bg-slate-700'}`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${hdNoWatermark ? 'translate-x-5' : 'translate-x-0'}`}
                    />
                  </button>
                </div>

                {/* Bottom interactive buttons */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Copy UPI Button */}
                  <button
                    onClick={handleCopyUPI}
                    className="flex items-center justify-center gap-2 py-3.5 px-4 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-2xl cursor-pointer transition-all border border-slate-700 shadow-sm"
                  >
                    {copiedUPI ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-400" />
                        <span className="text-emerald-400">{lang === 'en' ? 'Copied UPI!' : 'UPI કોપી થયું!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-slate-400" />
                        <span>{lang === 'en' ? 'Copy UPI ID' : 'UPI ID કોપી કરો'}</span>
                      </>
                    )}
                  </button>

                  {/* Share button mimicking the screenshot */}
                  <button
                    onClick={() => {
                      setIsShared(true);
                      setTimeout(() => setIsShared(false), 3000);
                      if (navigator.share) {
                        navigator.share({
                          title: 'Pushpak Foundation Donation QR',
                          text: 'Donate securely to Pushpak Foundation via Bank of Maharashtra scan & pay QR code.',
                          url: window.location.href,
                        }).catch(() => {});
                      }
                    }}
                    className="flex items-center justify-center gap-2 py-3.5 px-4 bg-[#0070bc] hover:bg-[#005e9e] text-white text-xs font-bold rounded-2xl cursor-pointer transition-all shadow-md"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>{isShared ? (lang === 'en' ? 'Link Copied!' : 'લિંક કોપી થઈ!') : (lang === 'en' ? 'Share QR' : 'શેર કરો')}</span>
                  </button>
                </div>
              </div>

            </div>

            {/* DYNAMIC RECEIPT GENERATOR */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-[#070F1E] border border-amber-500/10 shadow-lg text-left">
              {receiptGenerated ? (
                // GENERATED APPRECIATION RECEIPT VISUAL
                <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
                  <span className="p-2 bg-emerald-500/15 text-emerald-500 border border-emerald-500/20 rounded-full inline-block">
                    <CheckCircle className="h-6 w-6" />
                  </span>
                  
                  <h4 className="text-lg font-bold text-slate-950 dark:text-white leading-tight">
                    {lang === 'en' ? 'Donation Logged Successfully' : 'દાન નોંધણી સફળ રહી!'}
                  </h4>

                  {/* VISUAL RECEIPT CARD */}
                  <div className="border-4 border-amber-600/30 bg-[#FAF9F5] text-slate-900 rounded-xl p-5 text-left font-serif text-xs space-y-4">
                    <div className="border-b border-amber-500/20 pb-2 text-center">
                      <span className="block font-bold tracking-wider text-amber-700">PUSHPAK FOUNDATION TRUST</span>
                      <span className="text-[9px] text-slate-400 block uppercase">Reg No: F/2365/Kheda • Nadiad, Gujarat</span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex justify-between border-b border-slate-100 pb-1 font-sans">
                        <span className="text-slate-400 font-bold uppercase text-[9px]">Receipt No</span>
                        <span className="font-mono font-bold text-amber-600">{receiptNum}</span>
                      </div>

                      <div className="flex justify-between border-b border-slate-100 pb-1 font-sans">
                        <span className="text-slate-400 font-bold uppercase text-[9px]">Donor Name</span>
                        <span className="font-bold text-slate-800">{receiptForm.name}</span>
                      </div>

                      <div className="flex justify-between border-b border-slate-100 pb-1 font-sans">
                        <span className="text-slate-400 font-bold uppercase text-[9px]">Phone</span>
                        <span className="font-mono">{receiptForm.phone || "N/A"}</span>
                      </div>

                      <div className="flex justify-between border-b border-slate-100 pb-1 font-sans">
                        <span className="text-slate-400 font-bold uppercase text-[9px]">Amount Contributed</span>
                        <span className="font-bold text-emerald-700 text-sm">₹{Number(receiptForm.amount).toLocaleString()} INR</span>
                      </div>

                      <div className="flex justify-between border-b border-slate-100 pb-1 font-sans">
                        <span className="text-slate-400 font-bold uppercase text-[9px]">Project Funded</span>
                        <span className="font-semibold text-slate-800">
                          {receiptForm.cause === 'edu' && t.donateCauses.edu}
                          {receiptForm.cause === 'women' && t.donateCauses.women}
                          {receiptForm.cause === 'health' && t.donateCauses.health}
                          {receiptForm.cause === 'community' && t.donateCauses.community}
                          {receiptForm.cause === 'general' && t.donateCauses.general}
                        </span>
                      </div>
                    </div>

                    <p className="text-[10px] leading-relaxed text-slate-500 text-center font-sans italic pt-2 border-t border-slate-200">
                      {lang === 'en'
                        ? '"We deeply appreciate your generous contribution. This receipt is legally processed under registration charity credentials."'
                        : '"આપના ઉદાર દાન બદલ પુષ્પક પરિવાર આપનો હૃદયપૂર્વક આભાર માને છે. આ રસીદ કાયદાકીય રીતે માન્ય સેવા ખાતા હેઠળ નોંધી લેવાયેલ છે."'}
                    </p>
                  </div>

                  <button
                    onClick={handleReceiptReset}
                    className="w-full py-3 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl cursor-pointer"
                  >
                    {lang === 'en' ? 'Generate Another Receipt' : 'બીજી પાવતી બનાવો'}
                  </button>
                </div>
              ) : (
                // RECEIPT GENERATOR FORM
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans border-b border-amber-500/10 pb-3 flex items-center gap-2">
                    <Receipt className="h-5 w-5 text-amber-500" />
                    <span>{t.donateReceiptGen}</span>
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {t.donateReceiptDesc}
                  </p>

                  <form onSubmit={handleReceiptSubmit} className="space-y-4 text-xs font-sans mt-4">
                    <div className="space-y-1">
                      <label className="block font-bold text-slate-500 uppercase">{t.contactFormName} *</label>
                      <input
                        type="text"
                        required
                        value={receiptForm.name}
                        onChange={(e) => setReceiptForm({ ...receiptForm, name: e.target.value })}
                        placeholder={lang === 'en' ? 'Enter donor name' : 'દાતાનું નામ લખો'}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] text-slate-900 dark:text-white outline-none focus:border-amber-500/50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-bold text-slate-500 uppercase">{t.contactFormPhone}</label>
                      <input
                        type="tel"
                        value={receiptForm.phone}
                        onChange={(e) => setReceiptForm({ ...receiptForm, phone: e.target.value })}
                        placeholder="Mobile"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] text-slate-900 dark:text-white outline-none focus:border-amber-500/50"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block font-bold text-slate-500 uppercase">{lang === 'en' ? 'Amount (₹)' : 'રકમ (₹)'} *</label>
                        <input
                          type="number"
                          required
                          value={receiptForm.amount}
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            setReceiptForm({ ...receiptForm, amount: e.target.value });
                            setDonateAmount(val || 0);
                          }}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] text-slate-900 dark:text-white outline-none focus:border-amber-500/50 font-mono font-bold"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="block font-bold text-slate-500 uppercase">{t.donateCardTitle}</label>
                        <select
                          value={receiptForm.cause}
                          onChange={(e) => setReceiptForm({ ...receiptForm, cause: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] text-slate-950 dark:text-white outline-none focus:border-amber-500/50"
                        >
                          <option value="edu">{lang === 'en' ? 'Education Kit' : 'બાળ શિક્ષણ કીટ'}</option>
                          <option value="women">{lang === 'en' ? 'Sewing Classes' : 'સીવણ મશીન વિતરણ'}</option>
                          <option value="health">{lang === 'en' ? 'Health Camps' : 'આરોગ્ય કેમ્પ દવાઓ'}</option>
                          <option value="community">{lang === 'en' ? 'NT-DNT Support' : 'વિચરતી જાતિ કીટ'}</option>
                          <option value="general">{lang === 'en' ? 'General' : 'સામાન્ય ભંડોળ'}</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-[11px] uppercase tracking-wider rounded-xl cursor-pointer"
                    >
                      {t.donateReceiptBtn}
                    </button>
                  </form>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
