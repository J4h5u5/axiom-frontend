import React from "react";
import styles from "./ReferralLink.module.css";
import { useUser } from "../../../../hooks/useUser";

function unsecuredCopyToClipboard(text: string) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Unable to copy to clipboard", err);
  }
  document.body.removeChild(textArea);
}

const ReferralLink = () => {
  const user = useUser();
  const link = `https://space-drops.io?ref=${user.tgUserData?.id || ""}`;

  const onCopy = () => {
    if (window.isSecureContext && navigator.clipboard) {
      navigator.clipboard.writeText(link);
    } else {
      unsecuredCopyToClipboard(link);
    }
  };

  return (
    <div className={styles.profile__referral}>
      <div className={`${styles.profile__referral_title} text-text`}>
        Реферальная ссылка
      </div>
      <div className={styles.profile__referral_link}>
        <span> {link}</span>
        <span className={styles.copy} onClick={onCopy}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0.75H3C2.175 0.75 1.5 1.425 1.5 2.25V12.75H3V2.25H12V0.75ZM11.25 3.75L15.75 8.25V15.75C15.75 16.575 15.075 17.25 14.25 17.25H5.9925C5.1675 17.25 4.5 16.575 4.5 15.75L4.5075 5.25C4.5075 4.425 5.175 3.75 6 3.75H11.25ZM10.5 9H14.625L10.5 4.875V9Z"
              fill="#5A5C68"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ReferralLink;
