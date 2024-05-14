interface Ranking {
    id: number | null;
    n_file:  string | null;
    num: number | null;
    kuota: number | null;
    created_at: string | null;
    date: string | null;
    c_final: number | null;
    ket: string | null;
}

const defRanking: Ranking = {
    id: null,
    n_file:  null,
    num: null,
    kuota: null,
    created_at: null,
    date: null,
    c_final: null,
    ket: null,
}

interface Surat{
    id: number | null;
    title: string | null;
    deskripsi: string | null;
    file: string | null;
    link: string | null;
}

const defSurat: Surat = {
    id: null,
    title: null,
    deskripsi: null,
    file: null,
    link: null
}

interface Peserta {
    id: number | null;
    nik: string | null;
    nisn: string | null;
    n_siswa: string | null;
    sekolah_asal: string | null;
    t_lahir: string | null;
    d_lahir: string | null;
    alamat_detail: string | null;
    lat: string | null;
    long: string | null;
    alamat_map: string | null;
    tahap: number | null;
    ordering: number | null;
    c_lulus: number | null;
    c_ganti: number | null;
    nilai_jarak: number | null;
    nilai_rapor: number | null;
    nilai_prestasi: string | null;
    total_agama: number | null;
    total_ppkn: number | null;
    total_indo: string | null;
    total_mtk: string | null;
    total_ipa: string | null;
    total_ips: string | null;
    total_opsi: string | null;
    total_penjas: string | null;
    total_nilai_rapor: string | null;
    peringkat: string | null;
    valid: number | null;
    user_valid_id: string | null;
    d_valid: string | null;
    txt_valid: string | null;
    created_at: string | null;
}

const defPeserta : Peserta[] = []

interface HasilSeleksi {
    ranking: Ranking;
    surat: Surat;
    peserta: Peserta[]
}

const defHasilSeleksi: HasilSeleksi = {
    ranking: defRanking,
    surat: defSurat,
    peserta: defPeserta
}

export {
    Ranking,
    defRanking,
    Surat,
    defSurat,
    Peserta,
    defPeserta,
    HasilSeleksi,
    defHasilSeleksi
}