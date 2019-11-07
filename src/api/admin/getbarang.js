import { getApiNoAuth } from '../utils'

export default {
  getBarang (window) {
    return getApiNoAuth()
      .get('barangs')
      .then(function (response) {
        console.log(response)
        return response.data
      }).catch(function (err) {
        console.log(err)
      })
  },
  deleteBarang(window, id){
    return getApiNoAuth()
    .delete('/barangs/'.concat(id))
    .then(function(response){
        console.log(response)
        return response.data
    }).catch(function(err){
        console.log(err)
    })
  },
  putBarang(window, id, nama_barang, kategori, quantity, harga_barang, kondisi, keterangan){
    return getApiNoAuth()
    .put('/barangs/'+id ,{
        nama_barang:nama_barang,
        kategori:kategori,
        quantity:quantity,
        harga_barang:harga_barang,
        kondisi:kondisi,
        keterangan:keterangan
    })
    .then(function(response){
        console.log(response)
        return response.data
    }).catch(function(err){
        console.log(err)
    })
  }
}