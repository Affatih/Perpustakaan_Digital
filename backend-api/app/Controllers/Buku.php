<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class Buku extends ResourceController
{
    protected $modelName = 'App\Models\BukuModel';
    protected $format    = 'json';

    // (READ)
    public function index()
    {
        return $this->respond($this->model->findAll());
    }

    // (CREATE)
    public function create()
    {
        $rules = [
            'judul'    => 'required',
            'penulis'  => 'required',
            'penerbit' => 'required',
            'lokasi'   => 'required'
        ];

        if (!$this->validate($rules)) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        $data = [
            'judul'       => $this->request->getVar('judul'),
            'penulis'     => $this->request->getVar('penulis'),
            'penerbit'    => $this->request->getVar('penerbit'),
            'kategori_id' => 1,
            'lokasi'      => $this->request->getVar('lokasi'),
        ];

        $this->model->insert($data);
        return $this->respondCreated(['message' => 'Buku berhasil ditambahkan']);
    }

    // (UPDATE)
    public function update($id = null)
    {
        // Axios mengirim data PUT dalam bentuk JSON
        $data = $this->request->getJSON(true);
        if (!$data) {
            $data = $this->request->getRawInput();
        }
        $data['kategori_id'] = 1; // Default
        
        $this->model->update($id, $data);
        return $this->respond(['message' => 'Data buku berhasil diperbarui']);
    }

    // (DELETE)
    public function delete($id = null)
    {
        $this->model->delete($id);
        return $this->respondDeleted(['message' => 'Data buku berhasil dihapus']);
    }
}
