
class Config {
    static readonly API_BASE_URL: string = 'https://localhost:5030/api';
    static readonly ASSET_API_URL: string = `${this.API_BASE_URL}/asset`;
    static readonly ASSET_TYPE_API_URL: string = `${this.API_BASE_URL}/assettype`;
    static readonly PROJECT_API_URL: string = `${this.API_BASE_URL}/project`;
    static readonly SERVICE_DATABASE_API_URL: string = `${this.API_BASE_URL}/servicedatabase`;
    static readonly TRANSFER_API_URL: string = `${this.API_BASE_URL}/transfer`;

}

export default Config;
