

export type SportClub = {
    id: number;
    name: string;
    address: Address;
    website_url: string;
    verified: string; // PHP IS ANNOYING, sends it as "0" and "1"...... :sob:
}

export type Address = {

}
