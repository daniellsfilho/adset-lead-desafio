export class VeiculoEnvioDTO {
    public placa?: string | null = '';
    public marca?: string | null = '';
    public modelo?: string | null = '';
    public ano?: number | null = null;
    public km?: number | null = null;
    public preco?: number | null = null;
    public opcionais?: string | null = '';
    public cor?: string | null = '';
}

export class VeiculoEnvioPacoteDTO {
    public id?: number
    public pacoteICarros?: number
    public pacoteWebMotors?: number
}