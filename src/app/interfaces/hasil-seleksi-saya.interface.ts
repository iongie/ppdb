interface HasilSeleksiSaya {
    tahap: number | null;
    sekolah: string | null;
    jalur: string | null;
    nilai_rapor: string | null;
    nilai_jarak: string | null;
    nilai_prestasi: string | null;
    urutan: string | null;
    tgl_daftar: string | null;
    status: string | null;
    ket: string | null;
    valid: string | null;
    c_lulus: string | null
}

const defHasilSeleksiSaya: HasilSeleksiSaya = {
    tahap: null,
    sekolah: null,
    jalur: null,
    nilai_rapor: null,
    nilai_jarak: null,
    nilai_prestasi: null,
    urutan: null,
    tgl_daftar: null,
    status: null,
    ket: null,
    valid: null,
    c_lulus: null
}

export {
    HasilSeleksiSaya,
    defHasilSeleksiSaya
}