interface Location{
    street: string;
    zip: string;
    city: string;
    country: string;
}
interface GPS {
    latitude: number;
    longitude: number;
}
export interface StoreType{
    id: string;
    name: string;
    gps: GPS;
    location: Location;
    products: string[];
    open: string;
}

/*
export interface StoreType{
    stores: Store[]
}*/