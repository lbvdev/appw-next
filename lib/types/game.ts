export interface GameData {
    id: number;
    link: string;
    user_id: string;
    info: GameInfo;
    prices: Price[];
    windows: PlatformData;
    previews: Preview[];
    settings: GameSettings;
    badges: GameBadges;
}

interface GameInfo {
    title: string;
    description: string;
    short_description: string;
    release_date: string;
    last_update: string;
    developer: string;
    publisher: string;
    type: string;
    tags: string[];
    platforms: string[];
    languages: string[];
    createdAt: string;
}

interface Price {
    currency: string;
    price: number;
}

interface PlatformData {
    files: PlatformFile[];
    requirements: Requirements;
}

interface PlatformFile {
    platform: string;
    version: string;
    parts: FilePart[];
}

interface FilePart {
    title: string;
    description: string;
    size_mb: number;
    file_id: number;
}

interface Requirements {
    minimum: SystemReqs;
    recommended: SystemReqs;
}

interface SystemReqs {
    cpu: number;
    gpu: number;
    ram_gb: number;
    storage_mb: number;
}

interface Preview {
    type: "image" | "video";
    url: string;
}

interface GameSettings {
    visible: boolean;
    downloads_count_enabled: boolean;
    comments_enabled: boolean;
    ratings_enabled: boolean;
    views_enabled: boolean;
}

interface GameBadges {
    featured: boolean;
    exclusive: boolean;
    early_access: boolean;
    editor_choice: boolean;
}
