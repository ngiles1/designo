import LocationCard from "@/app/_components/location-card";
import CtaBanner from "@/app/_components/cta-banner";

export default function Locations() {
  return (
    <div>
      <div className="flex flex-col gap-8 mb-18">
        <LocationCard
          reverse
          desktopMap="image-map-canada.png"
          tabletMap="image-map-canada.png"
          country="Canada"
          officeName="Designo Central Office"
          addressLines={["3886 Wellington Street", "Toronto, Ontario M9C 3J5"]}
          phone="+1 253-863-8967"
          email="contact@designo.co"
        />
        <LocationCard
          desktopMap="image-map-australia.png"
          tabletMap="image-map-australia.png"
          country="Australia"
          officeName="Designo AU Office"
          addressLines={["19 Balonne Street", "New South Wales 2443"]}
          phone="(02) 6720 9092"
          email="contact@designo.au"
        />
        <LocationCard
          reverse
          desktopMap="image-map-united-kingdom.png"
          tabletMap="image-map-uk.png"
          country="United Kingdom"
          officeName="Designo UK Office"
          addressLines={["13 Colorado Way", "Rhydyfro SA8 9GA"]}
          phone="078 3115 1400"
          email="contact@designo.uk"
        />
      </div>

      <CtaBanner />
    </div>
  )
};
