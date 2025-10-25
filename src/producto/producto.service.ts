import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Producto } from './schemas/Producto.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductoService {
  constructor(
    @InjectModel(Producto.name)
    private readonly productoModel: Model<Producto>,
  ) {}
  create(createProductoDto: CreateProductoDto) {
    const newProducto = new this.productoModel(createProductoDto);
    return newProducto.save();
  }

  findAll() {
    return `AQUI RETORNAMOS TODOS LOS PRODUCTOS`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
