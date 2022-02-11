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
} from "./contact-banner.module.css"

const ContactBanner = () => {
  const { t } = useTranslation("contact")
  const logoWidth = 60
  return (
    <div className={contactBannerContainer}>
      <div className={descriptionContainer}>
        <h1 className={contactName}>Liza Bernier</h1>
        <p className={contactTitle}>{t("beautician")}</p>
        <p className={contactTitle}>{t("nail technician")}</p>
        <p className={contactTitle}>{t("hair removal specialist")}</p>
      </div>
      <StaticImage src="../images/liza-profile.jpg" className={profileImage} />

      <div className={socialLogoContainer}>
        <a
          href="https://www.facebook.com/liza.epil.et.ongles/"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/f_logo_RGB-Blue_100.png"
            alt="Facebook brand logo"
            width={logoWidth}
          />
        </a>
        <a
          href="https://www.instagram.com/liza.epil.et.ongles/"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/Instagram_Glyph_Gradient_RGB.png"
            alt="Instagram brand logo"
            width={logoWidth}
          />
        </a>
        <a href="mailto:bernierliza@gmail.com">
          <StaticImage
            src="../images/icons8-email-64.png"
            alt="Email logo"
            width={logoWidth}
          />
        </a>
      </div>
      <div>
        <BookingButton></BookingButton>
      </div>
    </div>
  )
}

export default ContactBanner
