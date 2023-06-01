export interface SelectTypes {
    value: string;
    label: string;
}

export interface PokemonWithType {
    pokemon: Abilitiy
    slot: number
}

export interface Pokemon {
    id: number
    name: string
    abilities: Abilities[]
    base_experience: number
    forms: Abilitiy[]
    height: number
    game_indices: GameIndices[]
    held_items: any[]
    is_default: boolean
    location_area_encounters: string
    order: number
    past_types: any[]
    species: Abilitiy[]
    sprites: Sprites
    stats: Stats[]
    types: Types[]
    weight: number
    moves: Moves[]
}

interface Abilities {
    ability: Abilitiy;
    is_hidden: boolean;
    slot: number;
}

export interface Abilitiy {
    name: string;
    url: string;
}

interface GameIndices {
    game_index: number
    version: Abilitiy
}

interface Sprites {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
    other: Other
    versions: any
}

interface Other {
    dream_world: DreamWorld
    home: Home
    official_artwork: OfficialArtwork
}

interface DreamWorld {
    front_default: string
    front_female: string
}

interface Home {
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

interface OfficialArtwork {
    front_default: string
    front_shiny: string
}

interface Stats {
    base_stat: number
    effort: number
    stat: Abilitiy
}

interface Types {
    slot: number
    type: Abilitiy
}

interface Moves {
    move: Abilitiy
    version_group_details: VersionGroupDetails[]
}

interface VersionGroupDetails {
    level_learned_at: number
    move_learn_method: Abilitiy
    version_group: Abilitiy
}


