import Icon from "@/ui/components/Icon";

import textStyles from "@/ui/styles/baseText.module.sass";
import buttonStyles from "@/ui/styles/baseButtons.module.sass";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <div className="flex flex-col gap-4 p-8 max-w-screen-sm w-full bg-zinc-900 rounded-2xl">
        <h1>Text</h1>
        <div className="flex flex-col gap-4">
          <h1 className={textStyles.h1}>H1</h1>
          <h1 className={textStyles.h1Accent}>H1 Accent</h1>
          <h2 className={textStyles.h2}>H2</h2>
          <h2 className={textStyles.h2Accent}>H2 Accent</h2>
          <h3 className={textStyles.h3}>H3</h3>
          <h3 className={textStyles.h3Accent}>H3 Accent</h3>
          <p className={textStyles.p}>P</p>
          <p className={textStyles.pSmall}>P Small</p>
        </div>
        <h1>Buttons</h1>
        <div className="flex flex-col gap-4">
          <button className={buttonStyles.default}>Default</button>
          <button className={buttonStyles.big}>Big</button>
          <button className={buttonStyles.circle}>
            <Icon name="menu" />
          </button>
          <button className={buttonStyles.circleDanger}>
            <Icon name="close" />
          </button>
        </div>
      </div>
    </main>
  );
}
