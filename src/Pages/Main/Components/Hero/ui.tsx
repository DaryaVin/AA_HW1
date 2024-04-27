import React from "react";
import "./style.scss";
import { Button, RateBox } from "../../../../Shared";
import { DecorComponent } from "../../../../Widgets";
import { HeroProps } from "./model";

export const Hero = ({ purchaseItem }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero__info">
        <header className="hero__headerWrap">
          <span className="hero__subheader">OVER 1000 USERS</span>
          <h1 className="hero__header">
            Enjoy Foods All Over The{" "}
            <span className="hero__specHeader">World</span>
          </h1>
        </header>
        <p className="hero__text">
          EatLy help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early.
          Get a <span className="hero__specText">$20 bonus</span>.
        </p>
        <div className="hero__btnWrap">
          <Button theme="fillBcg">Get Started</Button>
          <Button theme="withBorder">Go Pro</Button>
        </div>
        <footer className="hero__footer">
          <svg
            width="123"
            height="31"
            viewBox="0 0 123 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.3291 10.7012H44.7726V13.0177H39.8731V26.0762H37.1876V13.0177H32.3086L32.3291 10.7012ZM44.2396 14.9447H46.5356V17.0972H46.5766C46.6586 16.7897 46.8021 16.5027 47.0071 16.2157C47.2121 15.9287 47.4581 15.6622 47.7656 15.4367C48.0526 15.1907 48.3806 15.0062 48.7496 14.8627C49.0981 14.7192 49.4671 14.6372 49.8361 14.6372C50.1231 14.6372 50.3281 14.6577 50.4306 14.6577C50.5331 14.6782 50.6561 14.6987 50.7586 14.6987V17.0562C50.5946 17.0152 50.4101 16.9947 50.2256 16.9742C50.0411 16.9537 49.8771 16.9332 49.6926 16.9332C49.2826 16.9332 48.8931 17.0152 48.5241 17.1792C48.1551 17.3432 47.8476 17.5892 47.5606 17.8967C47.2941 18.2247 47.0686 18.6142 46.9046 19.0857C46.7406 19.5572 46.6586 20.1107 46.6586 20.7257V26.0147H44.1986L44.2396 14.9447ZM62.0336 26.0762H59.6146V24.5182H59.5736C59.2661 25.0922 58.8151 25.5227 58.2206 25.8712C57.6261 26.2197 57.0111 26.3837 56.3961 26.3837C54.9406 26.3837 53.8746 26.0352 53.2186 25.2972C52.5626 24.5797 52.2346 23.4727 52.2346 22.0172V14.9447H54.6946V21.7712C54.6946 22.7552 54.8791 23.4522 55.2686 23.8417C55.6376 24.2517 56.1706 24.4567 56.8471 24.4567C57.3596 24.4567 57.7901 24.3747 58.1386 24.2107C58.4871 24.0467 58.7741 23.8417 58.9791 23.5752C59.2046 23.3087 59.3481 22.9807 59.4506 22.6117C59.5531 22.2427 59.5941 21.8327 59.5941 21.4022V14.9447H62.0541V26.0762H62.0336ZM66.2156 22.5092C66.2976 23.2267 66.5641 23.7187 67.0356 24.0262C67.5071 24.3132 68.0811 24.4567 68.7371 24.4567C68.9626 24.4567 69.2291 24.4362 69.5161 24.3952C69.8031 24.3542 70.0901 24.2927 70.3361 24.1902C70.6026 24.0877 70.8076 23.9442 70.9716 23.7392C71.1356 23.5342 71.2176 23.2882 71.1971 22.9807C71.1766 22.6732 71.0741 22.4067 70.8486 22.2017C70.6231 21.9967 70.3566 21.8532 70.0286 21.7097C69.7006 21.5867 69.3111 21.4842 68.8806 21.4022C68.4501 21.3202 68.0196 21.2177 67.5686 21.1152C67.1176 21.0127 66.6666 20.8897 66.2361 20.7462C65.8056 20.6027 65.4366 20.4182 65.0881 20.1517C64.7601 19.9057 64.4731 19.5982 64.2886 19.2087C64.0836 18.8192 63.9811 18.3682 63.9811 17.7942C63.9811 17.1792 64.1246 16.6872 64.4321 16.2772C64.7191 15.8672 65.1086 15.5392 65.5596 15.2932C66.0106 15.0472 66.5231 14.8627 67.0766 14.7602C67.6301 14.6577 68.1631 14.6167 68.6551 14.6167C69.2291 14.6167 69.7826 14.6782 70.2951 14.8012C70.8076 14.9242 71.2996 15.1087 71.7096 15.3957C72.1401 15.6622 72.4886 16.0312 72.7551 16.4617C73.0421 16.8922 73.2061 17.4252 73.2881 18.0402H70.7256C70.6026 17.4457 70.3361 17.0562 69.9261 16.8512C69.4956 16.6462 69.0241 16.5437 68.4706 16.5437C68.3066 16.5437 68.0811 16.5642 67.8556 16.5847C67.6096 16.6257 67.4046 16.6667 67.1791 16.7487C66.9741 16.8307 66.7896 16.9537 66.6461 17.0972C66.5026 17.2407 66.4206 17.4457 66.4206 17.6917C66.4206 17.9992 66.5231 18.2247 66.7281 18.4092C66.9331 18.5937 67.1996 18.7372 67.5481 18.8807C67.8761 19.0037 68.2656 19.1062 68.6961 19.1882C69.1266 19.2702 69.5776 19.3727 70.0286 19.4752C70.4796 19.5777 70.9101 19.7007 71.3406 19.8442C71.7711 19.9877 72.1606 20.1722 72.4886 20.4387C72.8166 20.6847 73.1036 20.9922 73.3086 21.3612C73.5136 21.7302 73.6161 22.2017 73.6161 22.7347C73.6161 23.3907 73.4726 23.9442 73.1651 24.4157C72.8576 24.8667 72.4681 25.2562 71.9966 25.5432C71.5251 25.8302 70.9716 26.0352 70.3976 26.1787C69.8031 26.3017 69.2291 26.3837 68.6551 26.3837C67.9581 26.3837 67.3021 26.3017 66.7076 26.1377C66.1131 25.9737 65.5801 25.7277 65.1496 25.4202C64.7191 25.0922 64.3706 24.7027 64.1246 24.2107C63.8786 23.7392 63.7351 23.1652 63.7146 22.4887H66.1951V22.5092H66.2156ZM74.3131 14.9447H76.1786V11.5827H78.6386V14.9242H80.8526V16.7487H78.6386V22.6937C78.6386 22.9602 78.6591 23.1652 78.6796 23.3702C78.7001 23.5547 78.7616 23.7187 78.8231 23.8417C78.9051 23.9647 79.0281 24.0672 79.1716 24.1287C79.3356 24.1902 79.5406 24.2312 79.8276 24.2312C79.9916 24.2312 80.1761 24.2312 80.3401 24.2107C80.5041 24.1902 80.6886 24.1697 80.8526 24.1287V26.0352C80.5861 26.0762 80.3196 26.0967 80.0531 26.1172C79.7866 26.1582 79.5406 26.1582 79.2536 26.1582C78.5976 26.1582 78.0851 26.0967 77.6956 25.9737C77.3061 25.8507 76.9986 25.6662 76.7731 25.4407C76.5476 25.1947 76.4041 24.9077 76.3221 24.5592C76.2401 24.2107 76.1991 23.7802 76.1786 23.3292V16.7692H74.3131V14.9037V14.9447ZM82.5746 14.9447H84.8911V16.4617H84.9321C85.2806 15.8057 85.7521 15.3547 86.3671 15.0677C86.9821 14.7807 87.6381 14.6372 88.3761 14.6372C89.2576 14.6372 90.0161 14.7807 90.6721 15.1087C91.3281 15.4162 91.8611 15.8262 92.2916 16.3797C92.7221 16.9127 93.0501 17.5482 93.2551 18.2657C93.4601 18.9832 93.5831 19.7622 93.5831 20.5617C93.5831 21.3202 93.4806 22.0377 93.2961 22.7347C93.0911 23.4317 92.8041 24.0672 92.4146 24.6002C92.0251 25.1332 91.5331 25.5637 90.9181 25.8917C90.3031 26.2197 89.6061 26.3837 88.7861 26.3837C88.4376 26.3837 88.0686 26.3427 87.7201 26.2812C87.3716 26.2197 87.0231 26.1172 86.6951 25.9737C86.3671 25.8302 86.0596 25.6457 85.7931 25.4202C85.5061 25.1947 85.2806 24.9282 85.0961 24.6412H85.0551V30.1967H82.5951V14.9447H82.5746ZM91.1641 20.5207C91.1641 20.0287 91.1026 19.5367 90.9591 19.0652C90.8361 18.5937 90.6311 18.1837 90.3646 17.8147C90.0981 17.4457 89.7701 17.1587 89.4011 16.9332C89.0116 16.7077 88.5606 16.6052 88.0686 16.6052C87.0436 16.6052 86.2646 16.9537 85.7316 17.6712C85.2191 18.3887 84.9526 19.3522 84.9526 20.5412C84.9526 21.1152 85.0141 21.6277 85.1576 22.0992C85.3011 22.5707 85.4856 22.9807 85.7726 23.3292C86.0391 23.6777 86.3671 23.9442 86.7566 24.1492C87.1461 24.3542 87.5766 24.4567 88.0891 24.4567C88.6631 24.4567 89.1141 24.3337 89.5036 24.1082C89.8931 23.8827 90.2006 23.5752 90.4671 23.2267C90.7131 22.8577 90.8976 22.4477 91.0001 21.9762C91.1026 21.4842 91.1641 21.0127 91.1641 20.5207ZM95.4896 10.7012H97.9496V13.0177H95.4896V10.7012ZM95.4896 14.9447H97.9496V26.0762H95.4896V14.9447ZM100.143 10.7012H102.603V26.0762H100.143V10.7012ZM110.106 26.3837C109.225 26.3837 108.425 26.2402 107.728 25.9327C107.031 25.6252 106.457 25.2357 105.965 24.7232C105.494 24.2107 105.125 23.5752 104.879 22.8577C104.633 22.1402 104.489 21.3407 104.489 20.5002C104.489 19.6597 104.612 18.8807 104.879 18.1632C105.125 17.4457 105.494 16.8307 105.965 16.2977C106.437 15.7852 107.031 15.3752 107.728 15.0882C108.425 14.8012 109.225 14.6372 110.106 14.6372C110.988 14.6372 111.787 14.7807 112.484 15.0882C113.181 15.3752 113.755 15.7852 114.247 16.2977C114.719 16.8102 115.088 17.4457 115.334 18.1632C115.58 18.8807 115.723 19.6597 115.723 20.5002C115.723 21.3612 115.6 22.1402 115.334 22.8577C115.067 23.5752 114.719 24.1902 114.247 24.7232C113.776 25.2357 113.181 25.6457 112.484 25.9327C111.787 26.2197 111.008 26.3837 110.106 26.3837ZM110.106 24.4362C110.639 24.4362 111.131 24.3132 111.521 24.0877C111.931 23.8622 112.238 23.5547 112.505 23.1857C112.771 22.8167 112.956 22.3862 113.079 21.9352C113.202 21.4637 113.263 20.9922 113.263 20.5002C113.263 20.0287 113.202 19.5572 113.079 19.0857C112.956 18.6142 112.771 18.2042 112.505 17.8352C112.238 17.4662 111.91 17.1792 111.521 16.9537C111.111 16.7282 110.639 16.6052 110.106 16.6052C109.573 16.6052 109.081 16.7282 108.692 16.9537C108.282 17.1792 107.974 17.4867 107.708 17.8352C107.441 18.2042 107.257 18.6142 107.134 19.0857C107.011 19.5572 106.949 20.0287 106.949 20.5002C106.949 20.9922 107.011 21.4637 107.134 21.9352C107.257 22.4067 107.441 22.8167 107.708 23.1857C107.974 23.5547 108.302 23.8622 108.692 24.0877C109.102 24.3337 109.573 24.4362 110.106 24.4362ZM116.461 14.9447H118.327V11.5827H120.787V14.9242H123.001V16.7487H120.787V22.6937C120.787 22.9602 120.807 23.1652 120.828 23.3702C120.848 23.5547 120.91 23.7187 120.971 23.8417C121.053 23.9647 121.176 24.0672 121.32 24.1287C121.484 24.1902 121.689 24.2312 121.976 24.2312C122.14 24.2312 122.324 24.2312 122.488 24.2107C122.652 24.1902 122.837 24.1697 123.001 24.1287V26.0352C122.734 26.0762 122.468 26.0967 122.201 26.1172C121.935 26.1582 121.689 26.1582 121.402 26.1582C120.746 26.1582 120.233 26.0967 119.844 25.9737C119.454 25.8507 119.147 25.6662 118.921 25.4407C118.696 25.1947 118.552 24.9077 118.47 24.5592C118.388 24.2107 118.347 23.7802 118.327 23.3292V16.7692H116.461V14.9037V14.9447Z"
              fill="black"
            />
            <path
              d="M29.4585 10.701H18.204L14.7395 0L11.2545 10.701L0 10.6805L9.10199 17.302L5.617 28.003L14.719 21.3815L23.821 28.003L20.3565 17.302L29.4585 10.701Z"
              fill="#00B67A"
            />
            <path
              d="M21.1362 19.7208L20.3572 17.3018L14.7402 21.3813L21.1362 19.7208Z"
              fill="#005128"
            />
          </svg>
          <div className="hero__raitingWrap">
            <RateBox rating={5} />
            <span className="hero__raitingLabel">4900+</span>
          </div>
        </footer>
      </div>
      <DecorComponent purchaseItem={purchaseItem} />
    </section>
  );
};