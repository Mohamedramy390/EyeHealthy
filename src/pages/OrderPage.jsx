import React, { useState } from 'react';
import { Send, User, Phone, Mail, MapPin, Hash, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import heroLamp from '../assets/green.png';
import altLamp from '../assets/hero-lamp.png';
import spectrumImage from '../assets/spectrum.jpg';

const validatePhone = (phone) => /^(01)[0-2,5]{1}[0-9]{8}$/.test(phone.replace(/\s/g, ''));

export default function OrderPage() {
  const { t, lang } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mainImage, setMainImage] = useState(heroLamp);
  const [phoneError, setPhoneError] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const productImages = [heroLamp, altLamp, spectrumImage];

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    setPhoneValue(val);
    if (val && !validatePhone(val)) {
      setPhoneError(lang === 'ar' ? 'رقم الهاتف غير صحيح (مثال: 01XXXXXXXXX)' : 'Invalid phone number (e.g. 01XXXXXXXXX)');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhone(phoneValue)) {
      setPhoneError(lang === 'ar' ? 'رقم الهاتف غير صحيح (مثال: 01XXXXXXXXX)' : 'Invalid phone number (e.g. 01XXXXXXXXX)');
      return;
    }
    setIsLoading(true);
    const formData = new FormData(e.target);
    try {
      const endpoint = "https://api.sheetmonkey.io/form/apv2QYMPz5X7tXLPKTtLBT";
      await fetch(endpoint, { method: 'POST', body: formData });
      e.target.reset();
      setPhoneValue('');
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(lang === 'ar' ? 'حدث خطأ، يرجى المحاولة مجددًا.' : 'There was an error, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = (side) => ({
    [lang === 'ar' ? 'paddingRight' : 'paddingLeft']: '3rem',
    direction: lang === 'ar' ? 'rtl' : 'ltr',
  });

  const iconStyle = { [lang === 'ar' ? 'right' : 'left']: '1rem' };

  return (
    <div className="pt-32 pb-16">
      <div className="container max-w-6xl">

        <Link to="/" className="order-back-link">
          <ArrowLeft size={18} style={{ transform: lang === 'ar' ? 'rotate(180deg)' : 'none' }} />
          {lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
        </Link>

        <div className="order-grid">
          {/* ── Product Card ─────────────────────────────── */}
          <div className="order-product-card">
            <div className="card-top-gradient"></div>

            {/* Main Image */}
            <div className="order-main-image-wrap">
              <img
                src={mainImage}
                alt="EyeHealthy LED Lamp"
                className="order-main-image"
              />
              <div className="order-image-badge">
                {lang === 'ar' ? 'براءة اختراع' : 'Patented'}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="order-thumbs">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`order-thumb ${mainImage === img ? 'order-thumb-active' : ''}`}
                  aria-label={`Product image ${idx + 1}`}
                >
                  <img src={img} alt={`Thumb ${idx + 1}`} />
                </button>
              ))}
            </div>

            {/* Product Info */}
            <div className="order-product-info">
              <h1 className="order-product-title">{t.order.title}</h1>
              <p className="order-product-desc">{t.order.description}</p>
              <div className="order-price-tag">
                <span className="order-price-label">{lang === 'ar' ? 'السعر' : 'Price'}</span>
                <span className="order-price-value">450 {lang === 'ar' ? 'ج.م' : 'EGP'}</span>
              </div>

              <div className="order-features">
                {[
                  lang === 'ar' ? '✅ شحن لجميع أنحاء مصر' : '✅ Delivery across Egypt',
                  lang === 'ar' ? '✅ ضمان الجودة' : '✅ Quality guaranteed',
                  lang === 'ar' ? '✅ دفع عند الاستلام' : '✅ Cash on delivery',
                ].map((f, i) => (
                  <span key={i} className="order-feature-chip">{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Order Form Card ───────────────────────────── */}
          <div className="order-form-card">
            <div className="card-top-gradient"></div>

            {isSubmitted ? (
              <div className="order-success">
                <div className="order-success-icon">
                  <CheckCircle size={52} strokeWidth={1.5} />
                </div>
                <h3>{t.order.successTitle}</h3>
                <p>{t.order.successDesc}</p>
              </div>
            ) : (
              <>
                <div className="order-form-header">
                  <h2>{t.order.formTitle}</h2>
                  <p>{lang === 'ar' ? 'أكمل بياناتك وسنتواصل معك فوراً' : 'Fill in your details and we\'ll contact you shortly'}</p>
                </div>

                <form onSubmit={handleSubmit} className="order-form">
                  <input type="hidden" name="FormType" value="Order" />

                  {/* Name */}
                  <div className="ofield">
                    <label className="ofield-label">{t.order.name}</label>
                    <div className="ofield-input-wrap">
                      <User size={18} className="ofield-icon" style={iconStyle} />
                      <input
                        name="Name"
                        required
                        type="text"
                        placeholder={t.order.name}
                        className="ofield-input"
                        style={inputStyle()}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="ofield">
                    <label className="ofield-label">{t.order.phone}</label>
                    <div className={`ofield-input-wrap ${phoneError ? 'ofield-error' : phoneValue && !phoneError ? 'ofield-valid' : ''}`}>
                      <Phone size={18} className="ofield-icon" style={iconStyle} />
                      <input
                        name="Phone"
                        required
                        type="tel"
                        value={phoneValue}
                        onChange={handlePhoneChange}
                        placeholder="01XXXXXXXXX"
                        className="ofield-input"
                        style={inputStyle()}
                        maxLength={11}
                      />
                      {phoneValue && !phoneError && <CheckCircle size={18} className="ofield-valid-icon" style={{ [lang === 'ar' ? 'left' : 'right']: '1rem' }} />}
                      {phoneError && <AlertCircle size={18} className="ofield-error-icon" style={{ [lang === 'ar' ? 'left' : 'right']: '1rem' }} />}
                    </div>
                    {phoneError && <p className="ofield-error-msg">{phoneError}</p>}
                  </div>

                  {/* Email */}
                  <div className="ofield">
                    <label className="ofield-label">{t.order.email}</label>
                    <div className="ofield-input-wrap">
                      <Mail size={18} className="ofield-icon" style={iconStyle} />
                      <input
                        name="Email"
                        type="email"
                        placeholder={t.order.email}
                        className="ofield-input"
                        style={inputStyle()}
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="ofield">
                    <label className="ofield-label">{t.order.location}</label>
                    <div className="ofield-input-wrap">
                      <MapPin size={18} className="ofield-icon" style={iconStyle} />
                      <input
                        name="Location"
                        required
                        type="text"
                        placeholder={t.order.location}
                        className="ofield-input"
                        style={inputStyle()}
                      />
                    </div>
                  </div>

                  {/* Items */}
                  <div className="ofield">
                    <label className="ofield-label">{t.order.items}</label>
                    <div className="ofield-input-wrap">
                      <Hash size={18} className="ofield-icon" style={iconStyle} />
                      <input
                        name="Items"
                        required
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="ofield-input"
                        style={inputStyle()}
                      />
                    </div>
                  </div>

                  <button type="submit" className="order-submit-btn" disabled={isLoading}>
                    {isLoading ? (
                      <span className="order-spinner"></span>
                    ) : (
                      <>
                        {t.order.submit}
                        <Send size={20} style={{ transform: lang === 'ar' ? 'rotate(180deg)' : 'none' }} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
