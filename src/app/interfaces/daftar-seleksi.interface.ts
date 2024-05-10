interface Kategori {
    tahap: number | null;
    menu: string | null;
    from: string | null;
    to: string | null;
    on: number | null;
}

const defKategori: Kategori = {
    tahap: null,
    menu: null,
    from: null,
    to: null,
    on: null
}

interface Sekolah {
    id: number | null;
    n_sekolah: string | null;
}

const defSekolah: Sekolah[] = []

interface DaftarSekolah {
    kategori: Kategori;
    error: string | null;
    info: string | null;
    sekolah: Sekolah[];
}

const defDaftarSekolah: DaftarSekolah = {
    kategori: defKategori,
    error: null,
    info: null,
    sekolah: defSekolah
}

interface PilihSekolah {
    tmsekolah_id: number | null;
    tmdaftarkategori_id: number | null;
    pin: string | null;
    ganti: string | null;
    title: string | null;
}

const defPilihSekolah: PilihSekolah = {
    tmsekolah_id:  null,
    tmdaftarkategori_id: null,
    ganti: null,
    pin: null,
    title: null
}

export {
    Kategori,
    defKategori,
    Sekolah,
    defSekolah,
    DaftarSekolah,
    defDaftarSekolah,
    PilihSekolah,
    defPilihSekolah
}