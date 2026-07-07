import React from 'react';
import { Zap, ShieldCheck, Truck, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function Contact() {
  const { t, lang } = useLanguage();

  const perks = lang === 'ar'
    ? [
        { icon: <Truck size={24} />, title: 'شحن لجميع أنحاء مصر', desc: 'نوصّل لباب بيتك أينما كنت' },
        { icon: <ShieldCheck size={24} />, title: 'ضمان الجودة', desc: 'منتج معتمد وحاصل على براءة اختراع' },
        { icon: <Headphones size={24} />, title: 'دعم متواصل', desc: 'فريقنا جاهز للإجابة على أسئلتك' },
      ]
    : [
        { icon: <Truck size={24} />, title: 'Delivery Across Egypt', desc: 'We deliver straight to your door' },
        { icon: <ShieldCheck size={24} />, title: 'Quality Guaranteed', desc: 'Certified, patented product' },
        { icon: <Headphones size={24} />, title: 'Ongoing Support', desc: 'Our team is ready to answer your questions' },
      ];

  return (
    <section className="contact-section py-24" id="contact">
      <div className="glow-bg" style={{ top: '10%', right: '5%' }}></div>
      <div className="glow-bg-blue" style={{ bottom: '0', left: '10%' }}></div>

      <div className="container max-w-5xl">
        <div className="cta-card">
          <div className="card-top-gradient"></div>

          <div className="cta-inner">
            {/* Heading */}
            <div className="cta-heading">
              <div className="badge badge-green" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
                <Zap size={16} />
                {lang === 'ar' ? 'متاح للطلب الآن' : 'Available to Order Now'}
              </div>
              <h2 className="cta-title">
                {lang === 'ar'
                  ? <>احصل على <span className="text-gradient-green">EyeHealthy</span> اليوم</>
                  : <>Get <span className="text-gradient-green">EyeHealthy</span> Today</>}
              </h2>
              <p className="cta-subtitle">
                {lang === 'ar'
                  ? 'استمتع بإضاءة صحية ومريحة تحمي عينيك وتوفر لك راحة بصرية لا مثيل لها — لك ولعائلتك.'
                  : 'Experience healthy, comfortable lighting that protects your eyes and provides unmatched visual comfort — for you and your family.'}
              </p>
            </div>

            {/* Perks */}
            <div className="cta-perks">
              {perks.map((p, i) => (
                <div key={i} className="cta-perk">
                  <div className="cta-perk-icon">{p.icon}</div>
                  <div>
                    <p className="cta-perk-title">{p.title}</p>
                    <p className="cta-perk-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="cta-actions">
              <Link to="/order" className="cta-order-btn">
                {lang === 'ar' ? 'اطلب الآن' : 'Order Now'}
                <Zap size={22} />
              </Link>
              <p className="cta-note">
                {lang === 'ar' ? '💳 الدفع عند الاستلام — لا حاجة لبطاقة مصرفية' : '💳 Cash on delivery — no card required'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
