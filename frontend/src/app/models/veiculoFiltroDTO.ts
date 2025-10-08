export class VeiculoFiltroDTO {
    public placa?: string | null = '';
    public marca?: string | null = '';
    public modelo?: string | null = '';
    public anoMin?: number | null = null;
    public anoMax?: number | null = null;
    public preco?: number | null = null;
    public fotos?: number | null = null;
    public opcionais?: string | null = '';
    public cor?: number | null = null;
}