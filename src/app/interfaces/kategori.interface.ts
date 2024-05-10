interface Kategori {
    id: number | null;
    n_daftarkategori: string | null;
}

const defKategori: Kategori[]= []
const defKategoriPilihan: Kategori= {
    id: null,
    n_daftarkategori: null
}


export {
    Kategori,
    defKategori,
    defKategoriPilihan
}