interface Sekolah {
    id: number | null;
    jenjang: string | null;
    n_sekolah: string | null;
    alamat: string | null;
}

const defSekolah: Sekolah[]= []
const defSekolahPilihan: Sekolah = {
    id: null,
    jenjang: null,
    n_sekolah: null,
    alamat: null
}

export {
    Sekolah,
    defSekolah,
    defSekolahPilihan
}