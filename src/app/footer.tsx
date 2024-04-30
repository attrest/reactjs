"use client";

import React, { useState } from "react";
import { BookCheckIcon, GitPullRequestIcon, HomeIcon, MailIcon, PanelTop, PanelTopIcon } from "lucide-react";
import { store } from "@/entities/store";
import { AcSelect } from "@/widgets/modules/AcSelect";
import { Button } from "@/widgets/ui/button";
import { cn } from "@/shared/utils/utils";

const Footer = ({ className }: { className?: string }) => {
  const relatedLinks = store.getState().global.relatedLinks;
  const relatedSetData = relatedLinks.map((elem) => {
    return {
      label: elem.title,
      value: elem.href,
    };
  });
  const [currentLink, setCurrentLink] = useState<string>("");

  const handleChange = (value: string) => {
    setCurrentLink(value);
    console.log("setCurrentLink:", value);
  };

  const relatedLinkData = [
    {
      title: "Mail",
      href: "https://mail.adcapsule.co.kr/",
    },
    {
      title: "Intranet",
      href: "http://intra.adcapsule.co.kr/Index.asp%EF%BB%BF",
    },
    {
      title: "Website",
      href: "https://adcapsule.kr/",
    },
    {
      title: "Wiki",
      href: "https://adcapsule.notion.site/ADC-WIKI-e0e754eee7c8485bad66c719fb933b76",
    },
    {
      title: "Git",
      href: "https://git.adc-framework.com/users/sign_in",
    },
  ];

  return (
    <footer
      className={cn(
        "footer font-pretendard text-sm font-medium py-8 px-[1.5rem] bg-[#f2f2f2] xl:mt-10 xl:px-[2rem]",
        className && className
      )}
    >
      <div className="footer-row flex flex-col items-center text-center xl:flex-row xl:items-start xl:justify-between">
        <div className="related-links flex flex-col xl:items-start">
          <h3 className="mb-2 mr-4 text-xs">ADCAPSULE SITE</h3>
          <div>
            {relatedLinkData.map((elem, idx) => (
              <a key={idx} href={elem.href} target="_blank" className="inline-flex items-center mr-4 mb-2">
                {elem.title === "Mail" && <MailIcon className="w-5 h-5" />}
                {elem.title === "Intranet" && <PanelTopIcon className="w-5 h-5" />}
                {elem.title === "Website" && <HomeIcon className="w-5 h-5" />}
                {elem.title === "Wiki" && <BookCheckIcon className="w-5 h-5" />}
                {elem.title === "Git" && <GitPullRequestIcon className="w-5 h-5" />}
                <span className="ml-1">{elem.title}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="inline-flex mt-4 xl:mt-0">
          <AcSelect items={relatedSetData} onValueChange={handleChange} className="w-[12rem]" />
          <Button
            variant="outline"
            onClick={() => {
              if (currentLink) window.open(currentLink, "_blank");
            }}
          >
            GO
          </Button>
        </div>
      </div>
      <div className="footer-row mt-5 border-t pt-5 text-center">
        <p className="copyright text-xs text-gray-500">Copyright ⓒ ADCAPSULE. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
