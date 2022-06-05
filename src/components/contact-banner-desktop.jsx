import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import BookingButton from "./booking-button"
import {
  contactBannerContainer,
  profileImage,
  descriptionContainer,
  contactName,
  contactTitle,
  socialLogoContainer,
} from "./contact-banner-desktop.module.css"

const ContactBannerDesktop = () => {
  const { t } = useTranslation("contact")
  const logoWidth = 60
  return (
    <div className={contactBannerContainer}>
      <StaticImage src="../images/liza-profile.webp" className={profileImage} alt="" />
      <div>
        <div className={descriptionContainer}>
          <h1 className={contactName}>Liza Bernier</h1>
          <p className={contactTitle}>{t("beautician")}</p>
          <p className={contactTitle}>{t("nail technician")}</p>
          <p className={contactTitle}>{t("hair removal specialist")}</p>
        </div>

        <div className={socialLogoContainer}>
          <a
            href="https://www.facebook.com/liza.epil.et.ongles/"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../images/f_logo_RGB-Blue_100.webp"
              alt="Facebook brand logo"
              width={logoWidth}
            />
          </a>
          <a href="mailto:liepiletongles@gmail.com">
            <StaticImage
              src="../images/icons8-email-64.webp"
              alt="Email logo"
              width={logoWidth}
            />
          </a>
          <a
            href="https://www.instagram.com/liza.epil.et.ongles/"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../images/Instagram_Glyph_Gradient_RGB.webp"
              alt="Instagram brand logo"
              width={logoWidth}
            />
          </a>
          
        </div>
        <div>
          <BookingButton></BookingButton>
        </div>
      </div>
    </div>
  )
}

export default ContactBannerDesktop
