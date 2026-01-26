import GameCard from "@/ui/GameCard";
import SectionHero from "@/ui/SectionHero";
import BlurOverlay from "@/ui/components/BlurOverlay";

export default function GamePage() {
  return (
    <div>
      <GameCard />
      <BlurOverlay />
      <SectionHero />
    </div>
  );
}
