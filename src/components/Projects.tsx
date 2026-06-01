import { Gallery4, Gallery4Props } from "@/components/ui/gallery4";

const projectData: Gallery4Props = {
  title: "Selected Works",
  description:
    "A cross-section of projects illustrating our breadth of experience and consistent commitment to quality across Sylhet and Bangladesh.",
  items: [
    {
      id: "zindabazar-civic",
      title: "Zindabazar Civic Centre",
      category: "Civic & Cultural",
      location: "Zindabazar, Sylhet — 2023",
      description:
        "A landmark civic facility resolving a complex urban site with a bold column-free atrium, heritage brick detailing, and a green roof that has become a point of civic pride.",
      href: "#projects",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&q=80&auto=format&fit=crop",
    },
    {
      id: "amberkhana-residences",
      title: "Amberkhana Residences",
      category: "Residential Development",
      location: "Amberkhana, Sylhet — 2022",
      description:
        "32 bespoke apartments arranged around a landscaped courtyard, balancing generous natural light with privacy using a custom louvre system developed in close collaboration with the client.",
      href: "#projects",
      image:
        "https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=900&q=80&auto=format&fit=crop",
    },
    {
      id: "bondor-bazar-hall",
      title: "Bondor Bazar Heritage Hall",
      category: "Heritage Restoration",
      location: "Bondor Bazar, Sylhet — 2021",
      description:
        "Meticulous restoration of an 1890s colonial-era hall — original terracotta cornicing salvaged, structural steelwork concealed within historic masonry, and new MEP routed without touching the ornate ceiling.",
      href: "#projects",
      image:
        "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=900&q=80&auto=format&fit=crop",
    },
    {
      id: "horizon-penthouse",
      title: "Horizon Penthouse",
      category: "Luxury Apartment",
      location: "Mazar Gate, Sylhet — 2023",
      description:
        "A sky-level residence spanning two floors with a cantilevered terrace offering panoramic hill views. Bespoke concrete joinery, walnut panelling, and a double-height living space define the interior character.",
      href: "#projects",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80&auto=format&fit=crop",
    },
    {
      id: "upashahar-court",
      title: "Upashahar Court",
      category: "Apartment Complex",
      location: "Shahjalal Upashahar — 2022",
      description:
        "A 64-unit mixed-tenure scheme structured around a semi-public garden. Cross-laminated timber upper floors over a reinforced-concrete podium, achieving a 28% reduction in embodied carbon versus conventional construction.",
      href: "#projects",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80&auto=format&fit=crop",
    },
    {
      id: "surma-footbridge",
      title: "Surma River Footbridge",
      category: "Infrastructure",
      location: "Sylhet Sadar — 2020",
      description:
        "A 68-metre pedestrian suspension bridge connecting two riverside communities, its slender deck suspended from twin inclined masts that have become an instantly recognised feature of the Surma waterfront.",
      href: "#projects",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop",
    },
  ],
};

export function Projects() {
  return <Gallery4 {...projectData} />;
}
