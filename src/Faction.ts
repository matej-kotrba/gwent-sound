export type Faction = {
  id: string;
  name: string;
  imagePath: string;
};

export type FactionEvent = CustomEvent<{
  factionId: string | null;
}>;
