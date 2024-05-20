interface Auth {
    access_token: string | null;
    token_type: string | null;
    expires_in: number | null;
}

const defAuth: Auth = {
    access_token: null,
    token_type: null,
    expires_in: null
}

interface Alamat {
    detail: string | null;
    rt: string | null;
    rw: string | null;
    kelurahan: string | null;
    kecamatan: string | null;
    kabupaten: string | null;
    provinsi: string | null;
    place: string | null;
}

const defAlamat: Alamat = {
    detail: null,
    rt: null,
    rw: null,
    kelurahan: null,
    kecamatan: null,
    kabupaten: null,
    provinsi: null,
    place: null
}

interface User {
    siswa_id: number | null;
    nisn: string | null;
    nama_lengkap: string | null;
    jenis_kelamin: string | null;
    tanggal_lahir: string | null;
    tempat_lahir: string | null;
    nik: string | null;
    sekolah_asal: string | null;
    npsn: string | null;
    nilai_rapor: number | null;
    keterangan: string | null;
    nilai_prestasi: string | null;
    afirmasi: string | null;
    prestasi: string | null;
    pindahortu: string | null;
    anakguru: string | null;
    domisili: string | null;
    alamat: Alamat;
}

const defUser: User = {
    siswa_id: null,
    nisn: null,
    nama_lengkap: null,
    jenis_kelamin: null,
    tanggal_lahir: null,
    tempat_lahir: null,
    nik: null,
    sekolah_asal: null,
    npsn: null,
    nilai_rapor: null,
    keterangan: null,
    nilai_prestasi: null,
    afirmasi: null,
    prestasi: null,
    pindahortu: null,
    anakguru: null,
    domisili: null,
    alamat: defAlamat
}

interface Login {
    user: User;
    auth: Auth;
}

const defLogin: Login = {
    user: defUser,
    auth: defAuth,
}

export {
    Alamat,
    defAlamat,
    User,
    defUser,
    Auth,
    defAuth,
    Login,
    defLogin
}